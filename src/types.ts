export type ProjectCategory = 'All' | 'Beauty' | 'Automotive' | 'Restaurant' | 'Education' | 'Business';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categoryType: 'Beauty' | 'Automotive' | 'Restaurant' | 'Education' | 'Business';
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  mockupType: 'beauty' | 'automotive' | 'restaurant' | 'education' | 'business';
  deliverables: string[];
  client: string;
  year: string;
  location: string;
  accentColor: string;
  metrics: { label: string; value: string }[];
  keyFeatures: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  targetAudience: string;
  sampleDeliverables: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceUsd: number;
  priceUzs: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  turnaroundTime: string;
}

export interface ContactFormData {
  name: string;
  business: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
}
