import React from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";

function logo() {
  const router = useRouter();
  return (
    <section className={styles.logo} onClick={() => router.push("/")}>
      <div className={styles.logoFont}>DDU</div>
    </section>
  );
}

export default logo;
