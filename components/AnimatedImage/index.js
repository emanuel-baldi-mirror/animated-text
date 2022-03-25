import { AnimatePresence, motion } from "framer-motion";

const AnimatedImage = (props) => {
	console.log(props);
	return (
		<AnimatePresence>
			<motion.img
				key={props.image.src}
				className="block m-0 absolute t-0 l-0 w-[80%]"
				src={props.image.src}
				alt="image"
				initial={{ x: 300, opacity: 0, rotate: "45deg" }}
				animate={{ x: 0, opacity: 1, rotate: "5deg" }}
				exit={{ y: "100%", opacity: 0, rotate: "-45deg", transition: { duration: 1 } }}
			/>
		</AnimatePresence>
	);
};

export default AnimatedImage;
