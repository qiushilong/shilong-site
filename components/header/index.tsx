import { useState } from "react";
import Modal from "../modal";
import routeData from "./route";
import styles from "./index.module.scss";

const projectInfo = [
	{
		key: "etsy",
		name: "儿童摄影网站",
		link: "",
	},
	{
		key: "wyy",
		name: "网易云",
		link: "http://43.142.178.115:8080/",
	},
];

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

	const openProject = (link: string) => {
		window.open(link);
	};

  console.log('styles',styles);
  

	return (
		<header className={styles.header}>
			<div className={styles.logo} onClick={toIndex}>
				个人网站
			</div>

			<nav className={styles.nav}>
				<div className={styles.link} onClick={openModal}>
					项目
				</div>
				{routeData.map((item) => (
					<div key={item.key} className={styles.link}>
						{item.name}
					</div>
				))}
			</nav>

			<Modal visibile={modalVisible} onClose={closeModal}>
				<ul className={styles.projectInfo2}>
					{projectInfo.map((item) => (
						<li className={styles.project} key={item.key} onClick={() => openProject(item.link)}>
							{item.name}
						</li>
					))}
				</ul>
			</Modal>
		</header>
	);
};

export default Header;
