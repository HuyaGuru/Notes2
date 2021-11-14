import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	list: [
		{ title: "Untitled", text: "" },
		{
			title: "Bio Class",
			date: 1633545000000,
			text: "Mitochondria is the power house of the cell.",
		},
		{
			title: "Refill",
			date: 1633545000000,
			text: "1kg Tomatoes\n1kg Onions",
		},
		{
			title: "Movies",
			date: 1633545000000,
			text: "Godzilla: King of Monsters",
		},
	],
};

export const cards = createSlice({
	name: "cards",
	initialState,
	reducers: {
		push: (state, action) => {
			let temp = {
				title: "",
				date: "",
				text: "",
			};
			if (action.payload.value.title) {
				temp.title = action.payload.value.title;
			}
			if (action.payload.value.date) {
				temp.date = action.payload.value.date;
			}
			if (action.payload.value.text) {
				temp.text = action.payload.value.text;
			}
			state.list.push(temp);
		},
		splice: (state, action) => {
			for (let i = 0; i < action.payload.length; i++) {
				if (action.payload.positions[i] === true) {
					state.list.splice(i, 1);
				}
			}
		},
		replace: (state, action) => {
			state.list[action.payload.index] = {
				title: action.payload.title,
				date: action.payload.date,
				text: action.payload.text,
			};
		},
	},
});

export const { push, splice, replace } = cards.actions;

export default cards.reducer;
