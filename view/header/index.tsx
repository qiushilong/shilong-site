import { useState } from "react";
import Modal from "components/modal";
import routeData from "./route";
import styles from "./index.module.scss";

const projectInfo = [
  {
    key: "rt-ui",
    name: "rt-ui",
    link: "http://43.142.178.115:8001",
  },
  {
    key: "wyy",
    name: "仿网易云移动端网页",
    link: "http://43.142.178.115:8080/",
  },
  {
    key: "etsy",
    name: "儿童摄影网站",
    link: "http://43.142.178.115:9001",
  },
  {
    key: "yk",
    name: "优客移动端",
    link: "https://shilong-ddu.gitee.io/ddu.gitee.io/project/youke/01-index.html",
  },
  {
    key: "xm",
    name: "小米首页",
    link: "https://shilong-ddu.gitee.io/ddu.gitee.io/project/mishop/index.html",
  },
  {
    key: "wzry",
    name: "网站荣耀首页",
    link: "https://shilong-ddu.gitee.io/ddu.gitee.io/project/%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%AE%98%E7%BD%91/index.html",
  },
];

const openProject = (link: string) => {
  window.open(link);
};

const ProjectList = (
  <ul className="projectInfo">
    {projectInfo.map((item) => (
      <li
        className="project"
        key={item.key}
        onClick={() => openProject(item.link)}
        style={{
          margin: 10,
          cursor: "pointer",
        }}
      >
        {item.name}
      </li>
    ))}
  </ul>
);

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
        shilong.site
      </div>

      <nav className={styles.nav}>
        <div className={styles.link} onClick={openModal}>
          项目
        </div>
        {routeData.map((item) => (
          <div
            key={item.key}
            className={styles.link}
            onClick={() => openProject(item.link)}
          >
            {item.name}
          </div>
        ))}
      </nav>

      <Modal visibile={modalVisible} onClose={closeModal}>
        {ProjectList}
      </Modal>
    </header>
  );
};

export default Header;
