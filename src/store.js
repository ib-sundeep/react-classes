// redux
// 

import { omit } from "lodash";
import { createStore } from "redux";


const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const SHOW_CART = 'SHOW_CART';
const HIDE_CART = 'HIDE_CART';

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product
  };
}

export function removeFromCart(product) {
  return {
    type: REMOVE_FROM_CART,
    payload: product
  };
}

// UserContext
// CartContext

// AppContext
//  cart:
//  user:
//  settings: 


// <Settings />
// Problems with context
// 1. You can't subscribe to partial data
// 2. Business logic can't be separated from components

// reducers => Define how your state can be change

// actions => Trigger a redux change

// store => Global state. Where your data


// actions = { type: '', payload: data  };
// {
//   items: { .... },
//   isCartOpen: false,
// }
function cartReducer(state = { items: {}, isCartOpen: false }, action) {
  // console.log('reducer called', state, action);
  switch (action.type) {
    case SHOW_CART:
      return { ...state, isCartOpen: true };
    case HIDE_CART:
      return { ...state, isCartOpen: false };
    case ADD_TO_CART: {
      const product = action.payload;
      // const newState = { ...state };
      // console.log(newState === state) // false
      // console.log(newState.items === state.items) // true

      if (state.items[product.id]) {
        // state.items[product.id].quantity += 1;
        // return state;

        // {
        //   isCartOpen: false,
        //   items: {
        //     '1': {
        //       title: '',
        //       quantity: 1,
        //     },
        //     '2': {
        //       title: '',
        //       price: 100000,
        //       quantity: 1,
        //     }
        //   }
        // }
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...state.items[product.id],
              quantity: state.items[product.id].quantity + 1,
            }
          }
        };
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...product,
              quantity: 1,
            }
          }
        }
      }
    }
    case REMOVE_FROM_CART: {
      const product = action.payload;
      // const newState = { ...state };
      // console.log(newState === state) // false
      // console.log(newState.items === state.items) // true

      if (state.items[product.id].quantity <= 1) {
        return {
          ...state,
          items: omit(state.items, [product.id])
        }
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...state.items[product.id],
              quantity: state.items[product.id].quantity - 1,
            }
          }
        }
      }
    }
      // Do some changes on state and return new state
    default:
      return state;
  }
}

// const state = cartReducer(undefined, '@@redux/INITs.f.k.m.1.9');
const store = createStore(cartReducer);
// console.log('reducer state', store.getState(), store);

// Internal implementation of dispatch
// function dispatch(action) {
//   const currentState = store.getState();
//   const newState = cartReducer(currentState, action);
//   store.setState(newState);
// }

export default store;
