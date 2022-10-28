import { useState, useEffect, FC } from "react";
import Image from "next/image";

import snowPng from "./snow.png";

import styles from "./snow.module.scss";

interface SnowProps {}

type PositionType = {
	x: number;
	y: number;
};

const Snow: FC<SnowProps> = (props) => {
	const [size] = useState<number>(Math.random() * 20);
	const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 });
	const [delay] = useState<number>(Math.random() * 20000);

	useEffect(() => {
		const bottomY = window.innerHeight - size - 20;
		const xRange = 100+Math.random() * window.innerWidth;
		setPosition({ x: xRange, y: 0 });

		let timer: NodeJS.Timer;

		setTimeout(() => {
			timer = setInterval(() => {
				setPosition((position) => {
					if (position.y + 5 > bottomY) {
						// clearInterval(timer);
						return { x: xRange, y: 0 };
					}

					return { x: position.x, y: position.y + 5 };
				});
			}, 10);
		}, delay);

		return () => {
			clearInterval(timer);
		};
	}, []);

	const ImageStyles = {
		width: size,
		height: size,
		top: position.y,
		left: position.x,
	};

	return (
		<>
			<Image
				src={snowPng}
				alt="snow"
				style={ImageStyles}
				className={styles.snow}
			/>
		</>
	);
};

export default Snow;
