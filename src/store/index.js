import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from 'redux-thunk';

import cartReducer from "./cart";
import categoriesReducer from "./categories";

// Implementation of `_combineReducers`
function _combineReducers(reducers) {
  return function combinedReducer(state = {}, action) {
    return {
      cart: reducers.cart(state.cart, action),
      categories: reducers.categories(state.categories, action)
    }
  }
}

const reducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

// dispatch
// Without thunk can handle only action objects
// With thunk can handle action objects + action functions

// console.log(store.getState());

export default store;
