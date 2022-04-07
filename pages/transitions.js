import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Router, useRouter } from "next/router";

const Transitions = () => {
	const router = useRouter();

	const handleChangePage = () => {
		router.push("/");
	};

	return (
		<div className="w-full min-h-screen h-1">
			<div className="flex h-full flex-col justify-center relative overflow-hidden">
				<div className="flex justify-center ">
					<div>
						<motion.div className="font-bold text-8xl">What?</motion.div>
					</div>

					<Link
						href={"/"}
						className="absolute z-20 bottom-12 left-1/2 -translate-x-1/2 border-2 border-slate-400 py-2 px-8 rounded-xl"
						onClick={handleChangePage}>
						CLICCKAME
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Transitions;
