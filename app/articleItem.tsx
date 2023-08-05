import React from "react";
import Image from "next/image";
import Tag, { type ITag } from "@/components/tag";
import Feedback from "@/components/feedback";
import styles from "./articleItem.module.scss";

export interface IArticleItem {
  id: number;
  title: string;
  descrition: string;
  cover?: string;
  tags?: ITag[];
}

function ArticleItem(props: IArticleItem) {
  const { title, descrition, cover, tags } = props;

  return (
    <section className={styles.articleItem}>
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.descrition}>{descrition}</p>
          <div className={styles.moreInfo}>
            <div className={styles.tags}>
              {tags?.map((tag) => (
                <Tag {...tag} style={{ marginRight: 15 }} />
              ))}
            </div>
            <div className={styles.feedbacks}>
              <Feedback type="thumb" num={100000} style={{ marginRight: 15 }} />
              <Feedback type="unlike" num={20000} style={{ marginRight: 15 }} />
              <Feedback type="comment" num={9999} style={{ marginRight: 15 }} />
              <Feedback type="views" num={902} style={{ marginRight: 15 }} />
            </div>
          </div>
        </div>
        {cover && (
          <div>
            <Image
              src={`/cover/${cover}`}
              alt={`${title}-cover`}
              width={210}
              height={120}
              style={{ objectFit: "contain" }}
            />
          </div>
        )}
      </main>
    </section>
  );
}

export default ArticleItem;
