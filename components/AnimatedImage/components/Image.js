import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";

const Image = (props) => {
	const controls = useAnimation();

	useEffect(() => {
		sequence();
	});

	const sequence = async () => {
		await controls.start("hidden");
		await controls.start("visible");
		await controls.start("rotated");
	};

	const imageVariants = {
		start: {
			x: 300,
			opacity: 0,
			transformPerspective: "1000px",
			rotateY: 0,
			transition: { delay: 8 },
		},
		hidden: {
			x: 300,
			opacity: 0,
			transformPerspective: "1000px",
			rotateY: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
		},
		rotated: {
			rotateY: "-25deg",
			transition: { delay: 0, duration: 0.8, type: "spring", stiffness: 100 },
		},
		gone: {
			y: "500px",
			opacity: 0,
			scale: 0.8,
			transition: { duration: 0.5, type: "tween", ease: "backIn" },
		},
	};
	return (
		<motion.img
			key={props.src}
			className="block m-0 absolute t-0 l-0 w-[80%] rounded-md"
			src={props.src}
			alt="image"
			variants={imageVariants}
			initial="start"
			animate={controls}
			exit="gone"
		/>
	);
};

export default Image;
