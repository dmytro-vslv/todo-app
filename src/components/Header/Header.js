import { useSelector } from "react-redux";
import Container from "../Container/Container";
import ModeToggler from "../ModeToggler/ModeToggler";
import InputField from "../InputField/InputField";
import "./Header.css";

const Header = ({ search, setSearch }) => {
	const darkMode = useSelector(state => state.darkMode.darkMode);

	return (
		<header className={`header ${darkMode ? "header--dark" : ""}`}>
			<Container className="header__content">
				<h2 className="header__logo">TODO</h2>

				<ModeToggler className="header__toggler" />

				<InputField search={search} setSearch={setSearch} />
			</Container>
		</header>
	);
};

export default Header;
