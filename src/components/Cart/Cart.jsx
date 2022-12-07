import React, { useContext } from 'react';

import CartContext from '../../contexts/CartContext';

import styles from './Cart.module.css';

// {
//   '1': { id: '1' },
//   '2': { id: '2' }
// }
// [{ id: '1' }, { id: '2' }]

function Cart() {
  const { cart } = useContext(CartContext);
  const cartList = Object.values(cart);

  console.log('Cart rendered');

  if (cartList.length === 0) {
    return (
      <div className={styles.cart}>No items in the cart!</div>
    );
  } else {
    return (
      <ol>
        {cartList.map(cartItem => (
          <li key={cartItem.id}>
            <div>{cartItem.title}</div>
            <div>Quantity: {cartItem.quantity}</div>
          </li>
        ))}
      </ol>
    )
  }
}

export default Cart;
