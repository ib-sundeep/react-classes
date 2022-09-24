import { createContext } from "react";

const ApiStateContext = createContext({
  results: [],
  loading: false,
  error: null,
});

export default ApiStateContext;
