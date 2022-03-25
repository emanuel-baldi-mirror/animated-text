import { AnimatePresence } from "framer-motion";
import Lines from "./components/Lines";

const AnimatedText = (props) => {
	return (
		<AnimatePresence exitBeforeEnter>
			{!props.isMenuVisible ? (
				<Lines key="line1" sentence={props.primarySentence} direction="up" />
			) : (
				<Lines key="line2" sentence={props.secondarySentence} direction="down" />
			)}
		</AnimatePresence>
	);
};

export default AnimatedText;
