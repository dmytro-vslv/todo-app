import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions/todo";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import "./InputField.css";

const InputField = ({ search, setSearch }) => {
	const [todo, setTodo] = useState("");
	const [inputMode, setInputMode] = useState("create");
	const inputRef = useRef(null);
	const darkMode = useSelector(state => state.darkMode.darkMode);
	const dispatch = useDispatch();

	useEffect(() => {
		inputRef.current.focus();
	}, [inputMode]);

	const handleTodo = e => {
		setTodo(e.target.value);
	};

	const handleSearch = e => {
		setSearch(e.target.value);
	};

	const handleModeSwitch = e => {
		setTodo("");
		setSearch("");
		setInputMode(e.currentTarget.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!todo.trim().length) return;
		dispatch(addTodo(todo));
		setTodo("");
	};

	return (
		<form className={`input-field ${darkMode ? "input-field--dark" : ""}`} onSubmit={handleSubmit}>
			{inputMode === "create" ? (
				<input
					className="input-field__input"
					type="text"
					placeholder="Create a new todo…"
					ref={inputRef}
					value={todo}
					onChange={handleTodo}
				/>
			) : (
				<input
					className="input-field__input"
					type="text"
					placeholder="Search todos..."
					ref={inputRef}
					value={search}
					onChange={handleSearch}
				/>
			)}

			<button
				className={`input-field__button ${inputMode === "create" ? "input-field__button--create" : ""} `}
				type="submit"
			>
				{inputMode === "create" ? <AiOutlineAppstoreAdd /> : <AiOutlineSearch />}
			</button>

			<button
				className="input-field__switcher"
				type="button"
				value={inputMode === "create" ? "search" : "create"}
				onClick={handleModeSwitch}
			>
				{inputMode === "create" ? <AiOutlineSearch /> : <AiOutlineAppstoreAdd />}
			</button>
		</form>
	);
};

export default InputField;
