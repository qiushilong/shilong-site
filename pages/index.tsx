import Header from "components/header";
import Bear from "components/bear";
import Snowing from "components/snowing";

import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <Header></Header>
      {/* <Bear></Bear> */}
      <Snowing></Snowing>
    </div>
  );
}
