import { useEffect } from "react";
import Snowing from "lib/snowing";
import Header from "view/header";
import Bear from "components/bear";

import styles from "./index.module.scss";

export default function Home() {
  useEffect(() => {
    const snowing = new Snowing(50);
    snowing.start();
    return () => {
      snowing.end();
    };
  }, []);

  return (
    <div className={styles.home}>
      <Header></Header>
      {/* <Bear></Bear> */}
    </div>
  );
}
