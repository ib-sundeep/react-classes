import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

import styles from './CategoryLink.module.css';

function CategoryLink({ category }) {
  // const dispatch = useDispatch();
  // const isSelected = useSelector(
  //   state => state.categories.selectedCategoryId === category.id
  // );

  // function handleCategorySelection() {
  //   dispatch({
  //     type: 'SET_SELECTED_CATEGORY',
  //     payload: category.id
  //   });
  // }

  // console.log({ selectedCategoryId, ca });
  // const isSelected = selectedCategoryId === category.id;

  console.log('CategoryLink rendered', category.id);

  return (
    <li>
      <NavLink
        className={styles.link}
        activeClassName={styles.linkActive}
        to={`/categories/${category.id}`}
      >
        {category.name}
      </NavLink>
    </li>
  )
}

export default memo(CategoryLink);
