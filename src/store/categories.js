const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';
const LOAD_CATEGORIES_START = 'LOAD_CATEGORIES_START';
const LOAD_CATEGORIES_DONE = 'LOAD_CATEGORIES_DONE';
const LOAD_CATEGORIES_ERROR = 'LOAD_CATEGORIES_ERROR';


export function categoriesLoading() {
  return {
    type: LOAD_CATEGORIES_START
  }
}

export function categoriesLoaded(categories) {
  return {
    type: LOAD_CATEGORIES_DONE,
    payload: categories
  }
}

export function categoriesFailed(error) {
  return {
    type: LOAD_CATEGORIES_ERROR,
    payload: error
  }
}

// loadCategories();
export function loadCategories() {
  return async (dispatch, getState) => {
    const { categories } = getState();

    if (categories.isLoading) return;

    dispatch(categoriesLoading());

    try {
      // HTTP status code
      // 2XX => success
      // 3xx => redirection
      // 4xx => Failed request
      // 5xx => Unexpected errors
      const response = await fetch('http://localhost:3001/categories');
      if (response.ok) {
        const json = await response.json();
        dispatch(categoriesLoaded(json));
      } else {
        dispatch(categoriesFailed(new Error(response.statusText)))
      }
    } catch (error) {
      dispatch(categoriesFailed(error));
    }
  }
}


// dispatch({ type: 'LOAD_CATEGORIES_DONE', payload: response });
function categoriesReducer(state = {
  isLoading: false,
  error: null,
  categories: [],
  selectedCategoryId: null,
}, action) {
  switch (action.type) {
    case SET_SELECTED_CATEGORY:
      return { ...state, selectedCategoryId: action.payload };
    case LOAD_CATEGORIES_START:
      return { ...state, isLoading: true };
    case LOAD_CATEGORIES_DONE:
      return { ...state, isLoading: false, categories: action.payload };
    case LOAD_CATEGORIES_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}

export default categoriesReducer;
