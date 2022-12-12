import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../store';

function AddToCart({ product }) {
  const dispatch = useDispatch();
  const quantity = useSelector(state => {
    return state.cart.items[product.id]?.quantity || 0;
  })

  function increment() {
    dispatch(addToCart(product));
    // dispatch({ type: 'ADD_TO_CART', payload: product });
  }

  function decrement() {
    dispatch(removeFromCart(product));
  }

  console.log('AddToCart rendered', product.id);

  if (quantity === 0) {
    return (
      <button onClick={increment}>Add to cart</button>
    );
  } else {
    return (
      <div>
        <button onClick={decrement}>-</button>
        <span>{quantity}</span>
        <button onClick={increment}>+</button>
      </div>
    )
  }
}

export default AddToCart;
