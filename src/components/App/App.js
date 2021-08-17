import { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import Body from "../Body/Body";
import "./App.css";

const App = () => {
	const [search, setSearch] = useState("");
	const darkMode = useSelector(state => state.darkMode.darkMode);

	return (
		<div className={`app ${darkMode ? "app--dark" : ""}`}>
			<Header search={search} setSearch={setSearch} />

			<Body className="app__body" search={search} />
		</div>
	);
};

export default App;
