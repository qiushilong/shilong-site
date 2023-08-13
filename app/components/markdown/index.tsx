import React, { useMemo, useState, useImperativeHandle } from "react";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import "./notion-light-enhanced.scss";
// import "highlight.js/scss/idea.scss";
import "./index.scss";

export interface IMarkdown {
  markdown: string;
  titleParseCallback?: (titleList: [string, string][]) => void;
}

export interface IMarkdownRef {
  getTitleList: () => [string, string][];
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
  const result = md.render(markdown);
  // console.log("key: result", `\nvalue: `, result);
  return result;
}

function parseALlTitle(html: string): [string, string][] {
  const matchResult =
    html.match(/<h(\d)>.*?<\/h\1>/g)?.map((matchItem) => {
      return matchItem.match(/<h(\d)>(.*?)<\/h\1>/)?.slice(1, 3) as [
        string,
        string
      ];
    }) || [];
  return matchResult;
}

function Markdown(
  { markdown, titleParseCallback }: IMarkdown,
  ref: React.ForwardedRef<IMarkdownRef>
) {
  const [titleList, setTitleList] = useState<[string, string][]>([]);
  const __html = useMemo(() => {
    if (!markdown) {
      return "";
    }
    const html = render(markdown);
    const newTitleList = parseALlTitle(html);
    setTitleList(newTitleList);
    titleParseCallback?.(newTitleList);
    return html;
  }, [markdown]);

  useImperativeHandle(
    ref,
    () => {
      return {
        getTitleList: () => titleList,
      };
    },
    [titleList]
  );

  return (
    <section dangerouslySetInnerHTML={{ __html }} id="__markdown_cmp"></section>
  );
}

export default React.forwardRef(
  (props: IMarkdown, ref: React.ForwardedRef<IMarkdownRef>) =>
    Markdown(props, ref)
);
