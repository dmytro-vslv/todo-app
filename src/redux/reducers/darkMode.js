import { TOGGLE_DARK_MODE } from "../constants/darkMode.js";

const initialState = {
	darkMode: true,
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_DARK_MODE:
			return {
				...state,
				darkMode: !state.darkMode,
			};

		default:
			return state;
	}
};

export default todoReducer;
