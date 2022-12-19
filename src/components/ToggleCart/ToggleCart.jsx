import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { toggleCart } from '../../store/cart';

function ToggleCart() {
  // const dispatch = useDispatch();

  // function showHideCart() {
  //   dispatch(toggleCart());
  // }

  // return (
  //   <button onClick={showHideCart}>
  //     Open Cart
  //   </button>
  // )

  return <Link to="/cart">Open Cart</Link>
}

export default ToggleCart;
