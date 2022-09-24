import React, { useContext } from 'react';
import ActionsContext from '../contexts/ActionsContext';
import KeywordStateContext from '../contexts/KeywordStateContext';

// A component re renders in the following cases
// 1. direct state changes
// 2. prop changes
// 3. context changes
// 4. Parent render

// A component wrapped with memo re render
// 1. direct state changes
// 2. prop changes
// 3. context changes
function SearchInput() {
  const keyword = useContext(KeywordStateContext);
  const { setKeyword } = useContext(ActionsContext);

  console.log('Rendered SearchInput');

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <input
      onChange={handleKeyword}
      value={keyword}
      type="text"
    />
  );
}

export default SearchInput;
