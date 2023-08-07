import React, { useMemo } from "react";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import "./notion-light-enhanced.css";
// import "highlight.js/scss/idea.scss";
import "./index.scss";

interface IMarkdown {
  markdown: string;
}

const md = new MarkdownIt({
  html: true,
  linkify: true,
  highlight: function (str, lang): string {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          `<pre class="hljs"><code>` +
          hljs.highlight(lang, str, true).value +
          "</code></pre>"
        );
      } catch (__) {}
    }
    return (
      '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>"
    );
  },
});

function render(markdown: string) {
  return md.render(markdown);
}

function Markdown({ markdown }: IMarkdown) {
  const __html = useMemo(() => render(markdown), [markdown]);

  return <section dangerouslySetInnerHTML={{ __html }}></section>;
}

export default Markdown;
