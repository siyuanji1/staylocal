// ===== GUIDE DATA =====
const guides = [
  {
    id: 1, category: 'food',
    name: 'Maria Chen',
    location: 'San Francisco, CA',
    rating: 4.98, reviewCount: 214,
    price: 65,
    priceUnit: 'per person / hr',
    available: true,
    tags: ['Street Food', 'Dim Sum', 'Night Markets', 'Chinatown'],
    bio: 'Born and raised in SF\'s Chinatown, I\'ve spent 30 years discovering every hidden noodle shop, bakery, and dumpling spot this city has to offer. I\'ll take you beyond the tourist trail to places only locals know.',
    cover: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&q=80',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80',
    languages: ['English', 'Mandarin', 'Cantonese'],
    responseTime: '~30 min',
    experiences: [
      { icon: '🥟', title: 'Chinatown Dim Sum Walk', desc: '3-hour deep dive into the best dim sum spots, from century-old teahouses to hidden basement joints.' },
      { icon: '🌙', title: 'Night Market Crawl', desc: 'Experience SF\'s vibrant night food scene with tastings at 8+ vendors.' },
      { icon: '🫖', title: 'Tea Ceremony & History', desc: 'Learn about traditional tea culture while tasting rare oolongs in a historic tea house.' },
    ],
    reviews: [
      { name: 'Jake T.', initials: 'JT', date: 'September 2025', stars: 5, text: 'Maria is an absolute treasure. She took us to places we never would\'ve found on our own. The soup dumplings at her secret spot were life-changing!' },
      { name: 'Priya S.', initials: 'PS', date: 'August 2025', stars: 5, text: 'Best experience of our entire SF trip. Maria\'s passion for food is infectious and her knowledge is unreal.' },
      { name: 'Tom & Emily', initials: 'TE', date: 'July 2025', stars: 5, text: 'We ate SO much incredible food. Maria paced it perfectly and the stories behind each place made it so special.' },
    ],
  },
  {
    id: 2, category: 'nature',
    name: 'Alex Rivera',
    location: 'Denver, CO',
    rating: 4.95, reviewCount: 178,
    price: 75,
    priceUnit: 'per person / hr',
    available: true,
    tags: ['Hiking', 'Wildlife', 'Rockies', 'Photography'],
    bio: 'Certified wilderness guide and outdoor educator with 12 years exploring Colorado\'s backcountry. I know secret trails, hidden waterfalls, and the best spots to see elk, moose, and eagles.',
    cover: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=80',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    languages: ['English', 'Spanish'],
    responseTime: '~1 hour',
    experiences: [
      { icon: '🦌', title: 'Dawn Wildlife Safari', desc: 'Early morning hike to catch deer, elk, and eagles in their natural habitat at golden hour.' },
      { icon: '🏔️', title: 'Rocky Mountain Summit', desc: 'Guided ascent to a 14er with breathtaking 360° views and lessons on alpine geology.' },
      { icon: '📸', title: 'Landscape Photography Trek', desc: 'Find perfect compositions at hidden viewpoints most visitors never see.' },
    ],
    reviews: [
      { name: 'Casey M.', initials: 'CM', date: 'October 2025', stars: 5, text: 'Alex is knowledgeable, funny, and incredibly safe. We saw a family of elk and a golden eagle on one hike — unbelievable!' },
      { name: 'Yuki T.', initials: 'YT', date: 'September 2025', stars: 5, text: 'The secret waterfall hike blew our minds. Alex knew exactly where to go to avoid the crowds.' },
    ],
  },
  {
    id: 3, category: 'culture',
    name: 'Amara Johnson',
    location: 'New Orleans, LA',
    rating: 4.99, reviewCount: 302,
    price: 55,
    priceUnit: 'per person / hr',
    available: true,
    tags: ['Jazz', 'History', 'Voodoo', 'Architecture'],
    bio: 'Seventh-generation New Orleanian, jazz musician, and cultural historian. Let me show you the real soul of NOLA — the music, the magic, the history, and the incredible stories behind every corner of the French Quarter.',
    cover: 'https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=700&q=80',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80',
    languages: ['English', 'French', 'Creole'],
    responseTime: '~15 min',
    experiences: [
      { icon: '🎺', title: 'Jazz & History Walk', desc: 'Follow the footsteps of jazz legends through the French Quarter with live music at hidden clubs.' },
      { icon: '👻', title: 'Haunted History Tour', desc: 'Uncover the dark, mysterious history of New Orleans\' most legendary haunted spots.' },
      { icon: '🏛️', title: 'Architecture & Culture', desc: 'Explore stunning Creole townhouses and learn the stories of the people who built this city.' },
    ],
    reviews: [
      { name: 'Brian C.', initials: 'BC', date: 'November 2025', stars: 5, text: 'Amara is a born storyteller. We learned more about NOLA in 4 hours than we could in a week on our own. Absolutely magical.' },
      { name: 'Sophie L.', initials: 'SL', date: 'October 2025', stars: 5, text: 'She even played a jazz improvisation for us on the street. One of the most memorable experiences of my life.' },
    ],
  },
  {
    id: 4, category: 'photo',
    name: 'Kenji Watanabe',
    location: 'Portland, OR',
    rating: 4.93, reviewCount: 145,
    price: 85,
    priceUnit: 'per person / hr',
    available: false,
    tags: ['Street Photography', 'Portraits', 'Golden Hour', 'Urban'],
    bio: 'Published photographer and Portland native. I know every alley, mural, and rooftop that makes for the perfect shot. Whether you\'re a beginner or pro, I\'ll help you capture Portland\'s soul on camera.',
    cover: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=700&q=80',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    languages: ['English', 'Japanese'],
    responseTime: '~2 hours',
    experiences: [
      { icon: '🌅', title: 'Golden Hour Shoot', desc: 'Capture Portland\'s iconic skyline and bridges in the magical light of sunset.' },
      { icon: '🎨', title: 'Street Art & Murals Walk', desc: 'Discover Portland\'s incredible mural scene with photography tips at each location.' },
      { icon: '🖼️', title: 'Portrait Session', desc: 'Professional portrait shoot at Portland\'s most photogenic hidden locations.' },
    ],
    reviews: [
      { name: 'Mia R.', initials: 'MR', date: 'August 2025', stars: 5, text: 'Kenji\'s eye for detail is extraordinary. The photos from our session are some of my favorite I\'ve ever taken.' },
      { name: 'David K.', initials: 'DK', date: 'July 2025', stars: 4, text: 'Great spots, great tips. Kenji is patient and really understands photography composition.' },
    ],
  },
  {
    id: 5, category: 'nightlife',
    name: 'Isabella Vega',
    location: 'Miami, FL',
    rating: 4.91, reviewCount: 267,
    price: 70,
    priceUnit: 'per person / hr',
    available: true,
    tags: ['Rooftop Bars', 'Latin Clubs', 'Wine Bars', 'VIP Access'],
    bio: 'Miami nightlife consultant and DJ with 10 years connecting people with the city\'s best after-dark experiences. I have the hookups — skip the lines, get the best tables, and experience Miami like an insider.',
    cover: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=700&q=80',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
    languages: ['English', 'Spanish', 'Portuguese'],
    responseTime: '~45 min',
    experiences: [
      { icon: '🌴', title: 'Rooftop Bar Hop', desc: 'Hit 4 of Miami\'s most spectacular rooftop bars with skyline and ocean views.' },
      { icon: '💃', title: 'Latin Night Tour', desc: 'Experience authentic salsa, bachata, and reggaeton at clubs locals actually go to.' },
      { icon: '🍷', title: 'Wine & Cocktail Tasting', desc: 'Curated tour of Miami\'s hidden wine bars and craft cocktail speakeasies.' },
    ],
    reviews: [
      { name: 'Rachel N.', initials: 'RN', date: 'December 2025', stars: 5, text: 'Isabella got us into the hottest club in Miami without waiting in a single line. She knows EVERYONE. Best night out ever!' },
      { name: 'Marco F.', initials: 'MF', date: 'November 2025', stars: 5, text: 'I\'ve lived in Miami 2 years and Bella showed me places I\'d never been. Absolutely elite guide.' },
    ],
  },
  {
    id: 6, category: 'adventure',
    name: 'Jake Morrison',
    location: 'Austin, TX',
    rating: 4.96, reviewCount: 189,
    price: 80,
    priceUnit: 'per person / hr',
    available: true,
    tags: ['Rock Climbing', 'Kayaking', 'Zip-lining', 'Caving'],
    bio: 'Adventure sports instructor and adrenaline junkie. From climbing limestone cliffs to kayaking hidden waterways, I\'ll push your limits safely and show you Texas\' wild side. All skill levels welcome!',
    cover: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=700&q=80',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    languages: ['English'],
    responseTime: '~1 hour',
    experiences: [
      { icon: '🧗', title: 'Rock Climbing Adventure', desc: 'Beginner-friendly climb on Austin\'s limestone bluffs with gorgeous Hill Country views.' },
      { icon: '🚣', title: 'Hidden Waterway Kayak', desc: 'Paddle through secret creeks and swimming holes only locals know about.' },
      { icon: '🕳️', title: 'Cave Exploration', desc: 'Explore a real underground cave system with headlamps and expert guidance.' },
    ],
    reviews: [
      { name: 'Sam W.', initials: 'SW', date: 'October 2025', stars: 5, text: 'Jake is an incredible guide — safe, experienced, and so much fun. The cave tour was like nothing I\'ve ever done!' },
      { name: 'Olivia P.', initials: 'OP', date: 'September 2025', stars: 5, text: 'I\'m not usually adventurous but Jake made me feel completely at ease. That kayak trip was the highlight of my trip to Austin.' },
    ],
  },
  {
    id: 7, category: 'art',
    name: 'Chloe Dubois',
    location: 'Nashville, TN',
    rating: 4.89, reviewCount: 112,
    price: 60,
    priceUnit: 'per person / hr',
    available: true,
    tags: ['Painting', 'Pottery', 'Local Art Scene', 'Studios'],
    bio: 'Working artist and gallery curator with deep roots in Nashville\'s creative community. I\'ll take you behind the scenes of working studios, introduce you to local artists, and maybe even get your hands dirty.',
    cover: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=700&q=80',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    languages: ['English', 'French'],
    responseTime: '~3 hours',
    experiences: [
      { icon: '🎨', title: 'Studio Art Workshop', desc: 'Hands-on painting session with a working Nashville artist — no experience needed!' },
      { icon: '🏺', title: 'Pottery Throwing Class', desc: 'Learn to throw clay on a wheel at a hidden pottery studio with a master ceramicist.' },
      { icon: '🖼️', title: 'Gallery & Art Walk', desc: 'Explore Nashville\'s thriving indie art scene with curated gallery visits and artist meet-and-greets.' },
    ],
    reviews: [
      { name: 'Nina A.', initials: 'NA', date: 'September 2025', stars: 5, text: 'Chloe connected us with an amazing local painter and we each made our own small artwork. Such a unique souvenir!' },
      { name: 'James O.', initials: 'JO', date: 'August 2025', stars: 4, text: 'Really well organized, great energy. The pottery class was hilarious fun — very "Ghost" moment!' },
    ],
  },
  {
    id: 8, category: 'wellness',
    name: 'Leila Patel',
    location: 'Sedona, AZ',
    rating: 5.0, reviewCount: 97,
    price: 90,
    priceUnit: 'per person / hr',
    available: true,
    tags: ['Meditation', 'Yoga', 'Crystal Healing', 'Vortex Tours'],
    bio: 'Certified yoga teacher, meditation guide, and Sedona spiritual guide with 15 years of practice. Let me show you Sedona\'s famous energy vortexes, sacred sites, and teach you practices to transform your mind and body.',
    cover: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&q=80',
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&q=80',
    languages: ['English', 'Hindi', 'Sanskrit'],
    responseTime: '~2 hours',
    experiences: [
      { icon: '🧘', title: 'Vortex Meditation Journey', desc: 'Visit 3 of Sedona\'s most powerful energy vortexes with guided meditation at each site.' },
      { icon: '🌄', title: 'Sunrise Yoga in Nature', desc: 'Outdoor yoga session at a sacred red rock formation as the sun rises over the desert.' },
      { icon: '💎', title: 'Crystal & Sound Healing', desc: 'Immersive crystal healing session with singing bowls in a private desert sanctuary.' },
    ],
    reviews: [
      { name: 'Zara H.', initials: 'ZH', date: 'November 2025', stars: 5, text: 'Leila is an absolute angel. The vortex meditation was one of the most profound experiences of my life. I left feeling completely transformed.' },
      { name: 'Michael T.', initials: 'MT', date: 'October 2025', stars: 5, text: 'I was skeptical about the vortex stuff but Leila made it so real and meaningful. The sunrise yoga was simply breathtaking.' },
    ],
  },
];

// ===== STATE =====
let activeCategory = 'all';
let activeGuide = null;
let guestCount = 2;

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderGuides(guides);
  // Set min date for booking to today
  document.getElementById('bpDate').min = new Date().toISOString().split('T')[0];
  document.addEventListener('click', e => {
    const dropdown = document.getElementById('userDropdown');
    const menu = document.querySelector('.user-menu');
    if (dropdown?.classList.contains('open') && !menu?.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });
});

// ===== RENDER GUIDES =====
function renderGuides(data) {
  const grid = document.getElementById('guidesGrid');
  const noResults = document.getElementById('noResults');
  const count = document.getElementById('guideCount');
  count.textContent = `${data.length} guide${data.length !== 1 ? 's' : ''}`;

  if (data.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }
  noResults.style.display = 'none';
  grid.innerHTML = data.map(createGuideCard).join('');
}

function createGuideCard(g) {
  const stars = '★'.repeat(Math.floor(g.rating));
  const tags = g.tags.slice(0, 3).map(t => `<span class="gc-tag">${t}</span>`).join('');
  const catLabel = {
    food: '🍜 Food & Drink', nature: '🥾 Nature', culture: '🏛️ Culture',
    photo: '📸 Photography', nightlife: '🎶 Nightlife', adventure: '🧗 Adventure',
    art: '🎨 Art & Craft', wellness: '🧘 Wellness'
  }[g.category] || g.category;

  return `
    <div class="guide-card" onclick="openGuide(${g.id})">
      <div class="gc-cover">
        <img src="${g.cover}" alt="${g.name}" loading="lazy" />
        <div class="gc-category-badge">${catLabel}</div>
        <div class="gc-verified">✓ Verified</div>
        <div class="gc-avatar-wrap">
          <img src="${g.avatar}" alt="${g.name}" loading="lazy" />
        </div>
      </div>
      <div class="gc-body">
        <div class="gc-name-row">
          <div class="gc-name">${g.name}</div>
          <div class="gc-rating"><span class="star">★</span> ${g.rating} <span style="color:#717171;font-weight:400">(${g.reviewCount})</span></div>
        </div>
        <div class="gc-location">📍 ${g.location}</div>
        <div class="gc-tags">${tags}</div>
        <div class="gc-bio">${g.bio}</div>
        <div class="gc-footer">
          <div class="gc-price">
            <strong>$${g.price}</strong>
            <span> ${g.priceUnit}</span>
          </div>
          <div class="gc-avail ${g.available ? 'open' : ''}">
            ${g.available ? '● Available now' : '○ Check dates'}
          </div>
        </div>
      </div>
    </div>
  `;
}

// ===== FILTER =====
function filterGuides(cat, el) {
  activeCategory = cat;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');

  const title = document.getElementById('gridTitle');
  const catNames = {
    all: 'All local guides', food: 'Food & Drink guides', nature: 'Nature & Hiking guides',
    culture: 'Culture & History guides', photo: 'Photography guides', nightlife: 'Nightlife guides',
    adventure: 'Adventure guides', art: 'Art & Craft guides', wellness: 'Wellness guides',
  };
  title.textContent = catNames[cat] || 'Local guides';

  const filtered = cat === 'all' ? guides : guides.filter(g => g.category === cat);
  renderGuides(filtered);
}

// ===== HERO SEARCH =====
function handleHeroSearch() {
  const where = document.getElementById('heroWhere').value.toLowerCase();
  const type = document.getElementById('heroType').value;

  let filtered = guides;
  if (where) {
    filtered = filtered.filter(g => g.location.toLowerCase().includes(where) || g.tags.some(t => t.toLowerCase().includes(where)));
  }
  if (type) {
    filtered = filtered.filter(g => g.category === type);
  }
  renderGuides(filtered);
  // Scroll to grid
  document.querySelector('.main').scrollIntoView({ behavior: 'smooth' });
  showToast(`Found ${filtered.length} guide${filtered.length !== 1 ? 's' : ''}`);
}

// ===== OPEN GUIDE MODAL =====
function openGuide(id) {
  const g = guides.find(x => x.id === id);
  if (!g) return;
  activeGuide = g;

  const tagsHtml = g.tags.map(t => `<span class="gm-tag">${t}</span>`).join('');
  const expHtml = g.experiences.map(e => `
    <div class="gm-exp-item">
      <div class="gm-exp-icon">${e.icon}</div>
      <div>
        <div class="gm-exp-title">${e.title}</div>
        <div class="gm-exp-desc">${e.desc}</div>
      </div>
    </div>
  `).join('');

  const reviewHtml = g.reviews.map(r => `
    <div class="review-item">
      <div class="review-header">
        <div class="review-avatar">${r.initials}</div>
        <div>
          <div class="review-name">${r.name}</div>
          <div class="review-date">${r.date}</div>
        </div>
        <div class="review-stars" style="margin-left:auto">${'★'.repeat(r.stars)}</div>
      </div>
      <div class="review-text">${r.text}</div>
    </div>
  `).join('');

  document.getElementById('modalContent').innerHTML = `
    <div class="gm-header">
      <img class="cover" src="${g.cover}" alt="${g.name}" />
      <div class="gm-header-overlay"></div>
      <div class="gm-avatar"><img src="${g.avatar}" alt="${g.name}" /></div>
    </div>
    <div class="gm-body">
      <div class="gm-name">${g.name}</div>
      <div class="gm-location">📍 ${g.location}</div>
      <div class="gm-rating-row">
        <div class="gm-rating">★ ${g.rating} · ${g.reviewCount} reviews</div>
        <span style="color:#ddd">|</span>
        <span>🌐 ${g.languages.join(', ')}</span>
        <span style="color:#ddd">|</span>
        <span>⚡ Responds in ${g.responseTime}</span>
      </div>
      <div class="gm-tags">${tagsHtml}</div>
      <div class="modal-divider"></div>
      <h3 class="gm-section-title">About ${g.name.split(' ')[0]}</h3>
      <p class="gm-bio">${g.bio}</p>
      <div class="modal-divider"></div>
      <h3 class="gm-section-title">Experiences offered</h3>
      <div class="gm-experiences">${expHtml}</div>
      <div class="modal-divider"></div>
      <h3 class="gm-section-title">★ ${g.rating} · ${g.reviewCount} reviews</h3>
      <div class="gm-reviews">${reviewHtml}</div>
    </div>
    <div class="gm-footer">
      <div class="gm-price">
        <strong>$${g.price}</strong>
        <span> ${g.priceUnit}</span>
      </div>
      <div class="gm-btns">
        <button class="msg-btn" onclick="handleMessage(event)">Message</button>
        <button class="hire-btn" onclick="openBooking(event, ${g.id})">Hire ${g.name.split(' ')[0]}</button>
      </div>
    </div>
  `;

  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('guideModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('guideModal').classList.remove('open');
  if (!document.getElementById('bookingPanel').classList.contains('open')) {
    document.body.style.overflow = '';
  }
  activeGuide = null;
}

// ===== CHAT =====
const chatHistory = {}; // keyed by guide id

const guideReplies = {
  food: [
    "Great question! I love showing people the best hidden food spots here. What kind of cuisine are you most excited to try?",
    "Absolutely, I can customize the tour around your preferences. Any dietary restrictions I should know about?",
    "Most of my tours run 3–4 hours with tastings at 6–8 spots. We can go faster or slower depending on your appetite 😄",
    "I've been doing this for years and I still discover new gems every month. You're in for a treat!",
    "The best time is usually late morning or evening. Want me to suggest a few dates that work well?",
  ],
  nature: [
    "Hey! Happy to help you plan the perfect outdoor adventure. What's your fitness level — casual hiker or ready to go hard?",
    "I know trails most people never find on any app. Expect some jaw-dropping views!",
    "All my hikes include safety briefings and I carry a first aid kit. Your safety is my top priority.",
    "Wildlife sightings are never guaranteed, but I know the best spots and times of day to maximize chances.",
    "I'd love to customize this for you! Are you interested more in wildlife, photography, or just pure adventure?",
  ],
  culture: [
    "Oh you're going to love this city's history! It goes way deeper than the tourist guides show.",
    "I grew up here so I have stories handed down through generations. Not stuff you'll read in any book.",
    "We can focus on whatever era interests you most — I cover everything from pre-colonial to modern day.",
    "Music is absolutely woven into everything here. I'll show you where the legends played and where new talent is emerging.",
    "Want me to arrange a private acoustic session at one of the historic venues? I have connections!",
  ],
  photo: [
    "Awesome! Let me know what gear you're shooting with and I'll tailor the locations to your style.",
    "I know spots where you can get shots that look like they're from a magazine. Golden hour here is magical.",
    "Whether you're a beginner or advanced, I'll help you level up. We'll work on composition, light, and timing.",
    "I can also do portrait sessions if you want some professional-quality photos of yourself in the city.",
    "The light in this city is incredible around 5–7pm. That's when I love to shoot most.",
  ],
  nightlife: [
    "Oh yes, I know ALL the best spots — and more importantly, how to skip the lines 😎",
    "I'll get us into places that don't even show up on Google. Real insider access.",
    "Tell me your vibe — do you prefer rooftop views, live music, craft cocktails, or dancing?",
    "I can arrange VIP tables at the top spots if you give me a few days notice.",
    "Safety is always my priority. I'll make sure everyone gets home safely at the end of the night.",
  ],
  adventure: [
    "Let's do it! What's your experience level? I work with total beginners up to seasoned adventurers.",
    "All equipment is provided and I'm certified in wilderness first aid. You're in safe hands.",
    "I'll push you just enough to feel the thrill without it being scary. Promise!",
    "The cave system we visit is one of the most incredible places I've ever been. You'll be speechless.",
    "What dates are you thinking? I like to check weather conditions to give you the best experience.",
  ],
  art: [
    "I love introducing people to our local art scene — there's so much talent that flies under the radar!",
    "We can do hands-on workshops, gallery tours, or a mix of both. What sounds more exciting to you?",
    "I'll introduce you directly to the artists. These conversations are often the highlight of the tour.",
    "No experience needed for the workshops — I promise you'll create something you're proud of!",
    "Nashville's art scene is exploding right now. Such an exciting time to visit.",
  ],
  wellness: [
    "Welcome! I'm so glad you're drawn to explore Sedona's incredible energy. It's truly a special place.",
    "Whether you're a skeptic or a believer, people always leave feeling transformed. The landscape alone does something to you.",
    "I'll tailor the experience to exactly what you need — deep meditation, gentle yoga, or energy work.",
    "The vortex sites are most powerful at sunrise and sunset. I'd love to take you at those times if possible.",
    "Healing work is deeply personal and I hold a safe, judgment-free space for everyone on my tours.",
  ],
};

const defaultReplies = [
  "Thanks for reaching out! I'd love to show you around. What are you most interested in exploring?",
  "Great to hear from you! I have some amazing spots in mind. When are you planning to visit?",
  "Happy to answer any questions! Feel free to ask me anything about the experience.",
  "I typically respond within 30 minutes. What would you like to know?",
];

const quickSuggestions = [
  "What's included?",
  "How long does it last?",
  "Is this good for beginners?",
  "Can you customize the tour?",
  "What should I bring?",
];

function handleMessage(e) {
  e.stopPropagation();
  if (!activeGuide) return;
  openChat(activeGuide);
  // Close guide modal
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('guideModal').classList.remove('open');
}

function openChat(g) {
  activeGuide = g;
  document.getElementById('chatAvatar').src = g.avatar;
  document.getElementById('chatAvatar').alt = g.name;
  document.getElementById('chatGuideName').textContent = g.name;

  // Init history if first time
  if (!chatHistory[g.id]) {
    chatHistory[g.id] = [];
    // Opening message from guide
    const opener = (guideReplies[g.category] || defaultReplies)[0];
    chatHistory[g.id].push({ from: 'guide', text: opener, time: new Date() });
  }

  renderChatMessages(g.id);
  renderSuggestions();

  document.getElementById('chatOverlay').classList.add('open');
  document.getElementById('chatPanel').classList.add('open');
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    const msgs = document.getElementById('chatMessages');
    msgs.scrollTop = msgs.scrollHeight;
    document.getElementById('chatInput').focus();
  }, 50);
}

function closeChat() {
  document.getElementById('chatOverlay').classList.remove('open');
  document.getElementById('chatPanel').classList.remove('open');
  document.body.style.overflow = '';
}

function switchToBooking() {
  closeChat();
  if (activeGuide) openBooking(null, activeGuide.id);
}

function renderChatMessages(guideId) {
  const history = chatHistory[guideId] || [];
  const g = activeGuide;
  const msgs = document.getElementById('chatMessages');

  msgs.innerHTML = history.map(msg => {
    const isGuide = msg.from === 'guide';
    const timeStr = msg.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (isGuide) {
      return `
        <div class="chat-msg guide-msg">
          <img class="cm-avatar" src="${g.avatar}" alt="${g.name}" />
          <div class="cm-bubble guide-bubble">
            <div class="cm-text">${msg.text}</div>
            <div class="cm-time">${timeStr}</div>
          </div>
        </div>`;
    } else {
      return `
        <div class="chat-msg user-msg">
          <div class="cm-bubble user-bubble">
            <div class="cm-text">${msg.text}</div>
            <div class="cm-time">${timeStr}</div>
          </div>
        </div>`;
    }
  }).join('');

  msgs.scrollTop = msgs.scrollHeight;
}

function renderSuggestions() {
  const container = document.getElementById('chatSuggestions');
  container.innerHTML = quickSuggestions.map(s =>
    `<button class="suggestion-chip" onclick="sendSuggestion('${s}')">${s}</button>`
  ).join('');
}

function sendSuggestion(text) {
  document.getElementById('chatInput').value = text;
  sendMessage();
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text || !activeGuide) return;

  const guideId = activeGuide.id;
  if (!chatHistory[guideId]) chatHistory[guideId] = [];

  // Add user message
  chatHistory[guideId].push({ from: 'user', text, time: new Date() });
  input.value = '';
  renderChatMessages(guideId);

  // Hide suggestions after first user message
  document.getElementById('chatSuggestions').style.display = 'none';

  // Show typing indicator
  showTypingIndicator();

  // Guide reply after delay
  const replies = guideReplies[activeGuide.category] || defaultReplies;
  const userMsgs = chatHistory[guideId].filter(m => m.from === 'user').length;
  const replyIdx = (userMsgs - 1) % replies.length;
  // Skip index 0 (used as opener) for subsequent replies
  const replyText = userMsgs === 1 ? replies[1 % replies.length] : replies[replyIdx];

  setTimeout(() => {
    hideTypingIndicator();
    chatHistory[guideId].push({ from: 'guide', text: replyText, time: new Date() });
    renderChatMessages(guideId);
  }, 1200 + Math.random() * 800);
}

function showTypingIndicator() {
  const msgs = document.getElementById('chatMessages');
  const g = activeGuide;
  const existing = document.getElementById('typingIndicator');
  if (existing) return;
  const el = document.createElement('div');
  el.id = 'typingIndicator';
  el.className = 'chat-msg guide-msg';
  el.innerHTML = `
    <img class="cm-avatar" src="${g.avatar}" alt="${g.name}" />
    <div class="cm-bubble guide-bubble typing-bubble">
      <span class="dot"></span><span class="dot"></span><span class="dot"></span>
    </div>`;
  msgs.appendChild(el);
  msgs.scrollTop = msgs.scrollHeight;
}

function hideTypingIndicator() {
  const el = document.getElementById('typingIndicator');
  if (el) el.remove();
}

// ===== BOOKING PANEL =====
function openBooking(e, id) {
  if (e) e.stopPropagation();
  const g = id ? guides.find(x => x.id === id) : activeGuide;
  if (!g) return;
  activeGuide = g;

  // Close the guide modal first
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('guideModal').classList.remove('open');

  document.getElementById('bpTitle').textContent = `Book ${g.name.split(' ')[0]}`;
  document.getElementById('bpGuideRow').innerHTML = `
    <div class="bp-guide-avatar"><img src="${g.avatar}" alt="${g.name}" /></div>
    <div>
      <div class="bp-guide-name">${g.name}</div>
      <div class="bp-guide-type">${g.tags[0]} Guide · ${g.location}</div>
    </div>
  `;
  guestCount = 2;
  document.getElementById('bpGuests').textContent = guestCount;
  updatePriceBreakdown();

  document.getElementById('bpOverlay').classList.add('open');
  document.getElementById('bookingPanel').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeBooking() {
  document.getElementById('bpOverlay').classList.remove('open');
  document.getElementById('bookingPanel').classList.remove('open');
  document.body.style.overflow = '';
}

function changeGuests(delta) {
  guestCount = Math.max(1, Math.min(20, guestCount + delta));
  document.getElementById('bpGuests').textContent = guestCount;
  updatePriceBreakdown();
}

function updatePriceBreakdown() {
  if (!activeGuide) return;
  const duration = parseInt(document.getElementById('bpDuration').value) || 4;
  const rate = activeGuide.price;
  const subtotal = rate * guestCount * duration;
  const serviceFee = Math.round(subtotal * 0.12);
  const total = subtotal + serviceFee;

  document.getElementById('bpPriceBreakdown').innerHTML = `
    <div class="bp-price-row"><span>$${rate} × ${guestCount} guest${guestCount > 1 ? 's' : ''} × ${duration} hrs</span><span>$${subtotal}</span></div>
    <div class="bp-price-row"><span>Service fee</span><span>$${serviceFee}</span></div>
    <div class="bp-price-row"><span>Total</span><span>$${total}</span></div>
  `;
}

document.addEventListener('change', e => {
  if (e.target.id === 'bpDuration') updatePriceBreakdown();
});

function confirmBooking() {
  const date = document.getElementById('bpDate').value;
  if (!date) { showToast('Please select a date first'); return; }
  if (!activeGuide) return;
  closeBooking();
  showToast(`Booking request sent to ${activeGuide.name}! 🎉`);
}

// ===== USER MENU =====
function toggleUserMenu() {
  document.getElementById('userDropdown').classList.toggle('open');
}

// ===== TOAST =====
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}
