import React from "react";

import { animateSpring } from "./utils";

export function useAutoplay(index, interval) {
	const timer = React.useRef(0);

	const stop = React.useCallback(() => {
		if (!timer.current) {
			return;
		}

		window.clearInterval(timer.current);
		timer.current = 0;
	}, [timer]);

	const start = React.useCallback(() => {
		stop();

		if (!interval) {
			return;
		}

		timer.current = window.setInterval(() => {
			animateSpring(index, Math.floor(index.get() + 1));
		}, interval);
	}, [index, interval, timer, stop]);

	React.useEffect(() => {
		start();

		return () => {
			stop();
		};
	}, [start, stop]);

	return { start, stop };
}
