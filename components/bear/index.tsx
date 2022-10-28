import { useState, useEffect, useRef } from "react";

import Image from "next/image";
import bearPng from "./bear.png";

import styles from "./index.module.scss";

const Bear = () => {
	const [step, setStep] = useState<number>(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setStep((step) => (step === 5 ? 0 : step + 1)); // React 闭包陷阱
		}, 100);
		return () => {
			clearInterval(timer);
		};
	}, []);

	const imgStyles = {
		transform: `translateX(${step * -200}px)`,
	};

	return (
		<div className={styles.bear}>
			<Image src={bearPng} alt="bear" style={imgStyles} />
		</div>
	);
};

export default Bear;
