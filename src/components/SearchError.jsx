import { useContext } from "react";

import ApiStateContext from "../contexts/ApiStateContext";

function SearchError() {
  const { error } = useContext(ApiStateContext);

  if (error) {
    return <div>{error.message}</div>
  } else {
    return null;
  }
}

export default SearchError;
