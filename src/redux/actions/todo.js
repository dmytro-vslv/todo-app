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

export const addTodo = newTodo => ({
	type: ADD_TODO,
	payload: newTodo,
});

export const toggleTodo = todoDetails => ({
	type: TOGGLE_TODO,
	payload: todoDetails,
});

export const toggleTodoModal = todoId => ({
	type: TOGGLE_TODO_MODAL,
	payload: todoId,
});

export const editTodo = todoDetails => ({
	type: EDIT_TODO,
	payload: todoDetails,
});

export const togglePinTodo = todoDetails => ({
	type: TOGGLE_PIN_TODO,
	payload: todoDetails,
});

export const addTodoNote = todoDetails => ({
	type: ADD_TODO_NOTE,
	payload: todoDetails,
});

export const deleteTodo = todoDetails => ({
	type: DELETE_TODO,
	payload: todoDetails,
});

export const updateTodo = updatedTodo => ({
	type: UPDATE_TODO,
	payload: updatedTodo,
});

export const deleteCompletedTodos = () => ({
	type: DELETE_COMPLETED_TODOS,
});
