import React, { useContext } from 'react';
import TodosContext from '../context';

import { Icon } from 'react-icons-kit';
import { pen_1 } from 'react-icons-kit/ikons/pen_1';
import { bin } from 'react-icons-kit/ikons/bin';

export default function TodoList() {
  const { state, dispatch } = useContext(TodosContext);
  const title =
    state.todos.length > 0 ? `${state.todos.length} Todos` : `No todos`;

  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="font-bold">{title}</h1>
      <ul className="list-reset text-white p-0">
        {state.todos.map((todo) => (
          <li
            className="flex items-center bg-orange-600 border-black border-dashed border-2 my-2 py-4"
            key={todo.id}
          >
            <span
              onDoubleClick={() =>
                dispatch({ type: 'TOGGLE_TODO', payload: todo })
              }
              className={`${
                todo.completed
                  ? 'flex-1 ml-12 cursor-pointer line-through text-gray-800'
                  : 'flex-1 ml-12 cursor-pointer'
              }`}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'SET_CURRENT_TODO', payload: todo })} className="mr-2">
              <Icon className="text-blue-800" icon={pen_1} />
            </button>
            <button
              className="mr-1"
              onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo })}
            >
              <Icon className="text-black" icon={bin} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
