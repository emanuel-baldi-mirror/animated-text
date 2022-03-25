import { useState } from "react";
import { motion } from "framer-motion";
import { PRIMARY_SENTENCE, SECONDARY_SENTENCE } from "../config/config";
import Menu from "../components/Menu";
import AnimatedText from "../components/AnimatedText";
import AnimatedImage from "../components/AnimatedImage";

import img1 from "../public/images/image1.jpg";
import img2 from "../public/images/image3.jpg";

export default function Home() {
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
			className="w-full h-screen overflow-hidden"
			variants={variants}>
			<div className="flex flex-col justify-center h-full p-[8vw]">
				<div className="flex h-full">
					<Menu onClick={handleClick} />
					<div className="w-[60%] flex flex-col justify-center ">
						<AnimatedText
							isMenuVisible={isMenuVisible}
							primarySentence={PRIMARY_SENTENCE}
							secondarySentence={SECONDARY_SENTENCE}
						/>
					</div>
					<div className="w-[40%] p-12 flex flex-col justify-center relative">
						<AnimatedImage image={isMenuVisible ? img2 : img1} />
					</div>
				</div>
			</div>
		</motion.div>
	);
}
