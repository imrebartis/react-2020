import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('reacthooks');

  useEffect(() => {
    fetchData();
  }, [query]);

  const fetchData = async () => {
    const response = await axios.get(
      `http://hn.algolia.com/api/v1/search?query=${query}`,
    );
    console.log(response.data.hits);
    setResults(response.data.hits);
  };

  return (
    <>
      <input type="text" onChange={(event) => setQuery(event.target.value)} />
      <ul>
        {results.map((result) => {
          return result.title ? (
            <li key={result.objectID}>
              <a href={result.url}>{result.title}</a>
            </li>
          ) : (
            <li key={result.objectID}>
              <a href={result.url}>{result.story_title}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
