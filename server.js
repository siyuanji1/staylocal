import express from 'express';
import Anthropic from '@anthropic-ai/sdk';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as dotenv from 'dotenv';
dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());
app.use(express.static(__dirname));

const API_KEY = process.env.ANTHROPIC_API_KEY;
if (!API_KEY || API_KEY === 'your_api_key_here') {
  console.warn('\n⚠️  ANTHROPIC_API_KEY not set in .env — AI chat will return a placeholder response.\n   Get your key at https://console.anthropic.com and add it to .env\n');
}
const client = new Anthropic({ apiKey: API_KEY || 'placeholder' });

const SYSTEM_PROMPT = `You are StayLocal's AI travel concierge — knowledgeable, enthusiastic, and deeply local.
When a user asks about a destination, provide rich, specific recommendations formatted with these exact sections:

📍 **Top Places to Visit**
List 3-4 must-see attractions with a brief note on what makes each special.

🍽️ **Best Restaurants & Food**
List 3-4 specific restaurants or food experiences with cuisine type and what to order.

💎 **Hidden Gems**
List 2-3 off-the-beaten-path spots most tourists miss.

💡 **Local Tips**
3-4 practical tips (best time to visit, transport, customs, money-saving tricks).

Keep responses warm, specific, and practical. Use real place names.
For follow-up questions (not about a destination), answer helpfully and conversationally.
Always end with an encouraging sign-off.`;

// Chat history per session (in-memory, keyed by session ID)
const sessions = {};

app.post('/api/travel-chat', async (req, res) => {
  try {
    const { message, sessionId } = req.body;
    if (!message) return res.status(400).json({ error: 'Message required' });

    const sid = sessionId || 'default';
    if (!sessions[sid]) sessions[sid] = [];

    sessions[sid].push({ role: 'user', content: message });

    // Keep last 10 messages to avoid token overflow
    const history = sessions[sid].slice(-10);

    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: history,
    });

    const reply = response.content[0].text;
    sessions[sid].push({ role: 'assistant', content: reply });

    res.json({ reply, sessionId: sid });
  } catch (err) {
    console.error('Claude API error:', err.message);
    if (!API_KEY || API_KEY === 'your_api_key_here') {
      return res.status(503).json({ error: '🔑 API key not configured. Add ANTHROPIC_API_KEY to your .env file to enable the AI chatbot.' });
    }
    res.status(500).json({ error: 'Could not reach AI. Please try again.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`StayLocal running at http://localhost:${PORT}`));
