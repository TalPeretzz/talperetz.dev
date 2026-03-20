export interface NavItem {
  label: string;
  href: string;
}

export interface BottomNavItem {
  label: string;
  href: string;
  icon: string; // Material Symbols Outlined icon name
}

export interface HeroContent {
  desktopHeading: string;
  mobileHeading: string;
  subtitle: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export interface AboutContent {
  desktopHeading: string;
  mobileHeading: string;
  paragraphs: string[];
  mobileParagraphs: string[];
  stats: { label: string; value: string }[];
}

export interface Article {
  title: string;
  summary: string;
  meta: string;
  href: string;
  ctaLabel: string;
}

export interface WritingSectionContent {
  heading: string;
  description: string;
  footerNote: string;
}

export interface Skill {
  icon: string;
  title: string;
  description: string;
}

export interface ExpertiseCategory {
  icon: string;
  title: string;
  items: string[];
}


export interface SocialLink {
  label: string;
  displayText: string;
  href: string;
  icon: string;
}

export interface ContactContent {
  label: string;
  heading: string;
  description: string;
  ctaLabel: string;
}

export interface FooterContent {
  name: string;
  copyright: string;
}
