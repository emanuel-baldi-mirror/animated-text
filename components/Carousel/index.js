import React, { useCallback, useImperativeHandle } from "react";

import { motion, useMotionValue } from "framer-motion";

import { Slider } from "./components/Slider";
import { useAutoplay } from "./utils/useAutoplay";
import { useOnChange } from "./utils/useOnChange";
import { OnPan, usePan } from "./utils/usePan";
import { animateSpring } from "./utils/utils";

const MotionSlider = motion(Slider);

const Carousel = React.forwardRef(
	(
		{
			autoplayInterval = 0,
			count = 1,
			children,
			draggable = false,
			margin = 0,
			onChange,
			...props
		},
		ref
	) => {
		const sliderRef = React.useRef(null);
		const index = useMotionValue(0);

		useOnChange({
			childrenCount: React.Children.count(children),
			index,
			onChange,
		});

		const autoplay = useAutoplay(index, autoplayInterval);

		useImperativeHandle(
			ref,
			() => ({
				slideNext: () => {
					autoplay.start();

					const roundIndex = Number(index.get().toFixed(4));

					animateSpring(index, Math.ceil(roundIndex + 1));
				},
				slidePrev: () => {
					autoplay.start();

					const roundIndex = Number(index.get().toFixed(4));

					animateSpring(index, Math.floor(roundIndex - 1));
				},
				slideTo: (newIndex) => {
					autoplay.start();

					animateSpring(index, newIndex);
				},
			}),
			[autoplay, index]
		);

		const panHandlers = usePan({
			count,
			index,
			margin,
			ref: sliderRef,
		});

		const onPanStart = useCallback(
			(...args) => {
				autoplay.stop();

				panHandlers.onPanStart(...args);
			},
			[autoplay, panHandlers]
		);

		const onPanEnd = useCallback(
			(...args) => {
				autoplay.start();

				panHandlers.onPanEnd(...args);
			},
			[autoplay, panHandlers]
		);

		let panProps = {};
		if (draggable) {
			panProps = {
				onPanStart,
				onPan: panHandlers.onPan,
				onPanEnd,
			};
		}

		return (
			<MotionSlider
				ref={sliderRef}
				index={index}
				count={count}
				margin={margin}
				{...panProps}
				{...props}>
				{children}
			</MotionSlider>
		);
	}
);

Carousel.displayName = "Carousel";
export default Carousel;
