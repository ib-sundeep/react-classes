import React, { useContext } from 'react';

import CartContext from '../../contexts/CartContext';
import AddToCart from '../AddToCart';
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
      <div className={styles.cart}>
        <ol>
          {cartList.map(cartItem => (
            <li className={styles.cartItem} key={cartItem.id}>
              <div>
                <div>{cartItem.title}</div>
                <div className={styles.cartItemPrice}>₹ {cartItem.price} X {cartItem.quantity} = <strong>₹ {cartItem.price*cartItem.quantity}</strong> </div>
                <span className={styles.addToCart}>
                  <AddToCart product={cartItem} />
                </span><br /><br />
              </div>
            </li>
          ))}
        </ol>
        <div className={styles.cartTotal}>
            Cart Total :<strong> ₹ {cartList.reduce((C,cartItem) => cartItem.price*cartItem.quantity + C,0)}</strong>
        </div>

      </div>
    )
  }
}

export default Cart;
