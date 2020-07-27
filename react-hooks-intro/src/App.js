import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function App() {
  const [submitting, setSubmitting] = useState(true);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('react hooks');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchInputRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          `http://hn.algolia.com/api/v1/search?query=${query}`,
        );
        console.log(response.data.hits);
        setResults(response.data.hits);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
      setSubmitting(false);
    };

    if (submitting) {
      fetchData();
    }
  }, [submitting, query]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
  };

  const handleClearSearch = () => {
    setQuery('');
    searchInputRef.current.focus();
  };

  return (
    <div className="container max-w-md mx-auto p-4 m-2 bg-purple-100 shadow-lg rounded">
      <h1 className="text-grey-darkest font-thin">Hooks News</h1>
      <form onSubmit={handleSubmit} className="mb-2">
        <input
          type="text"
          onChange={(event) => setQuery(event.target.value)}
          value={query}
          ref={searchInputRef}
          className="border p-1 rounded"
        />
        <button type="submit" className="bg-orange-400 rounded m-1 p-1">Search</button>
        <button type="button" onClick={handleClearSearch} className="bg-teal-600 text-white p-1 rounded">
          Clear
        </button>
      </form>
      {loading ? (
        <div className="font-bold text-orange-800">Loading results...</div>
      ) : (
        <ul className="list-reset leading-normal">
          {results &&
            results.map((result) => {
              return result.title ? (
                <li key={result.objectID}>
                  <a href={result.url} className="text-indigo-600 hover:text-indigo-900">{result.title}</a>
                </li>
              ) : (
                <li key={result.objectID}>
                  <a href={result.url}>{result.story_title}</a>
                </li>
              );
            })}
        </ul>
      )}
      {error && <div className="text-red-800 font-bold">{error.message}</div>}
    </div>
  );
}
