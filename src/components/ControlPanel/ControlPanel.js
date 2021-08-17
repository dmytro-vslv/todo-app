import { useDispatch, useSelector } from "react-redux";
import { deleteCompletedTodos } from "../../redux/actions/todo.js";
import "./ControlPanel.css";

const ControlPanel = ({ className }) => {
	const allTodos = useSelector(state => state.todo);
	const darkMode = useSelector(state => state.darkMode.darkMode);
	const dispatch = useDispatch();

	const incompleteTodos = allTodos.todos.filter(todo => !todo.completed && !todo.pinned).length;
	const incompletePinnedTodos = allTodos.pinnedTodos.filter(todo => !todo.completed).length;
	const totalIncompleteTodos = incompleteTodos + incompletePinnedTodos;

	const message =
		totalIncompleteTodos >= 2 || totalIncompleteTodos === 0
			? `${totalIncompleteTodos} items left`
			: `${totalIncompleteTodos} item left`;

	const handleDeleteCompletedTodos = () => {
		dispatch(deleteCompletedTodos());
	};

	return (
		<div className={`${className} control-panel ${darkMode ? "control-panel--dark" : ""}`}>
			<span className="control-panel__message">{message}</span>

			<button className="control-panel__button" onClick={handleDeleteCompletedTodos}>
				Clear Completed
			</button>
		</div>
	);
};

export default ControlPanel;
