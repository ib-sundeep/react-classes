import { createContext } from "react";

const ActionsContext = createContext({
  setKeyword: () => {},
  setLoading: () => {},
  setResults: () => {},
  setError: () => {},
});

export default ActionsContext;
