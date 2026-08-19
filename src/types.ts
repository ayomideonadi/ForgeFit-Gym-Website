export type ThemeMode = 'dark' | 'light';

export type PageId = 'home' | 'memberships' | 'classes' | 'trainers' | 'about' | 'contact' | 'blog' | 'calculator' | '404';

export interface ClassItem {
  id: string;
  title: string;
  category: 'Strength' | 'HIIT' | 'Yoga' | 'Boxing' | 'Recovery';
  trainerId: string;
  trainerName: string;
  trainerImage: string;
  day: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
  time: string;
  durationMinutes: number;
  burnKcal: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  description: string;
  room: string;
  capacity: number;
  enrolled: number;
}

export interface TrainerItem {
  id: string;
  name: string;
  title: string;
  specialty: 'Strength' | 'HIIT' | 'Yoga' | 'Combat';
  bio: string;
  image: string;
  experienceYears: number;
  certifications: string[];
  quote: string;
  featuredClasses: string[];
  schedule: { day: string; time: string; className: string }[];
}

export interface MembershipPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnual: number;
  popular?: boolean;
  tag: string;
  description: string;
  features: string[];
  nonFeatures?: string[];
  buttonText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  result: string;
  quote: string;
  rating: number;
  image: string;
  avatar: string;
}

export interface FacilityPhoto {
  id: string;
  title: string;
  category: 'Weight Floor' | 'Cardio Zone' | 'Turf Track' | 'Recovery' | 'Boxing';
  image: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Training' | 'Nutrition' | 'Recovery' | 'Mindset';
  authorName: string;
  authorImage: string;
  readTime: string;
  date: string;
  summary: string;
  content: string[];
  image: string;
  tags: string[];
}

export interface FreeTrialFormData {
  name: string;
  email: string;
  phone: string;
  goal: string;
  preferredDay: string;
  preferredTime: string;
}

export interface ToastState {
  show: boolean;
  message: string;
  type: 'success' | 'info';
}
