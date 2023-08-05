import React, { CSSProperties } from "react";
import classNames from "classnames";
import { shrinkNumber } from "@/utils/number";
import styles from "./index.module.scss";

interface IFeedback {
  type: "thumb" | "unlike" | "comment" | "views";
  num: number;
  style?: CSSProperties;
}

function typeToIcon(type: IFeedback["type"]) {
  switch (type) {
    case "thumb":
      return "thumbs-up";
    case "unlike":
      return "thumbs-down";
    case "comment":
      return "edit-square";
    case "views":
      return "eye";
  }
}

function Feedback({ type, num, style }: IFeedback) {
  const iconStyle = classNames(
    "iconfont",
    `icon-${typeToIcon(type)}`,
    styles.icon
  );

  return (
    <span className={styles.feedback} style={style}>
      <span className={iconStyle} />
      <span className={styles.num}>{shrinkNumber(num)}</span>
    </span>
  );
}

export default Feedback;
