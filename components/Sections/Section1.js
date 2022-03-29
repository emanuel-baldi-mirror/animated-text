import { useState } from "react";
import { motion } from "framer-motion";
import { PRIMARY_SENTENCE, SECONDARY_SENTENCE } from "../../config/config";
import Menu from "../Menu";
import AnimatedText from "../AnimatedText";
import AnimatedImage from "../AnimatedImage";

import img1 from "../../public/images/image4.jpg";
import img2 from "../../public/images/image5.jpg";

const Section1 = () => {
	const [isMenuVisible, setIsMenuVisible] = useState(false);

	const handleClick = () => {
		setIsMenuVisible((prevValue) => !prevValue);
	};

	const variants = {
		page: { backgroundColor: "#94a3b8" },
		menu: { backgroundColor: "#e06963" },
	};
	return (
		<motion.div
			animate={isMenuVisible ? "menu" : "page"}
			className="w-full min-h-screen h-1 overflow-hidden"
			variants={variants}>
			<Menu onClick={handleClick} />
			<div className="flex flex-col justify-center h-full p-[8vw] relative">
				<div className="z-10">
					<AnimatedText
						isMenuVisible={isMenuVisible}
						primarySentence={PRIMARY_SENTENCE}
						secondarySentence={SECONDARY_SENTENCE}
					/>
				</div>
				<div className="h-full w-[30%] absolute right-[5%] -top-1/2 translate-y-1/2">
					<div className="flex flex-col justify-center h-full">
						<AnimatedImage image={isMenuVisible ? img2 : img1} />
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Section1;
