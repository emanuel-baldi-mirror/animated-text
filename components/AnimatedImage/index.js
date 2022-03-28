import { AnimatePresence, useAnimation, motion } from "framer-motion";

import Image from "./components/Image";

const AnimatedImage = (props) => {
	return (
		<AnimatePresence exitBeforeEnter>
			<Image key={props.image.src} src={props.image.src} alt="img" />
		</AnimatePresence>
	);
};

export default AnimatedImage;
