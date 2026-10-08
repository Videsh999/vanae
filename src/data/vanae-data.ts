// VANAE — Single Source of Truth
// Extracted strictly from the official Vanae Project Brochure

export interface FloorPlan {
  id: string;
  block: string;
  title: string;
  areaSft: number;
  facing: 'East' | 'West';
  type: string;
  bedrooms: string;
  image2d: string;
  description: string;
  highlights: string[];
  features: string[];
}

export interface TowerInfo {
  id: string;
  code: string;
  name: string;
  totalFloors: number;
  configurations: string[];
  areasSft: number[];
  facing: string[];
  planImage: string;
  summary: string;
  details: {
    unitsPerFloor: string;
    corridorWidth: string;
    lifts: string;
    speciality: string;
  };
}

export interface AmenityCategory {
  category: string;
  subtitle: string;
  image?: string;
  items: {
    name: string;
    desc?: string;
  }[];
}

export interface SpecificationCategory {
  category: string;
  items: {
    title: string;
    description: string;
  }[];
}

export interface Landmark {
  name: string;
  category: 'Business & IT' | 'Education' | 'Locality' | 'Connectivity';
  details: string;
}

export const VANAE_DATA = {
  project: {
    name: 'VANAE',
    tagline: 'THE ART OF ROOTED LIVING',
    concept: 'Rising higher without losing our connection to nature.',
    coreJourney: 'EARTH → NATURE → ARCHITECTURE → HEIGHT → HOME',
    developers: [
      { name: 'Nestmakers', role: 'Builders & Developers' },
      { name: 'Elegans Group', role: 'Builders & Developers' }
    ],
    approvals: {
      hmda: 'HMDA Building Permission No: 006436/LO/HMDA 1500/MED/2024TG',
      reraNotice: 'RERA Registration Under Process / Official Disclosure on Telangana RERA Portal'
    },
    addresses: {
      site: 'VANAE: Kollur Exit 2, Nehru Outer Ring Road, Nagulapalli, Edulnagulapally, Hyderabad, Telangana – 502300',
      corporate: '3rd Floor, Ravi Shankar Arcade, Plot No. 19 & 20, Gachibowli, Hyderabad, Telangana – 500032'
    }
  },

  stats: [
    { label: 'FLOORS', value: '36', note: 'Soaring architectural heights' },
    { label: 'TOWERS', value: '06', note: 'Iconic residential blocks' },
    { label: 'FAMILIES', value: '1200+', note: 'A distinguished community' },
    { label: 'CEILING HEIGHT', value: '11 FT', note: 'Exceptional vertical volume' },
    { label: 'CLUBHOUSE', value: '1,00,000 SFT', note: 'Comprehensive luxury realm' },
    { label: 'PARKING STILTS', value: '05 LEVELS', note: 'Living begins on 6th floor' }
  ],

  elevateConcept: {
    title: 'THE WAY WE ELEVATE',
    quote: 'Life at Vanae begins on the 6th floor.',
    body: 'Thanks to the 5 levels of stilt parking between the residences and the ground below, every home at Vanae opens onto a view, giving them a greater sense of vibrancy, ventilation, and vitality.',
    ecoPhilosophy: 'Rising above the ground, the open parking spaces not only minimise deep excavation and disturbance to the earth but also open them up to natural light, ventilation and welcoming greenery. The idea was always to rise higher and keep the impact lower.',
    benefits: [
      'Cooler towers & surroundings',
      'Reduced heat gain',
      'Improved visual and psychological connection with nature',
      'Greater environmental impact',
      'More shaded spaces'
    ],
    levels: [
      { level: 'Level 06 – 36', name: 'RESIDENTIAL HAVENS', desc: 'Unobstructed panoramic skies, personal garden balconies, generous volume.' },
      { level: 'Level 01 – 05', name: '5 STILT PARKING TIERS', desc: 'Naturally ventilated open stilts, eliminating deep soil excavation & bathed in daylight.' },
      { level: 'Ground Level', name: 'LIVING EARTH & LANDSCAPE', desc: 'Lush thematic plantations, butterfly corridors, leisure lawns & vehicular movement.' }
    ]
  },

  towers: [
    {
      id: 'block-a',
      code: 'A',
      name: 'BLOCK A',
      totalFloors: 36,
      configurations: ['4 BHK Ultra-Luxury'],
      areasSft: [4400],
      facing: ['East', 'West'],
      planImage: '/assets/towers/tower-block-a.jpg',
      summary: 'The signature grand residences at Vanae, featuring sprawling 4400 Sft palatial apartments with separate drawing, family living, puja, maid suite, and private view decks.',
      details: {
        unitsPerFloor: '4 Grand Residences per floor',
        corridorWidth: '8\'-1/2" Extra-wide corridor',
        lifts: '3 High-speed passenger lifts + 1 dedicated service lift',
        speciality: 'Multipurpose room, wet & dry kitchens, dedicated garbage chute'
      }
    },
    {
      id: 'block-b',
      code: 'B',
      name: 'BLOCK B',
      totalFloors: 36,
      configurations: ['3 & 4 BHK'],
      areasSft: [2555, 2165],
      facing: ['East Lower', 'East Upper', 'West Upper', 'East', 'West'],
      planImage: '/assets/towers/tower-block-b.jpg',
      summary: 'Central tower offering sweeping central courtyard views, spacious living balconies, and seamless connection to the grand clubhouse.',
      details: {
        unitsPerFloor: '6 Residences per floor',
        corridorWidth: 'Wide designer lobby & corridor',
        lifts: 'High-speed passenger & service elevators',
        speciality: 'Dual orientation views with natural cross-ventilation'
      }
    },
    {
      id: 'block-c',
      code: 'C',
      name: 'BLOCK C',
      totalFloors: 36,
      configurations: ['3 & 4 BHK'],
      areasSft: [2555, 2165],
      facing: ['East Lower/Upper', 'West Lower/Upper', 'East', 'West'],
      planImage: '/assets/towers/tower-block-c.jpg',
      summary: 'Perimeter garden tower bordering tranquil theme plantations and leisure lawns with open sunset horizons.',
      details: {
        unitsPerFloor: '6 Residences per floor',
        corridorWidth: 'Spacious corridor with natural light penetration',
        lifts: 'High-speed lifts with emergency battery lowering',
        speciality: 'Generous room dimensions and private foyer vestibules'
      }
    },
    {
      id: 'block-d',
      code: 'D',
      name: 'BLOCK D',
      totalFloors: 36,
      configurations: ['3 & 4 BHK'],
      areasSft: [2555, 2315, 1765],
      facing: ['East Lower/Upper', 'West Lower', 'East', 'West'],
      planImage: '/assets/towers/tower-block-d.jpg',
      summary: 'North-facing architectural enclave looking out to the 30m grid tree-lined boulevard, designed for optimized natural breeze.',
      details: {
        unitsPerFloor: '6 Residences per floor',
        corridorWidth: 'Full-body vitrified tiled corridors',
        lifts: 'High-speed elevators with granite/marble entry cladding',
        speciality: 'Versatile 1765 to 2555 Sft master designs'
      }
    },
    {
      id: 'block-e',
      code: 'E',
      name: 'BLOCK E',
      totalFloors: 36,
      configurations: ['3 & 4 BHK'],
      areasSft: [2555, 2315, 1765],
      facing: ['East Lower/Upper', 'West Lower', 'East', 'West'],
      planImage: '/assets/towers/tower-block-e.jpg',
      summary: 'Adjacent to the central sports precinct and amphitheatre, balancing active recreation with serene quietude.',
      details: {
        unitsPerFloor: '6 Residences per floor',
        corridorWidth: 'Architectural false ceiling with recessed lighting',
        lifts: 'Dedicated passenger and goods/stretcher lifts',
        speciality: 'Direct sightlines to tennis courts and event lawns'
      }
    },
    {
      id: 'block-f',
      code: 'F',
      name: 'BLOCK F',
      totalFloors: 36,
      configurations: ['3 & 4 BHK'],
      areasSft: [2555, 1765],
      facing: ['East Lower/Upper', 'West Lower/Upper', 'East', 'West'],
      planImage: '/assets/towers/tower-block-f.jpg',
      summary: 'Prominently positioned closest to the grand arrival plaza and ORR service boulevard with immediate egress and prestige.',
      details: {
        unitsPerFloor: '6 Residences per floor',
        corridorWidth: 'Extra-wide reception corridors',
        lifts: 'High-speed elevator cores',
        speciality: 'Immediate access to the entrance portal and visitors lounge'
      }
    }
  ] as TowerInfo[],

  floorPlans: [
    {
      id: 'a-4400-east',
      block: 'Block A',
      title: 'Block A: 4400 Sft (East)',
      areaSft: 4400,
      facing: 'East',
      type: '4 BHK Palatial Residence',
      bedrooms: '4 Bedrooms + Multipurpose Room + Maid Room',
      image2d: '/assets/floorplans/block-a-4400-east.jpg',
      description: 'The pinnacle of luxury at Vanae. Features a formal drawing room, expansive family living and dining, dedicated puja room, dry and wet kitchens, multipurpose media salon, private sitout deck, and separate maid quarters.',
      highlights: ['11-Foot Ceilings', 'Dry & Wet Kitchens', 'Deck & Sitout Balcony', 'Maid Suite with Toilet'],
      features: ['Drawing Room 14\'0" x 14\'0"', 'Living 23\'0" x 14\'0"', 'Dining 14\'0" x 18\'0"', 'Master Bedroom 17\'0" x 21\'0"']
    },
    {
      id: 'a-4400-west',
      block: 'Block A',
      title: 'Block A: 4400 Sft (West)',
      areaSft: 4400,
      facing: 'West',
      type: '4 BHK Palatial Residence',
      bedrooms: '4 Bedrooms + Multipurpose Room + Maid Room',
      image2d: '/assets/floorplans/block-a-4400-west.jpg',
      description: 'Expansive west-oriented counterpart commanding dramatic golden sunset panoramas across the Kollur canopy.',
      highlights: ['Sunset Sky Lounge', 'Twin Kitchen Suite', 'Generous Foyer', 'Walk-in Closets'],
      features: ['Drawing Room 14\'10" x 16\'11"', 'Living 23\'0" x 14\'0"', 'Multipurpose Room 11\'9" x 16\'0"', 'Pooja Room']
    },
    {
      id: 'bcdef-2555-east-lower',
      block: 'Blocks B, C, D, E & F',
      title: 'Block B,C,D,E & F: 2555 Sft (East Lower)',
      areaSft: 2555,
      facing: 'East',
      type: '3 / 4 BHK Luxury Residence',
      bedrooms: '3 / 4 BHK with Foyer & Sitout',
      image2d: '/assets/floorplans/block-bcdef-2555-east-lower.jpg',
      description: 'Generously proportioned east-facing residence designed to maximize natural morning sunlight and continuous cross breezes.',
      highlights: ['East Morning Light', 'Spacious Living Balcony', 'Dedicated Store & Utility', 'All En-Suite Bedrooms'],
      features: ['Master Suite with Dresser', 'Spacious Foyer', 'Open Dining Space', 'Large Format Vitrified Floors']
    },
    {
      id: 'bcdef-2555-east-upper',
      block: 'Blocks B, C, D, E & F',
      title: 'Block B,C,D,E & F: 2555 Sft (East Upper)',
      areaSft: 2555,
      facing: 'East',
      type: '3 / 4 BHK Luxury Residence',
      bedrooms: '3 / 4 BHK with Elevated Balcony',
      image2d: '/assets/floorplans/block-bcdef-2555-east-upper.jpg',
      description: 'Elevated layout configured with alternate architectural balcony fins creating enhanced vertical green privacy.',
      highlights: ['Private Balcony Privacy', '11-Foot Clear Height', 'Utility Wash Area', 'High-Speed Lift Access'],
      features: ['Family Lounge', 'Laminated Wooden Flooring (Master Bed)', 'Large Format Matte Tiles', 'UPVC Windows with Tinted Glass']
    },
    {
      id: 'cdef-2555-west-lower',
      block: 'Blocks C, D, E & F',
      title: 'Block C,D,E & F: 2555 Sft (West Lower)',
      areaSft: 2555,
      facing: 'West',
      type: '3 / 4 BHK Luxury Residence',
      bedrooms: '3 / 4 BHK with Sunset Sitout',
      image2d: '/assets/floorplans/block-cdef-2555-west-lower.jpg',
      description: 'Facing west into the expansive landscaped open spaces and courtyard breeze corridor.',
      highlights: ['Courtyard Vista', 'Extensive Master Bedroom', 'Modular Kitchen Ready', 'Concealed AC Copper Piping'],
      features: ['Sit-out Balcony', 'Teak Veneered Main Door', 'Solar Hot Water Provision', 'Intercom Security']
    },
    {
      id: 'bcf-2555-west-upper',
      block: 'Blocks B, C & F',
      title: 'Block B,C & F: 2555 Sft (West Upper)',
      areaSft: 2555,
      facing: 'West',
      type: '3 / 4 BHK Luxury Residence',
      bedrooms: '3 / 4 BHK Upper Sky Residence',
      image2d: '/assets/floorplans/block-bcf-2555-west-upper.jpg',
      description: 'Sculpted balcony projection offering shade, cooler indoor temperatures, and open sky connection.',
      highlights: ['Organic Balcony Shading', 'Reduced Heat Gain', 'Optimum Daylight', 'Toughened Glass Railings'],
      features: ['Large Drawing & Living', 'Separate Kitchen & Wash', 'Dado up to 7ft in Bathrooms', '100% DG Back-Up']
    },
    {
      id: 'de-2315-east',
      block: 'Blocks D & E',
      title: 'Block D & E: 2315 Sft (East)',
      areaSft: 2315,
      facing: 'East',
      type: '3 BHK Premium Residence',
      bedrooms: '3 BHK with Sitout & Foyer',
      image2d: '/assets/floorplans/block-de-2315-east.jpg',
      description: 'Flawlessly planned 3 BHK residence with zero wasted space, wide balconies, and generous bedroom suites.',
      highlights: ['Efficient Architectural Flow', 'Sunlit Living Zone', 'Dedicated Dining Alcove', 'Large Utility'],
      features: ['3 En-Suite Bedrooms', 'Pooja Space', 'UPVC Sliding Balcony Doors', 'Prepaid Utility BMS']
    },
    {
      id: 'de-2315-west',
      block: 'Blocks D & E',
      title: 'Block D & E: 2315 Sft (West)',
      areaSft: 2315,
      facing: 'West',
      type: '3 BHK Premium Residence',
      bedrooms: '3 BHK with Evening Lounge Deck',
      image2d: '/assets/floorplans/block-de-2315-west.jpg',
      description: 'West-facing 2315 Sft configuration featuring deep shaded overhangs for thermal comfort and outdoor living.',
      highlights: ['Thermal Comfort Architecture', 'High Acoustic Isolation', 'Granite Lift Lobby Entry', 'Water Meter Included'],
      features: ['Airy Bedrooms', 'Modern Kitchen Layout', 'MS Railing with Glass', 'Smooth Acrylic Emulsion']
    },
    {
      id: 'bc-2165-east',
      block: 'Blocks B & C',
      title: 'Block B & C: 2165 Sft (East)',
      areaSft: 2165,
      facing: 'East',
      type: '3 BHK Classic Residence',
      bedrooms: '3 BHK with Private Foyer',
      image2d: '/assets/floorplans/block-bc-2165-east.jpg',
      description: 'Compact ultra-luxury configuration in Towers B & C providing all high-end specifications in a refined footprint.',
      highlights: ['Vastu Compliant Entrance', 'Morning East Light', 'Wide Corridor Access', 'Individual AC Provisions'],
      features: ['Living & Dining Hub', 'Spacious Master Bedroom', 'Guest Suite', 'Children Room']
    },
    {
      id: 'bc-2165-west',
      block: 'Blocks B & C',
      title: 'Block B & C: 2165 Sft (West)',
      areaSft: 2165,
      facing: 'West',
      type: '3 BHK Classic Residence',
      bedrooms: '3 BHK with Garden Outlook',
      image2d: '/assets/floorplans/block-bc-2165-west.jpg',
      description: 'West-facing 2165 Sft design opening directly toward the central green greensward and clubhouse.',
      highlights: ['Direct Clubhouse Proximity', 'Quiet Bedroom Wing', 'Vitrified Matte Tile Baths', 'Concealed Wiring'],
      features: ['Bright Living Area', 'Independent Balcony', 'Granite Entry Finish', 'Round-the-clock Security']
    },
    {
      id: 'def-1765-east',
      block: 'Blocks D, E & F',
      title: 'Block D, E & F: 1765 Sft (East)',
      areaSft: 1765,
      facing: 'East',
      type: '3 BHK Smart Luxury',
      bedrooms: '3 BHK Residence',
      image2d: '/assets/floorplans/block-def-1765-east.jpg',
      description: 'Thoughtfully designed 1765 Sft residences in Towers D, E & F offering full Vanae luxury finishes and 11-foot ceilings.',
      highlights: ['11-Foot Height Maintained', 'No Compromise on Finishes', 'Natural Ventilation', 'Full DG Backup'],
      features: ['3 Comfortable Bedrooms', 'Compact Efficient Kitchen', 'Utility Area', 'Living Room Balcony']
    },
    {
      id: 'def-1765-west',
      block: 'Blocks D, E & F',
      title: 'Block D, E & F: 1765 Sft (West)',
      areaSft: 1765,
      facing: 'West',
      type: '3 BHK Smart Luxury',
      bedrooms: '3 BHK Residence',
      image2d: '/assets/floorplans/block-def-1765-west.jpg',
      description: 'West-facing 1765 Sft layout providing an elegant entry into Vanae’s rooted vertical living paradigm.',
      highlights: ['Panoramic Sunset Window', 'Low Maintenance Luxury', 'High Speed Lift Access', 'Fire Sprinklers in Unit'],
      features: ['Well-zoned Living & Dining', 'Master Suite with Attached Bath', 'UPVC Profile Sections', 'High Security']
    }
  ] as FloorPlan[],

  clubhouse: {
    title: 'IT ONLY GETS BETTER HERE',
    area: '1,00,000 SFT',
    concept: 'Designed as a place to gather, celebrate, compete and retreat, the 1,00,000 sft clubhouse brings the social, recreational and leisurely sides of life together in one refined setting.',
    spreadImage: '/assets/clubhouse-spread.jpg',
    loungeImage: '/assets/clubhouse/clubhouse-lounge.jpg',
    entryImage: '/assets/clubhouse/clubhouse-entry.jpg',
    zones: [
      {
        title: 'SPORTS & ACTIVE LIVING',
        items: [
          { name: 'Badminton Courts', desc: 'International standard indoor courts for high-energy play.' },
          { name: 'Squash Court', desc: 'Precision glass-backed squash arena.' },
          { name: 'Super Gym', desc: 'State-of-the-art strength & cardio training floor.' },
          { name: 'Aerobics & Fitness Studio', desc: 'Dedicated timber-floored studio for yoga and pilates.' },
          { name: 'Indoor Games Lounge', desc: 'Billiards, chess, carrom, and board gaming salon.' },
          { name: 'Table Tennis', desc: 'Dedicated tournament-grade table tennis tables.' },
          { name: 'Pool Table Suite', desc: 'Classic cue sports area in a refined club ambiance.' },
          { name: 'Other Indoor Games', desc: 'Multi-generational interactive recreation.' }
        ]
      },
      {
        title: 'FAMILY & COMMUNITY',
        items: [
          { name: 'Grand Banquet Hall', desc: 'Sprawling double-height celebratory space with warm wood acoustics.' },
          { name: 'Mini Theatre', desc: 'Private cinematic screening hall with plush reclining seating.' },
          { name: 'Cafe & Bistro', desc: 'Artisanal coffee and social cafe overlooking verdant courts.' },
          { name: '10 Guest Rooms', desc: 'Boutique hotel-style guest suites for visiting family and friends.' },
          { name: 'Creche', desc: 'Safe, supervised play and learning sanctuary for little ones.' }
        ]
      },
      {
        title: 'WELLNESS & MINDFULNESS',
        items: [
          { name: 'Luxury Spa', desc: 'Holistic restorative treatments and private therapy rooms.' },
          { name: 'Sauna & Steam', desc: 'Detoxifying thermal suites for deep relaxation.' },
          { name: 'Physiotherapy Clinic', desc: 'On-campus professional physiotherapy & wellness consultation.' }
        ]
      },
      {
        title: 'WORK & CONVENIENCE',
        items: [
          { name: 'Supermarket', desc: 'Convenient daily gourmet grocery and household essentials.' },
          { name: 'Co-working Spaces', desc: 'Quiet high-speed private work booths, meeting desks, and lounges.' },
          { name: 'Reading Lounge', desc: 'Curated library nook with quiet reading bays.' },
          { name: 'Salon', desc: 'Full-service personal grooming and styling salon.' }
        ]
      }
    ]
  },

  amenities: [
    {
      category: 'LANDSCAPING & NATURE',
      subtitle: 'Immersive Green Sanctuary',
      image: '/assets/amenities/botanical-garden.jpg',
      items: [
        { name: 'Butterfly Garden', desc: 'Nectar-rich flowering flora attracting native butterfly species.' },
        { name: 'Herbal Garden', desc: 'Curated organic aromatic medicinal plant collection.' },
        { name: 'Thematic Plantation', desc: 'Evergreen seasonal tree canopies offering cooling shade.' },
        { name: 'Open Amphitheatre / Stage', desc: 'Terraced open-sky cultural venue for community gatherings.' },
        { name: 'Event Lawn', desc: 'Expansive manicured lawn for open-air celebration.' },
        { name: 'Freeplay Lawn', desc: 'Unstructured grassy meadow for children and leisure.' },
        { name: 'Leisure Lawn', desc: 'Quiet shaded seating lawns beneath mature trees.' },
        { name: 'Pet Park', desc: 'Dedicated enclosed active play area for pets.' }
      ]
    },
    {
      category: 'SPORTS & ACTIVE LIVING',
      subtitle: 'Outdoor Athletic Grounds',
      image: '/assets/amenities/swimming-pool.jpg',
      items: [
        { name: 'Tennis Court', desc: 'Championship-grade acrylic hard court.' },
        { name: 'Outdoor Squash Court', desc: 'Architecturally integrated court facility.' },
        { name: 'Half Basketball Court', desc: 'Standard hoop court for fast-paced play.' },
        { name: 'Cricket Nets', desc: 'Professional practice nets with dedicated pitch.' },
        { name: 'Swimming Pool', desc: 'Expansive resort pool with lap lanes and water deck.' }
      ]
    },
    {
      category: 'WELLNESS & MINDFULNESS',
      subtitle: 'Contemplation & Quietude',
      image: '/assets/nature-calm-clouds.jpg',
      items: [
        { name: 'Yoga Deck', desc: 'Elevated wooden deck bathed in morning sunrise light.' },
        { name: 'Meditation Lawn', desc: 'Secluded acoustic enclave surrounded by gentle foliage.' }
      ]
    },
    {
      category: 'FAMILY & COMMUNITY',
      subtitle: 'Generational Harmony',
      image: '/assets/amenities/urli-water-feature.jpg',
      items: [
        { name: 'Kids’ Play Area', desc: 'Modern sensory play equipment on soft safety flooring.' },
        { name: 'Senior Citizens’ Corner', desc: 'Comfortable shaded gazebos with reflexology pathways.' },
        { name: 'First Impressions Arrival', desc: 'Sculptured security cabin, entrance plaza, and flora branding.' }
      ]
    }
  ] as AmenityCategory[],

  specifications: [
    {
      category: 'STRUCTURE & WALLS',
      items: [
        { title: 'Superstructure', description: 'R.C.C. Framed Structure & R.C.C. Shear Wall Framed Structure engineered to withstand Wind & Seismic loads as per IS codes.' },
        { title: 'Walls', description: 'Monolithic R.C.C. Shear Wall construction ensuring maximum internal carpet area and acoustic isolation.' }
      ]
    },
    {
      category: 'WALL FINISHES & PAINTING',
      items: [
        { title: 'External Finishes', description: 'Textured finish with Two Coats of Exterior Emulsion Paint of Reputed Make.' },
        { title: 'Internal Finishes', description: 'Smooth putty finish with 2 Coats of Premium Acrylic Emulsion Paint of Reputed make over a coat of primer.' }
      ]
    },
    {
      category: 'FLOORING FINISHES',
      items: [
        { title: 'Living, Dining & Bedrooms', description: 'Premium quality Large format Vitrified Tile Flooring & Skirting as per architectural design.' },
        { title: 'Master Bedroom', description: 'Vitrified / Laminated wooden flooring as per design.' },
        { title: 'Kitchen & Bathrooms', description: 'Premium quality Large Format Matte finish Vitrified Tile Flooring.' },
        { title: 'Balconies & Sit-Outs', description: 'Vitrified Tile in wooden finish / Matte Finish Vitrified Tile Flooring.' },
        { title: 'Utility', description: 'Non-Slip Vitrified Tiles.' },
        { title: 'Entrance Lounge & Lift Lobby', description: 'Granite flooring with Designer False Ceiling.' },
        { title: 'Corridors & Common Areas', description: 'Full Body / Premium quality Vitrified Tile Flooring.' },
        { title: 'Staircases', description: 'Tandoor / Kota Stone.' }
      ]
    },
    {
      category: 'DADOING & TILING',
      items: [
        { title: 'Bathrooms', description: 'Premium Quality Vitrified Tile Dado up to 7\'-0" height of Reputed Make.' },
        { title: 'Utility Area', description: 'Premium Quality Vitrified Tile Dado up to 3\'-0" height of Reputed Make.' }
      ]
    },
    {
      category: 'DOORS & WINDOWS',
      items: [
        { title: 'Main Door', description: 'Factory-made Teak Veneered Door Frame & Shutter finished with good quality Melamine Polish and hardware of reputed make.' },
        { title: 'Internal & Toilet Doors', description: 'Factory-made Finger Joint wood Frame & Laminated Shutter with hardware of reputed make.' },
        { title: 'Balcony & Sit-out Doors', description: 'UPVC Door Frame of reputed profile sections, with Toughened / HS Glass Paneled Shutters designed as per IS code with designer hardware & mosquito mesh provision.' },
        { title: 'Windows', description: 'UPVC Window of reputed profile sections with Tinted Toughened / HS Glass, designed as per IS code with mosquito mesh provision for all sliding windows.' }
      ]
    },
    {
      category: 'RAILINGS & SAFETY',
      items: [
        { title: 'Balcony / Sit-out', description: 'Laminated Glass / MS Railing designed as per relevant IS codes.' },
        { title: 'Staircases & Cut-outs', description: 'SS / MS Railing as per design intent.' }
      ]
    },
    {
      category: 'ELECTRICAL & AIR-CONDITIONING',
      items: [
        { title: 'Wiring & Switches', description: 'Concealed copper wiring of reputed make with Miniature Circuit Breakers (MCB) for each distribution board and modular switches.' },
        { title: 'Power Supply', description: '3-phase supply for each unit with individual meter boards.' },
        { title: 'Air Conditioning Provision', description: 'Provision for copper piping and power outlets for Air Conditioners in all bedrooms, drawing, and living rooms.' },
        { title: 'Bathrooms & Kitchen', description: 'Provision for Geysers and Exhaust Fans in all bathrooms. Provision for washing machine and dishwasher in utility.' }
      ]
    },
    {
      category: 'ELEVATORS & POWER BACK-UP',
      items: [
        { title: 'High-Speed Lifts', description: 'High-speed passenger lifts for residents and dedicated service/vendor lifts of reputed make in each tower with emergency safety aspects, granite/marble cladding.' },
        { title: 'Power Back-Up', description: '100% DG Set backup with acoustic enclosure and A.M.F (Auto Mains Failure).' }
      ]
    },
    {
      category: 'WATER, WSP & STP',
      items: [
        { title: 'Water Softening Plant (WSP)', description: 'Domestic water supplied through an exclusive central Water Softening Plant with individual unit water meters.' },
        { title: 'Sewage Treatment Plant (STP)', description: 'STP of adequate capacity provided on campus; treated softened water utilized for landscaping and dual flushing.' },
        { title: 'Rain Water Harvesting', description: 'Recharge pits provided at regular intervals for replenishing groundwater levels as per norms.' }
      ]
    },
    {
      category: 'SECURITY, BMS & FIRE SAFETY',
      items: [
        { title: 'Security Surveillance', description: 'Sophisticated round-the-clock security with CCTV monitoring at the main security cabin and entrances of each block; solar / military coil fencing along perimeter.' },
        { title: 'Intercom & Panic Button', description: 'Intercom connecting security to all units; panic button and intercom inside lifts connected to central security.' },
        { title: 'Centralized Billing (BMS)', description: 'Prepaid smart meters for the consumption of Electricity, Water & Reticulated LPG gas from authorized central gas bank.' },
        { title: 'Fire & Life Safety', description: 'Fire hydrant and sprinkler system in all floors and parking areas as per National Building Code (NBC) norms, with PA system and central control panel.' }
      ]
    }
  ] as SpecificationCategory[],

  location: {
    heading: 'THE ADDRESS TO LIVE ABOVE',
    subheading: 'Kollur · ORR Exit 2',
    description: 'Living in Kollur, by ORR Exit 2, offers connectivity unlike anywhere else in the city. Vanae places you in an evolving landscape just minutes from every destination and convenience, making it the ideal place to grow and thrive with ease.',
    image: '/assets/location-map.jpg',
    landmarks: [
      { name: 'Outer Ring Road (ORR)', category: 'Connectivity', details: 'Immediate frontage at ORR Exit 2 with seamless multi-lane access' },
      { name: 'Neopolis', category: 'Business & IT', details: 'The premier new central business hub of West Hyderabad' },
      { name: 'Kokapet', category: 'Business & IT', details: 'Leading commercial, financial, and tech towers' },
      { name: 'The Gaudium School', category: 'Education', details: 'Premier international school located nearby' },
      { name: 'Samisti International School', category: 'Education', details: 'Renowned international campus along the corridor' },
      { name: 'Meru International School', category: 'Education', details: 'Close proximity for world-class education' },
      { name: 'Candidus International School', category: 'Education', details: 'Modern international schooling environment' },
      { name: 'Narayana School & Upcoming Jr. College', category: 'Education', details: 'Established educational institutions in the immediate vicinity' },
      { name: 'Velmala', category: 'Locality', details: 'Charming green residential vicinity' }
    ] as Landmark[]
  },

  gallery: [
    { title: 'Towers in the Mist', caption: '36 Floors of vertical architectural presence emerging into sky and clouds.', image: '/assets/hero-cloud-towers.jpg' },
    { title: 'Skyline Architecture', caption: 'Six sculptural residential towers rising alongside the ORR corridor in Kollur.', image: '/assets/architecture-skyline.jpg' },
    { title: 'Dusk Illumination', caption: 'Architectural vertical light shafts radiating warmth against twilight skies.', image: '/assets/architecture-night.jpg' },
    { title: 'Living Balconies', caption: 'Organic cantilevered balcony fins with flourishing vertical garden planting.', image: '/assets/living-elevation.jpg' },
    { title: '1,00,000 Sft Clubhouse Lounge', caption: 'Double-height social sanctuary with living green walls and curated furnishings.', image: '/assets/clubhouse/clubhouse-lounge.jpg' },
    { title: 'Clubhouse Arrival Portico', caption: 'Warm timber ceiling details and lush planter screens welcoming residents.', image: '/assets/clubhouse/clubhouse-entry.jpg' },
    { title: 'Campus Master Ecosystem', caption: 'Bird’s-eye perspective showing vast central lawn, mature trees, and tower perimeter.', image: '/assets/campus-aerial.jpg' },
    { title: 'Elevated Living Concept', caption: 'Residences commence on the 6th floor atop 5 ventilated stilt parking levels.', image: '/assets/elevate-diagram.jpg' }
  ]
};
