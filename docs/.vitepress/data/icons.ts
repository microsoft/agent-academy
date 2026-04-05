// Safe to use v-html with these values — all content is hardcoded in this file,
// not derived from user input or external sources.

export const productIcons: Record<string, string> = {
  "azure":
    `<path fill="currentColor" d="M10 2.5 6.5 9l1.8 2H5l-2 3.5h12L10 2.5zm0 2.8 2.5 4.5H10L8.5 7.5 10 5.3z"/>`,

  "copilot-cowork":
    `<circle cx="7" cy="5.5" r="2.5" fill="currentColor"/>
     <circle cx="13" cy="5.5" r="2.5" fill="currentColor"/>
     <path fill="currentColor" d="M1 16c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6H1z"/>`,

  "copilot-studio":
    `<path fill="currentColor" d="M10 2l1.8 5.2L17 9l-5.2 1.8L10 16l-1.8-5.2L3 9l5.2-1.8L10 2z"/>`,

  "dataverse":
    `<ellipse cx="10" cy="5" rx="7" ry="2.5" fill="currentColor"/>
     <path fill="currentColor" d="M3 5v10c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5c0 1.4-3.1 2.5-7 2.5S3 6.4 3 5z"/>
     <ellipse cx="10" cy="10" rx="7" ry="2.5" fill="currentColor" opacity=".4"/>`,

  "github-copilot":
    `<circle cx="10" cy="9" r="7" fill="currentColor" opacity=".15"/>
     <circle cx="10" cy="9" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/>
     <circle cx="7.5" cy="8" r="1.2" fill="currentColor"/>
     <circle cx="12.5" cy="8" r="1.2" fill="currentColor"/>
     <path fill="currentColor" d="M7 12c0-1.7 1.3-3 3-3s3 1.3 3 3H7z"/>
     <path fill="currentColor" d="M6 16v-2c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v2H6z"/>`,

  "microsoft-365":
    `<rect x="2" y="2" width="7" height="7" rx="1.5" fill="#f25022"/>
     <rect x="11" y="2" width="7" height="7" rx="1.5" fill="#7fba00"/>
     <rect x="2" y="11" width="7" height="7" rx="1.5" fill="#00a4ef"/>
     <rect x="11" y="11" width="7" height="7" rx="1.5" fill="#ffb900"/>`,

  "microsoft-365-copilot":
    `<rect x="2" y="2" width="7" height="7" rx="1.5" fill="#f25022"/>
     <rect x="11" y="2" width="7" height="7" rx="1.5" fill="#7fba00"/>
     <rect x="2" y="11" width="7" height="7" rx="1.5" fill="#00a4ef"/>
     <rect x="11" y="11" width="7" height="7" rx="1.5" fill="#ffb900"/>
     <circle cx="16" cy="4" r="4" fill="white"/>
     <path fill="#5c6bc0" d="M16 1.5l.9 2.6 2.6.9-2.6.9L16 8.5l-.9-2.6-2.6-.9 2.6-.9L16 1.5z"/>`,

  "microsoft-learn":
    `<path fill="currentColor" d="M10 2L2 6l8 4 8-4-8-4zM2 10l8 4 8-4M2 14l8 4 8-4"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
       d="M10 2L2 6l8 4 8-4-8-4zM2 10l8 4 8-4M2 14l8 4 8-4"/>`,

  "outlook":
    `<rect x="2" y="4" width="16" height="13" rx="2" fill="currentColor" opacity=".15"/>
     <rect x="2" y="4" width="16" height="13" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M2 7l8 5 8-5"/>
     <circle cx="7" cy="10" r="3" fill="currentColor"/>
     <circle cx="7" cy="10" r="1.5" fill="white"/>`,

  "power-automate":
    `<path fill="currentColor" d="M15 9a5 5 0 01-5 5V17l-5-5 5-5v3a2 2 0 100-4 2 2 0 010-4 6 6 0 015 6z"/>`,

  "power-platform":
    `<path fill="currentColor" d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z"/>
     <path fill="currentColor" d="M10 6a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z"/>`,

  "sharepoint":
    `<rect x="2" y="2" width="16" height="16" rx="3" fill="currentColor" opacity=".15"/>
     <rect x="2" y="2" width="16" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="1.5"/>
     <text x="10" y="14" text-anchor="middle" font-size="10" font-weight="700" fill="currentColor" font-family="sans-serif">S</text>`,

  "teams":
    `<circle cx="7.5" cy="6" r="2.5" fill="currentColor"/>
     <circle cx="14" cy="5" r="2" fill="currentColor" opacity=".7"/>
     <path fill="currentColor" d="M2 16c0-3 2.5-5 5.5-5S13 13 13 16H2z"/>
     <path fill="currentColor" opacity=".7" d="M13 11c1.7 0 4 1 4 3.5h-4V11z"/>`,

  "visual-studio-code":
    `<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
       d="M7 5L3 10l4 5M13 5l4 5-4 5M11 3l-2 14"/>`,
};

export const tagIcons: Record<string, string> = {
  "adaptive-cards":
    `<rect x="2" y="4" width="16" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/>
     <path fill="currentColor" d="M5 8h6v1.5H5zm0 3h10v1.5H5z" opacity=".7"/>
     <rect x="5" y="7" width="4" height="4" rx="1" fill="currentColor" opacity=".3"/>`,

  "ai-safety":
    `<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"
       d="M10 2l7 3v5c0 4-3 7-7 8C6 17 3 14 3 10V5l7-3z"/>
     <path fill="currentColor" d="M8.5 10.5l-2-2 1-1 1 1 3-3 1 1-4 4z"/>`,

  "automation":
    `<circle cx="10" cy="10" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
       d="M10 3v2M10 15v2M3 10h2M15 10h2M5.1 5.1l1.4 1.4M13.5 13.5l1.4 1.4M5.1 14.9l1.4-1.4M13.5 6.5l1.4-1.4"/>`,

  "compliance":
    `<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"
       d="M10 2l7 3v5c0 4-3 7-7 8C6 17 3 14 3 10V5l7-3z"/>
     <path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
       d="M7 10l2 2 4-4"/>`,

  "completion":
    `<circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
     <path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
       d="M6.5 10.5l2.5 2.5 5-5"/>`,

  "custom-skills":
    `<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
       d="M13 2l2 2-9 9H4v-2l9-9zM12 3l3 3"/>
     <path fill="currentColor" d="M3 15h14v1.5H3z" opacity=".5"/>`,

  "declarative-agents":
    `<rect x="3" y="3" width="14" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/>
     <path fill="currentColor" d="M6 7h8v1.5H6zm0 3h5v1.5H6z" opacity=".7"/>
     <path fill="currentColor" d="M8 17l-2-3h8l-2 3H8z"/>`,

  "document-generation":
    `<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"
       d="M5 2h7l4 4v13H4V2h1z"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5" d="M12 2v4h4"/>
     <path fill="currentColor" d="M6 9h8v1.5H6zm0 3h6v1.5H6z" opacity=".7"/>`,

  "feedback":
    `<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"
       d="M3 3h14v11H3z"/>
     <path fill="currentColor" d="M7 19l3-5h4l-7 5z"/>
     <path fill="currentColor" d="M6 7h8v1.5H6zm0 3h5v1.5H6z" opacity=".7"/>`,

  "finance":
    `<circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
     <text x="10" y="14" text-anchor="middle" font-size="10" font-weight="700" fill="currentColor" font-family="sans-serif">$</text>`,

  "fundamentals":
    `<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
       d="M10 2L2 7v11h16V7L10 2z"/>
     <rect x="7" y="11" width="6" height="7" fill="currentColor" opacity=".4"/>`,

  "grounding":
    `<circle cx="10" cy="8" r="5" fill="none" stroke="currentColor" stroke-width="1.5"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
       d="M10 13v5M6 18h8"/>`,

  "instructions":
    `<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"
       d="M4 2h12v16H4z"/>
     <path fill="currentColor" d="M6 6h8v1.5H6zm0 3h8v1.5H6zm0 3h5v1.5H6z" opacity=".7"/>`,

  "licensing":
    `<rect x="3" y="4" width="14" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5" d="M3 8h14"/>
     <circle cx="10" cy="12" r="1.5" fill="currentColor" opacity=".6"/>`,

  "mcp":
    `<rect x="6" y="2" width="8" height="4" rx="1" fill="currentColor" opacity=".7"/>
     <path fill="currentColor" d="M9 6h2v4H9z"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
       d="M5 10H3v4h2M15 10h2v4h-2"/>
     <rect x="5" y="10" width="10" height="8" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/>`,

  "models":
    `<circle cx="10" cy="10" r="3" fill="currentColor"/>
     <circle cx="4" cy="6" r="2" fill="currentColor" opacity=".5"/>
     <circle cx="16" cy="6" r="2" fill="currentColor" opacity=".5"/>
     <circle cx="4" cy="14" r="2" fill="currentColor" opacity=".5"/>
     <circle cx="16" cy="14" r="2" fill="currentColor" opacity=".5"/>
     <path fill="none" stroke="currentColor" stroke-width="1" opacity=".4"
       d="M6 7.2l2.5 1.8M13.5 7.2L11 9M6 12.8l2.5-1.8M13.5 12.8L11 11"/>`,

  "multi-agent":
    `<circle cx="10" cy="5" r="2.5" fill="currentColor"/>
     <circle cx="4.5" cy="14" r="2.5" fill="currentColor" opacity=".7"/>
     <circle cx="15.5" cy="14" r="2.5" fill="currentColor" opacity=".7"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5" d="M10 7.5v3l-4 2M10 10.5l4 2"/>`,

  "multimodal":
    `<rect x="2" y="3" width="10" height="8" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.5"/>
     <path fill="currentColor" d="M4 6h6v1.5H4z" opacity=".5"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5" d="M8 11v3M14 7v8"/>
     <circle cx="14" cy="5" r="2" fill="currentColor" opacity=".7"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M12 17h4"/>`,

  "prebuilt-agents":
    `<rect x="3" y="5" width="14" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/>
     <circle cx="7.5" cy="9" r="1.2" fill="currentColor"/>
     <circle cx="12.5" cy="9" r="1.2" fill="currentColor"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M7 12.5c.8 1 2.5 1 3 0"/>
     <path fill="currentColor" d="M7 3h2v3H7zM11 3h2v3h-2z" opacity=".7"/>`,

  "prompting":
    `<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
       d="M3 5h14M3 9h10M3 13h7"/>
     <path fill="currentColor" d="M15 11l4 3-4 3v-6z"/>`,

  "publishing":
    `<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
       d="M10 3v10M6 7l4-4 4 4"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M3 15v2h14v-2"/>`,

  "setup":
    `<circle cx="10" cy="10" r="2.5" fill="none" stroke="currentColor" stroke-width="1.5"/>
     <path fill="none" stroke="currentColor" stroke-width="1.5"
       d="M10 2v2M10 16v2M2 10h2M16 10h2M4.2 4.2l1.5 1.5M14.3 14.3l1.5 1.5M4.2 15.8l1.5-1.5M14.3 5.7l1.5-1.5"/>`,

  "solutions":
    `<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"
       d="M5 3h10l2 4-7 10L3 7l2-4z"/>
     <path fill="none" stroke="currentColor" stroke-width="1" d="M3 7h14M10 17V7"/>`,

  "topics":
    `<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"
       d="M3 3h14v10H3z"/>
     <path fill="currentColor" d="M8 19l-2-6h8l-2 6H8z"/>
     <path fill="currentColor" d="M6 7h8v1.5H6z" opacity=".7"/>`,

  "triggers":
    `<path fill="currentColor" d="M11 2L5 11h5l-1 7 6-9h-5l1-7z"/>`,

  "yaml":
    `<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
       d="M4 4h3l3 5 3-5h3M10 9v7M6 17h8"/>`,
};
