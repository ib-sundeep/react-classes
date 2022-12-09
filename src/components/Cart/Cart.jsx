import React, { useContext, useState } from "react";

import CartContext from "../../contexts/CartContext";

import styles from "./Cart.module.css";

// {
//   '1': { id: '1' },
//   '2': { id: '2' }
// }
// [{ id: '1' }, { id: '2' }]

function Cart() {
  const { cart } = useContext(CartContext);
  const cartList = Object.values(cart);
  const [cartTotal, setCartTotal] = useState(0);

  if (cartList.length === 0) {
    return <div className={styles.cart}>No items in the cart!</div>;
  } else {
    return (
      <div>
        <ol>
          {cartList.map((cartItem) => (
            <li key={cartItem.id}>
              <div>{cartItem.title}</div>
              <div className={styles.cart}>
                Rs:{cartItem.price} * {cartItem.quantity} = Rs:
                {cartItem.price * cartItem.quantity}
              </div>
            </li>
          ))}
        </ol>
        <div>Cart Total:{cartTotal}</div>
      </div>
    );
  }
}

export default Cart;
