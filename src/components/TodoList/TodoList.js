import { TransitionGroup, CSSTransition } from "react-transition-group";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = ({ todos, search }) => {
	const displayedTodos = search
		? todos.filter(todo => {
				if (
					todo.title.toLowerCase().includes(search.toLowerCase()) ||
					todo.note.toLowerCase().includes(search.toLowerCase())
				) {
					return todo;
				} else {
					return null;
				}
		  })
		: todos;

	return (
		<ul className="todo-list">
			<TransitionGroup component={null}>
				{displayedTodos.map(todo => (
					<CSSTransition classNames="todo-list__item-" key={todo.id} timeout={300} unmountOnExit>
						<TodoItem {...todo} />
					</CSSTransition>
				))}
			</TransitionGroup>
		</ul>
	);
};

export default TodoList;
