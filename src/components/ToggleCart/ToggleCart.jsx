import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleCart } from '../../store/cart';

function ToggleCart() {
  const dispatch = useDispatch();

  function showHideCart() {
    dispatch(toggleCart());
  }

  return (
    <button onClick={showHideCart}>
      Open Cart
    </button>
  )
}

export default ToggleCart;
