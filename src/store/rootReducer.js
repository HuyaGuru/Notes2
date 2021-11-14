import { combineReducers } from "redux";
import cardsReducer from "./features/cardsSlice";
import checksReducer from "./features/checksSlice";
import cardReducer from "./features/cardSlice";

const rootReducer = combineReducers({
	card: cardReducer,
	cards: cardsReducer,
	checks: checksReducer,
});

export default rootReducer;
