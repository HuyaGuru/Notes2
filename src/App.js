// import { BrowserView, MobileView } from "react-device-detect";
import React from "react";
import { Suspense } from "react";

const MobileHome = React.lazy(() => import("./components/mobile/Home"));

function App() {
	return (
		<>
			{/* <MobileView> */}
			<Suspense fallback={<div>Loading...</div>}>
				<MobileHome />
			</Suspense>
			{/* </MobileView> */}
		</>
	);
}

export default App;
