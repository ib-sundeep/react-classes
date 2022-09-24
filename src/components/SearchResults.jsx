import React, { memo, useContext } from 'react';

import ApiStateContext from '../contexts/ApiStateContext';

function SearchResults() {
  const {
    loading,
    results
  } = useContext(ApiStateContext);

  console.log('Rendered SearchResults');

  if (loading) {
    return <div>Loading...</div>
  } else {
    return (
      <ul>
        {
          results.map(item => (
            <li key={item.id}>{item.name}</li>
          ))
        }
      </ul>
    )
  }
}

export default memo(SearchResults);
