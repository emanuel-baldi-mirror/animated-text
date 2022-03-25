import { motion } from "framer-motion";

const Menu = (props) => {
	return (
		<motion.a
			drag
			dragSnapToOrigin={true}
			dragElastic={1}
			dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
			dragConstraints={{
				top: 50,
				right: 50,
			}}
			href="#"
			whileDrag={{ scale: 1.2 }}
			whileHover={{ rotate: "15deg" }}
			initial={{ top: 50, right: 50 }}
			className="z-10 fixed text-center font-bold text-xl pointer border-8 rounded-full w-20 h-20 bg-slate-200 flex flex-col justify-center"
			onClick={props.onClick}>
			MENU
		</motion.a>
	);
};
export default Menu;
