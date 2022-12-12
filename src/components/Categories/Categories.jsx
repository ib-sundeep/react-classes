import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadCategories } from '../../store/categories';
import CategoryLink from '../CategoryLink';
import styles from './Categories.module.css'

function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  useEffect(() => {
    // async function loadCategories() {
    //   dispatch(categoriesLoading());

    //   try {
    //     // HTTP status code
    //     // 2XX => success
    //     // 3xx => redirection
    //     // 4xx => Failed request
    //     // 5xx => Unexpected errors
    //     const response = await fetch('http://localhost:3001/categories');
    //     if (response.ok) {
    //       const json = await response.json();
    //       dispatch(categoriesLoaded(json));
    //     } else {
    //       dispatch(categoriesFailed(new Error(response.statusText)))
    //     }
    //   } catch (error) {
    //     dispatch(categoriesFailed(error));
    //   }
    // }

    dispatch(loadCategories());
    // loadCategories() => fn
    // fn(dispatch, getState)

    // loadCategories();

  }, []);

  if (categories.isLoading) {
    return <div>Loading Categories...</div>;
  } else if (categories.error) {
    return <div>Failed to load categories</div>
  } else {
    return (
      <ul className={styles.list}>
        {categories.categories.map(category => (
          <CategoryLink key={category.id} category={category} />
        ))}
      </ul>
    );
  }
}

export default Categories;

