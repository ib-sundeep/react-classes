import { useState } from "react";


// https://swapi.dev/api/people/?search=dar
function SwapiApp() {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

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
    <div>
      <div className="search-bar">
        <input
          onChange={handleKeyword}
          value={keyword}
          type="text"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="search-results">
        {
          keyword.length > 0
            ? <div>Search results for {keyword}...</div>
            : null
        }
        {
          error ? <div>{error.message}</div> : null
        }
        {
          loading
            ? <div>Loading...</div>
            : (
              <ul>
                {
                  results.map(item => (
                    <li>{item.name}</li>
                  ))
                }
              </ul>
            )
        }
      </div>
    </div>
  );
}

export default SwapiApp;
