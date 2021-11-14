import React, { Suspense } from "react";
import { useSelector } from "react-redux";

import "./Home.css";

const Home = () => {
	const open = useSelector((state) => state.card.open);

	const Header = React.lazy(() => import("./Header"));
	const Cards = React.lazy(() => import("./Cards"));
	const NoteHeader = React.lazy(() => import("./NoteHeader"));
	const Pad = React.lazy(() => import("./Pad"));

	return (
		<>
			{!open && (
				<>
					<Suspense fallback={<div>Loading...</div>}>
						<Header />
						<Cards />
					</Suspense>
				</>
			)}
			{open && (
				<>
					<Suspense fallback={<div>Loading...</div>}>
						<NoteHeader />
						<Pad />
					</Suspense>
				</>
			)}
		</>
	);
};

export default Home;
