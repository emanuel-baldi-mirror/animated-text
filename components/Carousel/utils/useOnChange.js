import { useEffect } from "react";

export function useOnChange({ childrenCount, index, onChange }) {
	useEffect(() => {
		let prevIndex = 0;

		const unsubscribe = index.onChange((value) => {
			if (!onChange) {
				return;
			}

			const newIndex =
				((Math.round(value) % childrenCount) + childrenCount) % childrenCount;
			if (newIndex === prevIndex) {
				return;
			}

			prevIndex = newIndex;

			onChange(newIndex);
		});

		return () => {
			unsubscribe();
		};
	}, [index, childrenCount, onChange]);
}
