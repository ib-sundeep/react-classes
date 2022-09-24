import { useMemo, useState } from "react";

import SearchBar from "./components/SearchBar";
import SearchError from "./components/SearchError";
import SearchHint from "./components/SearchHint";
import SearchResults from "./components/SearchResults";
import ActionsContext from "./contexts/ActionsContext";
import ApiStateContext from "./contexts/ApiStateContext";
import KeywordStateContext from "./contexts/KeywordStateContext";

// Context

// https://swapi.dev/api/people/?search=dar
function SwapiApp() {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const actionsValue = useMemo(() => {
    return {
      setKeyword,
      setResults,
      setLoading,
      setError,
    }
  }, [setKeyword, setResults, setLoading, setError]);

  const apiState = useMemo(() => {
    return {
      results,
      loading,
      error
    }
  }, [results, loading, error]);

  return (
    <ActionsContext.Provider value={actionsValue}>
      <KeywordStateContext.Provider value={keyword}>
        <ApiStateContext.Provider value={apiState}>
          <div>
            <SearchBar />
            <div className="search-results">
              <SearchHint />
              <SearchError />
              <SearchResults />
            </div>
          </div>
        </ApiStateContext.Provider>
      </KeywordStateContext.Provider>
    </ActionsContext.Provider>
  );
}

export default SwapiApp;
