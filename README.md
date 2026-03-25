# StayLocal

A travel web app where users find local stays, book experiences with real local guides, and get AI-powered travel recommendations.

![StayLocal](https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200&q=80)

## Features

### 🏠 Places to Stay
- Browse 16 listings across beach, mountain, city, cabin, treehouse, and more
- Image carousel on every card
- Real date picker with check-in/check-out and price breakdown
- Filter by price, place type, and amenities
- Sort by price or rating
- Wishlist / saved listings

### 🗺️ Local Guides
- 8 verified local guides across Food, Nature, Culture, Photography, Nightlife, Adventure, Art, and Wellness
- Live chat with guides before booking
- Full booking panel with duration, group size, and price breakdown

### 🔗 Booking → Guide Recommendation Flow
1. Find a stay → click **Reserve**
2. Fill in dates and guests → **Request to book**
3. After booking, get personalized local guide recommendations for that city
4. **Chat** with a guide directly from the booking confirmation

### 🤖 AI Travel Concierge
Floating chatbot (bottom-right ✈️ button) on every page powered by Claude AI:
- Type any destination to get places to visit, restaurants, hidden gems, and local tips
- Multi-turn conversation with memory
- Quick-chip suggestions for popular destinations

### 🧑‍💼 Provider Dashboard
Separate provider view (`/provider.html`) for hosts and guides:
- Booking management (accept/decline)
- Guest messaging
- Listing management
- Earnings overview and payout history
- Availability calendar

## Getting Started

### Prerequisites
- Node.js 18+
- An [Anthropic API key](https://console.anthropic.com) (for the AI chatbot)

### Install & Run

```bash
git clone https://github.com/siyuanji1/staylocal.git
cd staylocal
npm install
```

Create a `.env` file:
```
ANTHROPIC_API_KEY=your_api_key_here
PORT=3000
```

Start the server:
```bash
node server.js
```

Open [http://localhost:3000](http://localhost:3000)

> **Note:** The AI chatbot requires a valid Anthropic API key. All other features work without it.

## Tech Stack

- **Frontend:** Vanilla HTML, CSS, JavaScript (no frameworks)
- **Backend:** Node.js + Express
- **AI:** Claude Haiku via Anthropic SDK
- **Images:** Unsplash CDN

## Pages

| Page | Description |
|------|-------------|
| `/` | Local Guides (default landing page) |
| `/stays.html` | Places to Stay |
| `/provider.html` | Provider / Host Dashboard |

## Project Structure

```
staylocal/
├── index.html          # Local Guides page (landing)
├── stays.html          # Places to Stay
├── experiences.html    # Alternate Guides page
├── provider.html       # Provider dashboard
├── app.js              # Stays page logic
├── experiences.js      # Guides page logic
├── provider.js         # Provider dashboard logic
├── chatbot.js          # AI chatbot widget
├── server.js           # Express server + Claude API proxy
├── styles.css          # Shared styles
├── experiences.css     # Guides + chat styles
├── provider.css        # Provider dashboard styles
└── .env                # API keys (not committed)
```
