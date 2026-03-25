// ===== PROVIDER DATA =====

const providerProfile = {
  name: 'Sarah Mitchell',
  initial: 'S',
  role: 'host', // 'host' or 'guide'
  superhost: true,
  rating: 4.97,
  reviews: 312,
  responseTime: '~30 min',
};

const bookings = [
  {
    id: 1, status: 'pending',
    guest: 'James Rodriguez', guestInitial: 'JR',
    listing: 'Oceanfront Villa with Private Beach',
    checkin: '2026-04-10', checkout: '2026-04-15',
    guests: 4, nights: 5, total: 1425,
    message: 'Hi! We are a family of 4 visiting for spring break. Would love to stay at your beautiful property!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    id: 2, status: 'pending',
    guest: 'Aisha Patel', guestInitial: 'AP',
    listing: 'Oceanfront Villa with Private Beach',
    checkin: '2026-04-20', checkout: '2026-04-23',
    guests: 2, nights: 3, total: 855,
    message: "Anniversary trip for my husband and I. Your place looks absolutely stunning!",
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80',
  },
  {
    id: 3, status: 'pending',
    guest: 'Tyler Brooks', guestInitial: 'TB',
    listing: 'Rustic Log Cabin by the Creek',
    checkin: '2026-05-01', checkout: '2026-05-05',
    guests: 6, nights: 4, total: 568,
    message: 'Planning a friends trip. Love the outdoor vibes! Do you allow bonfires?',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
  },
  {
    id: 4, status: 'confirmed',
    guest: 'Elena Moreau', guestInitial: 'EM',
    listing: 'Oceanfront Villa with Private Beach',
    checkin: '2026-03-28', checkout: '2026-04-02',
    guests: 3, nights: 5, total: 1425,
    message: '',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80',
  },
  {
    id: 5, status: 'confirmed',
    guest: 'Marco Silva', guestInitial: 'MS',
    listing: 'Rustic Log Cabin by the Creek',
    checkin: '2026-04-05', checkout: '2026-04-08',
    guests: 2, nights: 3, total: 426,
    message: '',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
  {
    id: 6, status: 'completed',
    guest: 'Sophie Lee', guestInitial: 'SL',
    listing: 'Oceanfront Villa with Private Beach',
    checkin: '2026-03-05', checkout: '2026-03-10',
    guests: 2, nights: 5, total: 1425,
    message: '',
    rating: 5,
    review: "Absolutely stunning property! Sarah was an amazing host, responded instantly to every question. The beach access was incredible. Can't wait to come back!",
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
  },
  {
    id: 7, status: 'completed',
    guest: 'Raj Kumar', guestInitial: 'RK',
    listing: 'Rustic Log Cabin by the Creek',
    checkin: '2026-02-14', checkout: '2026-02-18',
    guests: 2, nights: 4, total: 568,
    message: '',
    rating: 5,
    review: "Perfect romantic getaway. The cabin was exactly as pictured, so cozy and peaceful.",
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
];

const conversations = [
  {
    id: 1,
    guest: 'James Rodriguez',
    guestInitial: 'JR',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    unread: 2,
    messages: [
      { from: 'guest', text: "Hi! We are a family of 4 visiting for spring break. Would love to stay at your beautiful property!", time: new Date(Date.now() - 3600000 * 2) },
      { from: 'guest', text: "Do you have a crib available for our 1-year-old?", time: new Date(Date.now() - 3600000) },
    ],
  },
  {
    id: 2,
    guest: 'Aisha Patel',
    guestInitial: 'AP',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80',
    unread: 1,
    messages: [
      { from: 'guest', text: "Anniversary trip for my husband and I. Your place looks absolutely stunning!", time: new Date(Date.now() - 7200000) },
      { from: 'host', text: "Thank you so much! We'd love to host you. Congratulations on your anniversary! 🎉", time: new Date(Date.now() - 6800000) },
      { from: 'guest', text: "Is it possible to arrange a surprise flower arrangement before we arrive?", time: new Date(Date.now() - 1800000) },
    ],
  },
  {
    id: 3,
    guest: 'Tyler Brooks',
    guestInitial: 'TB',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    unread: 0,
    messages: [
      { from: 'guest', text: "Love the outdoor vibes! Do you allow bonfires?", time: new Date(Date.now() - 86400000) },
      { from: 'host', text: "Yes! We have a designated fire pit area with wood provided. Just make sure to fully extinguish before bed 🔥", time: new Date(Date.now() - 82000000) },
      { from: 'guest', text: "Perfect, thanks so much!", time: new Date(Date.now() - 80000000) },
    ],
  },
  {
    id: 4,
    guest: 'Elena Moreau',
    guestInitial: 'EM',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80',
    unread: 1,
    messages: [
      { from: 'guest', text: "Hi Sarah! We're so excited for our stay next week!", time: new Date(Date.now() - 43200000) },
      { from: 'host', text: "We're so excited to host you! I'll leave a welcome basket for your arrival 🧺", time: new Date(Date.now() - 40000000) },
      { from: 'guest', text: "What's the best way to get from the airport?", time: new Date(Date.now() - 900000) },
    ],
  },
  {
    id: 5,
    guest: 'Marco Silva',
    guestInitial: 'MS',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    unread: 1,
    messages: [
      { from: 'guest', text: "Quick question — is there a coffee maker at the cabin?", time: new Date(Date.now() - 1200000) },
    ],
  },
];

const providerListings = [
  {
    id: 1,
    title: 'Oceanfront Villa with Private Beach',
    location: 'Malibu, California',
    price: 285,
    beds: 4, baths: 3, guests: 8,
    status: 'active',
    category: 'beach',
    rating: 4.97, reviews: 312,
    bookings: 18,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
    earnings: 9870,
  },
  {
    id: 2,
    title: 'Rustic Log Cabin by the Creek',
    location: 'Gatlinburg, Tennessee',
    price: 142,
    beds: 3, baths: 2, guests: 6,
    status: 'active',
    category: 'cabin',
    rating: 4.99, reviews: 276,
    bookings: 6,
    image: 'https://images.unsplash.com/photo-1445991842772-097fea258e7b?w=600&q=80',
    earnings: 2970,
  },
];

const earningsData = [
  { month: 'Oct', amount: 7200 },
  { month: 'Nov', amount: 8900 },
  { month: 'Dec', amount: 11400 },
  { month: 'Jan', amount: 9600 },
  { month: 'Feb', amount: 10890 },
  { month: 'Mar', amount: 12840 },
];

const payouts = [
  { date: 'Mar 1, 2026', amount: 9870, status: 'Paid', method: 'Bank transfer' },
  { date: 'Feb 1, 2026', amount: 10890, status: 'Paid', method: 'Bank transfer' },
  { date: 'Jan 1, 2026', amount: 9600, status: 'Paid', method: 'Bank transfer' },
  { date: 'Dec 1, 2025', amount: 11400, status: 'Paid', method: 'Bank transfer' },
  { date: 'Nov 1, 2025', amount: 8900, status: 'Paid', method: 'Bank transfer' },
];

// ===== STATE =====
let activeTab = 'overview';
let activeBookingTab = 'pending';
let activeConversationId = null;
let calendarDate = new Date(2026, 2, 1); // March 2026

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('sidebarAvatar').textContent = providerProfile.initial;
  document.getElementById('sidebarName').textContent = providerProfile.name;
  document.getElementById('topbarAvatar').textContent = providerProfile.initial;

  renderOverview();
  renderBookings('pending');
  renderConversations();
  renderProviderListings();
  renderEarnings();
  renderCalendar();

  // Update badges
  updateBadges();
});

// ===== TAB SWITCHING =====
function switchTab(tab, el) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById(`tab-${tab}`).classList.add('active');
  if (el) el.classList.add('active');

  const titles = {
    overview: 'Dashboard',
    bookings: 'Bookings',
    messages: 'Messages',
    listings: 'My Listings',
    earnings: 'Earnings',
    calendar: 'Calendar',
  };
  document.getElementById('topbarTitle').textContent = titles[tab] || tab;
  activeTab = tab;
}

function updateBadges() {
  const pending = bookings.filter(b => b.status === 'pending').length;
  const unreadMsgs = conversations.reduce((s, c) => s + c.unread, 0);
  document.getElementById('pendingBadge').textContent = pending;
  document.getElementById('msgBadge').textContent = unreadMsgs;
  document.getElementById('pendingBadge').style.display = pending > 0 ? '' : 'none';
  document.getElementById('msgBadge').style.display = unreadMsgs > 0 ? '' : 'none';
}

// ===== OVERVIEW =====
function renderOverview() {
  // Pending requests preview
  const pending = bookings.filter(b => b.status === 'pending').slice(0, 2);
  document.getElementById('overviewPending').innerHTML = pending.length === 0
    ? '<div class="empty-state">No pending requests</div>'
    : pending.map(b => `
      <div class="ov-booking-row">
        <div class="ov-guest-info">
          <div class="ov-avatar">${b.guestInitial}</div>
          <div>
            <div class="ov-name">${b.guest}</div>
            <div class="ov-detail">${b.listing} · ${formatDate(b.checkin)} – ${formatDate(b.checkout)}</div>
          </div>
        </div>
        <div class="ov-actions">
          <button class="accept-btn" onclick="respondBooking(${b.id},'confirmed')">Accept</button>
          <button class="decline-btn" onclick="respondBooking(${b.id},'declined')">Decline</button>
        </div>
      </div>
    `).join('');

  // Recent messages preview
  const sorted = [...conversations].sort((a, b) => {
    const aLast = a.messages[a.messages.length - 1].time;
    const bLast = b.messages[b.messages.length - 1].time;
    return bLast - aLast;
  }).slice(0, 3);
  document.getElementById('overviewMessages').innerHTML = sorted.map(c => {
    const last = c.messages[c.messages.length - 1];
    return `
      <div class="ov-msg-row" onclick="openConversationFromOverview(${c.id})">
        <div class="ov-avatar">${c.guestInitial}</div>
        <div class="ov-msg-body">
          <div class="ov-msg-header">
            <span class="ov-name">${c.guest}</span>
            ${c.unread > 0 ? `<span class="unread-dot"></span>` : ''}
            <span class="ov-time">${timeAgo(last.time)}</span>
          </div>
          <div class="ov-msg-preview">${last.from === 'host' ? 'You: ' : ''}${last.text}</div>
        </div>
      </div>
    `;
  }).join('');
}

function openConversationFromOverview(id) {
  switchTab('messages', document.querySelectorAll('.nav-item')[2]);
  setTimeout(() => openConversation(id), 50);
}

// ===== BOOKINGS =====
function switchBookingTab(tab, el) {
  document.querySelectorAll('.btab').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  activeBookingTab = tab;
  renderBookings(tab);
}

function renderBookings(tab) {
  const list = bookings.filter(b => b.status === tab);
  const pendingCount = bookings.filter(b => b.status === 'pending').length;
  const confirmedCount = bookings.filter(b => b.status === 'confirmed').length;
  const completedCount = bookings.filter(b => b.status === 'completed').length;

  document.getElementById('pendingCount').textContent = pendingCount;
  document.getElementById('confirmedCount').textContent = confirmedCount;
  document.getElementById('completedCount').textContent = completedCount;

  if (list.length === 0) {
    document.getElementById('bookingsList').innerHTML = `<div class="empty-state large">No ${tab} bookings</div>`;
    return;
  }

  document.getElementById('bookingsList').innerHTML = list.map(b => {
    const nights = Math.round((new Date(b.checkout) - new Date(b.checkin)) / 86400000);
    return `
      <div class="booking-card ${b.status}">
        <div class="bc-left">
          <div class="bc-avatar-wrap">
            <img src="${b.avatar}" alt="${b.guest}" />
          </div>
          <div class="bc-info">
            <div class="bc-guest">${b.guest}</div>
            <div class="bc-listing">${b.listing}</div>
            <div class="bc-dates">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              ${formatDate(b.checkin)} – ${formatDate(b.checkout)} · ${nights} night${nights !== 1 ? 's' : ''}
            </div>
            <div class="bc-guests-total">
              <span>👥 ${b.guests} guest${b.guests !== 1 ? 's' : ''}</span>
              <span class="bc-total">$${b.total.toLocaleString()} total</span>
            </div>
            ${b.message ? `<div class="bc-message">"${b.message}"</div>` : ''}
            ${b.review ? `<div class="bc-review"><span class="bc-stars">${'★'.repeat(b.rating)}</span> "${b.review}"</div>` : ''}
          </div>
        </div>
        <div class="bc-right">
          <span class="bc-status ${b.status}">${capitalize(b.status)}</span>
          ${b.status === 'pending' ? `
            <button class="accept-btn" onclick="respondBooking(${b.id},'confirmed')">Accept</button>
            <button class="decline-btn" onclick="respondBooking(${b.id},'declined')">Decline</button>
          ` : ''}
          ${b.status === 'confirmed' ? `
            <button class="msg-action-btn" onclick="openConversationByGuest('${b.guest}')">Message guest</button>
          ` : ''}
          ${b.status === 'completed' ? `
            <button class="msg-action-btn" onclick="openConversationByGuest('${b.guest}')">View chat</button>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function respondBooking(id, response) {
  const idx = bookings.findIndex(b => b.id === id);
  if (idx < 0) return;
  bookings[idx].status = response;
  renderBookings(activeBookingTab);
  renderOverview();
  updateBadges();
  showProviderToast(response === 'confirmed'
    ? `Booking accepted! ${bookings[idx].guest} has been notified. 🎉`
    : `Booking declined. ${bookings[idx].guest} has been notified.`
  );
  // Auto-add to conversation
  if (response === 'confirmed') {
    const conv = conversations.find(c => c.guest === bookings[idx].guest);
    if (conv) {
      conv.messages.push({ from: 'host', text: "Great news! I've accepted your booking request. Can't wait to host you! Let me know if you have any questions 😊", time: new Date() });
    }
  }
}

function openConversationByGuest(guestName) {
  const conv = conversations.find(c => c.guest === guestName);
  if (!conv) return;
  switchTab('messages', document.querySelectorAll('.nav-item')[2]);
  setTimeout(() => openConversation(conv.id), 50);
}

// ===== MESSAGES =====
function renderConversations() {
  const sorted = [...conversations].sort((a, b) => {
    const aLast = a.messages[a.messages.length - 1].time;
    const bLast = b.messages[b.messages.length - 1].time;
    return bLast - aLast;
  });

  document.getElementById('conversationsList').innerHTML = sorted.map(c => {
    const last = c.messages[c.messages.length - 1];
    const isActive = c.id === activeConversationId;
    return `
      <div class="conv-item ${isActive ? 'active' : ''} ${c.unread > 0 ? 'has-unread' : ''}" onclick="openConversation(${c.id})">
        <div class="conv-avatar">${c.guestInitial}</div>
        <div class="conv-body">
          <div class="conv-header">
            <span class="conv-name">${c.guest}</span>
            <span class="conv-time">${timeAgo(last.time)}</span>
          </div>
          <div class="conv-preview">${last.from === 'host' ? 'You: ' : ''}${last.text}</div>
        </div>
        ${c.unread > 0 ? `<div class="conv-unread">${c.unread}</div>` : ''}
      </div>
    `;
  }).join('');
}

function openConversation(id) {
  activeConversationId = id;
  const conv = conversations.find(c => c.id === id);
  if (!conv) return;

  // Mark as read
  conv.unread = 0;
  updateBadges();
  renderConversations();

  document.getElementById('conversationView').innerHTML = `
    <div class="cv-header">
      <div class="cv-guest-info">
        <div class="cv-avatar">${conv.guestInitial}</div>
        <div>
          <div class="cv-name">${conv.guest}</div>
          <div class="cv-sub">Guest</div>
        </div>
      </div>
    </div>
    <div class="cv-messages" id="cvMessages">${renderConvMessages(conv)}</div>
    <div class="cv-input-row">
      <input type="text" class="cv-input" id="cvInput" placeholder="Type a reply..." onkeydown="if(event.key==='Enter')sendProviderMessage(${id})" />
      <button class="cv-send-btn" onclick="sendProviderMessage(${id})">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
      </button>
    </div>
  `;

  setTimeout(() => {
    const msgs = document.getElementById('cvMessages');
    if (msgs) msgs.scrollTop = msgs.scrollHeight;
  }, 50);
}

function renderConvMessages(conv) {
  return conv.messages.map(msg => {
    const timeStr = msg.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (msg.from === 'host') {
      return `
        <div class="cv-msg host-msg">
          <div class="cv-bubble host-bubble">
            <div class="cv-text">${msg.text}</div>
            <div class="cv-time">${timeStr}</div>
          </div>
        </div>`;
    } else {
      return `
        <div class="cv-msg guest-msg">
          <div class="cv-bubble guest-bubble">
            <div class="cv-text">${msg.text}</div>
            <div class="cv-time">${timeStr}</div>
          </div>
        </div>`;
    }
  }).join('');
}

function sendProviderMessage(convId) {
  const input = document.getElementById('cvInput');
  const text = input.value.trim();
  if (!text) return;

  const conv = conversations.find(c => c.id === convId);
  if (!conv) return;

  conv.messages.push({ from: 'host', text, time: new Date() });
  input.value = '';

  // Re-render messages
  const msgsEl = document.getElementById('cvMessages');
  if (msgsEl) {
    msgsEl.innerHTML = renderConvMessages(conv);
    msgsEl.scrollTop = msgsEl.scrollHeight;
  }
  renderConversations();
}

// ===== LISTINGS =====
function renderProviderListings() {
  document.getElementById('providerListingsGrid').innerHTML = providerListings.map(l => `
    <div class="pl-card">
      <div class="pl-image-wrap">
        <img src="${l.image}" alt="${l.title}" />
        <span class="pl-status-badge ${l.status}">${capitalize(l.status)}</span>
      </div>
      <div class="pl-body">
        <div class="pl-title">${l.title}</div>
        <div class="pl-location">📍 ${l.location}</div>
        <div class="pl-stats">
          <span>⭐ ${l.rating} (${l.reviews})</span>
          <span>📅 ${l.bookings} bookings</span>
          <span>💰 $${l.earnings.toLocaleString()}</span>
        </div>
        <div class="pl-meta">${l.beds} bed · ${l.baths} bath · Up to ${l.guests} guests · $${l.price}/night</div>
        <div class="pl-actions">
          <button class="pl-edit-btn" onclick="editListing(${l.id})">Edit</button>
          <button class="pl-toggle-btn" onclick="toggleListingStatus(${l.id})">${l.status === 'active' ? 'Deactivate' : 'Activate'}</button>
        </div>
      </div>
    </div>
  `).join('');
}

function openListingForm(listingId) {
  document.getElementById('listingFormOverlay').classList.add('open');
  document.getElementById('listingFormPanel').classList.add('open');
  document.getElementById('lfTitle').textContent = listingId ? 'Edit Listing' : 'Add New Listing';
  if (!listingId) {
    document.getElementById('lfTitleInput').value = '';
    document.getElementById('lfLocation').value = '';
    document.getElementById('lfPrice').value = '';
    document.getElementById('lfBeds').value = '';
    document.getElementById('lfBaths').value = '';
    document.getElementById('lfGuests').value = '';
    document.getElementById('lfDesc').value = '';
  }
}

function editListing(id) {
  const l = providerListings.find(x => x.id === id);
  if (!l) return;
  openListingForm(id);
  document.getElementById('lfTitleInput').value = l.title;
  document.getElementById('lfLocation').value = l.location;
  document.getElementById('lfPrice').value = l.price;
  document.getElementById('lfBeds').value = l.beds;
  document.getElementById('lfBaths').value = l.baths;
  document.getElementById('lfGuests').value = l.guests;
}

function closeListingForm() {
  document.getElementById('listingFormOverlay').classList.remove('open');
  document.getElementById('listingFormPanel').classList.remove('open');
}

function saveListing() {
  const title = document.getElementById('lfTitleInput').value.trim();
  const location = document.getElementById('lfLocation').value.trim();
  const price = parseInt(document.getElementById('lfPrice').value);
  if (!title || !location || !price) {
    showProviderToast('Please fill in all required fields');
    return;
  }
  closeListingForm();
  showProviderToast('Listing saved successfully! 🏠');
}

function toggleListingStatus(id) {
  const l = providerListings.find(x => x.id === id);
  if (!l) return;
  l.status = l.status === 'active' ? 'draft' : 'active';
  renderProviderListings();
  showProviderToast(`Listing ${l.status === 'active' ? 'activated' : 'deactivated'}`);
}

// ===== EARNINGS =====
function renderEarnings() {
  // Bar chart
  const maxAmount = Math.max(...earningsData.map(d => d.amount));
  document.getElementById('earningsChart').innerHTML = earningsData.map(d => `
    <div class="ec-bar-wrap">
      <div class="ec-bar-label">$${(d.amount/1000).toFixed(1)}k</div>
      <div class="ec-bar-track">
        <div class="ec-bar" style="height:${(d.amount/maxAmount)*100}%"></div>
      </div>
      <div class="ec-month">${d.month}</div>
    </div>
  `).join('');

  // Payout table
  document.getElementById('payoutTable').innerHTML = `
    <div class="ph-row header">
      <span>Date</span><span>Amount</span><span>Method</span><span>Status</span>
    </div>
    ${payouts.map(p => `
      <div class="ph-row">
        <span>${p.date}</span>
        <span class="ph-amount">$${p.amount.toLocaleString()}</span>
        <span>${p.method}</span>
        <span class="ph-status paid">${p.status}</span>
      </div>
    `).join('')}
  `;
}

// ===== CALENDAR =====
function renderCalendar() {
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();

  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  document.getElementById('calMonthYear').textContent = `${monthNames[month]} ${year}`;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  // Collect booked dates from confirmed bookings
  const bookedDates = new Set();
  bookings.filter(b => b.status === 'confirmed' || b.status === 'completed').forEach(b => {
    const start = new Date(b.checkin);
    const end = new Date(b.checkout);
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      if (d.getFullYear() === year && d.getMonth() === month) {
        bookedDates.add(d.getDate());
      }
    }
  });

  let html = '';
  // Empty cells for first week
  for (let i = 0; i < firstDay; i++) html += '<div class="cal-day empty"></div>';

  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === d;
    const isBooked = bookedDates.has(d);
    const isPast = new Date(year, month, d) < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    html += `<div class="cal-day ${isToday ? 'today' : ''} ${isBooked ? 'booked' : ''} ${isPast ? 'past' : ''}">${d}</div>`;
  }

  document.getElementById('calGrid').innerHTML = html;

  // Upcoming bookings list in sidebar
  const upcoming = bookings.filter(b => b.status === 'confirmed' && new Date(b.checkin) >= today)
    .sort((a, b) => new Date(a.checkin) - new Date(b.checkin));

  document.getElementById('calUpcoming').innerHTML = upcoming.length === 0
    ? '<div class="empty-state">No upcoming bookings</div>'
    : upcoming.map(b => `
      <div class="cal-booking-item">
        <div class="cbi-date">${formatDate(b.checkin)}</div>
        <div class="cbi-info">
          <div class="cbi-guest">${b.guest}</div>
          <div class="cbi-listing">${b.listing}</div>
          <div class="cbi-nights">${Math.round((new Date(b.checkout)-new Date(b.checkin))/86400000)} nights · ${b.guests} guests</div>
        </div>
      </div>
    `).join('');
}

function changeMonth(dir) {
  calendarDate.setMonth(calendarDate.getMonth() + dir);
  renderCalendar();
}

// ===== UTILITIES =====
function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function timeAgo(date) {
  const diff = Date.now() - date.getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'Just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function showProviderToast(msg) {
  const t = document.getElementById('providerToast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}
