# Agent Academy Badge Specification

## Overview

Every Special Ops mission gets a unique badge image. The badge follows a strict visual template inspired by the existing "MCP JOKER" badge (raccoon in cowboy hat kicking, Agent Academy arc text, Power Platform logo, 3 stars).

## Visual Design Spec

### Shape & Background

- Overall shape: Shield/crest with circular center + banner ribbon below
- Outer shape: Dark navy (#0D1B2A) with subtle border
- Inner circle: Same dark navy with a **blue-white starburst burst/glow** radiating from center
- Circle border: Subtle lighter navy outline

### Top Arc Text

- Left arc: "AGENT" in bold white, arcing upward
- Right arc: "ACADEMY" in bold white, arcing upward
- Top center: **Power Platform logo** (the rainbow stacked overlapping squares icon, colorful)

### Center Mascot

The raccoon is the Agent Academy mascot. Core character traits are ALWAYS present:

- **Expression**: Happy/confident/action pose
- **Style**: Cartoon/anime-influenced, slightly chibi

**Mission-specific customizations** (change pose + 1-2 props):

| Mission Topic | Raccoon Pose / Props |
|---------------|---------------------|
| MCP / Server | Kicking pose (like original), holding a server rack |
| Adaptive Cards | Holding a glowing playing card or fan of cards |
| Document generation | Holding a quill or paper stack, dramatic pose |
| Multi-agent | Multiple tiny raccoons OR raccoon pointing/commanding |
| AI Safety | Shield pose, holding a stop sign or force field |
| Dataverse | Mining helmet, pickaxe, or treasure chest |
| SharePoint | Holding a filing cabinet or folder stack |
| Power Automate | Surrounded by gear icons, pressing a big button |
| Teams / Publishing | Megaphone or broadcast antenna |
| Azure / Cloud | Floating on a cloud, jetpack |
| Authentication | Key in hand, locked door behind |
| ALM / DevOps | Hard hat, blueprint/schematic |
| Analytics | Magnifying glass, detective pose |
| PAC CLI | Terminal window, typing at keyboard |

### Bottom Ribbon/Banner

- Shape: Horizontal banner/ribbon below the circle, dark navy
- Text: **Badge pun name** in bold white uppercase (e.g., "MCP JOKER", "CARD SHARK")
- Font: Heavy, military/stencil feel

### Stars

- 1-3 gold stars below the ribbon
- Filled gold stars = difficulty level (see naming-guide.md)

## Generation Approach

### Option A: AI Image Generation Prompt

Use this prompt template for DALL-E or similar:

```text
Create a badge/emblem image for a Microsoft tech training program called "Agent Academy". 

The badge has:
- A dark navy blue (#0D1B2A) circular badge shape
- At the top arc: the text "AGENT" on the left arc and "ACADEMY" on the right arc in bold white letters
- A colorful Microsoft Power Platform logo (overlapping colored square icons) centered at the very top
- A glowing blue-white starburst light burst effect radiating from the center background
- A cartoon raccoon mascot in the center wearing: dark jacket, jeans, cowboy hat, sunglasses, star sheriff badge on belt. [ADD MISSION-SPECIFIC POSE/PROPS HERE]
- A dark navy ribbon banner at the bottom with "[BADGE NAME]" in bold white capital letters
- [N] gold stars below the ribbon

Style: Polished game achievement badge, slight anime/cartoon influence, professional but fun. Dark background with glowing center. High contrast.
```

### Option B: HTML/Canvas Artifact

Generate a React artifact using Canvas API to render the badge programmatically. The artifact should:

1. Draw the circular background with starburst effect
1. Render arc text using canvas `arc()` path for text positioning
1. Include a placeholder raccoon silhouette or use an emoji (🦝) as fallback
1. Render the bottom banner with badge name
1. Render gold star SVGs for difficulty

```jsx
// Key canvas setup
const canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 580; // extra height for ribbon + stars
const ctx = canvas.getContext('2d');

// Navy background
ctx.fillStyle = '#0D1B2A';
ctx.beginPath();
ctx.arc(250, 260, 230, 0, Math.PI * 2);
ctx.fill();

// Starburst glow
const gradient = ctx.createRadialGradient(250, 260, 0, 250, 260, 230);
gradient.addColorStop(0, 'rgba(100, 180, 255, 0.4)');
gradient.addColorStop(0.5, 'rgba(60, 120, 200, 0.2)');
gradient.addColorStop(1, 'rgba(13, 27, 42, 0)');
ctx.fillStyle = gradient;
ctx.fill();

// Arc text helper
function drawArcText(ctx, text, x, y, radius, startAngle, endAngle, clockwise) {
  // ... implementation
}
```

### Option C: Ask the User

If neither option works well in context, provide:

1. The full image generation prompt (Option A)
1. Suggested tools: Adobe Firefly, DALL-E via ChatGPT, Midjourney
1. The design spec above so they can brief a designer

## File Naming

Badge images should be saved as:

- `badge.png` in the mission's `assets/` folder
- Referenced in README as: `![Mission Badge](./assets/badge.png)`

Also reference on the Special Ops overview page index entry.
