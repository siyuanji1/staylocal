// ===== STAYLOCAL AI TRAVEL CHATBOT WIDGET =====
(function () {
  const sessionId = 'session_' + Math.random().toString(36).slice(2);
  let isOpen = false;
  let chatHistory = [];

  // ---- Inject HTML ----
  const widgetHTML = `
    <div id="ai-chat-widget">
      <button id="ai-chat-fab" onclick="aiChatToggle()" title="AI Travel Concierge">
        <span id="ai-fab-icon">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </span>
        <span id="ai-fab-close" style="display:none">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </span>
        <span id="ai-fab-label">AI Guide</span>
      </button>

      <div id="ai-chat-panel">
        <div id="ai-chat-header">
          <div id="ai-chat-header-info">
            <div id="ai-chat-avatar">✈️</div>
            <div>
              <div id="ai-chat-title">AI Travel Concierge</div>
              <div id="ai-chat-status"><span class="ai-online-dot"></span> Powered by Claude</div>
            </div>
          </div>
          <button id="ai-chat-clear" onclick="aiChatClear()" title="New conversation">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.28"/>
            </svg>
          </button>
        </div>

        <div id="ai-chat-messages">
          <div class="ai-msg ai-guide-msg">
            <div class="ai-bubble ai-guide-bubble">
              👋 Hi! I'm your AI travel concierge. Tell me any destination — a city, country, or region — and I'll give you personalized recommendations for places to visit, restaurants, hidden gems, and local tips!<br><br>
              <em style="color:#a0a0a0;font-size:13px">Try: "Paris", "Tokyo street food", "things to do in Bali"</em>
            </div>
          </div>
        </div>

        <div id="ai-quick-chips">
          <button class="ai-chip" onclick="aiSendQuick('Paris, France')">🗼 Paris</button>
          <button class="ai-chip" onclick="aiSendQuick('Tokyo, Japan')">🏯 Tokyo</button>
          <button class="ai-chip" onclick="aiSendQuick('Bali, Indonesia')">🌴 Bali</button>
          <button class="ai-chip" onclick="aiSendQuick('New York City')">🗽 New York</button>
          <button class="ai-chip" onclick="aiSendQuick('Barcelona, Spain')">🥘 Barcelona</button>
        </div>

        <div id="ai-chat-input-row">
          <input
            type="text"
            id="ai-chat-input"
            placeholder="Ask about any destination..."
            onkeydown="if(event.key==='Enter')aiSendMessage()"
          />
          <button id="ai-send-btn" onclick="aiSendMessage()">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', widgetHTML);

  // ---- Global Functions ----
  window.aiChatToggle = function () {
    isOpen = !isOpen;
    document.getElementById('ai-chat-panel').classList.toggle('open', isOpen);
    document.getElementById('ai-fab-icon').style.display = isOpen ? 'none' : '';
    document.getElementById('ai-fab-close').style.display = isOpen ? '' : 'none';
    if (isOpen) setTimeout(() => document.getElementById('ai-chat-input').focus(), 300);
  };

  window.aiChatClear = function () {
    chatHistory = [];
    document.getElementById('ai-chat-messages').innerHTML = `
      <div class="ai-msg ai-guide-msg">
        <div class="ai-bubble ai-guide-bubble">
          👋 New conversation started! Where would you like to explore?
        </div>
      </div>`;
    document.getElementById('ai-quick-chips').style.display = 'flex';
  };

  window.aiSendQuick = function (text) {
    document.getElementById('ai-chat-input').value = text;
    aiSendMessage();
  };

  window.aiSendMessage = async function () {
    const input = document.getElementById('ai-chat-input');
    const text = input.value.trim();
    if (!text) return;
    input.value = '';

    // Hide quick chips after first message
    document.getElementById('ai-quick-chips').style.display = 'none';

    // Add user bubble
    appendAiMessage('user', text);
    chatHistory.push({ role: 'user', content: text });

    // Show typing
    const typingId = showAiTyping();

    try {
      const res = await fetch('/api/travel-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, sessionId }),
      });

      const data = await res.json();
      removeAiTyping(typingId);

      if (data.error) {
        appendAiMessage('guide', '⚠️ ' + data.error);
      } else {
        appendAiMessage('guide', formatAiResponse(data.reply));
        chatHistory.push({ role: 'assistant', content: data.reply });
      }
    } catch (e) {
      removeAiTyping(typingId);
      appendAiMessage('guide', '⚠️ Connection error. Make sure the server is running.');
    }
  };

  function appendAiMessage(role, html) {
    const container = document.getElementById('ai-chat-messages');
    const isGuide = role === 'guide';
    const div = document.createElement('div');
    div.className = `ai-msg ${isGuide ? 'ai-guide-msg' : 'ai-user-msg'}`;
    div.innerHTML = `<div class="ai-bubble ${isGuide ? 'ai-guide-bubble' : 'ai-user-bubble'}">${html}</div>`;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }

  function showAiTyping() {
    const id = 'ai-typing-' + Date.now();
    const container = document.getElementById('ai-chat-messages');
    const div = document.createElement('div');
    div.className = 'ai-msg ai-guide-msg';
    div.id = id;
    div.innerHTML = '<div class="ai-bubble ai-guide-bubble ai-typing-bubble"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>';
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    return id;
  }

  function removeAiTyping(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
  }

  function formatAiResponse(text) {
    // Convert markdown-style formatting to HTML
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/^#{1,3}\s+(.+)$/gm, '<strong>$1</strong>')
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n/g, '<br>')
      .replace(/^[-*]\s+(.+)/gm, '• $1');
  }
})();
