import React, { useContext } from 'react';

import CartContext from '../../contexts/CartContext';

function AddToCart({ product }) {
  const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const quantity = cart[product.id] ? cart[product.id].quantity : 0;

  function increment() {
    increaseQuantity(product);
  }

  function decrement() {
    decreaseQuantity(product);
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
