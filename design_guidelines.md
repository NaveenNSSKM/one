# Intelous Labs Design Guidelines

## Design Approach
**Reference-Based:** Following inboxapp.com's technical, precision-focused aesthetic combined with the established Intelous design system from provided examples.

## Color Palette
**From Logo & Existing System:**
- **Foundation:** `#050505` (Obsidian), `#0A0A0B` (Deep Black), `#F9F9F9` (Light mode fallback)
- **Primary Accent:** `#0057FF` (Blueprint Blue) - use for primary CTAs, links, active states
- **Secondary Accents:** `#00D1FF` (Data Cyan), `#00FF41` (Neon Green), `#FF007F` (Strategy Pink)
- **Text:** `#E0E0E0` (Main), `#888888` (Muted), `#1A1A1A` (Dark mode text)
- **Borders:** `rgba(255, 255, 255, 0.1)` for dark mode, `rgba(0, 87, 255, 0.2)` for light mode

## Typography
**Fonts:** IBM Plex Mono (technical elements) + Inter (UI/body)
- **H1:** 3.5-4.5rem, weight 700-800, letter-spacing -0.03em
- **H2:** 2-2.5rem, weight 700
- **H3:** 1.4-1.8rem, weight 600
- **Body:** 0.95-1.1rem, weight 400, line-height 1.5-1.6
- **Mono Labels:** 0.7-0.85rem, uppercase, letter-spacing 0.5-1px, IBM Plex Mono

**Technical Label Format:** `// SECTION_NAME` or `[ PILLAR XX ]` in mono font

## Layout System
**Spacing Units:** Tailwind's 2, 4, 8, 12, 16, 20, 24, 32, 40 for consistency
- Section padding: `py-20` to `py-32`
- Card padding: `p-8` to `p-10`
- Grid gaps: `gap-5` to `gap-8`

**Grid Systems:**
- **Swiss 12-column:** For capability matrices, service grids
- **3-column Bento:** For product/feature showcases
- **2-column splits:** For comparison sections (Logic vs Magic)
- Mobile: Always single column with `md:` breakpoints

## Component Library

### Cards
- **Glass Cards:** `background: rgba(20, 20, 25, 0.4)`, `backdrop-filter: blur(20px)`, `border: 1px solid rgba(255,255,255,0.1)`
- **Service Tiles:** Dark background with `data-id` labels, hover glow with neon borders
- **Blade Cards:** Horizontal full-width with left-aligned content, hover effects with left border accent

### Buttons
- **Primary:** Transparent bg, neon border (cyan/green), hover fills with glow effect
- **Mono Style:** IBM Plex Mono, uppercase, letter-spacing 1px, `px-6 py-3`
- **On Images:** Add `backdrop-filter: blur(10px)` background

### Navigation
- **Fixed Header:** `backdrop-filter: blur(10px)`, dark transparent bg, 1px bottom border
- **Toggle Switch:** Rounded pill with sliding knob, "SCALE" / "BUILD" labels

### Special Elements
- **Terminal Windows:** Black bg `#0a0a0a`, green text, monospace, simulated command output
- **Progress Bars:** Thin (4px), dark bg with cyan/green fill, subtle animations
- **Status Indicators:** Glowing dots with box-shadow, neon green for active
- **Data Tables:** Monospace font, minimal borders, cyan highlights

## Visual Effects
**Backgrounds:**
- **Grid Overlay:** `radial-gradient` dots (1px) or linear grid lines (20-40px spacing)
- **Radial Glows:** Subtle cyan/green gradients for depth, opacity 0.02-0.05

**Hover States:**
- Border transitions to accent colors
- Subtle translateY(-2px to -5px)
- Neon glow: `box-shadow: 0 0 20px rgba(accent, 0.3)`
- Drawing border animations (progressive reveal)

**Minimal Animations:**
- Only on hover states and ambient background effects
- Breathing glow on hero elements
- Slow rotating wireframe cubes
- Auto-scrolling terminal logs

## Page-Specific Patterns

### Hero Sections
- **Layout:** 2-column grid (content + visual) or centered
- **Visual:** Terminal window, 3D wireframe, or abstract tech graphic (NO generic hero images)
- **Height:** 90vh typical, never force 100vh
- **Labels:** Mono technical identifier at top

### Service Sections
- **3-column bento grid** for features
- **Blade layout** for infrastructure/tech stacks
- **Icon placement:** Top-left mono labels or schematic icons
- Hover reveals additional specs/details

### Data Visualization
- Live metrics with animated fills
- Scanner line effects for "Clean Room" concepts
- Particle animations showing data flow
- Glowing status indicators

## Images
**Use sparingly and purposefully:**
- **Team photos:** Grayscale filter, duotone hover effect (blueprint blue)
- **Product showcases:** Dark cinematic gradients, not literal screenshots
- **Background abstracts:** Mesh patterns, geometric grids, NOT stock photos
- **NO generic hero images** - use technical visualizations instead

**Hero Visual:** Custom terminal, wireframe cube, or abstract tech graphic - never stock imagery

## Accessibility
- Maintain WCAG contrast ratios with cyan/green on dark backgrounds
- Monospace text minimum 0.8rem
- Interactive elements minimum 44px touch targets
- All hover states include focus states

This system creates a **technical command center aesthetic** - precision-focused, data-driven, and unmistakably engineered.