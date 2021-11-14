import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	current: 0,
	open: false,
	edit: false,
	add: false,
	text: "",
};

const card = createSlice({
	name: "card",
	initialState,
	reducers: {
		setCurrent: (state, action) => {
			state.current = action.payload.value;
		},
		setOpen: (state, action) => {
			state.open = action.payload.value;
		},
		setEdit: (state, action) => {
			state.edit = action.payload.value;
		},
		setAdd: (state, action) => {
			state.add = action.payload.value;
		},
		setText: (state, action) => {
			state.text = action.payload.value;
		},
	},
});

export const { setCurrent, setOpen, setEdit, setAdd, setText } = card.actions;

export default card.reducer;
