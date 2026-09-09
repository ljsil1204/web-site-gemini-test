export interface ResearchArea {
  id: string;
  number: string;
  title: string;
  englishTitle: string;
  summary: string;
  keywords: string[];
  keyQuestions: string[];
}

export interface CoreValue {
  id: string;
  title: string;
  englishTitle: string;
  description: string;
  quote: string;
}

export interface SocialLink {
  name: string;
  iconName: 'mail' | 'bookOpen' | 'linkedin' | 'github' | 'fileText' | 'globe';
  url: string;
  label: string;
  description: string;
}

export interface PortfolioProfile {
  name: string;
  nameHanja?: string;
  nameEnglish: string;
  role: string;
  affiliation: string;
  email: string;
  heroHeadline: string;
  heroCatchphrase: string;
  heroIntro: string;
  aboutHeadline: string;
  aboutPhilosophy: string[];
  coreValues: CoreValue[];
  researchAreas: ResearchArea[];
  socialLinks: SocialLink[];
}
