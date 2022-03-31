import React, { useCallback, useMemo, useState } from "react";

import { MotionValue, PanInfo } from "framer-motion";

import { animateSpring } from "./utils";

function calcItemWidth(ref, count, margin) {
	if (!ref.current) {
		return 0;
	}

	const { width } = ref.current.getBoundingClientRect();

	return (width - margin * (count - 1)) / count + margin;
}

export function usePan({ count, index, margin, ref }) {
	const [initial] = useState(() => ({
		dragging: false,
		index: index.get(),
		itemWidth: calcItemWidth(ref, count, margin),
	}));

	const onTouchMove = useCallback((event) => {
		// Prevent vertical scroll on mobile
		event.preventDefault();
	}, []);

	const onPanStart = useCallback(() => {
		// Stop active animation
		index.stop();

		initial.dragging = true;
		initial.index = index.get();
		initial.itemWidth = calcItemWidth(ref, count, margin);

		document.documentElement.addEventListener("touchmove", onTouchMove, {
			passive: false,
		});
	}, [ref, count, index, initial, margin, onTouchMove]);

	const onPan = useCallback(
		(_, info) => {
			const newIndex = initial.index - info.offset.x / initial.itemWidth;

			index.set(newIndex);
		},
		[index, initial]
	);

	const onPanEnd = useCallback(
		(event, info) => {
			// Prevent click after drag
			initial.dragging = false;

			if (event instanceof MouseEvent) {
				event.target?.addEventListener(
					"click",
					(e) => {
						e.preventDefault();
					},
					{ once: true }
				);
			}

			// Adjust position
			let newIndex;

			if (info.velocity.x > 100) {
				newIndex = Math.floor(index.get());
			} else if (info.velocity.x < -100) {
				newIndex = Math.ceil(index.get());
			} else {
				newIndex = Math.round(index.get());
			}

			animateSpring(index, newIndex);

			document.documentElement.removeEventListener("touchmove", onTouchMove);
		},
		[index, initial, onTouchMove]
	);

	return useMemo(
		() => ({
			onPanStart,
			onPan,
			onPanEnd,
		}),
		[onPanStart, onPan, onPanEnd]
	);
}
