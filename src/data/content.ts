export interface Project {
  id: string
  number: string
  client: string
  title: string
  category: 'reel' | 'branding' | 'artwork' | 'ads'
  categoryLabel: string
  tag: string
  color: 'acid' | 'coral' | 'lilac' | 'dark'
  image: string
  year: string
  metrics?: string
  headline: string
  description: string
  deliverables: string[]
  tools?: string[]
  aspectRatio?: string
  duration?: string
  videoSimulation?: {
    scenes: string[]
    fps: number
    aspect: string
  }
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  location: string
  quote: string
  metric: string
  metricLabel: string
  project: string
  avatar: string
  rating: number
}

export interface ServicePillar {
  number: string
  title: string
  shortTitle: string
  tagline: string
  description: string
  deliverables: string[]
  keyPills: string[]
  timeline: string
  idealFor: string
  accentColor: string
  image: string
  badgeText: string
  visualMetric: string
  sampleProject: string
  colorSwatches?: string[]
}

export const projectsData: Project[] = [
  {
    id: 'reel-1',
    number: '01',
    client: 'Aurora Creative // Global',
    title: 'Neon Kinetic // 2024 Showreel',
    category: 'reel',
    categoryLabel: 'Big Reel',
    tag: '3D Motion & Type',
    color: 'acid',
    image: '/images/reel-1.jpg',
    year: '2024',
    metrics: '4.2M+ Global Views',
    headline: 'A supersonic brand motion manifesto engineered to turn heads.',
    description: 'A relentless kinetic showcase synthesizing 3D chrome typography, rapid-fire sound-synced cuts, and spatial graphics. Designed as an unmistakable flag in the ground for Aurora Creative.',
    deliverables: ['4K Master Showreel', 'Sound Design & Score', '9:16 Vertical Cutdowns', 'Kinetic Title Presets', '3D Asset Toolkit'],
    tools: ['Blender 3D', 'Cinema 4D', 'After Effects', 'Ableton Live'],
    duration: '01:14',
    aspectRatio: '16:9',
    videoSimulation: {
      scenes: ['Typography Warp', 'Liquid Chrome Obsidian', 'Volumetric Glitch', 'Brand Signature'],
      fps: 60,
      aspect: '16:9'
    }
  },
  {
    id: 'reel-2',
    number: '02',
    client: 'Nocturna Paris // Fashion Week',
    title: 'Chroma Pulse // Launch Reel',
    category: 'reel',
    categoryLabel: 'Big Reel',
    tag: 'Cinematic Runway Teaser',
    color: 'coral',
    image: '/images/reel-2.jpg',
    year: '2024',
    metrics: '+840K Launch Engagements',
    headline: 'High-fashion editorial elegance meets electric cybernetic speed.',
    description: 'Created for the AW24 Parisian runway unveiling, Chroma Pulse combines high-contrast strobe aesthetics, liquid ruby typography, and dark velvet lighting to generate maximum viral anticipation.',
    deliverables: ['Cinematic Teaser Trailer', 'Digital Billboard Motion Loop', 'Social Story Suites', 'Soundtrack Mixing'],
    tools: ['Houdini', 'Octane Render', 'Premiere Pro', 'DaVinci Resolve'],
    duration: '00:58',
    aspectRatio: '16:9',
    videoSimulation: {
      scenes: ['Model Silhouette Reveal', 'Crimson Shockwave', 'Runway Typographic Flash', 'Final Emblem'],
      fps: 60,
      aspect: '16:9'
    }
  },
  {
    id: 'branding-1',
    number: '03',
    client: 'Aeterna Architects // Zurich & NY',
    title: 'Aeterna // Monolith Identity',
    category: 'branding',
    categoryLabel: 'Branding',
    tag: 'Architectural Brand System',
    color: 'dark',
    image: '/images/branding-1.jpg',
    year: '2024',
    metrics: '$4.2M Inquiries Pipeline',
    headline: 'Monolithic authority tailored for an international architecture studio.',
    description: 'A precision identity system inspired by brutalist geometry, matte basalt stone, and vermilion construction lines. Encompassing custom logotype, debossed foil guidelines, spatial signages, and a digital monograph.',
    deliverables: ['Comprehensive Brand Book (180 pgs)', 'Custom Bespoke Logotype', 'Debossed Foil Stationery Suite', 'Architectural Signage System', 'Digital Web Architecture'],
    tools: ['Figma', 'Glyphs 3', 'InDesign', 'SolidWorks'],
    duration: '8-Week Sprint'
  },
  {
    id: 'branding-2',
    number: '04',
    client: 'Synthese Acide // Creative Collective',
    title: 'Synthese Acide // Subversive Brand',
    category: 'branding',
    categoryLabel: 'Branding',
    tag: 'Radical Identity & Merch',
    color: 'acid',
    image: '/images/branding-2.jpg',
    year: '2024',
    metrics: 'Sold Out Drop in 14 Mins',
    headline: 'Break the norm. Create the chaos. A rebel brand identity kit.',
    description: 'An unapologetic anti-corporate identity system featuring custom halftone treatments, raw fluorescent red printing on deep black, vinyl record packaging, streetwear merchandise, and radical sticker archives.',
    deliverables: ['Generative Visual Identity', 'Screen-printed Vinyl Packaging', 'Apparel & Streetwear Suite', 'Sticker Archive & Ephemera', 'Brand Guidelines Portal'],
    tools: ['Illustrator', 'Screenprint Press', 'Photoshop', 'TouchDesigner'],
    duration: '6-Week Sprint'
  },
  {
    id: 'artwork-1',
    number: '05',
    client: 'Atelier 09 Contemporary // Paris',
    title: 'Structure & Noise // Poster Series',
    category: 'artwork',
    categoryLabel: 'Artwork',
    tag: 'Brutalist Typographic Prints',
    color: 'coral',
    image: '/images/artwork-1.jpg',
    year: '2024',
    metrics: 'Sold-out 12-Piece Exhibition',
    headline: 'Brutalist Swiss typographic architecture captured on tactile paper.',
    description: 'A 12-part limited-run exhibition exploring the friction between structural order and expressive human noise. Hand-pulled silkscreen prints on heavy cotton archival paper with metallic ink highlights.',
    deliverables: ['12 Large-Format Silkscreen Prints', 'Exhibition Catalog & Editorial', 'Gallery Wall Stencils', 'Collector Box Set'],
    tools: ['Silkscreen Bed', 'DM Mono Customization', 'Risograph ME9350', 'Film Positives'],
    duration: 'Gallery Commission'
  },
  {
    id: 'artwork-2',
    number: '06',
    client: 'Solstice Spatial Labs // Tokyo',
    title: 'Fractal Gravity // 3D Sculpture',
    category: 'artwork',
    categoryLabel: 'Artwork',
    tag: 'Surreal Digital Sculpture',
    color: 'lilac',
    image: '/images/artwork-2.jpg',
    year: '2024',
    metrics: 'Featured at Tokyo Media Arts',
    headline: 'Interlocking liquid chrome and glowing red obsidian in zero gravity.',
    description: 'An architectural 3D digital sculpture studying kinetic tension, refraction through ruby crystals, and metallic fluid dynamics. Commissioned for spatial projection and large-format museum prints.',
    deliverables: ['High-Res 16K Fine Art Renderings', 'Spatial Video Loop Installation', 'NFT Smart Contract & Archive', 'Museum Exhibition Pedestal Render'],
    tools: ['Cinema 4D', 'Redshift', 'ZBrush', 'Marvelous Designer'],
    duration: 'Exhibition Work'
  },
  {
    id: 'ads-1',
    number: '07',
    client: 'Vulcan Energy & Beverage // Global',
    title: 'Vulcan Energy // High-Octane Ads',
    category: 'ads',
    categoryLabel: 'Ads',
    tag: 'Paid Performance Creative',
    color: 'acid',
    image: '/images/ads-1.jpg',
    year: '2024',
    metrics: '3.4x ROAS Performance Lift',
    headline: 'High-octane commercial video and static ad creative with undeniable hook rates.',
    description: 'A multi-tier paid social ad campaign engineered for maximum thumb-stop on TikTok, Instagram, and YouTube. Featuring dynamic liquid splashes, explosive kinetic type hooks, and conversion-tested variations.',
    deliverables: ['24 High-Hook Video Ads (9:16 & 1:1)', 'Static Carousel Ad Suite', 'UGC Dynamic Overlays', 'A/B Testing Hook Playbook', 'Ad Variant Matrix'],
    tools: ['After Effects', 'CapCut Pro', 'Blender', 'Meta Ads Manager'],
    duration: 'Campaign Retainer'
  },
  {
    id: 'ads-2',
    number: '08',
    client: 'Lumina Nocturna Skincare // NYC',
    title: 'Lumina // DTC Product Drop Ads',
    category: 'ads',
    categoryLabel: 'Ads',
    tag: 'Luxury DTC Launch Ads',
    color: 'dark',
    image: '/images/ads-2.jpg',
    year: '2024',
    metrics: '+42% Conversion Rate Lift',
    headline: 'Dark obsidian elegance engineered for high-converting ecommerce.',
    description: 'High-converting direct-to-consumer ad creative pairing editorial beauty photography with razor-sharp performance copywriting and ruby lighting effects. Delivered a 42% lift in checkout completions.',
    deliverables: ['18 High-Conversion Paid Ads', 'Dynamic Story Ad Templates', 'Product Benefit Callout Graphics', 'Retargeting Sequence Creatives'],
    tools: ['Photoshop', 'After Effects', 'Figma', 'Shopify Analytics'],
    duration: 'Product Launch'
  },
]

export const testimonialsData: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Elena Rostova',
    role: 'Founder & Creative Director',
    company: 'Veloce Studio',
    location: 'London / Berlin',
    quote: 'Designy Outlet transformed our brand from a standard digital shop to an unmistakable industry force. Their kinetic identity and reels generated over 2.8M views in our launch week alone. The attention to typographic detail is rare and breathtaking.',
    metric: '+280%',
    metricLabel: 'Inbound Project Inquiries',
    project: 'Synthese Acide Branding & Launch Reel',
    avatar: '/images/client-1.jpg',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'Marcus Vance',
    role: 'Head of Marketing & Development',
    company: 'Aeterna Monolith Architecture',
    location: 'New York / Zurich',
    quote: 'Working with Designy Outlet was an eye-opener. They didn’t just give us a logo; they built an entire architectural visual universe. The collateral and brand book have become the gold benchmark for our international rollout.',
    metric: '$4.2M',
    metricLabel: 'Pipeline Generated',
    project: 'Aeterna Monolith Brand System',
    avatar: '/images/client-2.jpg',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Devika Singhania',
    role: 'Chief Marketing Officer',
    company: 'Vulcan Beverage & Lifestyle Group',
    location: 'Mumbai / Singapore',
    quote: 'The ad creatives and motion reels they engineered outperformed every creative agency we have hired in the last five years. Our customer acquisition cost dropped by 38% while our click-through rate doubled within the first ten days.',
    metric: '3.4x',
    metricLabel: 'ROAS Lift on Paid Media',
    project: 'Vulcan Social Campaign & Ads Suite',
    avatar: '/images/client-3.jpg',
    rating: 5,
  },
  {
    id: 'testimonial-4',
    name: 'Julian Thorne',
    role: 'Curator & Gallery Director',
    company: 'Atelier 09 Contemporary',
    location: 'Paris / Basel',
    quote: 'Their artwork and poster systems possess an arresting, brutalist elegance. Designy Outlet brings high-art rigor into commercial communication without losing raw emotional punch. The exhibition run sold out completely.',
    metric: '100%',
    metricLabel: 'Exhibition Sold-Out',
    project: 'Structure & Noise Poster Series',
    avatar: '/images/client-4.jpg',
    rating: 5,
  },
]

export const servicesPillars: ServicePillar[] = [
  {
    number: '01',
    title: 'Brand Identity & Visual Systems',
    shortTitle: 'Brand Identity',
    tagline: 'Build a visual language people recognise in a split second.',
    description: 'We craft comprehensive brand universes from the foundational logotype and bespoke typography to extensive design guideline books, color theory systems, and stationery collateral.',
    deliverables: [
      'Bespoke Logotype & Symbol Systems',
      'Typography Hierarchy & Custom Glyphs',
      'Complete Brand Book & Guidelines (PDF + Web)',
      'Stationery, Packaging & Merchandise Design',
      'Spatial Signage & Environmental Graphics',
      'Digital Asset Toolkits for Social & Product'
    ],
    keyPills: ['Custom Logotype', 'Typographic Hierarchy', 'Brand Book System', 'Debossed Stationery'],
    timeline: '4 to 8 Weeks',
    idealFor: 'Startups preparing for launch, or established companies undergoing strategic rebrands.',
    accentColor: 'acid',
    image: '/images/branding-1.jpg',
    badgeText: 'ARCHITECTURE SPEC',
    visualMetric: '180pg Brand Universe',
    sampleProject: 'Aeterna Monolith Identity',
    colorSwatches: ['#E30011', '#111111', '#F4EFEA', '#8E8E93']
  },
  {
    number: '02',
    title: 'Cinematic Big Reels & 3D Motion',
    shortTitle: 'Cinematic Reels',
    tagline: 'Kinetic typography and 3D visual worlds that demand full screen.',
    description: 'We direct and produce high-energy motion reels, 3D product animations, kinetic typography teasers, and showreels synchronized with custom sound design.',
    deliverables: [
      '4K Cinematic Showreels & Launch Teasers',
      '3D CGI Product & Kinetic Simulations',
      'Sound Design, Mixing & Audio-Reactive Stems',
      'Multi-Format Deliveries (16:9, 9:16, 1:1, 4:5)',
      'Social Cutdowns & Looping Ambient Visuals',
      'Event Keynote & LED Billboard Animations'
    ],
    keyPills: ['4K Master Showreels', '3D CGI Kinetic Sims', 'Audio-Reactive Score', '9:16 Viral Cuts'],
    timeline: '3 to 6 Weeks',
    idealFor: 'Product drops, fashion collections, brand launches, and high-impact digital campaigns.',
    accentColor: 'coral',
    image: '/images/reel-1.jpg',
    badgeText: '4K CINEMATIC // 60 FPS',
    visualMetric: '4.2M+ Viral Reach',
    sampleProject: 'Neon Kinetic 2024 Showreel',
    colorSwatches: ['#FF2A00', '#000000', '#00FF66', '#FFFFFF']
  },
  {
    number: '03',
    title: 'Performance Ads & Growth Creative',
    shortTitle: 'Performance Ads',
    tagline: 'High-converting ad creatives engineered to stop thumbs.',
    description: 'We combine brutalist art direction with direct-response psychological triggers to create high-performing paid social ads across Meta, TikTok, Instagram, and YouTube.',
    deliverables: [
      'Hook-Rate Optimized Video Ads (9:16 & 1:1)',
      'High-Conversion Static & Carousel Suites',
      'UGC-Style Dynamic Motion Overlays',
      'Continuous A/B Variant Testing Batches',
      'Performance Creative Strategy & Playbook',
      'Iterative Scaling & Fatigue Replacement'
    ],
    keyPills: ['Thumb-Stop Video Hooks', 'A/B Variant Batches', 'Static & Carousel Suites', 'Retargeting Motion'],
    timeline: 'Monthly Retainer or 2-Week Sprints',
    idealFor: 'E-commerce DTC brands, SaaS platforms, and mobile apps scaling paid acquisition.',
    accentColor: 'acid',
    image: '/images/ads-1.jpg',
    badgeText: 'HIGH-HOOK CONVERSION',
    visualMetric: '3.4x ROAS Performance Lift',
    sampleProject: 'Vulcan Energy Ad Suite',
    colorSwatches: ['#E30011', '#0A0A0A', '#FFE600', '#2E2E2E']
  },
  {
    number: '04',
    title: 'Artwork, Posters & Tactile Editorial',
    shortTitle: 'Brutalist Art',
    tagline: 'Brutalist print, museum-grade posters, and spatial art.',
    description: 'We bridge commercial design with avant-garde contemporary art. From limited-edition silkscreen posters and risograph books to 3D sculptural installations.',
    deliverables: [
      'Exhibition & Promotional Poster Series',
      'Editorial Publications & Collector Books',
      'Silkscreen & Risograph Print Management',
      'Surreal 3D Digital Art Sculptures',
      'Album Art & Vinyl Packaging Systems',
      'Limited-Edition Merchandise Kits'
    ],
    keyPills: ['Silkscreen Posters', 'Risograph Collector Books', 'Surreal 3D Sculptures', 'Exhibition Collateral'],
    timeline: '2 to 5 Weeks',
    idealFor: 'Galleries, cultural institutions, music artists, and brands seeking prestige cultural collateral.',
    accentColor: 'lilac',
    image: '/images/artwork-1.jpg',
    badgeText: 'LIMITED EDITION // ARCHIVE',
    visualMetric: 'Hand-Pulled Silkscreen',
    sampleProject: 'Structure & Noise Poster Series',
    colorSwatches: ['#D64024', '#1A1A1A', '#EDE8E1', '#7A7A7A']
  },
  {
    number: '05',
    title: 'Digital Worlds & Interactive Web',
    shortTitle: 'Interactive Web',
    tagline: 'High-craft websites with liquid transitions and kinetic energy.',
    description: 'We architect and build websites that feel like cinematic experiences. Smooth scroll physics, dynamic 3D interactions, micro-animations, and responsive responsiveness.',
    deliverables: [
      'Creative Web Direction & UI/UX Design',
      'High-Performance React/Vite/Next Architecture',
      'Bespoke Micro-Animations & Parallax Physics',
      'Headless CMS & Content Workflows',
      'Mobile-First Responsive Engineering',
      'Full SEO Optimization & Performance Auditing'
    ],
    keyPills: ['Creative Web Direction', 'Bespoke Micro-Animations', 'Liquid Page Transitions', 'Next/Vite Engineering'],
    timeline: '4 to 10 Weeks',
    idealFor: 'Creative studios, modern luxury brands, and forward-thinking tech enterprises.',
    accentColor: 'dark',
    image: '/images/digital-1.jpg',
    badgeText: '120 FPS FLUID WEB',
    visualMetric: 'Liquid WebGL & React',
    sampleProject: 'Aura Digital Architecture',
    colorSwatches: ['#E30011', '#050505', '#161B22', '#F0F6FC']
  },
  {
    number: '06',
    title: 'Packaging & Product Tactility',
    shortTitle: 'Luxury Packaging',
    tagline: 'Unboxing moments engineered to be remembered and shared.',
    description: 'Tactile packaging design that feels substantial in the hand. We handle box structures, specialty foil debossing, paper stock selection, and unboxing rituals.',
    deliverables: [
      'Structural Packaging & Dieline Engineering',
      'Debossed Foils, Spot UV & Specialty Inks',
      'Eco-Conscious Materials Strategy',
      'Unboxing Sequence & Interior Ephemera',
      '3D Photorealistic Packaging Renders',
      'Production Liaison with Global Print Houses'
    ],
    keyPills: ['Structural Packaging Dielines', 'Foil Stamping & Spot UV', 'Unboxing Architecture', 'Global Print Production'],
    timeline: '4 to 7 Weeks',
    idealFor: 'Beverage, skincare, luxury goods, and direct-to-consumer physical products.',
    accentColor: 'coral',
    image: '/images/packaging-1.jpg',
    badgeText: 'BESPOKE UNBOXING RITUAL',
    visualMetric: 'Debossed Foil & Rigid Box',
    sampleProject: 'Molten Architect Luxury Box',
    colorSwatches: ['#E30011', '#0D0D0D', '#9B1D20', '#C5A059']
  }
]

export const studioTeam = [
  {
    name: 'Aaryan Sen',
    role: 'Creative Director & Founder',
    focus: 'Brand Systems & Visual Direction',
    bio: 'Pioneering raw kinetic typography and brutalist brand architectures since 2018.',
  },
  {
    name: 'Tara Mukherjee',
    role: 'Head of Motion & 3D',
    focus: 'Kinetic Big Reels & CGI Worlds',
    bio: 'Specialist in high-velocity camera choreography, Houdini sims, and lighting.',
  },
  {
    name: 'Vikramaditya Roy',
    role: 'Lead Type & Systems Architect',
    focus: 'Editorial Craft & Print Finishing',
    bio: 'Obsessed with micro-kerning, grid discipline, and screenprinting experimentation.',
  },
  {
    name: 'Maya Chen',
    role: 'Performance Creative Strategist',
    focus: 'Conversion Ads & Growth Storytelling',
    bio: 'Bridging avant-garde aesthetics with rigorous performance marketing data.',
  }
]

export const studioFaqs = [
  {
    question: 'How do you price your projects?',
    answer: 'We operate on transparent flat-fee project sprints and monthly creative retainers. Identity sprints typically range from $6,000 to $18,000 depending on scope; Big Reels and campaign ads suites range from $3,500 to $12,000. We provide full scope and milestones before starting.'
  },
  {
    question: 'What is your typical project turnaround?',
    answer: 'A focused Big Reel or Campaign Ads Suite takes 2 to 3 weeks. A comprehensive Brand Identity system takes 4 to 6 weeks from kickoff to final asset delivery. We also offer fast-tracked 10-day sprints for urgent launch deadlines.'
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes! Over 70% of our clients are based in New York, London, Berlin, Singapore, Tokyo, and Zurich. We run async workflows with daily Loom updates, Figma live reviews, and synchronized milestones across timezones.'
  },
  {
    question: 'Can you handle both 3D reels and high-converting ad variants?',
    answer: 'Absolutely. That is our core advantage: we combine high-art 3D motion design with direct-response ad psychology, so you get breathtaking visual storytelling that also converts into measurable revenue.'
  },
  {
    question: 'What happens after the project is completed?',
    answer: 'You receive full commercial IP ownership and meticulously organized master files (open Figma files, Adobe project files, 4K video exports, font licenses, and guidelines). We also offer monthly design retainers for continuous rollouts.'
  }
]
