import React, { useContext } from 'react';
import ActionsContext from '../contexts/ActionsContext';
import KeywordStateContext from '../contexts/KeywordStateContext';

function SearchButton() {
  const keyword = useContext(KeywordStateContext);
  const {
    setLoading, setError, setResults
  } = useContext(ActionsContext);

  function handleSearch() {
    console.log('Searching for', keyword);
    setLoading(true);
    setError(null);
    setResults([]);
    fetch('https://swapi.dev/api/people/?search=' + keyword)
      .then((response) => {
        console.log(response.status)
        return response.json();
      })
      .then(response => {
        setResults(response.results);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
        console.log({ error });
      });
  }

  return (
    <button onClick={handleSearch}>Search</button>
  )
}

export default SearchButton;
