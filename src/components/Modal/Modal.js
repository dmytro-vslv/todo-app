import { useSelector, useDispatch } from "react-redux";
import { editTodo, togglePinTodo, addTodoNote, deleteTodo } from "../../redux/actions/todo";
import { GoPin } from "react-icons/go";
import { MdModeEdit } from "react-icons/md";
import { FaRegStickyNote } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import "./Modal.css";

const Modal = ({ className, id, completed, pinned, note, modalIsOpen }) => {
	const darkMode = useSelector(state => state.darkMode.darkMode);
	const dispatch = useDispatch();

	const handleEditTodo = () => {
		dispatch(editTodo({ id, pinned }));
	};

	const handleTogglePinTodo = () => {
		dispatch(togglePinTodo({ id, pinned }));
	};

	const handleAddTodoNote = () => {
		dispatch(addTodoNote({ id, pinned }));
	};

	const handleDeleteTodo = () => {
		dispatch(deleteTodo({ id, pinned }));
	};

	return (
		<div
			className={`${className} modal ${darkMode ? "modal--dark" : ""} ${modalIsOpen ? "modal--open" : ""}`}
		>
			{!completed && (
				<button className="modal__button" onClick={handleEditTodo}>
					<MdModeEdit className="modal__icon" />
					Edit
				</button>
			)}

			<button className="modal__button" onClick={handleTogglePinTodo}>
				<GoPin className="modal__icon" />
				{pinned ? "Unpin" : " Pin"}
			</button>

			{!note.length && !completed && (
				<button className="modal__button" onClick={handleAddTodoNote}>
					<FaRegStickyNote className="modal__icon" />
					Add a note
				</button>
			)}

			<button className="modal__button" onClick={handleDeleteTodo}>
				<FaTrashAlt className="modal__icon" />
				Delete
			</button>
		</div>
	);
};

export default Modal;
