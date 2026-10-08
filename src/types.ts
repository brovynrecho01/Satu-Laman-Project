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

export interface BetaOfferData {
  title: string;
  badge: string;
  description: string;
  normalPrice: string;
  betaPrice: string;
  paymentTerm: string;
  slotsRemaining: number;
  totalSlots: number;
  ctaText: string;
  waMessage: string;
  guaranteeText: string;
}

export interface DeliverableFeature {
  title: string;
  description: string;
  iconName?: string;
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
