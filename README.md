# talperetz.dev

Personal branding website for Tal Peretz — Senior Full Stack Engineer.

Built with Next.js 16, TypeScript, and Tailwind CSS v4. Design faithfully recreated from a Google Stitch prototype.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Manrope (headlines) + Inter (body) via `next/font/google`
- **Icons**: Material Symbols Outlined

## Getting Started

### Prerequisites

- Node.js 18.18+
- npm

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm start
```

## Updating Content

All editable text lives in the `src/constants/` directory:

| File | What it controls |
|------|-----------------|
| `site-content.ts` | Hero text, about paragraphs, project cards, skills, strengths, contact copy, footer |
| `navigation.ts` | Desktop nav links, mobile bottom nav tabs |
| `social-links.ts` | Email, LinkedIn, GitHub URLs and labels |
| `cookie-categories.ts` | GDPR cookie consent category definitions |

To update content, edit the relevant constant file — no rebuild needed in dev mode.

### Replacing Project Images

Project card images are referenced in `site-content.ts` as URLs. To use local images:

1. Place images in `public/images/`
2. Update the `image` field in each project to `/images/your-image.jpg`
3. Update `next.config.ts` if removing external image domains

## Cookie Consent

GDPR-compliant cookie banner with Accept All / Reject All / Customize options.

- Preferences stored in `localStorage` under `cookie-consent-preferences`
- Categories: Necessary (always on), Analytics (opt-in), Marketing (opt-in)
- Footer includes a "Cookie Settings" link to reopen the banner
- Ready for future analytics integration — check consent with `isCategoryAllowed("analytics")` from `lib/cookies.ts`

## Project Structure

```
src/
  app/
    layout.tsx              Root layout (fonts, metadata, skip-to-content, cookie consent)
    page.tsx                Main page (assembles all sections)
    styles/
      base.css              Tailwind directives, resets, a11y utilities
      tokens.css            Design system tokens (colors, typography, spacing)
      patterns.css          Blueprint grid, ghost border, glass nav, animations

  components/
    layout/                 Navbar, MobileMenu, BottomNav, Footer
    sections/               HeroSection, AboutSection, ProjectsSection,
                            ExpertiseSection, StrengthsSection, ContactSection
    ui/                     Button, SectionLabel, ProjectCard, SkillCard,
                            StrengthCard, SkipToContent, CookieConsent

  constants/                All editable content and configuration
  types/                    TypeScript interfaces
  lib/                      Utility functions (cn, cookie helpers)
```

## Accessibility

- Skip-to-content link (visible on keyboard focus)
- Semantic HTML landmarks (`header`, `nav`, `main`, `section`, `article`, `footer`)
- ARIA labels on all interactive elements
- Keyboard-navigable mobile menu with focus trap
- `prefers-reduced-motion` respected — disables animations
- Color contrast meets WCAG AA/AAA standards

## Deploy to Vercel

```bash
npx vercel
```

Or connect the GitHub repo to [vercel.com](https://vercel.com) for automatic deployments on push.

## License

Private. All rights reserved.
