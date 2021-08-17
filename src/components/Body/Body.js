import { useState } from "react";
import { useSelector } from "react-redux";
import Container from "../Container/Container";
import TodoList from "../TodoList/TodoList";
import ControlPanel from "../ControlPanel/ControlPanel";
import Filter from "../Filter/Filter";
import "./Body.css";

const Body = ({ className, search }) => {
	const [selectedStatus, setSelectedStatus] = useState("all");
	const todos = useSelector(state => state.todo.todos);
	const unpinnedTodos = todos.filter(todo => !todo.pinned);
	const pinnedTodos = useSelector(state => state.todo.pinnedTodos);
	let filteredTodos;

	if (selectedStatus === "all") {
		filteredTodos = unpinnedTodos;
	} else if (selectedStatus === "active") {
		filteredTodos = unpinnedTodos.filter(todo => !todo.completed);
	} else {
		filteredTodos = unpinnedTodos.filter(todo => todo.completed);
	}

	return (
		<Container className={`${className} body`}>
			<TodoList todos={pinnedTodos} />

			{!!pinnedTodos.length && <hr className="body__hr" />}

			<TodoList todos={filteredTodos} search={search} />

			{!!todos.length && (
				<ControlPanel
					className="body__control-panel"
					selectedStatus={selectedStatus}
					setSelectedStatus={setSelectedStatus}
				/>
			)}

			{!!todos.length && (
				<Filter
					className="body__filter"
					selectedStatus={selectedStatus}
					setSelectedStatus={setSelectedStatus}
				/>
			)}
		</Container>
	);
};

export default Body;
