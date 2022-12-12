import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './CategoryLink.module.css';

function CategoryLink({ category }) {
  const dispatch = useDispatch();
  const isSelected = useSelector(
    state => state.categories.selectedCategoryId === category.id
  );

  function handleCategorySelection() {
    dispatch({
      type: 'SET_SELECTED_CATEGORY',
      payload: category.id
    });
  }

  // console.log({ selectedCategoryId, ca });
  // const isSelected = selectedCategoryId === category.id;

  console.log('CategoryLink rendered', category.id);

  return (
    <li
      className={`${styles.link} ${isSelected ? styles.selected : ''}`}
      onClick={handleCategorySelection}
    >
      {category.name}
    </li>
  )
}

export default memo(CategoryLink);
