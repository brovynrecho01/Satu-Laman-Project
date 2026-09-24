export interface NavItem {
  label: string;
  href: string;
}

export interface SolutionFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceDisplay: string;
  priceSubtitle?: string;
  description: string;
  isPopular?: boolean;
  features: string[];
  ctaLabel: string;
  waMessage: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface DemoItem {
  id: string;
  title: string;
  category: string;
  description: string;
  badge: string;
  location: string;
  highlights: string[];
}
