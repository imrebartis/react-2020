export default function reducer(state, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}
