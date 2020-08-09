import React from 'react';

const TodosContext = React.createContext({
  todos: [
    // { id: 1, text: 'Go to bed', completed: false },
    // { id: 2, text: 'Dream', completed: true },
    // { id: 3, text: 'Waky waky', completed: false },
  ],
  currentTodo: {},
});

export default TodosContext;
