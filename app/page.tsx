import Link from "next/link";
import styles from "./page.module.css";
import ArticleItem, { type IArticleItem } from "./articleItem";

const articleList: IArticleItem[] = [
  {
    id: 1,
    title: "nginx",
    descrition: "nginx 基本使用",
    cover: "nginx-1.png",
    markdownName: "nginx",
    tags: [
      {
        content: "nginx",
        type: "success",
      },
      {
        content: "服务器配置",
        type: "warning",
      },
    ],
    thumb: 0,
    unlike: 0,
    comment: 0,
    views: 0,
  },
  {
    id: 2,
    title: "JavaScript 面试题",
    descrition: "JavaScript 面试题",
    cover: "js-1.png",
    markdownName: "JavaScript笔试题",
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
    thumb: 100,
    unlike: 0,
    comment: 0,
    views: 0,
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        {articleList.map((article) => (
          <Link href={`/article/${article.markdownName}`}>
            <ArticleItem {...article} key={article.id} />
          </Link>
        ))}
      </div>
    </main>
  );
}
