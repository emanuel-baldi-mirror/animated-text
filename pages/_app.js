import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
	const [isChanging, setIsChanging] = useState("idle");

	const pageVariants = {
		idle: {
			y: "0",
			top: "0",
			height: "0",
			opacity: "1",
			transition: { duration: 0.5 },
		},

		animate: {
			y: "0",
			top: "0",
			height: "100vh",
			opacity: "1",
			transition: { duration: 0.5 },
		},
		exit: {
			y: "0",
			top: "100vh",
			opacity: "1",
			transition: { duration: 0.5 },
		},
	};

	const router = useRouter();

	useEffect(() => {
		Router.events.on("routeChangeStart", (e) => setIsChanging("animate"));
		Router.events.on("routeChangeComplete", (e) => {
			setTimeout(() => {
				setIsChanging("exit");
			}, 500);
		});
	}, [router]);

	return (
		<AnimatePresence exitBeforeEnter>
			{isChanging === "animate" && (
				<motion.div
					key={isChanging}
					variants={pageVariants}
					initial={"idle"}
					animate={"animate"}
					exit={"exit"}
					className="h-screen fixed top-0 left-0 w-full py-2 bg-red-200 z-40">
					FIXED CONTENT
				</motion.div>
			)}

			<motion.main
				key={1}
				variants={pageVariants}
				initial={"idle"}
				animate={isChanging}
				exit={"exit"}>
				<Component {...pageProps} />
			</motion.main>
		</AnimatePresence>
	);
}

export default MyApp;
