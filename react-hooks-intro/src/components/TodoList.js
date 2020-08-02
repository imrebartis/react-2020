import React, { useContext } from 'react';
import TodosContext from '../context';

import { Icon } from 'react-icons-kit'
import {pen_1} from 'react-icons-kit/ikons/pen_1'
import {bin} from 'react-icons-kit/ikons/bin'

export default function TodoList() {
  const { state } = useContext(TodosContext);
  const title = state.todos.length > 0 ? `${state.todos.length} Todos` : `No todos`;

  return (
    <div className="container mx-auto max-w-md text-center font-mono">
    <h1 className="font-bold">{title}</h1>
      <ul className="list-reset text-white p-0">
        {state.todos.map((todo) => (
          <li className="flex items-center bg-orange-600 border-black border-dashed border-2 my-2 py-4" key={todo.id}>
            <span className="flex-1 ml-12 cursor-pointer">{todo.text}</span>
            <button className="mr-2">
              <Icon className="text-blue-800" icon={pen_1} />
            </button>
            <button className="mr-1">
              <Icon className="text-black" icon={bin} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
