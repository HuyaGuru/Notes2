import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	list: [false, false, false, false],
};

const checks = createSlice({
	name: "checks",
	initialState,
	reducers: {
		push: (state, action) => {
			state.list.push(action.payload.value);
		},
		replace: (state, action) => {
			state.list[action.payload.position] = action.payload.value;
		},
		remove: (state) => {
			for (let i = 0; i < state.list.length; i++) {
				if (state.list[i] === true) {
					state.list.splice(i, 1);
				}
			}
		},
	},
});

export const { push, splice } = checks.actions;

export default checks.reducer;
