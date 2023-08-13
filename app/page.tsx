import Link from "next/link";
import styles from "./page.module.css";
import ArticleItem from "./articleItem";
import { articleList } from "./data/article";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        {articleList.map((article) => (
          <Link href={`/article/${article.id}`}>
            <ArticleItem {...article} key={article.id} />
          </Link>
        ))}
      </div>
    </main>
  );
}
