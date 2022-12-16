import { omit } from "lodash";

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const SHOW_CART = 'SHOW_CART';
const HIDE_CART = 'HIDE_CART';
const CHECKOUT_INIT = 'CHECKOUT_INIT';
const CHECKOUT_DONE = 'CHECKOUT_DONE';
const CHECKOUT_ERROR = 'CHECKOUT_ERROR';
const CHECKOUT_SUCCESS_NAVIGATION = 'CHECKOUT_SUCCESS_NAVIGATION';

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

export function toggleCart() {
  return (dispatch, getState) => {
    const { isCartOpen } = getState().cart;

    if (isCartOpen) {
      dispatch({ type: HIDE_CART });
    } else {
      dispatch({ type: SHOW_CART });
    }
  }
}
// object.toString();

export function placeOrder() {
  return async (dispatch, getState) => {
    const items = getState().cart.items;
    const itemsList = Object.values(items);
    // [ { q: 1, price: 2000 }, { q: 2, price: 3000 }, { q: 5, price: 500 } ]
    // 2000
    // 8000
    // 10500
    const subTotal = itemsList.reduce((total, currentItem) => {
      const newTotal = total + (currentItem.quantity * currentItem.price);
      return newTotal;
    }, 0);
    const tax = subTotal * 0.18;
    const discount = 0;

    dispatch({ type: CHECKOUT_INIT });

    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const response = await fetch(
        'http://localhost:3001/orders/',
        {
          method: 'POST',
          body: JSON.stringify({
            products: itemsList,
            subTotal: subTotal,
            discount: discount,
            tax: tax,
            total: subTotal + tax - discount
          }),
          headers: myHeaders
        }
      );
      if (response.ok) {
        dispatch({ type: CHECKOUT_DONE });
      } else {
        dispatch({
          type: CHECKOUT_ERROR,
          payload: new Error(response.statusText)
        });
      }
    } catch (error) {
      dispatch({ type: CHECKOUT_ERROR, payload: error });
    }
  }
}

export function checkoutSuccess() {
  return {
    type: CHECKOUT_SUCCESS_NAVIGATION
  }
}

// LocalStorage/SessionStorage -> Max 5MB
// Cookie -> Max 4KB

function cartReducer(state = {
  items: JSON.parse(localStorage.getItem('cart_state') || '{}'),
  isCartOpen: false,
  isSubmitting: false,
  isSubmitSuccess: false,
  submitError: null
}, action) {
  switch (action.type) {
    case SHOW_CART:
      return { ...state, isCartOpen: true };
    case HIDE_CART:
      return { ...state, isCartOpen: false };
    case ADD_TO_CART: {
      const product = action.payload;
      
      if (state.items[product.id]) {
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
    case CHECKOUT_INIT: 
      return { ...state, isSubmitting: true };
    case CHECKOUT_DONE:
      return {
        ...state,
        isSubmitting: false,
        submitError: null,
        isSubmitSuccess: true,
        items: {}
      };
    case CHECKOUT_ERROR:
      return { ...state, isSubmitting: false, submitError: action.payload };
    case CHECKOUT_SUCCESS_NAVIGATION:
      return { ...state, isSubmitSuccess: false }
    default:
      return state;
  }
}

export default cartReducer;