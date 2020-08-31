import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_TODOS = gql`
  query getTodos {
    todos {
      done
      id
      text
    }
  }
`;

function App() {
  const { data, loading } = useQuery(GET_TODOS);

  if (loading) return <div>loading...</div>;

  return (
    <div>
      {data.todos.map((todo) => (
        <p key={todo.id}>
          <span>{todo.text}</span> <button>&times;</button>
        </p>
      ))}
    </div>
  );
}

export default App;
