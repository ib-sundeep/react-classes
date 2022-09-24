import { useContext } from "react";

import KeywordStateContext from "../contexts/KeywordStateContext";

function SearchHint() {
  const keyword = useContext(KeywordStateContext);

  if (keyword.length > 0) {
    return <div>Search results for {keyword}...</div>;
  } else {
    return <div>Type a search term...</div>;
  }
}

export default SearchHint;
