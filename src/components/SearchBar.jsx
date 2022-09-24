import React, { memo } from 'react';

import SearchButton from './SearchButton';
import SearchInput from './SearchInput';

// A component re renders in the following cases
// 1. direct state changes
// 2. prop changes
// 3. context changes
// 4. Parent render

// A component wrapped with memo re render
// 1. direct state changes
// 2. prop changes
// 3. context changes
function SearchBar() {
  console.log('Rendered SearchBar');
  return (
    <div className="search-bar">
      <SearchInput />
      <SearchButton />
    </div>
  );
}

export default memo(SearchBar);
