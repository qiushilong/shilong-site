import styles from "./page.module.css";
import ArticleItem, { type IArticleItem } from "./articleItem";

const articleList: IArticleItem[] = [
  {
    id: 1,
    title: "在 vue3 中，我是如何使用 icon 图标的",
    descrition:
      "本文介绍三种使用icon的方案，分别是element-icon、svg-icon、@iconify/vue。1. element-iconElement Plus 提供了一套常用的图标集合。",
    cover: "1.png",
    tags: [
      {
        content: "js",
        type: "success",
      },
      {
        content: "promise",
        type: "warning",
      },
    ],
  },
  {
    id: 2 ,
    title: "在 vue3 中，我是如何使用 icon 图标的",
    descrition:
      "本文介绍三种使用icon的方案，分别是element-icon、svg-icon、@iconify/vue。1. element-iconElement Plus 提供了一套常用的图标集合。",
    cover: "1.png",
    tags: [
      {
        content: "js",
        type: "success",
      },
      {
        content: "promise",
        type: "warning",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        {articleList.map((article) => (
          <ArticleItem {...article} key={article.id} />
        ))}
      </div>
    </main>
  );
}
