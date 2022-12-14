import React from 'react';

import CheckoutButton from '../../components/CheckoutButton';
import ReduxCart from '../../components/ReduxCart';

function CartPage() {
  return (
    <div>
      <ReduxCart />
      <CheckoutButton />
    </div>
  );
}

export default CartPage;
