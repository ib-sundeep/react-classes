import React, { useState } from 'react';

import ProductList from './components/ProductList';
import Cart from './components/Cart';
import CartContext from './contexts/CartContext';
import ReduxCart from './components/ReduxCart';


// oldCart === newCart

// {
//   '1':  {
//     quantity: 2,
//   },
//   '2': {
//     quantity: 4
//   }
// }
function App() {
  /**
   * <product-id>: {
   *   id: Number,
   *   title: String,
   *   price: Number,
   *   quantity: Number
   * }
   */
  const [cart, setCart] = useState({});
  const [showCart, setShowCart] = useState(false);

  function increaseQuantity(product) {
    const newCart = { ...cart };

    // newCart === cart -> false

    if (!newCart[product.id]) {
      newCart[product.id] = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 0,
      }
    }
    
    newCart[product.id].quantity += 1;

    setCart(newCart);
  }

  function decreaseQuantity(product) {
    const newCart = { ...cart };

    if (!newCart[product.id]) return;

    newCart[product.id].quantity -= 1;

    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }

    setCart(newCart);
  }

  console.log('App rendered');

  return (
    <CartContext.Provider
      value={{ cart, increaseQuantity, decreaseQuantity }}
    >
      <div>
        <button onClick={() => setShowCart(!showCart)}>
          {showCart ? 'Close cart' : 'Open cart'}
        </button>
        {/* {showCart ? <Cart /> : null} */}
        {showCart ? <ReduxCart /> : null}
        <ProductList />
      </div>
    </CartContext.Provider>
  )
}

export default App;


// By default a component re renders:
// 1. It's internal state changes
// 2. It's props change
// 3. If it subscribed to a context and value of the context changes
// 4. Parent re renders
// 

