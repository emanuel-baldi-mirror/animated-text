import { motion } from "framer-motion";

const Letter = (props) => {
	return (
		<motion.span
			className={`text-yellow-50 text-shadow-xl cursor-default ${
				props.char === " " ? "px-4" : ""
			}`}
			variants={props.variants}
			exit={props.variants.exit}>
			{props.char}
		</motion.span>
	);
};

export default Letter;
