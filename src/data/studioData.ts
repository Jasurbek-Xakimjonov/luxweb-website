import { ProjectItem, ServiceItem, PricingPlan } from '../types';
import beautyUiImg from '../assets/images/beauty_ui_system_1789406160623.jpg';
import automotiveImg from '../assets/images/automotive_showroom_1789406174970.jpg';
import restaurantImg from '../assets/images/restaurant_interior_1789406188348.jpg';
import brandArchetypeImg from '../assets/images/brand_archetype_1789406202516.jpg';

export const LUXWEB_CONFIG = {
  brandName: 'LUXWEB',
  tagline: 'Premium websites for ambitious businesses.',
  headline: 'WE BUILD DIGITAL EXPERIENCES.',
  statusLabel: 'LUXWEB / DIGITAL STUDIO',
  availability: 'Based in Uzbekistan · Available Worldwide',
  instagramUrl: 'https://www.instagram.com/luxweb.uz/',
  telegramUrl: 'https://t.me/Azizbeeeeeeeeeeeeek',
  telegramHandle: '@Azizbeeeeeeeeeeeeek',
  email: 'contact@luxweb.uz',
  phone: '+998 90 845 20 26',
  location: 'Tashkent, Uzbekistan',
  workingHours: 'Mon — Sat / 10:00 — 19:00 (UTC+5)',
  status: 'Accepting select commissions for Q2 2026',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'business',
    number: '01',
    title: 'BUSINESS WEBSITES',
    description: 'Professional websites designed to establish trust and generate customers.',
    deliverables: ['Custom Editorial UI/UX', 'Conversion Architecture', 'Search Engine Optimization', 'Lead Capture Engine', 'High-Speed Stack'],
    targetAudience: 'Startups, Corporate & Professional Services',
    sampleDeliverables: 'Corporate platforms, B2B sales engines, consulting portfolios'
  },
  {
    id: 'beauty',
    number: '02',
    title: 'BEAUTY & BARBER',
    description: 'Elegant websites for salons, barbers and beauty brands.',
    deliverables: ['Online Booking Integration', 'Visual Lookbook Gallery', 'Service & Price Menu', 'Staff Portfolio Cards', 'Instagram Synchronized Feed'],
    targetAudience: 'Luxury Salons, Grooming Clubs & Cosmetic Brands',
    sampleDeliverables: 'Booking flows, aesthetic menus, VIP treatment showcases'
  },
  {
    id: 'restaurants',
    number: '03',
    title: 'RESTAURANTS',
    description: 'Modern digital experiences for restaurants, cafés and food businesses.',
    deliverables: ['Interactive Culinary Menu', 'Table Reservation Booking', 'Atmosphere & Interior Tour', 'Chef Specials & Seasonal Dishes', 'Direct WhatsApp / Telegram Order'],
    targetAudience: 'Fine Dining, Artisanal Cafés & Lounge Bars',
    sampleDeliverables: 'Cocktail & food menus, reservation flows, event bookings'
  },
  {
    id: 'automotive',
    number: '04',
    title: 'AUTOMOTIVE',
    description: 'Premium websites for automotive brands, dealerships and car services.',
    deliverables: ['Vehicle Showroom Showcase', 'Interactive 360° Specs Grid', 'Service Consultation Booking', 'Financing / Inquiry Forms', 'Dark High-Contrast Aesthetic'],
    targetAudience: 'Bespoke Dealerships, Detailing Studios & Tuning Centers',
    sampleDeliverables: 'Inventory showroom, detailing packages, VIP test drive booking'
  },
  {
    id: 'education',
    number: '05',
    title: 'EDUCATION',
    description: 'Modern platforms for education centers, courses and tutors.',
    deliverables: ['Curriculum Showcase', 'Student Enrollment Funnel', 'Teacher & Mentor Profiles', 'Fee Structures & Schedules', 'Exam / Test Prep Portals'],
    targetAudience: 'Language Academies, IT Academies & Private Tutors',
    sampleDeliverables: 'Course pages, lead qualification quizzes, registration systems'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'luxe-beauty',
    title: 'LUXE BEAUTY',
    category: 'Beauty / Web Design',
    categoryType: 'Beauty',
    shortDescription: 'A sophisticated digital experience designed for a modern beauty studio.',
    fullDescription: 'Crafted for an elite cosmetology and hair atelier in downtown Tashkent. The digital flagship features an editorial typography layout, seamless online appointment bookings, and an interactive treatment menu that elevated their client acquisition by 180%.',
    heroImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80',
    mockupType: 'beauty',
    client: 'Luxe Beauty Atelier',
    year: '2026',
    location: 'Tashkent, UZ',
    accentColor: '#D4AF37',
    deliverables: ['Creative Direction', 'Brand Strategy', 'Custom React Web Experience', 'Interactive Booking Engine', 'Mobile-First Optimization'],
    metrics: [
      { label: 'Booking Conversion', value: '+184%' },
      { label: 'Mobile Engagement', value: '91%' },
      { label: 'Avg Session Time', value: '3m 42s' }
    ],
    keyFeatures: [
      'Interactive Treatment Lookbook with categorized pricing',
      'One-tap appointment booking integrated with WhatsApp & Telegram bot',
      'Artisanal aesthetic photography treatment with luxury micro-interactions',
      'Sub-second page transitions optimized for high-end mobile displays'
    ],
    testimonial: {
      quote: 'LUXWEB completely redefined how Tashkent perceives our salon. Our clients constantly praise how smooth and expensive the booking experience feels.',
      author: 'Kamila Rustamova',
      role: 'Founder & Creative Director, Luxe Beauty'
    }
  },
  {
    id: 'velora-auto',
    title: 'VELORA AUTO',
    category: 'Automotive / Web Design',
    categoryType: 'Automotive',
    shortDescription: 'High-octane digital presence and inventory showroom for bespoke automotive curation.',
    fullDescription: 'A stealth-matte dark digital platform built for a luxury vehicle importer and bespoke detailing studio. Features precision vehicle specifications, cinematic imagery treatment, and a rapid VIP concierge consultation flow.',
    heroImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=80',
    mockupType: 'automotive',
    client: 'Velora Automotive Group',
    year: '2026',
    location: 'Tashkent, UZ',
    accentColor: '#C5A880',
    deliverables: ['Digital Showroom UI', 'Interactive Vehicle Specs Matrix', 'High-Speed Performance Engine', 'VIP Concierge Portal'],
    metrics: [
      { label: 'Qualified Leads', value: '3.4x' },
      { label: 'Showroom Inquiries', value: '+210%' },
      { label: 'Performance Score', value: '99/100' }
    ],
    keyFeatures: [
      'Virtual inventory gallery with dynamic high-contrast vehicle cards',
      'Bespoke service packages comparison with transparent tier pricing',
      'Direct Telegram instant-lead routing for high-net-worth buyers',
      'Engineered with micro-smooth motion mimicking high-performance automotive machinery'
    ],
    testimonial: {
      quote: 'The level of craftsmanship matches the exotic vehicles in our showroom. LUXWEB gave us a competitive edge that no generic agency could deliver.',
      author: 'Timur Karimov',
      role: 'Managing Partner, Velora Auto'
    }
  },
  {
    id: 'noir-restaurant',
    title: 'NOIR RESTAURANT',
    category: 'Restaurant / Web Design',
    categoryType: 'Restaurant',
    shortDescription: 'Atmospheric culinary storytelling and reservation platform for contemporary fine dining.',
    fullDescription: 'Designed for a signature gastronomic dining destination. The digital experience transports guests straight into the candlelit ambiance through deep shadows, editorial wine pairings, interactive seasonal tasting menus, and real-time table reservation.',
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
    mockupType: 'restaurant',
    client: 'Noir Gastronomic House',
    year: '2025',
    location: 'Tashkent, UZ',
    accentColor: '#D4AF37',
    deliverables: ['Sensory Web Experience', 'Interactive Tasting Menu', 'VIP Table Reservation Suite', 'Private Event Inquiries'],
    metrics: [
      { label: 'Online Table Bookings', value: '78%' },
      { label: 'Evening Covers Growth', value: '+45%' },
      { label: 'Zero Third-Party Fees', value: 'Saved $1.2k/mo' }
    ],
    keyFeatures: [
      'Digital interactive menu with sommelier notes and allergen filters',
      'Seamless multi-step table reservation with instant SMS / Telegram confirmations',
      'Atmospheric photography composition with fluid responsive typography',
      'Private dining and bespoke corporate event inquiry flow'
    ],
    testimonial: {
      quote: 'Our guests frequently mention viewing the website before visiting. The mood, the pacing, and the elegance perfectly reflect our culinary philosophy.',
      author: 'Chef Sardor Aliev',
      role: 'Executive Chef & Owner, Noir'
    }
  },
  {
    id: 'aura-academy',
    title: 'AURA EDUCATION',
    category: 'Education / Web Design',
    categoryType: 'Education',
    shortDescription: 'Modern digital academy platform designed for an elite language and test-prep center.',
    fullDescription: 'A streamlined, trustworthy digital campus built for an international exam preparation center. Simplifies complex course schedules, highlights mentor credentials, and provides an intuitive 2-minute diagnostic level test booking funnel.',
    heroImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80',
    mockupType: 'education',
    client: 'Aura Learning Institute',
    year: '2026',
    location: 'Samarkand / Tashkent, UZ',
    accentColor: '#E5C388',
    deliverables: ['Information Architecture', 'Course Catalog UI', 'Diagnostic Booking Funnel', 'Student Testimonial Wall'],
    metrics: [
      { label: 'Student Enrollments', value: '+142%' },
      { label: 'Bounce Rate Drop', value: '-38%' },
      { label: 'Course Enquiries', value: '450+/mo' }
    ],
    keyFeatures: [
      'Modular course catalog with clear pricing tiers and curriculum breakdowns',
      'Interactive placement test booking with instant counselor assignment',
      'Faculty spotlight with verifiable score track records (IELTS 8.5+)',
      'Clean high-contrast typography optimized for long-form educational reading'
    ]
  },
  {
    id: 'monolith-corp',
    title: 'MONOLITH CAPITAL',
    category: 'Business / Web Design',
    categoryType: 'Business',
    shortDescription: 'Authoritative digital presence for an institutional venture and property syndicate.',
    fullDescription: 'An ultra-refined corporate digital experience combining Swiss modernist grid discipline with restrained champagne gold accents. Designed to inspire confidence with international investment partners.',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    mockupType: 'business',
    client: 'Monolith Holdings',
    year: '2025',
    location: 'Tashkent / Dubai',
    accentColor: '#C5A880',
    deliverables: ['Corporate Web Identity', 'Investor Relations Deck UI', 'Asset Portfolio Index', 'Bilingual Architecture'],
    metrics: [
      { label: 'Institutional Trust', value: '100%' },
      { label: 'Partner Inquiries', value: '+85%' },
      { label: 'Page Load Speed', value: '0.4s' }
    ],
    keyFeatures: [
      'Architectural layout with strict vertical alignment and subtle structural dividers',
      'Direct confidential investor contact channel',
      'Asset portfolio directory with interactive geographical mapping',
      'Strict adherence to accessibility and high-contrast typography standards'
    ]
  }
];

export const WHY_LUXWEB_FEATURES = [
  {
    title: 'PREMIUM DESIGN',
    description: 'Every interface is carefully designed to create a strong first impression.',
    detail: 'We reject generic templates. Every line, typographic proportion, and subtle gold accent is tailored to position your brand as the undisputed leader in your market.'
  },
  {
    title: 'FAST PERFORMANCE',
    description: 'Optimized websites built for speed and smooth interaction.',
    detail: 'Engineered on modern React and modern lightweight code. Zero bloated plugins, zero sluggish page delays. 95+ Google Lighthouse scores guaranteed.'
  },
  {
    title: 'MOBILE FIRST',
    description: 'Every experience is designed to work beautifully on phones, tablets and desktops.',
    detail: 'Over 85% of your local clients browse on smartphones. We ensure tactile touch ergonomics, crystal-clear typography, and zero horizontal scrolling.'
  },
  {
    title: 'BUSINESS FOCUSED',
    description: 'Design decisions are made to help businesses attract customers and grow.',
    detail: 'A website must generate revenue. We weave strategic call-to-actions, instant Telegram/WhatsApp gateways, and clear value propositions throughout.'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'DISCOVER',
    description: 'We understand your business, audience and goals.',
    details: [
      'In-depth consultation to analyze your competitive landscape in Uzbekistan and abroad',
      'Identify your ideal high-paying client profile and conversion objectives',
      'Establish brand voice, aesthetic tone, and feature roadmap'
    ]
  },
  {
    step: '02',
    title: 'DESIGN',
    description: 'We create the visual direction and user experience.',
    details: [
      'Bespoke architectural wireframes with deliberate typographic hierarchy',
      'High-fidelity interactive visual direction with luxury aesthetic and subtle gold accents',
      'Design review and rapid collaborative refinement before writing code'
    ]
  },
  {
    step: '03',
    title: 'BUILD',
    description: 'We develop the website with modern technology.',
    details: [
      'Production-grade implementation using clean React, TypeScript, and modern CSS',
      'Fluid 60 FPS animations, micro-interactions, and instant sub-second response',
      'Seamless integration of forms, booking systems, and instant communication channels'
    ]
  },
  {
    step: '04',
    title: 'LAUNCH',
    description: 'We optimize, test and launch the final experience.',
    details: [
      'Multi-device testing across iPhone, Android, tablets, and desktop displays',
      'Comprehensive SEO meta setup, speed optimization, and security check',
      'Domain connection, final deployment, and client handover with zero downtime'
    ]
  }
];

export const ABOUT_STATS = [
  { value: '01', label: 'Studio', note: 'Independent & Focused' },
  { value: '05+', label: 'Industries', note: 'Proven Expertise' },
  { value: '100%', label: 'Custom Design', note: 'No Generic Templates' },
  { value: '∞', label: 'Ideas', note: 'Crafted Without Limits' },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    priceUsd: 100,
    priceUzs: '1,280,000',
    description: 'For small businesses that need a professional online presence.',
    turnaroundTime: '5 — 7 Days Delivery',
    features: [
      'Responsive website',
      'Premium design',
      'Contact section',
      'Basic animations',
      'Mobile optimization',
      'Domain & Hosting Setup',
      'Basic SEO Meta Configuration'
    ],
    ctaText: 'Choose Starter'
  },
  {
    id: 'business',
    name: 'BUSINESS',
    priceUsd: 200,
    priceUzs: '2,560,000',
    description: 'For businesses that want a complete professional website.',
    isPopular: true,
    turnaroundTime: '10 — 14 Days Delivery',
    features: [
      'Everything in Starter',
      'Multiple pages / sections',
      'Advanced animations',
      'Gallery / portfolio showcase',
      'Contact form with validation',
      'Telegram & WhatsApp lead routing',
      'SEO basics & Google indexing'
    ],
    ctaText: 'Choose Business'
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    priceUsd: 350,
    priceUzs: '4,480,000',
    description: 'For businesses that want a fully customized digital experience.',
    turnaroundTime: '14 — 21 Days Delivery',
    features: [
      'Everything in Business',
      'Advanced interactions & micro-details',
      'Custom bespoke UI/UX architecture',
      'Premium animations & smooth reveals',
      'Advanced sections (Lookbook, Menu, Specs)',
      'Interactive booking / reservation integration',
      'Priority support & post-launch care'
    ],
    ctaText: 'Start Premium Project'
  }
];

export const INSTAGRAM_HIGHLIGHTS = [
  {
    id: 'ig-1',
    title: 'Minimal Beauty UI System',
    tag: 'Web Design',
    gradient: 'from-neutral-900 via-stone-900 to-black',
    image: beautyUiImg,
    likes: '1.2k',
    caption: 'Atmospheric typography and fluid spacing for contemporary beauty atelier.'
  },
  {
    id: 'ig-2',
    title: 'Dark Automotive Showroom',
    tag: 'Motion Lab',
    gradient: 'from-zinc-950 via-neutral-900 to-black',
    image: automotiveImg,
    likes: '940',
    caption: 'Micro-interactions designed for high-performance supercar inventory.'
  },
  {
    id: 'ig-3',
    title: 'Culinary Menu & Booking Flow',
    tag: 'Case Study',
    gradient: 'from-stone-950 via-neutral-900 to-zinc-950',
    image: restaurantImg,
    likes: '1.5k',
    caption: 'Zero-friction table reservations with candlelit ambiance lighting.'
  },
  {
    id: 'ig-4',
    title: 'Brand Archetype: LUXWEB 2026',
    tag: 'Identity',
    gradient: 'from-neutral-900 via-black to-stone-950',
    image: brandArchetypeImg,
    likes: '2.1k',
    caption: 'Deep matte black, editorial typography, and disciplined champagne gold accents.'
  }
];
