import React, { CSSProperties } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

export interface ITag {
  content: string;
  type: "success" | "danger" | "primary" | "normal" | "warning";
  style?: CSSProperties;
}

function Tag({ content, type, style }: ITag) {
  const tagClassName = classNames(styles.tag, styles[type]);

  return (
    <span className={tagClassName} style={style}>
      {content}
    </span>
  );
}

export default Tag;
