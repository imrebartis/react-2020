import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function App() {
  const [submitting, setSubmitting] = useState(true);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('react hooks');
  const searchInputRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${query}`,
      );
      console.log(response.data.hits);
      setResults(response.data.hits);
      setSubmitting(false);
    };

    if (submitting) {
      fetchData();
    }
  }, [submitting, query]);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
  }

  const handleClearSearch = () => {
    setQuery('');
    searchInputRef.current.focus();
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(event) => setQuery(event.target.value)}
        value={query}
        ref={searchInputRef}
      />
      <button type="submit">
        Search
      </button>
      <button type="button" onClick={handleClearSearch}>
        Clear
      </button>
    </form>
      <ul>
        {results &&
          results.map((result) => {
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
