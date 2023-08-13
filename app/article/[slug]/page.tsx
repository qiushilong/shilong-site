"use client";
import React, { useState, useEffect, useRef } from "react";
import Markdown, { type IMarkdownRef } from "@/components/markdown";
import StickyCard from "@/components/stickyCard";
import styles from "./page.module.scss";
import { articleList } from "@/data/article";

interface IArticle {
  params: { slug: string };
}

function Article({ params: { slug } }: IArticle) {
  const [markdown, setMarkdown] = useState("");
  const [titleList, setTitleList] = useState<[string, string][]>([]);
  const markdownRef = useRef<React.Ref<IMarkdownRef>>(null);

  useEffect(() => {
    const article = articleList.find((article) => article.id === slug);
    if (article) {
      fetch(`/markdowns/${article.markdownName}.md`)
        .then((res) => res.text())
        .then((text) => {
          setMarkdown(text);
        });
    }
    const tl = markdownRef.current?.getTitleList();
    console.log("key: tl", `\nvalue: `, tl, styles);
  }, []);

  return (
    <section className={styles.articleWrapper}>
      <StickyCard position="left" minIcon="" title="目录">
        <ul>
          {titleList
            .filter((titleItem) => ["2", "3"].includes(titleItem[0]))
            .map((titleItem, index) => (
              <li
                key={titleItem[1] + index}
                className={styles["h" + titleItem[0]]}
              >
                {titleItem[1]}
              </li>
            ))}
        </ul>
      </StickyCard>
      <div className={styles.article}>
        <Markdown
          markdown={markdown}
          ref={markdownRef}
          titleParseCallback={(list) => setTitleList(list)}
        ></Markdown>
      </div>
      <StickyCard position="right" minIcon="" title="更多" />
    </section>
  );
}

export default Article;
