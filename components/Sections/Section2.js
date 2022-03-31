import { useRef } from "react";
import Carousel from "../Carousel";

const Section2 = () => {
	const carousel1 = useRef(null);
	const carousel2 = useRef(null);
	const titles = ["Lorem", "ipsum", "dolor", "consectetur", "adipiscing"];
	const titleVariants = {
		start: {},
	};

	const goToNext = () => {
		carousel1.current.slideNext();
		carousel2.current.slideNext();
	};
	const goToPrev = () => {
		carousel1.current.slidePrev();
		carousel2.current.slidePrev();
	};

	return (
		<div className="w-full min-h-screen h-1 bg-slate-800 ">
			<div className="flex flex-col justify-center h-full p-[6vw] pb-[2vw] relative overflow-y-auto overflow-x-hidden">
				<div className="h-full relative">
					<div className="h-full w-[60%] overflow-x-hidden  flex flex-col justify-center text-center  z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
						{/* <div className="flex w-full justify-around"> */}
						<Carousel ref={carousel1}>
							{titles.map((title, titleIndex) => {
								return (
									<div
										key={`r1-${title}-${titleIndex}`}
										className=" w-[70%] flex-shrink-0 text-center justify-around m-auto">
										<h1 className="uppercase text-[6vw] text-white ">{title}</h1>
									</div>
								);
							})}
						</Carousel>
						{/* </div> */}
					</div>
					<div className="h-full w-[60%]  flex flex-col justify-center text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
						<div className="flex w-full justify-around">
							<Carousel ref={carousel2} style={{ overflow: "visible", width: "100%" }}>
								{titles.map((title, titleIndex) => {
									return (
										<div
											key={`r1-${title}-${titleIndex}`}
											className=" w-[70%] flex-shrink-0 text-center justify-around m-auto">
											<h1 className="uppercase text-[6vw] text-slate-800 text-stroked">
												{title}
											</h1>
										</div>
									);
								})}
							</Carousel>
						</div>

						{/* <div className="flex w-full justify-around">
							{titles.map((title, titleIndex) => {
								return (
									<div
										key={`r2-${title}-${titleIndex}`}
										className=" w-[70%] flex-shrink-0 text-center justify-around">
										<h1 className="uppercase text-[8vw] text-red-500 ">{title}</h1>
									</div>
								);
							})}							
						</div> */}
					</div>
				</div>
				<div className="flex p-8 w-[50%] justify-center m-auto">
					<div className="p-8">
						<button
							className="text-xl font-bold border-2 border-black rounded px-8 py-2 bg-slate-400 hover:bg-slate-300 transition-all"
							onClick={() => goToPrev()}>
							PREV
						</button>
					</div>
					<div className="p-8">
						<button
							className="text-xl font-bold border-2 border-black rounded px-8 py-2 bg-slate-400 hover:bg-slate-300 transition-all"
							onClick={() => goToNext()}>
							NEXT
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section2;
