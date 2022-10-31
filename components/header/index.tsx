import { useState } from "react";
import Modal from "../modal";
import routeData from "./route";
import styles from "./index.module.scss";

const Header = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const toIndex = () => {
    location.host = "www.shilong.site";
  };
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={toIndex}>
        个人网站
      </div>

      <nav className={styles.nav}>
        {routeData.map((item) => (
          <div key={item.key} className={styles.link} onClick={openModal}>
            {item.name}
          </div>
        ))}
      </nav>

      <Modal visibile={modalVisible} onClose={closeModal}>
        现在啥也没有~
      </Modal>
    </header>
  );
};

export default Header;
