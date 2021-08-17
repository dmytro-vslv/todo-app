import { useSelector } from "react-redux";
import "./Checkbox.css";

const Checkbox = ({ checked, onChange }) => {
	const darkMode = useSelector(state => state.darkMode.darkMode);

	return (
		<label className={`checkbox ${darkMode ? "checkbox--dark" : ""}`}>
			<input className="checkbox__input" type="checkbox" checked={checked} onChange={onChange} />
			<span className="checkbox__checkmark"></span>
		</label>
	);
};

export default Checkbox;
