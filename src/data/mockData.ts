import type { ClassItem, TrainerItem, MembershipPlan, Testimonial, FacilityPhoto, BlogPost } from '../types';

export const CLASSES_DATA: ClassItem[] = [
  {
    id: 'c1',
    title: 'Forge HIIT & Conditioning',
    category: 'HIIT',
    trainerId: 't1',
    trainerName: 'Marcus Vance',
    trainerImage: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80',
    day: 'Mon',
    time: '06:00 AM - 07:00 AM',
    durationMinutes: 60,
    burnKcal: 650,
    difficulty: 'Advanced',
    description: 'High-intensity interval training combined with kettlebell work, sprint bursts, and sled pushes for maximum metabolic burn.',
    room: 'Turf Zone 1',
    capacity: 20,
    enrolled: 18,
  },
  {
    id: 'c2',
    title: 'Powerlifting & Hypertrophy',
    category: 'Strength',
    trainerId: 't2',
    trainerName: 'Elena Rostova',
    trainerImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80',
    day: 'Mon',
    time: '07:30 AM - 08:30 AM',
    durationMinutes: 60,
    burnKcal: 450,
    difficulty: 'Intermediate',
    description: 'Barbell compound lifting focused on squad, bench, deadlift technique, progressive overload, and strength building.',
    room: 'Main Lifting Floor',
    capacity: 12,
    enrolled: 10,
  },
  {
    id: 'c3',
    title: 'Sunrise Vinyasa Flow',
    category: 'Yoga',
    trainerId: 't3',
    trainerName: 'Aria Thorne',
    trainerImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
    day: 'Mon',
    time: '08:00 AM - 09:00 AM',
    durationMinutes: 60,
    burnKcal: 280,
    difficulty: 'All Levels',
    description: 'Dynamic breath-to-movement flow designed to enhance mobility, core stability, balance, and mental clarity.',
    room: 'Mind & Body Studio',
    capacity: 25,
    enrolled: 22,
  },
  {
    id: 'c4',
    title: 'Heavy Bag Boxing & Cardio',
    category: 'Boxing',
    trainerId: 't4',
    trainerName: 'Jaxson Reed',
    trainerImage: 'https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=600&q=80',
    day: 'Tue',
    time: '06:30 PM - 07:30 PM',
    durationMinutes: 60,
    burnKcal: 720,
    difficulty: 'Intermediate',
    description: 'Authentic boxing combinations on heavy bags paired with agility footwork, rope skipping, and core conditioning.',
    room: 'Boxing Ring Studio',
    capacity: 16,
    enrolled: 15,
  },
  {
    id: 'c5',
    title: 'Infrared Mobility & Recovery',
    category: 'Recovery',
    trainerId: 't3',
    trainerName: 'Aria Thorne',
    trainerImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
    day: 'Wed',
    time: '05:30 PM - 06:15 PM',
    durationMinutes: 45,
    burnKcal: 200,
    difficulty: 'Beginner',
    description: 'Gentle myofascial release, foam rolling, and guided passive stretching under soothing infrared therapy lighting.',
    room: 'Recovery Suite',
    capacity: 15,
    enrolled: 11,
  },
  {
    id: 'c6',
    title: 'Cross-Forge Athletic Conditioning',
    category: 'HIIT',
    trainerId: 't1',
    trainerName: 'Marcus Vance',
    trainerImage: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80',
    day: 'Thu',
    time: '07:00 AM - 08:00 AM',
    durationMinutes: 60,
    burnKcal: 680,
    difficulty: 'Advanced',
    description: 'Olympic lifting technique, plyometrics, assault bike intervals, and team challenge workouts.',
    room: 'Turf Zone 2',
    capacity: 18,
    enrolled: 16,
  },
  {
    id: 'c7',
    title: 'Iron Core & Glute Sculpt',
    category: 'Strength',
    trainerId: 't5',
    trainerName: 'Chloe Bennett',
    trainerImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
    day: 'Fri',
    time: '05:00 PM - 06:00 PM',
    durationMinutes: 60,
    burnKcal: 420,
    difficulty: 'Intermediate',
    description: 'Targeted resistance band and cable training designed to build glute strength, pelvic stability, and rigid core power.',
    room: 'Studio A',
    capacity: 20,
    enrolled: 19,
  },
  {
    id: 'c8',
    title: 'Weekend Warrior Slam',
    category: 'HIIT',
    trainerId: 't6',
    trainerName: 'Damian Sterling',
    trainerImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    day: 'Sat',
    time: '09:00 AM - 10:15 AM',
    durationMinutes: 75,
    burnKcal: 800,
    difficulty: 'Advanced',
    description: 'Our flagship 75-minute weekend blowout! DJ live set, team relays, medicine ball slams, and heavy tire flips.',
    room: 'Main Outdoor Turf',
    capacity: 30,
    enrolled: 28,
  },
  {
    id: 'c9',
    title: 'Sunday Breathwork & Cold Plunge',
    category: 'Recovery',
    trainerId: 't3',
    trainerName: 'Aria Thorne',
    trainerImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
    day: 'Sun',
    time: '10:30 AM - 11:30 AM',
    durationMinutes: 60,
    burnKcal: 150,
    difficulty: 'All Levels',
    description: 'Wim Hof inspired breathwork session followed by contrast therapy in our premium cold plunge tubs and Finnish sauna.',
    room: 'Spa & Recovery Lounge',
    capacity: 12,
    enrolled: 12,
  }
];

export const TRAINERS_DATA: TrainerItem[] = [
  {
    id: 't1',
    name: 'Marcus Vance',
    title: 'Head Strength & Conditioning Coach',
    specialty: 'HIIT',
    bio: 'Former Division I track athlete with over 10 years of experience coaching elite athletes and everyday fitness enthusiasts. Marcus specializes in functional athletic movement, explosive power, and body transformation.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80',
    experienceYears: 10,
    certifications: ['CSCS (Certified Strength & Conditioning Specialist)', 'USA Weightlifting Level 2', 'Precision Nutrition L1'],
    quote: 'Discipline isn’t about being motivation every day; it’s about doing what needs to be done regardless.',
    featuredClasses: ['Forge HIIT & Conditioning', 'Cross-Forge Athletic Conditioning'],
    schedule: [
      { day: 'Mon', time: '06:00 AM', className: 'Forge HIIT' },
      { day: 'Wed', time: '07:00 AM', className: 'Athletic Conditioning' },
      { day: 'Thu', time: '07:00 AM', className: 'Cross-Forge HIIT' }
    ]
  },
  {
    id: 't2',
    name: 'Elena Rostova',
    title: 'Master Powerlifting & Strength Specialist',
    specialty: 'Strength',
    bio: 'Competitive powerlifter holding regional state records in squat and deadlift. Elena focuses on bulletproof form, injury prevention, progressive overload, and empowering lifters of all levels.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    experienceYears: 8,
    certifications: ['NSCA-CPT', 'USAPL National Coach', 'FMS (Functional Movement Screen)'],
    quote: 'Strength changes how you carry yourself inside and outside the gym.',
    featuredClasses: ['Powerlifting & Hypertrophy', 'Heavy Barbell Basics'],
    schedule: [
      { day: 'Mon', time: '07:30 AM', className: 'Powerlifting & Hypertrophy' },
      { day: 'Wed', time: '05:00 PM', className: 'Barbell Technique' },
      { day: 'Fri', time: '06:00 AM', className: 'Strength Foundations' }
    ]
  },
  {
    id: 't3',
    name: 'Aria Thorne',
    title: 'Yoga & Recovery Director',
    specialty: 'Yoga',
    bio: '500-hour E-RYT yoga instructor and certified breathwork practitioner. Aria integrates biomechanics with restorative mindfulness to help members recover faster, increase flexibility, and reduce stress.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    experienceYears: 7,
    certifications: ['500-hr E-RYT Yoga Alliance', 'Oxygen Advantage Breath Coach', 'Myofascial Release Specialist'],
    quote: 'Movement is medicine. Recovery is where transformation takes root.',
    featuredClasses: ['Sunrise Vinyasa Flow', 'Infrared Mobility', 'Sunday Breathwork & Cold Plunge'],
    schedule: [
      { day: 'Mon', time: '08:00 AM', className: 'Sunrise Vinyasa Flow' },
      { day: 'Wed', time: '05:30 PM', className: 'Infrared Mobility' },
      { day: 'Sun', time: '10:30 AM', className: 'Breathwork & Cold Plunge' }
    ]
  },
  {
    id: 't4',
    name: 'Jaxson Reed',
    title: 'Combat Sports & Boxing Coach',
    specialty: 'Combat',
    bio: 'Pro Golden Gloves boxer with 20+ amateur fights. Jaxson combines real ring technique with high-energy cardiovascular conditioning that leaves members feeling powerful and energized.',
    image: 'https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=800&q=80',
    experienceYears: 9,
    certifications: ['USA Boxing Certified Coach', 'NASM Performance Enhancement Specialist'],
    quote: 'Every round is a lesson. Keep your head up and hit hard.',
    featuredClasses: ['Heavy Bag Boxing & Cardio', 'Combat Conditioning'],
    schedule: [
      { day: 'Tue', time: '06:30 PM', className: 'Heavy Bag Boxing' },
      { day: 'Thu', time: '06:00 PM', className: 'Boxer Footwork' }
    ]
  },
  {
    id: 't5',
    name: 'Chloe Bennett',
    title: 'Body Recomposition Specialist',
    specialty: 'Strength',
    bio: 'Specializing in hyper-targeted hypertrophy and body composition changes. Chloe has helped over 300 clients achieve their dream physique through science-backed resistance protocols and tailored habit tracking.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    experienceYears: 6,
    certifications: ['ACE Personal Trainer', 'NASM Fitness Nutrition Specialist'],
    quote: 'Consistency always beats intensity when done with intention.',
    featuredClasses: ['Iron Core & Glute Sculpt', 'Full Body Sculpt'],
    schedule: [
      { day: 'Tue', time: '08:00 AM', className: 'Full Body Sculpt' },
      { day: 'Fri', time: '05:00 PM', className: 'Iron Core & Glute Sculpt' }
    ]
  },
  {
    id: 't6',
    name: 'Damian Sterling',
    title: 'Endurance & Hybrid Athlete Coach',
    specialty: 'HIIT',
    bio: 'Ultramarathoner and Spartan Race podium finisher. Damian bridges endurance sports with heavy weightlifting to create resilient hybrid athletes capable of anything.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    experienceYears: 11,
    certifications: ['CrossFit Level 3 Trainer', 'EXOS Performance Specialist'],
    quote: 'Find comfort in the uncomfortable. That is where growth lives.',
    featuredClasses: ['Weekend Warrior Slam', 'Hybrid Endurance'],
    schedule: [
      { day: 'Sat', time: '09:00 AM', className: 'Weekend Warrior Slam' }
    ]
  }
];

export const MEMBERSHIPS_DATA: MembershipPlan[] = [
  {
    id: 'm1',
    name: 'Basic Pass',
    priceMonthly: 49,
    priceAnnual: 39,
    tag: 'STARTER',
    description: 'Perfect for independent gym-goers looking for world-class equipment and flexible access.',
    features: [
      'Full access to main weight floor & cardio equipment',
      'Locker room & digital showers access',
      'ForgeFit mobile app keyless entry',
      '1 complimentary InBody body scan per month',
      'Free high-speed WiFi & charging station'
    ],
    nonFeatures: [
      'Unlimited group fitness classes',
      'Sauna & cold plunge spa lounge',
      'Free guest passes',
      'Personal training quarterly review'
    ],
    buttonText: 'Start 7-Day Free Trial'
  },
  {
    id: 'm2',
    name: 'Pro Fitness',
    priceMonthly: 89,
    priceAnnual: 75,
    popular: true,
    tag: 'MOST POPULAR',
    description: 'Our complete membership package including all group classes, turf zone, and recovery amenities.',
    features: [
      'Everything in Basic Pass',
      'Unlimited access to all 45+ weekly group classes (HIIT, Yoga, Boxing)',
      'Infrared Sauna & Cold Plunge spa lounge access',
      '2 free guest passes per month',
      'Unlimited InBody body composition analysis',
      'Discounts at our organic protein bar'
    ],
    buttonText: 'Claim Pro Membership'
  },
  {
    id: 'm3',
    name: 'Elite VIP',
    priceMonthly: 139,
    priceAnnual: 115,
    tag: 'VIP ACCESS',
    description: 'The ultimate VIP fitness experience with 1-on-1 personal coaching, priority booking, and premium perks.',
    features: [
      'Everything in Pro Fitness',
      '1 monthly 1-on-1 session with a Master Trainer',
      'VIP priority booking for high-demand classes',
      'Unlimited guest passes (1 guest per visit)',
      'Complimentary towel service & reserved locker',
      'Customized monthly workout & nutrition plan'
    ],
    buttonText: 'Join Elite VIP'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'David Reynolds',
    role: 'Software Engineer',
    result: 'Lost 28 lbs & Gained 12 lbs Muscle in 6 Months',
    quote: 'ForgeFit completely changed my routine. The coaches actually care about your form, the energy in the HIIT classes is unreal, and the sauna after a heavy leg day is pure luxury.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't2',
    name: 'Sophia Martinez',
    role: 'Product Designer',
    result: 'Increased Squat by 65 lbs in 4 Months',
    quote: 'As a woman stepping into powerlifting, I was nervous at first. Elena and the ForgeFit community welcomed me with open arms. Now I feel stronger and more confident than ever.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=500&q=80',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't3',
    name: 'Michael Chen',
    role: 'Architect',
    result: 'Rehabbed Lower Back & Ran 1st Half Marathon',
    quote: 'The combination of high-intensity training with Aria’s recovery & cold plunge sessions fixed my chronic lower back stiffness. Best gym decision I’ve ever made.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=500&q=80',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];

export const FACILITIES_DATA: FacilityPhoto[] = [
  {
    id: 'f1',
    title: 'Main Weight Floor',
    category: 'Weight Floor',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
    description: 'Equipped with 10 Eleiko power racks, calibrated plates, Rogue dumbbells up to 150 lbs, and custom cable stations.'
  },
  {
    id: 'f2',
    title: 'Functional Turf & Sprint Track',
    category: 'Turf Track',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1000&q=80',
    description: '50-meter indoor sprint turf complete with Rogue sleds, battle ropes, plyo boxes, and slam ball stations.'
  },
  {
    id: 'f3',
    title: 'Infrared Sauna & Cold Plunge Spa',
    category: 'Recovery',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
    description: 'State-of-the-art Finnish cedar saunas and dual temperature-controlled cold immersion plunges maintained at 44°F.'
  },
  {
    id: 'f4',
    title: 'Cardio Deck & Endurance Lab',
    category: 'Cardio Zone',
    image: 'https://images.unsplash.com/photo-1576678927484-cc909957088c?auto=format&fit=crop&w=1000&q=80',
    description: 'Woodway curved treadmills, Concept2 rowers and ski ergs, Assault AirBikes, and StairMasters with personal screens.'
  },
  {
    id: 'f5',
    title: 'Boxing Ring & Combat Zone',
    category: 'Boxing',
    image: 'https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=1000&q=80',
    description: 'Full-sized competition boxing ring, 12 heavy teardrop bags, speed bags, and double-end bag stations.'
  }
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'b1',
    title: 'Hypertrophy vs. Strength: How to Structure Your Weight Floor Sessions',
    category: 'Training',
    authorName: 'Elena Rostova',
    authorImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=200&q=80',
    readTime: '5 min read',
    date: 'August 8, 2026',
    summary: 'Discover the mechanical tension principles, rep ranges (1-5 vs 8-12), and progressive overload strategies that separate raw strength from muscle building.',
    content: [
      'When stepping onto the ForgeFit weight floor, the most common question athletes ask is whether they should focus on pure powerlifting strength or hypertrophy.',
      'Progressive overload remains the golden rule. For maximum strength, aim for 1–5 reps per set with 85%+ 1RM. For hypertrophy, target 8–12 reps with high volume and metabolic stress.',
      'Integrating both protocols into a periodized 8-week block produces the best long-term athletic physique.'
    ],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    tags: ['Powerlifting', 'Hypertrophy', 'Strength Training']
  },
  {
    id: 'b2',
    title: 'The Science of Cold Water Immersion & Infrared Sauna Therapy',
    category: 'Recovery',
    authorName: 'Aria Thorne',
    authorImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=200&q=80',
    readTime: '6 min read',
    date: 'August 4, 2026',
    summary: 'Contrast therapy is more than a wellness trend. Learn how 3-minute cold plunges at 44°F paired with 15-minute sauna heat shocks flush lactate and reduce DOMS.',
    content: [
      'Recovery is where muscle adaptation occurs. Contrast therapy leverages rapid vasoconstriction followed by vasodilation to pump oxygenated blood straight into sore muscle tissues.',
      'Cold immersion triggers norepinephrine release, boosting alertness, dopamine, and mental resilience for hours after leaving the tub.',
      'We recommend 10-15 minutes in our cedar sauna followed by 2-3 minutes in the cold plunge for 2-3 cycles.'
    ],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    tags: ['Recovery', 'Cold Plunge', 'Sauna', 'Biohacking']
  },
  {
    id: 'b3',
    title: 'Macro Counting 101: Fueling Your High-Intensity HIIT Days',
    category: 'Nutrition',
    authorName: 'Marcus Vance',
    authorImage: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=200&q=80',
    readTime: '4 min read',
    date: 'July 29, 2026',
    summary: 'Crushing a 650 kcal HIIT workout requires proper intra-workout glycogen stores. Here is how to calculate your daily carbs, protein, and essential fats.',
    content: [
      'Carbohydrates are your body’s primary fuel for high-glycolytic sprint intervals. Stripping carbs too low cripples workout performance and delays muscle repair.',
      'Aim for 1.6–2.2 grams of protein per kilogram of body weight to keep muscle protein synthesis elevated throughout your training week.',
      'Hydration is non-negotiable: pair sodium, potassium, and magnesium with your water bottle before heavy turf sessions.'
    ],
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    tags: ['Nutrition', 'Macros', 'HIIT Fueling', 'Performance']
  }
];

export const FAQS_DATA = [
  {
    question: 'How does the 7-Day Free Trial work?',
    answer: 'Simply click any "Start Free Trial" button on the site, fill out your goal and preferred date, and you will immediately receive a digital pass with a QR code. Show it at our reception for full access to facilities and group classes for 7 consecutive days with no commitment.'
  },
  {
    question: 'Are there any hidden contract fees or long-term commitments?',
    answer: 'No hidden fees ever! Our monthly memberships operate on a transparent month-to-month basis with a simple 30-day cancellation notice. Annual memberships lock in a 20% discount with an upfront annual rate.'
  },
  {
    question: 'What should I bring for my first class or visit?',
    answer: 'Bring comfortable workout clothes, supportive cross-training or lifting shoes, a water bottle, and a sweat towel. We provide digital locker locks, filtered water refilling stations, and keyless entry.'
  },
  {
    question: 'Can I bring a guest with me?',
    answer: 'Yes! Pro Fitness members get 2 free guest passes per month, while Elite VIP members can bring a guest with them on every single visit.'
  },
  {
    question: 'What are the peak and off-peak hours?',
    answer: 'Our peak hours are weekdays from 06:00 AM – 09:00 AM and 05:00 PM – 08:00 PM. Off-peak hours (10:00 AM – 04:00 PM and weekends) offer extra spacious access across all training floors.'
  }
];
