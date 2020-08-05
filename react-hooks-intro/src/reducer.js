import { v4 as uuidv4 } from 'uuid';

export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        id: uuidv4(),
        text: action.payload,
        completed: false,
      };
      const addedTodos = [...state.todos, newTodo];
      return {
        ...state,
        todos: addedTodos,
      };
    case 'TOGGLE_TODO':
      const toggleTodos = state.todos.map((t) =>
        t.id === action.payload.id
          ? { ...action.payload, completed: !action.payload.completed }
          : t,
      );
      return {
        ...state,
        todos: toggleTodos,
      };
    case 'REMOVE_TODO':
      const filteredTodos = state.todos.filter(
        (t) => t.id !== action.payload.id,
      );
      return {
        ...state,
        todos: filteredTodos,
      };
    default:
      return state;
  }
}
