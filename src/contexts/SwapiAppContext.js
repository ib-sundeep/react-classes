import { createContext } from "react";

const SwapiAppContext = createContext({
  keyword: '',

  setKeyword: () => {},
  setLoading: () => {},
  setError: () => {},
  setResults: () => {},

  loading: false,
  error: null,
  results: [],
});

export default SwapiAppContext;
