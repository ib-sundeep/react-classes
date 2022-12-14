import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { checkoutSuccess, placeOrder } from '../../store/cart';

function CheckoutButton() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isSubmitting = useSelector(state => state.cart.isSubmitting);
  const isSuccess = useSelector(state => state.cart.isSubmitSuccess);

  function handlePlaceOrder() {
    dispatch(placeOrder());
  }

  useEffect(() => {
    // Navigate to /orders
    if (isSuccess) {
      history.push(`/orders/`);
      dispatch(checkoutSuccess());
    }
  }, [isSuccess]);

  return (
    <>
      <button onClick={handlePlaceOrder}>Place Order</button>
      {isSubmitting && <div>Placing order...</div>}
    </>
  )
}

export default CheckoutButton;
