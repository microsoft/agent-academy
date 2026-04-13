---
name: frontend-design
description: Use this skill when generating reports, tables, or email output to produce polished, self-contained, responsive HTML.
---

# Frontend Design

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:

- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:

- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Frontend Aesthetics Guidelines

Focus on:

- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Focus on high-impact moments: one well-orchestrated page load with staggered reveals creates more delight than scattered micro-interactions.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, and decorative borders.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), or cookie-cutter design that lacks context-specific character.

All output must be fully responsive and render correctly across desktop, tablet, and mobile screen sizes. Use fluid layouts, relative units, and media queries where needed.

## Email & Outlook Rendering

When the output is intended for email (including Outlook), **override** the general aesthetic guidelines above with the following constraints. Outlook uses the Word 2007 HTML rendering engine, which only supports a subset of HTML 4.01 and CSS 1.0.

### Layout

- **Use table-based layouts** — `<table>`, `<tr>`, `<td>` are the only reliable way to create multi-column or structured layouts. Do NOT rely on `<div>` for layout.
- Set `width` as an **HTML attribute** on `<table>` and `<td>`, not only in CSS.
- Use `cellpadding` and `cellspacing` HTML attributes on tables for spacing.
- Set `border="0"` on layout tables to prevent visible borders.

### CSS

- **Use inline styles only** — place all CSS in `style` attributes on each element. Do NOT use `<style>` blocks or external stylesheets; Outlook may strip them.
- **No CSS variables** (`var(--x)`) — Outlook ignores them entirely.
- **No shorthand gotchas** — prefer explicit properties (e.g., `border-top-width`, `border-top-style`, `border-top-color`) over shorthand when precision matters. Basic shorthand like `font`, `margin`, `border`, and `padding` is supported.
- `<span>` only supports **CORE** CSS: `color`, `font`, `font-family`, `font-style`, `font-variant`, `font-size`, `font-weight`, `text-decoration`, `background-color`, `text-align`, `vertical-align`, `letter-spacing`, `line-height`, `white-space`, `border` properties.
- `<div>` and `<p>` support **COREEXTENDED**: everything in CORE plus `text-indent`, `margin`, `margin-left`, `margin-right`, `margin-top`, `margin-bottom`.
- Most other elements (`<table>`, `<td>`, `<th>`, `<img>`, `<a>`, etc.) support **FULL** CSS: everything in COREEXTENDED plus `width`, `height`, `padding` properties, and individual `border-*` properties.

### Unsupported CSS (do NOT use in email)

`background-image`, `background-attachment`, `background-position`, `background-repeat`, `float`, `position`, `display` (in CSS2.1 context), `max-width`, `min-width`, `max-height`, `min-height`, `text-transform`, `text-shadow`, `word-spacing`, `overflow`, `clear`, `border-spacing`, `opacity`, CSS animations/transitions, `@media` queries, `@import`, `@font-face`, CSS Grid, Flexbox.

### Unsupported HTML elements (do NOT use in email)

`<form>`, `<button>`, `<input>`, `<select>`, `<option>`, `<iframe>`, `<object>`, `<script>`, `<noscript>`, `<video>`, `<audio>`, `<canvas>`, `<svg>`.

### Typography for email

- **Use web-safe font stacks only**: Arial, Helvetica, Georgia, Times New Roman, Courier New, Verdana, Tahoma, Trebuchet MS. Always include a generic fallback (`sans-serif`, `serif`, `monospace`).
- Do NOT use Google Fonts, `@font-face`, or any externally loaded fonts — Outlook will ignore them.

### Colors & backgrounds

- Use `bgcolor` HTML attribute on `<table>`, `<tr>`, and `<td>` for background colors in addition to inline `background-color` CSS for maximum compatibility.
- Use hex color codes (e.g., `#FF0000`), not `rgb()`, `rgba()`, `hsl()`, or named colors.
- **No gradients** — use solid colors only.

### Images

- Set `width` and `height` as **HTML attributes** on `<img>` tags, not only in CSS.
- Always include an `alt` attribute.
- Use `display:block` on images to prevent unwanted spacing.
- Animated GIFs render as static images in Outlook.

### Responsive design in email

- Since `@media` queries are NOT supported by Outlook, design for a **fixed width of 600px** as the standard email width.
- Use `width="100%"` on the outer wrapper table and a fixed-width inner table (e.g., `width="600"`) for consistent rendering.
- Do NOT use fluid/relative units (`vw`, `vh`, `%` on nested elements) for critical layout — Outlook ignores them in many contexts.

### General email rules

- No JavaScript of any kind.
- No event attributes (`onclick`, `onmouseover`, etc.).
- No `<iframe>` or `<frameset>` — blocked by Outlook security.
- Keep HTML simple and flat — deeply nested tables can cause rendering quirks.
