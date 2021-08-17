import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, updateTodo, toggleTodoModal } from "../../redux/actions/todo";
import Checkbox from "../Checkbox/Checkbox";
import Modal from "../Modal/Modal";
import { GoPin } from "react-icons/go";
import { FaEllipsisH } from "react-icons/fa";
import { AiOutlineFileDone } from "react-icons/ai";
import "./TodoItem.css";

const TodoItem = ({ id, title, note, completed, pinned, edited, modalIsOpen }) => {
	const [todo, setTodo] = useState({ title, note });
	const darkMode = useSelector(state => state.darkMode.darkMode);
	const dispatch = useDispatch();

	const handleChange = e => {
		setTodo({ ...todo, [e.target.name]: e.target.value });
	};

	const handleToggleTodo = () => {
		dispatch(toggleTodo({ id, pinned }));
	};

	const handleToggleTodoModal = () => {
		dispatch(toggleTodoModal(id));
	};

	const handleUpdateTodo = () => {
		if (!todo.title.trim()) return;
		dispatch(updateTodo({ ...todo, id, pinned }));
	};

	return (
		<li
			className={`todo-item ${darkMode ? "todo-item--dark" : ""} ${completed ? "todo-item--completed" : ""} ${
				modalIsOpen ? "todo-item--modal-open" : ""
			}`}
		>
			{pinned && <GoPin className="todo-item__pin" />}

			{!edited.title && !edited.note && <Checkbox checked={completed} onChange={handleToggleTodo} />}

			<div className="todo-item__content">
				{edited.title ? (
					<input
						className="todo-item__input"
						type="text"
						name="title"
						value={todo.title}
						onChange={handleChange}
					/>
				) : (
					<h3 className="todo-item__title">{title}</h3>
				)}

				{edited.note && (
					<input
						className="todo-item__input todo-item__input--note"
						type="text"
						name="note"
						value={todo.note}
						onChange={handleChange}
					/>
				)}

				{note && !edited.note && <p className="todo-item__note">{note}</p>}
			</div>

			{!edited.title && !edited.note && (
				<button className="todo-item__ellipsis" onClick={handleToggleTodoModal}>
					<FaEllipsisH className="todo-item__icon" />
				</button>
			)}

			{edited.title || edited.note ? (
				<button className="todo-item__save-changes" onClick={handleUpdateTodo}>
					<AiOutlineFileDone className="todo-item__icon" />
				</button>
			) : (
				<Modal
					className="todo-item__modal"
					id={id}
					completed={completed}
					pinned={pinned}
					note={note}
					modalIsOpen={modalIsOpen}
				/>
			)}
		</li>
	);
};

export default TodoItem;
