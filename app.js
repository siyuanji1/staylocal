// ===== DATA =====
const listings = [
  {
    id: 1, category: 'beach',
    title: 'Oceanfront Villa with Private Beach',
    location: 'Malibu, California', country: 'United States',
    host: 'Sarah M.', hostInitial: 'S',
    rating: 4.97, reviews: 312, price: 285,
    type: 'entire', beds: 4, baths: 3, guests: 8,
    badge: 'Guest favorite', badgeClass: 'badge-guest',
    amenityKeys: ['pool', 'wifi', 'kitchen', 'parking', 'ac'],
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
    location: 'Aspen, Colorado', country: 'United States',
    host: 'James W.', hostInitial: 'J',
    rating: 4.92, reviews: 189, price: 178,
    type: 'entire', beds: 2, baths: 1, guests: 4,
    badge: null,
    amenityKeys: ['wifi', 'kitchen', 'ac'],
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
    location: 'New York City, New York', country: 'United States',
    host: 'Priya K.', hostInitial: 'P',
    rating: 4.85, reviews: 428, price: 195,
    type: 'entire', beds: 1, baths: 1, guests: 2,
    badge: 'Guest favorite', badgeClass: 'badge-guest',
    amenityKeys: ['wifi', 'ac', 'kitchen', 'washer'],
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
    location: 'Gatlinburg, Tennessee', country: 'United States',
    host: 'Tom & Lisa H.', hostInitial: 'T',
    rating: 4.99, reviews: 276, price: 142,
    type: 'entire', beds: 3, baths: 2, guests: 6,
    badge: 'Guest favorite', badgeClass: 'badge-guest',
    amenityKeys: ['hotTub', 'wifi', 'kitchen', 'parking'],
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
    location: 'Lake Tahoe, California', country: 'United States',
    host: 'Maria C.', hostInitial: 'M',
    rating: 4.94, reviews: 203, price: 320,
    type: 'entire', beds: 5, baths: 3, guests: 10,
    badge: null,
    amenityKeys: ['wifi', 'kitchen', 'parking'],
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
    location: 'Santa Cruz, California', country: 'United States',
    host: 'Elena R.', hostInitial: 'E',
    rating: 4.98, reviews: 147, price: 225,
    type: 'entire', beds: 1, baths: 1, guests: 2,
    badge: 'New', badgeClass: 'badge-new',
    amenityKeys: ['wifi', 'kitchen'],
    images: [
      'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80',
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
    location: 'Sonoma County, California', country: 'United States',
    host: 'Robert & Anne P.', hostInitial: 'R',
    rating: 4.91, reviews: 88, price: 165,
    type: 'entire', beds: 4, baths: 2, guests: 8,
    badge: null,
    amenityKeys: ['wifi', 'kitchen', 'parking'],
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
    location: 'Scottsdale, Arizona', country: 'United States',
    host: 'Alex N.', hostInitial: 'A',
    rating: 4.96, reviews: 234, price: 395,
    type: 'entire', beds: 4, baths: 4, guests: 8,
    badge: 'Guest favorite', badgeClass: 'badge-guest',
    amenityKeys: ['pool', 'hotTub', 'ac', 'kitchen'],
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
    location: 'Miami, Florida', country: 'United States',
    host: 'Isabella F.', hostInitial: 'I',
    rating: 4.95, reviews: 178, price: 650,
    type: 'entire', beds: 3, baths: 3, guests: 6,
    badge: 'Luxury', badgeClass: 'badge-guest',
    amenityKeys: ['pool', 'ac', 'wifi', 'parking'],
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
    location: 'Florida Keys, Florida', country: 'United States',
    host: 'Captain Dave S.', hostInitial: 'D',
    rating: 5.0, reviews: 56, price: 890,
    type: 'entire', beds: 6, baths: 5, guests: 12,
    badge: 'Rare find', badgeClass: 'badge-guest',
    amenityKeys: ['kitchen'],
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
    location: 'Boston, Massachusetts', country: 'United States',
    host: 'Connor B.', hostInitial: 'C',
    rating: 4.88, reviews: 321, price: 210,
    type: 'entire', beds: 3, baths: 2, guests: 6,
    badge: null,
    amenityKeys: ['wifi', 'kitchen', 'ac', 'washer'],
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
    location: 'Banff, Alberta', country: 'Canada',
    host: 'Sophie L.', hostInitial: 'S',
    rating: 4.97, reviews: 134, price: 340,
    type: 'entire', beds: 3, baths: 2, guests: 6,
    badge: 'Guest favorite', badgeClass: 'badge-guest',
    amenityKeys: ['hotTub', 'wifi', 'kitchen'],
    images: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=600&q=80',
    ],
    amenities: ['🏔️ Mountain views', '🔥 Fireplace', '🛁 Hot tub', '🎿 Ski nearby', '📶 Wifi', '🍳 Kitchen'],
    description: 'Suspended in the Canadian Rockies, this architectural gem features three walls of floor-to-ceiling glass overlooking Banff National Park. Watch bears and elk from your living room, soak in the outdoor hot tub under the northern lights, and wake to alpenglow on the peaks.',
    dates: 'Dec 20 – 27',
  },
  {
    id: 13, category: 'beach',
    title: 'Surf Shack Steps from the Waves',
    location: 'Byron Bay, Australia', country: 'Australia',
    host: 'Kai H.', hostInitial: 'K',
    rating: 4.89, reviews: 203, price: 145,
    type: 'entire', beds: 2, baths: 1, guests: 4,
    badge: null,
    amenityKeys: ['wifi', 'parking'],
    images: [
      'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=600&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80',
    ],
    amenities: ['🏄 Surfboard included', '🌊 Beach access', '📶 Wifi', '🅿️ Parking', '🍹 Outdoor bar', '🐚 Shell collection'],
    description: 'Wake up to the sound of waves in this laid-back surf shack just 30 seconds from the beach. Grab a board and hit the legendary Byron Bay breaks, then rinse off and watch one of Australia\'s most spectacular sunsets from your private deck.',
    dates: 'Feb 1 – 7',
  },
  {
    id: 14, category: 'city',
    title: 'Rooftop Loft in Shoreditch',
    location: 'London, England', country: 'United Kingdom',
    host: 'Oliver T.', hostInitial: 'O',
    rating: 4.93, reviews: 445, price: 230,
    type: 'entire', beds: 2, baths: 1, guests: 4,
    badge: 'Guest favorite', badgeClass: 'badge-guest',
    amenityKeys: ['wifi', 'washer', 'kitchen'],
    images: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
      'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=600&q=80',
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=600&q=80',
    ],
    amenities: ['🏙️ Rooftop terrace', '📶 Fast Wifi', '🍳 Fully equipped kitchen', '👕 Washer', '🚇 Tube nearby', '🎨 Art gallery area'],
    description: 'An architect-designed loft in the heart of East London\'s coolest neighbourhood. Floor-to-ceiling industrial windows, exposed brick, and a private rooftop terrace overlooking the city skyline. Walk to Brick Lane, Columbia Road market, and dozens of legendary bars and restaurants.',
    dates: 'Mar 15 – 20',
  },
  {
    id: 15, category: 'luxury',
    title: 'Overwater Bungalow in Bora Bora',
    location: 'Bora Bora, French Polynesia', country: 'French Polynesia',
    host: 'Aroha T.', hostInitial: 'A',
    rating: 5.0, reviews: 89, price: 1200,
    type: 'entire', beds: 1, baths: 1, guests: 2,
    badge: 'Rare find', badgeClass: 'badge-guest',
    amenityKeys: ['ac', 'wifi'],
    images: [
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80',
      'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&q=80',
      'https://images.unsplash.com/photo-1586611292717-f828b167408c?w=600&q=80',
    ],
    amenities: ['🌊 Overwater deck', '🤿 Snorkeling ladder', '🌺 Daily breakfast', '❄️ AC', '📶 Wifi', '🍾 Welcome champagne'],
    description: 'Step directly from your bed into the turquoise lagoon of Bora Bora from this iconic overwater bungalow. With a glass floor panel to watch tropical fish swim beneath you, a private sundeck, and the most breathtaking views on Earth, this is the ultimate romantic escape.',
    dates: 'Jun 10 – 17',
  },
  {
    id: 16, category: 'cabin',
    title: 'Nordic Sauna Cabin in the Woods',
    location: 'Rovaniemi, Lapland', country: 'Finland',
    host: 'Matti V.', hostInitial: 'M',
    rating: 4.96, reviews: 112, price: 189,
    type: 'entire', beds: 2, baths: 1, guests: 4,
    badge: 'New',  badgeClass: 'badge-new',
    amenityKeys: ['wifi', 'parking'],
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
      'https://images.unsplash.com/photo-1445991842772-097fea258e7b?w=600&q=80',
      'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=600&q=80',
    ],
    amenities: ['🧖 Private sauna', '❄️ Snow activities', '🌌 Northern Lights', '📶 Wifi', '🍳 Kitchenette', '🎿 Ski nearby'],
    description: 'Experience the magic of Finnish Lapland in this traditional log cabin with a private wood-fired sauna. Hunt for the Northern Lights, go husky sledding, and maybe even spot Santa — this is his home territory. In summer, enjoy the midnight sun and excellent fly-fishing.',
    dates: 'Dec 26 – Jan 2',
  },
];

// ===== STATE =====
let activeCategory = 'all';
let likedCards = new Set();
let currentListing = null;
let guestCounts = { adults: 0, children: 0, infants: 0 };
let checkinDate = '';
let checkoutDate = '';

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderListings(listings);
  renderHistogram();
  document.addEventListener('click', handleOutsideClick);
  // Set today as min date for date inputs
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('checkinInput').min = today;
  document.getElementById('checkoutInput').min = today;
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
  grid.innerHTML = data.map(l => createCard(l)).join('');
}

function createCard(l) {
  const isLiked = likedCards.has(l.id);
  const dots = l.images.map((_, i) =>
    `<div class="dot ${i === 0 ? 'active' : ''}"></div>`
  ).join('');
  return `
    <div class="listing-card" onclick="openListing(${l.id})" id="card-${l.id}">
      <div class="card-image-wrap">
        ${l.badge ? `<div class="card-badge ${l.badgeClass || ''}">${l.badge}</div>` : ''}
        <img class="card-image" src="${l.images[0]}" alt="${l.title}" loading="lazy" id="img-${l.id}" />
        <button class="heart-btn ${isLiked ? 'liked' : ''}" onclick="toggleLike(event,${l.id})">${isLiked ? '❤️' : '🤍'}</button>
        <button class="carousel-btn prev" onclick="slideImage(event,${l.id},-1)">&#8249;</button>
        <button class="carousel-btn next" onclick="slideImage(event,${l.id},1)">&#8250;</button>
        <div class="image-dots" id="dots-${l.id}">${dots}</div>
      </div>
      <div class="card-info">
        <div class="card-header">
          <div class="card-title">${l.title}</div>
          <div class="card-rating"><span class="star-icon">★</span>${l.rating}</div>
        </div>
        <div class="card-subtitle">${l.location}</div>
        <div class="card-dates">${l.dates}</div>
        <div class="card-price"><span class="price-amount">$${l.price}</span><span class="price-unit"> night</span></div>
      </div>
    </div>
  `;
}

// ===== IMAGE CAROUSEL =====
const cardImageIndex = {};

function slideImage(e, id, dir) {
  e.stopPropagation();
  const listing = listings.find(l => l.id === id);
  if (!listing) return;
  if (!(id in cardImageIndex)) cardImageIndex[id] = 0;
  const count = listing.images.length;
  cardImageIndex[id] = (cardImageIndex[id] + dir + count) % count;
  const idx = cardImageIndex[id];

  const img = document.getElementById(`img-${id}`);
  const dotsEl = document.getElementById(`dots-${id}`);
  if (img) img.src = listing.images[idx];
  if (dotsEl) {
    dotsEl.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === idx));
  }
}

// ===== CATEGORY FILTER =====
function filterCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll('.category').forEach(el => el.classList.remove('active'));
  const catMap = ['all','beach','mountain','city','cabin','lake','farm','treehouse','pool','luxury','island'];
  const idx = catMap.indexOf(cat);
  const cats = document.querySelectorAll('.category');
  if (idx >= 0 && cats[idx]) cats[idx].classList.add('active');
  applySortAndFilter();
}

// ===== SORT & FILTER COMBINED =====
function applySortAndFilter() {
  const sortVal = document.getElementById('sortSelect')?.value || 'default';
  let data = activeCategory === 'all' ? [...listings] : listings.filter(l => l.category === activeCategory);

  if (sortVal === 'price-asc') data.sort((a, b) => a.price - b.price);
  else if (sortVal === 'price-desc') data.sort((a, b) => b.price - a.price);
  else if (sortVal === 'rating') data.sort((a, b) => b.rating - a.rating);

  renderListings(data);
}

// ===== LIKE / WISHLIST =====
function toggleLike(e, id) {
  e.stopPropagation();
  if (likedCards.has(id)) {
    likedCards.delete(id);
    showToast('Removed from wishlist');
  } else {
    likedCards.add(id);
    showToast('Saved to wishlist ❤️');
  }
  const btn = e.currentTarget;
  const isLiked = likedCards.has(id);
  btn.innerHTML = isLiked ? '❤️' : '🤍';
  btn.classList.toggle('liked', isLiked);
}

function openWishlist() {
  const body = document.getElementById('wishlistBody');
  const saved = listings.filter(l => likedCards.has(l.id));
  if (saved.length === 0) {
    body.innerHTML = '<div class="wp-empty"><div class="wp-empty-icon">🤍</div><p>No saved listings yet.<br>Tap the heart on any listing to save it.</p></div>';
  } else {
    body.innerHTML = saved.map(l => `
      <div class="wp-item" onclick="openListing(${l.id}); closeWishlist()">
        <img src="${l.images[0]}" alt="${l.title}" />
        <div class="wp-info">
          <div class="wp-title">${l.title}</div>
          <div class="wp-loc">${l.location}</div>
          <div class="wp-price">$${l.price} / night</div>
        </div>
        <button class="wp-remove" onclick="event.stopPropagation();removeSaved(${l.id})">✕</button>
      </div>
    `).join('');
  }
  document.getElementById('wishlistOverlay').classList.add('open');
  document.getElementById('wishlistPanel').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function removeSaved(id) {
  likedCards.delete(id);
  // Update card heart button if visible
  const btn = document.querySelector(`#card-${id} .heart-btn`);
  if (btn) { btn.innerHTML = '🤍'; btn.classList.remove('liked'); }
  openWishlist(); // refresh panel
}

function closeWishlist() {
  document.getElementById('wishlistOverlay').classList.remove('open');
  document.getElementById('wishlistPanel').classList.remove('open');
  document.body.style.overflow = '';
}

// ===== OPEN LISTING MODAL =====
function openListing(id) {
  const l = listings.find(x => x.id === id);
  if (!l) return;
  currentListing = l;

  const imagesHtml = l.images.slice(0, 3).map(src => `<img src="${src}" alt="${l.title}" loading="lazy" />`).join('');
  const amenitiesHtml = l.amenities.map(a => {
    const [icon, ...rest] = a.split(' ');
    return `<div class="amenity-item"><span class="icon">${icon}</span><span>${rest.join(' ')}</span></div>`;
  }).join('');

  // Build price breakdown if dates are set
  let priceSection = '';
  if (checkinDate && checkoutDate) {
    const d1 = new Date(checkinDate), d2 = new Date(checkoutDate);
    const nights = Math.max(1, Math.round((d2 - d1) / 86400000));
    const subtotal = l.price * nights;
    const fee = Math.round(subtotal * 0.14);
    const total = subtotal + fee;
    priceSection = `
      <div class="modal-divider"></div>
      <div class="modal-price-breakdown">
        <h3>Price breakdown</h3>
        <div class="mpb-row"><span>$${l.price} × ${nights} night${nights !== 1 ? 's' : ''}</span><span>$${subtotal}</span></div>
        <div class="mpb-row"><span>StayLocal service fee</span><span>$${fee}</span></div>
        <div class="mpb-row total"><span>Total</span><span>$${total}</span></div>
      </div>`;
  }

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
      ${priceSection}
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
  if (!currentListing) return;
  currentBookingListing = currentListing;
  closeModal();

  const today = new Date().toISOString().split('T')[0];
  const bpCheckin = document.getElementById('bpCheckin');
  const bpCheckout = document.getElementById('bpCheckout');
  bpCheckin.min = today;
  bpCheckin.value = checkinDate || '';
  bpCheckout.min = checkinDate || today;
  bpCheckout.value = checkoutDate || '';

  stayGuestCount = Math.max(1, guestCounts.adults + guestCounts.children) || 2;
  document.getElementById('bpGuestCount').textContent = stayGuestCount;

  const l = currentBookingListing;
  document.getElementById('bpListingInfo').innerHTML = `
    <div style="display:flex;gap:14px;align-items:center;margin-bottom:16px;padding:12px;background:#f7f7f7;border-radius:12px">
      <img src="${l.images[0]}" style="width:64px;height:64px;border-radius:10px;object-fit:cover;flex-shrink:0" />
      <div>
        <div style="font-weight:600;font-size:14px;margin-bottom:2px">${l.title}</div>
        <div style="color:#717171;font-size:13px;margin-bottom:4px">${l.location}</div>
        <div style="font-weight:700;font-size:14px;color:#FF385C">$${l.price} / night</div>
      </div>
    </div>`;

  updateStayPriceBreakdown();
  document.getElementById('bpOverlay').classList.add('open');
  document.getElementById('bookingPanel').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeStayBooking() {
  document.getElementById('bpOverlay').classList.remove('open');
  document.getElementById('bookingPanel').classList.remove('open');
  document.body.style.overflow = '';
}

function changeStayGuests(delta) {
  stayGuestCount = Math.max(1, stayGuestCount + delta);
  document.getElementById('bpGuestCount').textContent = stayGuestCount;
}

function updateStayPriceBreakdown() {
  const l = currentBookingListing;
  if (!l) return;
  const cin = document.getElementById('bpCheckin').value;
  const cout = document.getElementById('bpCheckout').value;
  const el = document.getElementById('bpPriceBreakdown');
  if (cin && cout && cout > cin) {
    const nights = Math.max(1, Math.round((new Date(cout) - new Date(cin)) / 86400000));
    const subtotal = l.price * nights;
    const fee = Math.round(subtotal * 0.14);
    const total = subtotal + fee;
    el.innerHTML = `
      <div style="border-top:1px solid #e0e0e0;padding-top:16px;margin-top:4px">
        <div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:15px"><span>$${l.price} × ${nights} night${nights !== 1 ? 's' : ''}</span><span>$${subtotal}</span></div>
        <div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:15px"><span>StayLocal service fee</span><span>$${fee}</span></div>
        <div style="display:flex;justify-content:space-between;font-weight:700;font-size:16px;border-top:1px solid #e0e0e0;padding-top:12px;margin-top:8px"><span>Total</span><span>$${total}</span></div>
      </div>`;
  } else {
    el.innerHTML = '';
  }
}

function confirmStayBooking() {
  const cin = document.getElementById('bpCheckin').value;
  const cout = document.getElementById('bpCheckout').value;
  if (!cin || !cout) { showToast('Please select check-in and check-out dates'); return; }
  if (cout <= cin) { showToast('Check-out must be after check-in'); return; }
  closeStayBooking();
  showGuideRecommendations(currentBookingListing);
}

// ===== GUIDE RECOMMENDATIONS =====
const recommendedGuides = [
  { id: 1, name: 'Maria Chen', category: 'food', categoryLabel: 'Food & Drink', emoji: '🍜',
    location: 'San Francisco, CA', locationKeys: ['california', 'san francisco', 'santa cruz', 'malibu', 'tahoe', 'sonoma', 'los angeles'],
    rating: 4.98, reviewCount: 214, price: 65,
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80',
    cover: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80' },
  { id: 2, name: 'Alex Rivera', category: 'nature', categoryLabel: 'Nature & Hiking', emoji: '🥾',
    location: 'Denver, CO', locationKeys: ['colorado', 'aspen', 'denver', 'rockies', 'banff', 'alberta', 'mountain'],
    rating: 4.95, reviewCount: 178, price: 75,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    cover: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80' },
  { id: 3, name: 'Amara Johnson', category: 'culture', categoryLabel: 'Culture & History', emoji: '🏛️',
    location: 'New Orleans, LA', locationKeys: ['new orleans', 'louisiana', 'nola', 'boston', 'massachusetts'],
    rating: 4.99, reviewCount: 302, price: 55,
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80',
    cover: 'https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=600&q=80' },
  { id: 5, name: 'Isabella Vega', category: 'nightlife', categoryLabel: 'Nightlife', emoji: '🎶',
    location: 'Miami, FL', locationKeys: ['miami', 'florida', 'keys', 'florida keys'],
    rating: 4.91, reviewCount: 267, price: 70,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
    cover: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80' },
  { id: 6, name: 'Jake Morrison', category: 'adventure', categoryLabel: 'Adventure', emoji: '🧗',
    location: 'Austin, TX', locationKeys: ['texas', 'austin'],
    rating: 4.96, reviewCount: 189, price: 80,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    cover: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=600&q=80' },
  { id: 7, name: 'Chloe Dubois', category: 'art', categoryLabel: 'Art & Craft', emoji: '🎨',
    location: 'Nashville, TN', locationKeys: ['nashville', 'tennessee', 'gatlinburg'],
    rating: 4.89, reviewCount: 112, price: 60,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    cover: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80' },
  { id: 8, name: 'Leila Patel', category: 'wellness', categoryLabel: 'Wellness', emoji: '🧘',
    location: 'Sedona, AZ', locationKeys: ['arizona', 'sedona', 'scottsdale'],
    rating: 5.0, reviewCount: 97, price: 90,
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&q=80',
    cover: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80' },
];

function getRecommendedGuides(location) {
  const loc = location.toLowerCase();
  const matched = recommendedGuides.filter(g => g.locationKeys.some(k => loc.includes(k)));
  if (matched.length >= 2) return matched.slice(0, 3);
  // Fallback: top-rated guides as general recommendation
  return [...recommendedGuides].sort((a, b) => b.rating - a.rating).slice(0, 3);
}

function showGuideRecommendations(listing) {
  const guides = getRecommendedGuides(listing.location);
  const city = listing.location.split(',')[0];

  document.getElementById('guideRecMsg').textContent =
    `Your stay at "${listing.title}" is confirmed. Your host will respond within 24 hours.`;
  document.getElementById('guideRecTitle').textContent = `Explore ${city} with a local guide`;

  document.getElementById('guideRecCards').innerHTML = guides.map(g => `
    <div class="guide-rec-card">
      <img class="guide-rec-card-img" src="${g.cover}" alt="${g.name}" loading="lazy" />
      <div class="guide-rec-card-body">
        <div class="guide-rec-card-name">${g.name}</div>
        <div class="guide-rec-card-cat">${g.emoji} ${g.categoryLabel}</div>
        <div class="guide-rec-card-rating">★ ${g.rating} <span style="color:#717171;font-weight:400">(${g.reviewCount})</span></div>
        <div class="guide-rec-card-price">From $${g.price}/hr</div>
        <div class="guide-rec-card-btns">
          <button class="guide-rec-chat-btn" onclick="openStaysChat(${g.id})">💬 Chat</button>
          <a href="index.html" class="guide-rec-view-btn">View</a>
        </div>
      </div>
    </div>`).join('');

  document.getElementById('guideRecOverlay').classList.add('open');
  document.getElementById('guideRecModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeGuideRec() {
  document.getElementById('guideRecOverlay').classList.remove('open');
  document.getElementById('guideRecModal').classList.remove('open');
  document.body.style.overflow = '';
}

// ===== STAYS PAGE CHAT WITH GUIDES =====
const staysChatHistory = {};
let activeStaysGuide = null;
let stayGuestCount = 2;
let currentBookingListing = null;

const staysGuideReplies = {
  food: ["Hey there! 👋 I know every hidden gem here — from secret noodle spots to amazing local markets. What kind of food are you into?", "I'd love to take you on a real local food adventure! Any dietary restrictions I should know about?", "Great timing! I just discovered an amazing new spot. What's your food vibe — street food, fine dining, or somewhere in between?"],
  nature: ["Hi! 🏔️ I'd love to take you exploring — the secret trails here are absolutely breathtaking. What's your fitness level?", "Welcome! Are you more into peaceful hikes or something more challenging? I've got options for every level.", "Perfect! The best time to hike is early morning. Want me to plan a sunrise trail for you?"],
  culture: ["Hi! There's so much history here that most visitors never see. What are you most curious about?", "I'd love to share this city's soul with you. Are you into history, architecture, art, or all of the above?", "Every street here has an incredible story. I'd love to be your personal storyteller!"],
  nightlife: ["Hey! 🌙 I know all the best spots — the ones locals actually go to. Are you into clubs, rooftop bars, or something more intimate?", "I can get you into places where you'd normally wait hours. What kind of night are you looking for?", "Great timing! I know about a special event happening this week. What's your nightlife vibe?"],
  adventure: ["Hey, adventurer! 🧗 Are you more into climbing, kayaking, or something underground? I've got wild options for every thrill level.", "Love it! What's your experience level? I guide beginners and pros alike — safety always first.", "The conditions are perfect right now. Want to start with something epic or ease into it?"],
  art: ["Hey! 🎨 The local art scene here is incredible. Want to visit working studios, or do a hands-on workshop?", "Ooh exciting! Are you more into watching art being made, or would you like to create something yourself?", "I know some amazing local artists who'd love to show you their studios. Interested?"],
  wellness: ["Welcome! 🧘 This place has such powerful energy. Are you drawn more to yoga, meditation, or nature healing?", "I'm so glad you reached out. What are you hoping to find — relaxation, clarity, or a deeper experience?", "The sunrise sessions here are truly magical. Want me to plan something special for your stay?"],
};

const staysGeneralReplies = [
  "Great question! I love personalizing every experience. Tell me more about what excites you!",
  "Absolutely! I can tailor everything to exactly what you're looking for.",
  "I typically spend 2–4 hours with guests, but we can adjust to fit your schedule.",
  "No experience needed — I'll guide you every step of the way!",
  "Comfortable shoes and curiosity are all you need. I take care of everything else.",
  "I've helped travelers with all kinds of special requests — I'm very flexible!",
  "Yes! Everything is fully customizable. What matters most to you?",
];

function openStaysChat(guideId) {
  const guide = recommendedGuides.find(g => g.id === guideId);
  if (!guide) return;
  activeStaysGuide = guide;

  // Slide guide rec modal out, bring in chat
  document.getElementById('guideRecModal').style.transform = 'translate(-50%,-50%) scale(0.92)';
  document.getElementById('guideRecModal').style.opacity = '0';
  setTimeout(() => {
    document.getElementById('guideRecModal').classList.remove('open');
    document.getElementById('guideRecModal').style.transform = '';
    document.getElementById('guideRecModal').style.opacity = '';
  }, 200);

  document.getElementById('chatAvatar').src = guide.avatar;
  document.getElementById('chatGuideName').textContent = guide.name;

  if (!staysChatHistory[guideId]) {
    const replies = staysGuideReplies[guide.category] || staysGuideReplies.culture;
    staysChatHistory[guideId] = [{ from: 'guide', text: replies[0], time: new Date() }];
  }

  renderStaysChatMessages(guideId);
  renderStaysSuggestions();
  document.getElementById('chatOverlay').classList.add('open');
  document.getElementById('chatPanel').classList.add('open');
}

function closeStaysChat() {
  document.getElementById('chatOverlay').classList.remove('open');
  document.getElementById('chatPanel').classList.remove('open');
  // Reopen guide rec modal
  document.getElementById('guideRecOverlay').classList.add('open');
  document.getElementById('guideRecModal').classList.add('open');
}

function renderStaysChatMessages(guideId) {
  const msgs = staysChatHistory[guideId] || [];
  const container = document.getElementById('chatMessages');
  container.innerHTML = msgs.map(m => `
    <div class="chat-msg ${m.from === 'guide' ? 'guide-msg' : 'user-msg'}">
      <div class="cm-bubble ${m.from === 'guide' ? 'guide-bubble' : 'user-bubble'}">${m.text}</div>
    </div>`).join('');
  container.scrollTop = container.scrollHeight;
}

const staysQuickSuggestions = ["What's included?", "Can you customize the tour?", "Is this good for beginners?", "How long does it last?", "What should I bring?"];

function renderStaysSuggestions() {
  document.getElementById('chatSuggestions').innerHTML = staysQuickSuggestions
    .map(s => `<button class="suggestion-chip" onclick="sendStaysQuick('${s}')">${s}</button>`)
    .join('');
}

function sendStaysQuick(text) {
  document.getElementById('chatInput').value = text;
  sendStaysMessage();
}

function sendStaysMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text || !activeStaysGuide) return;
  input.value = '';

  const guideId = activeStaysGuide.id;
  staysChatHistory[guideId].push({ from: 'user', text, time: new Date() });
  renderStaysChatMessages(guideId);
  document.getElementById('chatSuggestions').innerHTML = '';

  // Typing indicator
  const container = document.getElementById('chatMessages');
  const typingDiv = document.createElement('div');
  typingDiv.className = 'chat-msg guide-msg';
  typingDiv.id = 'staysTypingIndicator';
  typingDiv.innerHTML = '<div class="cm-bubble guide-bubble typing-bubble"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>';
  container.appendChild(typingDiv);
  container.scrollTop = container.scrollHeight;

  const catReplies = staysGuideReplies[activeStaysGuide.category] || staysGuideReplies.culture;
  const allReplies = [...catReplies, ...staysGeneralReplies];
  const reply = allReplies[Math.floor(Math.random() * allReplies.length)];

  setTimeout(() => {
    const typing = document.getElementById('staysTypingIndicator');
    if (typing) typing.remove();
    staysChatHistory[guideId].push({ from: 'guide', text: reply, time: new Date() });
    renderStaysChatMessages(guideId);
  }, 1000 + Math.random() * 800);
}

// Update price breakdown when dates change in booking panel
document.addEventListener('change', e => {
  if (e.target.id === 'bpCheckin' || e.target.id === 'bpCheckout') updateStayPriceBreakdown();
});

// ===== SEARCH =====
function focusWhere(e) {
  document.getElementById('whereInput').focus();
}

function handleSearch() {
  const query = document.getElementById('whereInput').value.toLowerCase().trim();
  let data = activeCategory === 'all' ? [...listings] : listings.filter(l => l.category === activeCategory);
  if (query) {
    data = data.filter(l =>
      l.title.toLowerCase().includes(query) ||
      l.location.toLowerCase().includes(query) ||
      l.country.toLowerCase().includes(query) ||
      l.category.toLowerCase().includes(query)
    );
  }
  // Apply sort
  const sortVal = document.getElementById('sortSelect')?.value || 'default';
  if (sortVal === 'price-asc') data.sort((a, b) => a.price - b.price);
  else if (sortVal === 'price-desc') data.sort((a, b) => b.price - a.price);
  else if (sortVal === 'rating') data.sort((a, b) => b.rating - a.rating);

  renderListings(data);
  if (query) showToast(`Searching for "${document.getElementById('whereInput').value}"`);
}

// ===== DATE PICKER =====
function openDatePicker(type, e) {
  e.stopPropagation();
  const input = document.getElementById(type === 'checkin' ? 'checkinInput' : 'checkoutInput');
  if (input.showPicker) {
    input.showPicker();
  } else {
    input.click();
  }
}

function setCheckin(val) {
  checkinDate = val;
  const d = new Date(val + 'T00:00:00');
  document.getElementById('checkinValue').textContent = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  // Auto-advance checkout min date
  const checkoutInput = document.getElementById('checkoutInput');
  checkoutInput.min = val;
  if (checkoutDate && checkoutDate <= val) {
    checkoutDate = '';
    document.getElementById('checkoutValue').textContent = 'Add dates';
    checkoutInput.value = '';
  }
}

function setCheckout(val) {
  checkoutDate = val;
  const d = new Date(val + 'T00:00:00');
  document.getElementById('checkoutValue').textContent = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

// ===== GUEST PICKER =====
function toggleGuestPicker(e) {
  e.stopPropagation();
  const picker = document.getElementById('guestPicker');
  const seg = document.getElementById('guestSeg');
  const rect = seg.getBoundingClientRect();
  picker.style.top = (rect.bottom + 8) + 'px';
  picker.style.right = (window.innerWidth - rect.right) + 'px';
  picker.classList.toggle('open');
}

function changePickerGuests(type, delta) {
  guestCounts[type] = Math.max(0, guestCounts[type] + delta);
  document.getElementById('gp' + type.charAt(0).toUpperCase() + type.slice(1)).textContent = guestCounts[type];
  updateGuestDisplay();
}

function updateGuestDisplay() {
  const total = guestCounts.adults + guestCounts.children;
  const infants = guestCounts.infants;
  let text = '';
  if (total === 0 && infants === 0) { text = 'Add guests'; }
  else {
    text = total > 0 ? `${total} guest${total !== 1 ? 's' : ''}` : '';
    if (infants > 0) text += (text ? ', ' : '') + `${infants} infant${infants !== 1 ? 's' : ''}`;
  }
  document.getElementById('guestsValue').textContent = text || 'Add guests';
}

function closeGuestPicker() {
  document.getElementById('guestPicker').classList.remove('open');
}

// ===== USER MENU =====
function toggleUserMenu() {
  document.getElementById('userDropdown').classList.toggle('open');
}

function handleOutsideClick(e) {
  // Close user dropdown
  const menu = document.querySelector('.user-menu');
  const dropdown = document.getElementById('userDropdown');
  if (dropdown?.classList.contains('open') && !menu?.contains(e.target)) {
    dropdown.classList.remove('open');
  }
  // Close guest picker
  const picker = document.getElementById('guestPicker');
  const guestSeg = document.getElementById('guestSeg');
  if (picker?.classList.contains('open') && !guestSeg?.contains(e.target) && !picker.contains(e.target)) {
    picker.classList.remove('open');
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
  document.getElementById('maxPrice').value = 1000;
  document.querySelectorAll('[name="placeType"]')[0].checked = true;
  document.querySelectorAll('.amenities-grid input').forEach(cb => cb.checked = false);
  updateHistogram();
}

function applyFilters() {
  const min = parseInt(document.getElementById('minPrice').value) || 0;
  const max = parseInt(document.getElementById('maxPrice').value) || 9999;
  const placeType = document.querySelector('[name="placeType"]:checked')?.value || 'any';
  const checkedAmenities = [...document.querySelectorAll('.amenities-grid input:checked')].map(cb => cb.value);

  const amenityMap = {
    wifi: 'wifi', kitchen: 'kitchen', washer: 'washer',
    parking: 'parking', ac: 'ac', pool: 'pool', hotTub: 'hotTub'
  };

  let filtered = activeCategory === 'all' ? [...listings] : listings.filter(l => l.category === activeCategory);
  filtered = filtered.filter(l => l.price >= min && l.price <= max);
  if (placeType !== 'any') filtered = filtered.filter(l => l.type === placeType);
  if (checkedAmenities.length > 0) {
    filtered = filtered.filter(l =>
      checkedAmenities.every(a => l.amenityKeys && l.amenityKeys.includes(a))
    );
  }

  // Apply current sort
  const sortVal = document.getElementById('sortSelect')?.value || 'default';
  if (sortVal === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  else if (sortVal === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  else if (sortVal === 'rating') filtered.sort((a, b) => b.rating - a.rating);

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
  // Update max price input to match data
  document.getElementById('maxPrice').value = max;
  updateHistogram();
}

function updateHistogram() {
  const minVal = parseInt(document.getElementById('minPrice').value) || 0;
  const maxVal = parseInt(document.getElementById('maxPrice').value) || 1200;
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
