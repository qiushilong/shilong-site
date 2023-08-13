import React from "react";
import Image from "next/image";
import Tag, { type ITag } from "@/components/tag";
import Feedback from "@/components/feedback";
import styles from "./articleItem.module.scss";
import { IArticleItem } from "./data/article";

function ArticleItem(props: IArticleItem) {
  const { title, descrition, cover, tags, thumb, unlike, comment, views } =
    props;

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
              <Feedback type="thumb" num={thumb} style={{ marginRight: 15 }} />
              <Feedback
                type="unlike"
                num={unlike}
                style={{ marginRight: 15 }}
              />
              <Feedback
                type="comment"
                num={comment}
                style={{ marginRight: 15 }}
              />
              <Feedback type="views" num={views} style={{ marginRight: 15 }} />
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
