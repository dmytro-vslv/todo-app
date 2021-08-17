import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";

const saveToSessionStorage = state => {
	try {
		const serialisedState = JSON.stringify(state);
		sessionStorage.setItem("appState", serialisedState);
	} catch (error) {
		console.log(error);
	}
};

const loadFromSessionStorage = () => {
	try {
		const serialisedState = sessionStorage.getItem("appState");
		if (serialisedState === null) return undefined;
		return JSON.parse(serialisedState);
	} catch (error) {
		console.log(error);
		return undefined;
	}
};

const store = createStore(
	rootReducer,
	loadFromSessionStorage(),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToSessionStorage(store.getState()));

export default store;
