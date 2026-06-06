# Oitis & Meave — Luxury Indian Wedding Website (Phase 1)

Cinematic midnight-blue-and-gold wedding experience. Phase 1 ships three highest-impact sections polished to a top-tier bar.

## Phase 1 Scope

1. **Opening Sequence** — animated monogram reveal, floating gold petals + particles, soft glow, "tap to enter" with optional ambient music toggle, smooth zoom-out into the hero.
2. **Hero** — full-screen midnight sky, starfield + drifting petals, "Oitis ❤ Meave", tagline, live countdown, wedding date/venue, Save the Date CTA, scroll indicator.
3. **Wedding Details** — luxury glass cards for Ceremony, Reception, and Traditional Functions (Mehendi, Haldi, Sangeet) with premium iconography, dates/times/venues as editable placeholders.

Plus a shared **shell**: smooth scroll (Lenis), persistent music toggle, fixed elegant nav, footer stub, global subtle mandala SVG + gold particle backdrop.

## Design System

Tokens in `src/styles.css`:
- `--midnight #071A3D`, `--midnight-deep #03102A`, `--royal-gold #D4AF37`, `--gold-bright #F5D27A`, `--rose-gold #C9A2A0`, `--ivory #F8F1E4`
- Semantic tokens (`--background`, `--primary`, `--accent`) mapped via `@theme inline`.

Typography (loaded via `<link>` in `__root.tsx`):
- Display: **Cinzel**
- Serif: **Playfair Display**, **Cormorant Garamond**
- Body: **Poppins**

Effects: glassmorphism (backdrop-blur + 1px gold border + soft inner glow), gold radial gradients, subtle noise, tinted shadows.

## Imagery (AI-generated → `src/assets/`)

Cinematic midnight-blue + gold, no identifiable faces (silhouettes / hands / detail shots):
- `monogram-om.png` (transparent) — ornate O&M monogram with mandala filigree
- `hero-bg.jpg` — starry midnight sky over silhouetted palace skyline
- `mandala-1.png`, `mandala-2.png` (transparent) — decorative motifs
- `petal.png` (transparent) — single gold marigold petal for particles

## Animation Stack

- **Framer Motion** — section reveals, hero text, glass card hovers, monogram reveal
- **GSAP** — parallax + subtle scroll effects
- **Lenis** — global smooth scroll, wired into GSAP ticker
- Reduced-motion guard.

## File Layout

```text
src/
  styles.css                      # palette, fonts, tokens, utility classes
  routes/
    __root.tsx                    # font <link>s, Lenis provider, music context
    index.tsx                     # composes Phase 1 sections
  components/wedding/
    OpeningSequence.tsx
    Hero.tsx
    Countdown.tsx
    WeddingDetails.tsx
    GlassCard.tsx
    ParticleField.tsx             # canvas: gold particles + petals
    Monogram.tsx                  # animated SVG
    MandalaBackdrop.tsx
    MusicToggle.tsx
    Nav.tsx
    Footer.tsx
  lib/
    wedding-data.ts               # single edit point for date/venue/details
    useLenis.ts
    useReducedMotion.ts
```

## Placeholder Content

Date: **Saturday, February 13, 2027**. Ceremony at *Taj Falaknuma Palace, Hyderabad*. Reception at *The Leela Palace, Udaipur*. All copy in `src/lib/wedding-data.ts`.

## Dependencies to Add

`framer-motion`, `gsap`, `lenis`.

## Technical Notes

- TanStack Start single `src/routes/index.tsx` for Phase 1.
- Tailwind v4 tokens via `@theme` in `src/styles.css`.
- Particle canvas capped ~60 particles, paused off-screen via IntersectionObserver.
- Countdown hydration-safe (zeros on SSR, mount fills in).
- GSAP registered client-side only.
- Music toggle: hidden `<audio loop>`, defaults muted (autoplay policy).
- Hero image eager; rest lazy.

## Out of Scope (Phase 2)

Love Story, Schedule, Couple Showcase, Family, Venue+Maps, Gallery, Blessings, FAQ, full Footer.
