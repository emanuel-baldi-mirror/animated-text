import { motion } from "framer-motion";
import Letter from "./Letter";

const Line = (props) => {
	const sentence = {
		hidden: { opacity: 1, y: 0 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 6,
				delayChildren: props.lineDelay,
				staggerChildren: props.delay,
			},
		},
	};
	const letter = {
		hidden: {
			opacity: 0,
			rotate: "45deg",
			y: props.direction === "up" ? "100%" : "-100%",
		},
		visible: {
			opacity: 1,
			y: 0,
			rotate: 0,
			transition: { duration: props.duration, type: "spring", bounce: 0.3 },
		},
		exit: {
			y: props.direction === "up" ? "100%" : "-100%",
			opacity: 0,
			scale: 0,
			rotate: "-35deg",
			transition: { delay: 0 },
		},
	};

	return (
		<motion.h3
			className="flex overflow-hidden text-[3vw] uppercase line-height-1"
			variants={sentence}
			initial="hidden"
			animate="visible">
			{props.line.split("").map((char, index) => {
				return <Letter key={char + "-" + index} char={char} variants={letter} />;
			})}
		</motion.h3>
	);
};

export default Line;
