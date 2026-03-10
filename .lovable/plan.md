

# WePix — Full Website Build Plan

## Overview
A bold, modern multi-section website for WePix Digital Media Group, inspired by **mesaschool.co** and **posthog.com/handbook** aesthetics. All 17+ pages built as a single React app with route-based sections. CTAs link to external tools (Cal.com, Skool). Copy taken directly from the content document.

---

## Phase 1: Foundation & Global Components

### Global Navigation
- Mega-style top nav: **Home | Fashion | Academy | Business | About | Contact | [Book a Call]** (CTA button)
- Context-aware sticky subnav that appears inside each brand section (Fashion, Academy, Business) with section-specific links
- Mobile hamburger menu

### Footer
- WePix logo + tagline: "Digital Media. Built Different."
- Quick links, social icons (Instagram, YouTube, LinkedIn), cross-brand links, addresses, legal links

### Floating WhatsApp Button
- Fixed bottom-right WhatsApp widget on all pages, linking to `wa.me` with pre-filled message

---

## Phase 2: Core Pages

### Home (`/`)
1. **Hero** — Full-width dark section, bold headline, two CTAs ("Explore WePix" + "Book a Free Strategy Call")
2. **Numbers Bar** — Animated counter strip (clients served, ad spend managed, etc.)
3. **Brand Navigator** — Four large clickable cards for Fashion, Academy, Business, Sourcing
4. **Case Studies Teaser** — Taasza, BoonBabies, Nutmeg with stats
5. **Manifesto Teaser** — 2-3 punchy lines + CTA to full manifesto
6. **Founders Section** — Abdul Navas + Santhosh with bios
7. **Footer CTA Banner** — "Ready to stop winging it?" + Book a Call CTA

### About (`/about`)
- Hero with origin story, photo timeline section, team cards with LinkedIn links, culture values (4 cards), Google Maps embeds for Tirupur & Bangalore

### Manifesto (`/manifesto`)
- PostHog-handbook inspired layout: sticky sidebar TOC on left, long-form content on right. 10 chapters with scroll-highlight navigation

### Contact (`/contact`)
- Two paths: "Book a Strategy Call" (Cal.com link) + "Drop a Message" (static form UI linking externally)
- Google Maps embeds for both offices

---

## Phase 3: Fashion Section (`/fashion/*`)

### Fashion Overview (`/fashion`)
- Hero with video placeholder, two CTAs
- Problem/agitation section ("You've got a great product. So why aren't you selling?")
- Three services cards (Kickstarter, Shopify + WePixStudio, Meta Ads)
- **WePixStudio Spotlight** — Before/after image slider (hero feature)
- 4-Pillar MCS Framework — animated step diagram
- Case studies teaser + CTA banner

### Kickstarter Program (`/fashion/kickstarter`)
- Program details (duration, who it's for, what's included), FAQ accordion

### WePixStudio (`/fashion/wepixstudio`)
- AI content tool explainer, multiple before/after sliders, use cases grid

### Case Studies (`/fashion/case-studies`)
- Card-based layout per brand: problem → approach → result with stats

### Book a Call (`/fashion/book`)
- Cal.com link with intro copy and bullet points of what the call covers

---

## Phase 4: Academy Section (`/academy/*`)

### Academy Overview (`/academy`)
- Hero with two CTAs (course + webinar), three offering cards, "Who it's for" checklist, instructor credibility, course preview, webinar teaser, community teaser

### Meta Ads Course (`/academy/meta-ads-course`)
- **Sales page layout** (no standard nav): Hero with price → Pain → What you get → Curriculum breakdown → Instructor → Social proof → FAQ → Final CTA

### Webinar (`/academy/webinar`)
- Next webinar details + past recordings grid + registration CTA

### Community (`/academy/community`)
- Skool community showcase with screenshots, member count, benefits, CTA to join

---

## Phase 5: Business Section (`/business/*`)

### Business Overview (`/business`)
- Hero, 7-service grid (Organic Lead Gen, Meta Ads B2B, Google Ads, Enterprise Ads, Websites, AI Agents, Video), AI Agents spotlight, Mentorship teaser, lead form CTA

### AI Agents (`/business/ai-agents`)
- Full explainer: what AI agents do, 5 use cases, industries served, CTA

### Mentorship (`/business/mentorship`)
- Premium mentorship program details, Skool-based, application CTA

### Business Contact (`/business/contact`)
- Lead form UI + Cal.com booking link, Bangalore office info

---

## Design Direction
- **Inspired by mesaschool.co + posthog.com**: Clean typography, generous whitespace, editorial feel, dark hero sections with light content areas
- **GenZ tone** throughout — confident, punchy copy from the document
- Animated counters on scroll, smooth section transitions
- Dark overlay heroes, bold white headings, accent color CTAs
- Mobile-responsive throughout
- Before/after image comparison sliders for WePixStudio sections

