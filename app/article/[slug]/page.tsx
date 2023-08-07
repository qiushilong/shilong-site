"use client";
import React, { useState, useEffect } from "react";
import Markdown from "@/components/markdown";
import styles from "./page.module.scss";

interface IArticle {
  params: { slug: string };
}

function Article({ params: { slug } }: IArticle) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(`/markdowns/${slug}.md`)
      .then((res) => res.text())
      .then((text) => {
        setMarkdown(text);
      });
  }, []);

  return (
    <section className={styles.article}>
      <Markdown markdown={markdown}></Markdown>
    </section>
  );
}

export default Article;
