// ===== DATA =====
const listings = [
  {
    id: 1, category: 'beach',
    title: 'Oceanfront Villa with Private Beach',
    location: 'Malibu, California',
    country: 'United States',
    host: 'Sarah M.',
    hostInitial: 'S',
    rating: 4.97, reviews: 312,
    price: 285,
    type: 'entire',
    beds: 4, baths: 3, guests: 8,
    badge: 'Guest favorite',
    badgeClass: 'badge-guest',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
    ],
    amenities: ['🌊 Ocean view', '🍳 Full kitchen', '🅿️ Free parking', '📶 Fast Wifi', '🏊 Private pool', '❄️ AC'],
    description: 'Wake up to stunning Pacific Ocean views in this luxurious beachfront villa. Step directly onto your private sandy beach, enjoy breathtaking sunsets from the wraparound deck, and relax in the heated pool. The open-concept living area is flooded with natural light and features designer furnishings throughout.',
    dates: 'Nov 12 – 17',
  },
  {
    id: 2, category: 'mountain',
    title: 'Cozy A-Frame Cabin in the Rockies',
    location: 'Aspen, Colorado',
    country: 'United States',
    host: 'James W.',
    hostInitial: 'J',
    rating: 4.92, reviews: 189,
    price: 178,
    type: 'entire',
    beds: 2, baths: 1, guests: 4,
    badge: null,
    images: [
      'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=600&q=80',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=600&q=80',
      'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=600&q=80',
    ],
    amenities: ['🔥 Fireplace', '🍳 Kitchen', '❄️ AC', '🐕 Pet friendly', '📶 Wifi', '⛷️ Ski in/out'],
    description: 'Nestled among towering pines with panoramic mountain views, this charming A-frame cabin is the perfect alpine retreat. Curl up by the crackling fireplace after a day on the slopes, cook a feast in the fully equipped kitchen, or stargaze from the private hot tub.',
    dates: 'Dec 3 – 8',
  },
  {
    id: 3, category: 'city',
    title: 'Chic Studio in SoHo',
    location: 'New York City, New York',
    country: 'United States',
    host: 'Priya K.',
    hostInitial: 'P',
    rating: 4.85, reviews: 428,
    price: 195,
    type: 'entire',
    beds: 1, baths: 1, guests: 2,
    badge: 'Guest favorite',
    badgeClass: 'badge-guest',
    images: [
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=600&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80',
    ],
    amenities: ['📶 Wifi', '❄️ AC', '🍳 Kitchen', '🏙️ City view', '🚇 Metro nearby', '👕 Washer'],
    description: 'Stay in the heart of Manhattan\'s most vibrant neighborhood. This beautifully designed studio apartment features exposed brick walls, soaring ceilings, and curated art from local galleries. Walk to world-class restaurants, boutique shopping, and iconic NYC landmarks.',
    dates: 'Jan 10 – 14',
  },
  {
    id: 4, category: 'cabin',
    title: 'Rustic Log Cabin by the Creek',
    location: 'Gatlinburg, Tennessee',
    country: 'United States',
    host: 'Tom & Lisa H.',
    hostInitial: 'T',
    rating: 4.99, reviews: 276,
    price: 142,
    type: 'entire',
    beds: 3, baths: 2, guests: 6,
    badge: 'Guest favorite',
    badgeClass: 'badge-guest',
    images: [
      'https://images.unsplash.com/photo-1445991842772-097fea258e7b?w=600&q=80',
      'https://images.unsplash.com/photo-1532798442725-41036acc7489?w=600&q=80',
      'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=600&q=80',
    ],
    amenities: ['🔥 Fire pit', '🛁 Hot tub', '🎣 Creek access', '🍳 Kitchen', '📶 Wifi', '🅿️ Free parking'],
    description: 'Escape to this authentic log cabin nestled in the Great Smoky Mountains. Fall asleep to the sound of a babbling creek and wake to misty mountain mornings. The cabin features hand-hewn logs, a stone fireplace, and a wraparound porch perfect for wildlife watching.',
    dates: 'Nov 24 – 29',
  },
  {
    id: 5, category: 'lake',
    title: 'Lakehouse Retreat with Dock',
    location: 'Lake Tahoe, California',
    country: 'United States',
    host: 'Maria C.',
    hostInitial: 'M',
    rating: 4.94, reviews: 203,
    price: 320,
    type: 'entire',
    beds: 5, baths: 3, guests: 10,
    badge: null,
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=600&q=80',
    ],
    amenities: ['⛵ Private dock', '🛶 Kayaks', '🍳 Kitchen', '🔥 Fireplace', '📶 Wifi', '🅿️ Parking'],
    description: 'Your dream lakefront vacation starts here. This spacious 5-bedroom home sits directly on the shores of crystal-clear Lake Tahoe with its own private dock. Launch kayaks from your backyard, swim in the pristine waters, and gather around the fire pit for evening s\'mores.',
    dates: 'Jul 4 – 9',
  },
  {
    id: 6, category: 'treehouse',
    title: 'Magical Treehouse in the Redwoods',
    location: 'Santa Cruz, California',
    country: 'United States',
    host: 'Elena R.',
    hostInitial: 'E',
    rating: 4.98, reviews: 147,
    price: 225,
    type: 'entire',
    beds: 1, baths: 1, guests: 2,
    badge: 'New',
    badgeClass: 'badge-new',
    images: [
      'https://images.unsplash.com/photo-1482192505345-5852a5720bba?w=600&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
      'https://images.unsplash.com/photo-1416339134316-0e91dc9ded92?w=600&q=80',
    ],
    amenities: ['🌲 Forest view', '☕ Coffee bar', '📶 Wifi', '🛁 Outdoor shower', '🌟 Stargazing deck', '🍳 Kitchenette'],
    description: 'Live out your childhood dream in this enchanting treehouse perched 30 feet in the California redwoods. Accessed by a handcrafted spiral staircase, the treehouse features a cozy sleeping loft, a glass-floored deck for cloud-watching, and an outdoor shower under the stars.',
    dates: 'Oct 18 – 22',
  },
  {
    id: 7, category: 'farm',
    title: 'Charming Farmhouse with Horses',
    location: 'Sonoma County, California',
    country: 'United States',
    host: 'Robert & Anne P.',
    hostInitial: 'R',
    rating: 4.91, reviews: 88,
    price: 165,
    type: 'entire',
    beds: 4, baths: 2, guests: 8,
    badge: null,
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
    ],
    amenities: ['🐴 Horse riding', '🍷 Wine country', '🍳 Full kitchen', '🌿 Organic garden', '📶 Wifi', '🔥 BBQ grill'],
    description: 'Experience authentic farm life in the heart of California wine country. This restored 1890s farmhouse sits on 40 acres with horses, chickens, and a thriving vegetable garden. Pick fresh produce for breakfast, explore rolling vineyards, and end evenings with world-class local wines.',
    dates: 'Sep 15 – 20',
  },
  {
    id: 8, category: 'pool',
    title: 'Modern Desert Villa with Infinity Pool',
    location: 'Scottsdale, Arizona',
    country: 'United States',
    host: 'Alex N.',
    hostInitial: 'A',
    rating: 4.96, reviews: 234,
    price: 395,
    type: 'entire',
    beds: 4, baths: 4, guests: 8,
    badge: 'Guest favorite',
    badgeClass: 'badge-guest',
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80',
      'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&q=80',
      'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600&q=80',
    ],
    amenities: ['🏊 Infinity pool', '♨️ Hot tub', '🌵 Desert view', '❄️ AC', '🍳 Gourmet kitchen', '🎯 Game room'],
    description: 'Perched on a ridge with sweeping Sonoran Desert views, this architectural masterpiece features a stunning infinity pool that seems to float above the landscape. Enjoy bespoke design, a chef\'s kitchen, and indoor-outdoor living at its finest.',
    dates: 'Mar 5 – 10',
  },
  {
    id: 9, category: 'luxury',
    title: 'Penthouse Suite with City Panorama',
    location: 'Miami, Florida',
    country: 'United States',
    host: 'Isabella F.',
    hostInitial: 'I',
    rating: 4.95, reviews: 178,
    price: 650,
    type: 'entire',
    beds: 3, baths: 3, guests: 6,
    badge: 'Luxury',
    badgeClass: 'badge-guest',
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
    ],
    amenities: ['🏙️ Panoramic views', '🏊 Rooftop pool', '🧖 Spa access', '🍾 Concierge', '🚗 Valet parking', '📶 Fiber wifi'],
    description: 'This spectacular penthouse atop a luxury tower commands 360° views of Miami\'s skyline, Biscayne Bay, and the Atlantic. Featuring floor-to-ceiling windows, Italian marble floors, and designer furnishings, every detail has been curated for the most discerning traveler.',
    dates: 'Feb 14 – 18',
  },
  {
    id: 10, category: 'island',
    title: 'Private Island Escape',
    location: 'Florida Keys, Florida',
    country: 'United States',
    host: 'Captain Dave S.',
    hostInitial: 'D',
    rating: 5.0, reviews: 56,
    price: 890,
    type: 'entire',
    beds: 6, baths: 5, guests: 12,
    badge: 'Rare find',
    badgeClass: 'badge-guest',
    images: [
      'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
      'https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?w=600&q=80',
    ],
    amenities: ['🏝️ Private island', '⛵ Boat included', '🤿 Snorkeling gear', '🍳 Chef available', '🌴 Beach BBQ', '🛥️ Water taxi'],
    description: 'Experience the ultimate privacy on your own private island in the crystal-clear waters of the Florida Keys. Accessible only by boat (included), this 5-acre paradise features pristine beaches, turquoise waters, abundant marine life, and a stunning villa with all modern comforts.',
    dates: 'Apr 20 – 26',
  },
  {
    id: 11, category: 'city',
    title: 'Historic Brownstone in Boston',
    location: 'Boston, Massachusetts',
    country: 'United States',
    host: 'Connor B.',
    hostInitial: 'C',
    rating: 4.88, reviews: 321,
    price: 210,
    type: 'entire',
    beds: 3, baths: 2, guests: 6,
    badge: null,
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80',
    ],
    amenities: ['🏛️ Historic building', '🍳 Full kitchen', '📶 Wifi', '❄️ AC', '👕 Laundry', '🚇 T nearby'],
    description: 'Live like a Bostonian in this beautifully restored 19th-century brownstone on a tree-lined Beacon Hill street. Original architectural details blend seamlessly with modern comforts. Steps from the Freedom Trail, Boston Common, and world-class dining.',
    dates: 'Oct 10 – 14',
  },
  {
    id: 12, category: 'mountain',
    title: 'Glass-Walled Mountain Retreat',
    location: 'Banff, Alberta',
    country: 'Canada',
    host: 'Sophie L.',
    hostInitial: 'S',
    rating: 4.97, reviews: 134,
    price: 340,
    type: 'entire',
    beds: 3, baths: 2, guests: 6,
    badge: 'Guest favorite',
    badgeClass: 'badge-guest',
    images: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=600&q=80',
    ],
    amenities: ['🏔️ Mountain views', '🔥 Fireplace', '🛁 Hot tub', '🎿 Ski nearby', '📶 Wifi', '🍳 Kitchen'],
    description: 'Suspended in the Canadian Rockies, this architectural gem features three walls of floor-to-ceiling glass overlooking Banff National Park. Watch bears and elk from your living room, soak in the outdoor hot tub under the northern lights, and wake to alpenglow on the peaks.',
    dates: 'Dec 20 – 27',
  },
];

// ===== STATE =====
let activeCategory = 'all';
let likedCards = new Set();
let currentImageIndex = {};
let currentListing = null;

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderListings(listings);
  renderHistogram();
  document.addEventListener('click', handleOutsideClick);
});

// ===== RENDER =====
function renderListings(data) {
  const grid = document.getElementById('listingsGrid');
  const noResults = document.getElementById('noResults');

  if (data.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }
  noResults.style.display = 'none';

  grid.innerHTML = data.map(listing => createCard(listing)).join('');
}

function createCard(l) {
  const img = l.images[0];
  const isLiked = likedCards.has(l.id);
  const dots = l.images.map((_, i) =>
    `<div class="dot ${i === 0 ? 'active' : ''}"></div>`
  ).join('');

  return `
    <div class="listing-card" onclick="openListing(${l.id})" id="card-${l.id}">
      <div class="card-image-wrap">
        ${l.badge ? `<div class="card-badge ${l.badgeClass || ''}">${l.badge}</div>` : ''}
        <img class="card-image" src="${img}" alt="${l.title}" loading="lazy" id="img-${l.id}" />
        <button class="heart-btn ${isLiked ? 'liked' : ''}" onclick="toggleLike(event, ${l.id})">
          ${isLiked ? '❤️' : '🤍'}
        </button>
        <div class="image-dots" id="dots-${l.id}">${dots}</div>
      </div>
      <div class="card-info">
        <div class="card-header">
          <div class="card-title">${l.title}</div>
          <div class="card-rating">
            <span class="star-icon">★</span>
            ${l.rating}
          </div>
        </div>
        <div class="card-subtitle">${l.location}</div>
        <div class="card-dates">${l.dates}</div>
        <div class="card-price">
          <span class="price-amount">$${l.price}</span>
          <span class="price-unit"> night</span>
        </div>
      </div>
    </div>
  `;
}

// ===== CATEGORY FILTER =====
function filterCategory(cat) {
  activeCategory = cat;

  // Update active state
  document.querySelectorAll('.category').forEach(el => el.classList.remove('active'));
  const categories = document.querySelectorAll('.category');
  const catMap = ['all','beach','mountain','city','cabin','lake','farm','treehouse','pool','luxury','island'];
  const idx = catMap.indexOf(cat);
  if (idx >= 0 && categories[idx]) categories[idx].classList.add('active');

  const filtered = cat === 'all' ? listings : listings.filter(l => l.category === cat);
  renderListings(filtered);
}

// ===== LIKE =====
function toggleLike(e, id) {
  e.stopPropagation();
  if (likedCards.has(id)) {
    likedCards.delete(id);
    showToast('Removed from wishlist');
  } else {
    likedCards.add(id);
    showToast('Saved to wishlist ❤️');
  }
  // Re-render just the button
  const btn = e.currentTarget;
  const isLiked = likedCards.has(id);
  btn.innerHTML = isLiked ? '❤️' : '🤍';
  btn.classList.toggle('liked', isLiked);
}

// ===== OPEN LISTING MODAL =====
function openListing(id) {
  const l = listings.find(x => x.id === id);
  if (!l) return;
  currentListing = l;

  const imagesHtml = l.images.slice(0, 3).map(src =>
    `<img src="${src}" alt="${l.title}" loading="lazy" />`
  ).join('');

  const amenitiesHtml = l.amenities.map(a => {
    const [icon, ...rest] = a.split(' ');
    return `<div class="amenity-item"><span class="icon">${icon}</span><span>${rest.join(' ')}</span></div>`;
  }).join('');

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-images">${imagesHtml}</div>
    <div class="modal-body">
      <h2 class="modal-title">${l.title}</h2>
      <div class="modal-subtitle">${l.location}, ${l.country}</div>
      <div class="modal-rating-row">
        <div class="modal-rating">★ ${l.rating} · <span style="color:#717171;font-weight:400">${l.reviews} reviews</span></div>
        <span style="color:#717171">·</span>
        <span>${l.beds} beds · ${l.baths} baths · Up to ${l.guests} guests</span>
      </div>
      <div class="modal-divider"></div>
      <div class="host-row">
        <div class="host-avatar">${l.hostInitial}</div>
        <div>
          <div class="host-name">Hosted by ${l.host}</div>
          <div class="host-meta">Superhost · 2 years hosting</div>
        </div>
      </div>
      <div class="modal-divider"></div>
      <p class="modal-desc">${l.description}</p>
      <div class="modal-divider"></div>
      <h3 class="amenities-title">What this place offers</h3>
      <div class="amenities-list">${amenitiesHtml}</div>
    </div>
    <div class="modal-footer">
      <div class="modal-price-row">
        <span class="modal-price-amount">$${l.price}</span>
        <span class="modal-price-unit"> / night</span>
      </div>
      <button class="reserve-btn" onclick="handleReserve()">Reserve</button>
    </div>
  `;

  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('listingModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('listingModal').classList.remove('open');
  document.body.style.overflow = '';
  currentListing = null;
}

function handleReserve() {
  if (currentListing) {
    showToast(`Booking request sent for "${currentListing.title}"! 🎉`);
    closeModal();
  }
}

// ===== SEARCH =====
function handleSearch() {
  const query = document.getElementById('whereInput').value.toLowerCase().trim();
  if (!query) {
    filterCategory(activeCategory);
    return;
  }
  const filtered = listings.filter(l =>
    l.title.toLowerCase().includes(query) ||
    l.location.toLowerCase().includes(query) ||
    l.country.toLowerCase().includes(query) ||
    l.category.toLowerCase().includes(query)
  );
  renderListings(filtered);
  showToast(`Searching for "${document.getElementById('whereInput').value}"`);
}

document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && document.activeElement.id === 'whereInput') {
    handleSearch();
  }
});

function openSearch(type) {
  // Simple date picker simulation
  if (type === 'checkin') {
    const date = prompt('Enter check-in date (e.g. Nov 12):');
    if (date) document.getElementById('checkinValue').textContent = date;
  } else if (type === 'checkout') {
    const date = prompt('Enter check-out date (e.g. Nov 17):');
    if (date) document.getElementById('checkoutValue').textContent = date;
  } else if (type === 'guests') {
    const guests = prompt('How many guests?');
    if (guests) document.getElementById('guestsValue').textContent = `${guests} guest${guests > 1 ? 's' : ''}`;
  }
}

// ===== USER MENU =====
function toggleUserMenu() {
  document.getElementById('userDropdown').classList.toggle('open');
}

function handleOutsideClick(e) {
  const menu = document.querySelector('.user-menu');
  const dropdown = document.getElementById('userDropdown');
  if (dropdown.classList.contains('open') && !menu.contains(e.target)) {
    dropdown.classList.remove('open');
  }
}

// ===== FILTERS =====
function openFilters() {
  document.getElementById('filterOverlay').classList.add('open');
  document.getElementById('filterModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeFilters() {
  document.getElementById('filterOverlay').classList.remove('open');
  document.getElementById('filterModal').classList.remove('open');
  document.body.style.overflow = '';
}

function clearFilters() {
  document.getElementById('minPrice').value = 0;
  document.getElementById('maxPrice').value = 500;
  document.querySelectorAll('[name="placeType"]')[0].checked = true;
  document.querySelectorAll('.amenities-grid input').forEach(cb => cb.checked = false);
  updateHistogram();
}

function applyFilters() {
  const min = parseInt(document.getElementById('minPrice').value) || 0;
  const max = parseInt(document.getElementById('maxPrice').value) || 9999;
  const placeType = document.querySelector('[name="placeType"]:checked')?.value || 'any';

  let filtered = activeCategory === 'all' ? listings : listings.filter(l => l.category === activeCategory);
  filtered = filtered.filter(l => l.price >= min && l.price <= max);
  if (placeType !== 'any') filtered = filtered.filter(l => l.type === placeType);

  closeFilters();
  renderListings(filtered);
  showToast(`${filtered.length} place${filtered.length !== 1 ? 's' : ''} found`);
}

// ===== HISTOGRAM =====
function renderHistogram() {
  const prices = listings.map(l => l.price);
  const min = Math.min(...prices), max = Math.max(...prices);
  const buckets = 20;
  const counts = new Array(buckets).fill(0);
  prices.forEach(p => {
    const idx = Math.min(Math.floor((p - min) / (max - min) * buckets), buckets - 1);
    counts[idx]++;
  });
  const maxCount = Math.max(...counts);
  const hist = document.getElementById('priceHistogram');
  hist.innerHTML = counts.map((c, i) =>
    `<div class="hist-bar in-range" style="height:${(c/maxCount)*100}%" data-idx="${i}"></div>`
  ).join('');
  updateHistogram();
}

function updateHistogram() {
  const minVal = parseInt(document.getElementById('minPrice').value) || 0;
  const maxVal = parseInt(document.getElementById('maxPrice').value) || 500;
  const prices = listings.map(l => l.price);
  const priceMin = Math.min(...prices), priceMax = Math.max(...prices);
  const buckets = 20;
  document.querySelectorAll('.hist-bar').forEach((bar, i) => {
    const bucketMin = priceMin + (i / buckets) * (priceMax - priceMin);
    const bucketMax = priceMin + ((i + 1) / buckets) * (priceMax - priceMin);
    bar.classList.toggle('in-range', bucketMax >= minVal && bucketMin <= maxVal);
  });
}

document.addEventListener('input', e => {
  if (e.target.id === 'minPrice' || e.target.id === 'maxPrice') updateHistogram();
});

// ===== TOAST =====
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}
