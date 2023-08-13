import React from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

interface IStickyCard {
  position: "left" | "right";
  minIcon: string;
  title: string;
  children?: React.ReactNode;
}

function StickyCard(props: IStickyCard) {
  const { position, title, children } = props;

  const cardStyle = classNames(styles.stickyCard, {
    [styles.left]: position === "left",
    [styles.right]: position === "right",
  });

  return (
    <aside className={cardStyle}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{children}</div>
    </aside>
  );
}

export default StickyCard;
