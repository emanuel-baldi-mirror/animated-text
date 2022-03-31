import { animate } from "framer-motion";

export function animateSpring(index, to) {
	animate(index, to, {
		bounce: 0,
		type: "spring",
		velocity: 0,
		duration: 2,
	});
}
