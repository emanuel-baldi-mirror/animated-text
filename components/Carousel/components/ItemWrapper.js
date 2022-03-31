import React from "react";

import {
	MotionStyle,
	MotionValue,
	motion,
	useMotionTemplate,
	useTransform,
} from "framer-motion";

export function ItemWrapper({ children, childrenCount, index, margin, startIndex }) {
	const pos = useTransform(
		startIndex,
		(value) => (value <= index ? -value : childrenCount - value) * 100
	);
	const transform = useMotionTemplate`translateX(${pos}%)`;

	const style = {
		boxSizing: "border-box",
		flex: 1,
		transform,
		willChange: "transform",
		paddingRight: margin,
	};

	return <motion.div style={style}>{children}</motion.div>;
}
