import React from "react";

import { motion, useMotionTemplate, useTransform } from "framer-motion";

import { ItemWrapper } from "./ItemWrapper";

export const Slider = React.forwardRef(function Slider(
	{ children, style = {}, margin, count, index, ...props },
	ref
) {
	const childrenCount = React.Children.count(children);
	const tail = childrenCount - count;
	const frameWidth = 100 / childrenCount;

	const startIndex = useTransform(index, (value) => {
		if (!tail) {
			return 0;
		}

		if (value >= 0) {
			return (Math.floor(value / tail) * tail) % childrenCount;
		}

		return (
			(childrenCount + ((Math.ceil(value / tail) * tail - tail) % childrenCount)) %
			childrenCount
		);
	});

	const translate = useTransform(index, (value) => {
		if (!tail) {
			return 0;
		}

		if (value >= 0) {
			return frameWidth * (value % tail);
		}

		return frameWidth * (tail + (value % tail));
	});

	const containerStyle = {
		...style,

		// https://github.com/framer/motion/issues/281
		touchAction: "pan-y",
	};

	const transform = useMotionTemplate`translateX(-${translate}%)`;

	const sliderStyle = {
		height: "100%",
		transform,
		willChange: "transform",
		display: "flex",
		width: `calc(((100% - ${
			(count - 1) * margin
		}px) / ${count} + ${margin}px)*${childrenCount})`,
	};

	return (
		<div ref={ref} style={containerStyle} {...props}>
			<motion.div style={sliderStyle} layout>
				{React.Children.map(children, (child, i) => (
					<ItemWrapper
						childrenCount={childrenCount}
						index={i}
						margin={margin}
						startIndex={startIndex}>
						{child}
					</ItemWrapper>
				))}
			</motion.div>
		</div>
	);
});
