# Forever Home Roof Restoration — Design Brainstorm

## Selected Design Philosophy

**Industrial Precision Noir**

### Design Movement
Brutalist-meets-luxury contractor aesthetic — raw industrial confidence with precision editorial layout. Think high-end architecture firm meets Tampa Bay storm-hardened contractor.

### Core Principles
1. **Monochrome Dominance** — Near-black (#0a0a0a) canvas with silver (#C0C0C0) as the single accent color, used sparingly for maximum impact
2. **Typographic Authority** — DM Sans for headlines (heavy weight, tight tracking), Inter for body. Headlines break across lines deliberately for rhythm.
3. **Structured Asymmetry** — Sections alternate between full-bleed and contained layouts; cards use offset numbering (01, 02, 03) for editorial feel
4. **Trust Through Restraint** — No gradients, no color noise. Every element earns its place.

### Color Philosophy
- Background: #0a0a0a (near-black, not pure black — softer)
- Cards/panels: #111111 (slightly lighter for depth)
- Borders: #1a1a1a and #2a2a2a for subtle layering
- Silver accent: #C0C0C0 — used on numbers, underlines, CTA buttons, hover borders
- White: #FFFFFF for primary text
- Muted: #888888 for secondary text
- Emotional intent: Authority, permanence, protection — a contractor you trust with your home

### Layout Paradigm
- Full-width hero with left-aligned text (not centered)
- Stats strip as a horizontal band
- Service cards in numbered grid (01–04)
- Two-column alternating sections (text/visual)
- Full-width CTA bands with large typography

### Signature Elements
1. **Silver accent underline** beneath key phrases in H1s (italic span with silver border-bottom)
2. **Numbered service cards** with large silver numerals (01, 02, 03...) as visual anchors
3. **Thin silver horizontal rule** separating section headers from content

### Interaction Philosophy
- Hover: silver border appears on cards (border-[#C0C0C0])
- Buttons: scale(0.97) on active, 160ms ease-out
- Nav: transparent → solid #111111 on scroll with backdrop-blur

### Animation
- Scroll-triggered fade-up using Framer Motion (initial: opacity 0, y: 30 → animate: opacity 1, y: 0)
- Stagger children by 80ms in grid sections
- Nav transition: 200ms ease-out
- No bouncy springs — everything is controlled and deliberate

### Typography System
- Display/H1: DM Sans 700, -0.03em letter-spacing, large (clamp 3rem–5rem)
- H2: DM Sans 600, -0.02em
- H3/Card titles: DM Sans 600
- Body: Inter 400, 1.7 line-height
- Accent italic: DM Sans 700 italic for the silver-underlined key phrases
- Muted labels: Inter 500, uppercase, 0.1em letter-spacing, #888888
