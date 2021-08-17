import { useDispatch, useSelector } from "react-redux";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { toggleDarkMode } from "../../redux/actions/darkMode";
import iconSun from "../../images/icon-sun.svg";
import iconMoon from "../../images/icon-moon.svg";
import "./ModeToggler.css";

const ModeToggler = ({ className }) => {
	const darkMode = useSelector(state => state.darkMode.darkMode);
	const dispatch = useDispatch();
	const modeIcon = darkMode ? iconMoon : iconSun;

	return (
		<button className={`${className} mode-toggler`} onClick={() => dispatch(toggleDarkMode())}>
			<SwitchTransition>
				<CSSTransition
					key={darkMode}
					addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
					classNames="mode-toggler__icon-"
				>
					<img className="mode-toggler__icon" src={modeIcon} alt="Mode" />
				</CSSTransition>
			</SwitchTransition>
		</button>
	);
};

export default ModeToggler;
