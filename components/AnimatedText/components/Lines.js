import { DELAY, DURATION, MAX_WORDS_FOR_ROW } from "../../../config/config";
import Line from "./Line";

const Lines = (props) => {
	const lines = splitByWordCount(props.sentence);

	function splitByWordCount(str, count = MAX_WORDS_FOR_ROW) {
		var arr = str.split(" ");
		var r = [];
		while (arr.length) {
			r.push(arr.splice(0, count).join(" "));
		}
		return r;
	}

	const getDelayForLine = (index) => {
		let lineDelay = 0;
		for (let i = 0; i < index; i++) {
			lineDelay += lines[i].length * DELAY + DURATION - DURATION * 0.9;
		}
		return lineDelay;
	};

	return (
		<div>
			{lines.map((line, index) => {
				return (
					<Line
						key={"line-" + index}
						line={line}
						delay={DELAY}
						lineDelay={getDelayForLine(index)}
						duration={DURATION}
						direction={props.direction}
					/>
				);
			})}
		</div>
	);
};
export default Lines;
