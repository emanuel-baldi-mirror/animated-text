import { AnimatePresence, motion } from "framer-motion";

const Letter = (props) => {
	return (
		<motion.span
			className={`text-yellow-50 cursor-default ${props.char === " " ? "px-4" : ""}`}
			variants={props.variants}
			exit={props.variants.exit}>
			{props.char}
		</motion.span>
	);
};

export default Letter;
