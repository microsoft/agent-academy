import type MarkdownIt from "markdown-it";

export const mermaidPlugin = (md: MarkdownIt) => {
  const fence = md.renderer.rules.fence!;

  // Override the fence renderer
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args;
    const token = tokens[idx];
    const lang = token.info.trim();

    // Check if this is a mermaid code block
    if (lang === "mermaid") {
      const code = token.content.trim();

      return `<vitepress-mermaid value="${md.utils.escapeHtml(
        code
      )}"></vitepress-mermaid>\n`;
    }

    // For non-mermaid code blocks, use the default renderer
    return fence(...args);
  };
};
