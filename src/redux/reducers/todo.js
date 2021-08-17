import {
	ADD_TODO,
	TOGGLE_TODO,
	TOGGLE_TODO_MODAL,
	EDIT_TODO,
	TOGGLE_PIN_TODO,
	ADD_TODO_NOTE,
	DELETE_TODO,
	UPDATE_TODO,
	DELETE_COMPLETED_TODOS,
} from "../constants/todo.js";
import { v4 as uuidv4 } from "uuid";

const initialState = {
	todos: [
		{
			id: 1,
			title: "Complete online JavaScript course",
			note: "20% remain",
			completed: false,
			pinned: false,
			edited: { title: false, note: false },
			modalIsOpen: false,
		},
		{
			id: 2,
			title: "Jog around the park 3x",
			note: "",
			completed: false,
			pinned: false,
			edited: { title: false, note: false },
			modalIsOpen: false,
		},
		{
			id: 3,
			title: "10 minutes meditation",
			note: "",
			completed: false,
			pinned: false,
			edited: { title: false, note: false },
			modalIsOpen: false,
		},
		{
			id: 4,
			title: "Read for 1 hour",
			note: "",
			completed: false,
			pinned: false,
			edited: { title: false, note: false },
			modalIsOpen: false,
		},
		{
			id: 5,
			title: "Pick up groceries",
			note: "",
			completed: false,
			pinned: false,
			edited: { title: false, note: false },
			modalIsOpen: false,
		},
		{
			id: 6,
			title: "Complete Todo App on Frontend Mentor",
			note: "",
			completed: false,
			pinned: true,
			edited: { title: false, note: false },
			modalIsOpen: false,
		},
	],

	pinnedTodos: [
		{
			id: 6,
			title: "Complete Todo App on Frontend Mentor",
			note: "",
			completed: false,
			pinned: true,
			edited: { title: false, note: false },
			modalIsOpen: false,
		},
	],
};

const todoReducer = (state = initialState, action) => {
	const todosType = action?.payload?.pinned ? "pinnedTodos" : "todos";

	switch (action.type) {
		case ADD_TODO:
			return {
				...state,

				todos: [
					...state.todos,
					{
						id: uuidv4(),
						title: action.payload,
						note: "",
						completed: false,
						pinned: false,
						edited: { title: false, note: false },
						modalIsOpen: false,
					},
				],
			};

		case TOGGLE_TODO:
			return {
				...state,

				[todosType]: state[todosType].map(todo => {
					if (todo.id === action.payload.id) {
						return { ...todo, completed: !todo.completed, modalIsOpen: false };
					} else {
						return todo;
					}
				}),
			};

		case TOGGLE_TODO_MODAL:
			return {
				...state,

				todos: state.todos.map(todo => {
					if (todo.id === action.payload) {
						return { ...todo, modalIsOpen: !todo.modalIsOpen };
					} else {
						return { ...todo, edited: { title: false, note: false }, modalIsOpen: false };
					}
				}),

				pinnedTodos: state.pinnedTodos.map(todo => {
					if (todo.id === action.payload) {
						return { ...todo, modalIsOpen: !todo.modalIsOpen };
					} else {
						return { ...todo, edited: { title: false, note: false }, modalIsOpen: false };
					}
				}),
			};

		case EDIT_TODO:
			return {
				...state,

				[todosType]: state[todosType].map(todo => {
					if (todo.id === action.payload.id) {
						if (todo.note) {
							return { ...todo, edited: { title: true, note: true } };
						} else {
							return { ...todo, edited: { title: true, note: false } };
						}
					} else {
						return todo;
					}
				}),
			};

		case TOGGLE_PIN_TODO:
			if (action.payload.pinned) {
				return {
					...state,

					todos: state.todos.map(todo => {
						if (todo.id === action.payload.id) {
							return {
								...state.pinnedTodos.find(todo => todo.id === action.payload.id),
								pinned: false,
								modalIsOpen: false,
							};
						} else {
							return todo;
						}
					}),

					pinnedTodos: state.pinnedTodos.filter(todo => todo.id !== action.payload.id),
				};
			} else {
				return {
					...state,

					todos: state.todos.map(todo => {
						if (todo.id === action.payload.id) {
							return { ...todo, pinned: true, modalIsOpen: false };
						} else {
							return todo;
						}
					}),

					pinnedTodos: [
						...state.pinnedTodos,
						{ ...state.todos.find(todo => todo.id === action.payload.id), pinned: true, modalIsOpen: false },
					],
				};
			}

		case ADD_TODO_NOTE:
			return {
				...state,

				[todosType]: state[todosType].map(todo => {
					if (todo.id === action.payload.id) {
						return { ...todo, edited: { title: false, note: true } };
					} else {
						return todo;
					}
				}),
			};

		case DELETE_TODO:
			return {
				...state,

				todos: state.todos.filter(todo => todo.id !== action.payload.id),
				pinnedTodos: state.pinnedTodos.filter(todo => todo.id !== action.payload.id),
			};

		case UPDATE_TODO:
			return {
				...state,

				[todosType]: state[todosType].map(todo => {
					if (todo.id === action.payload.id) {
						return {
							...todo,
							title: action.payload.title,
							note: action.payload.note,
							edited: { title: false, note: false },
							modalIsOpen: false,
						};
					} else {
						return todo;
					}
				}),
			};

		case DELETE_COMPLETED_TODOS:
			return {
				...state,

				todos: state.todos.filter(todo => !todo.completed),
				pinnedTodos: state.pinnedTodos.filter(todo => !todo.completed),
			};

		default:
			return state;
	}
};

export default todoReducer;
