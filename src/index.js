import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { store } from "./store/store";
import persistor from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import App from "./App";

import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
// serviceWorkerRegistration.register();
