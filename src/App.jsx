import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import CartContext from './contexts/CartContext';
import BestPracticesPage from './pages/BestPracticesPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import OrdersPage from './pages/OrdersPage';
import ProductsPage from './pages/ProductsPage';


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
      <Switch>
        <Route
          exact={true}
          path="/"
          component={ProductsPage}
        />
        <Route
          exact={true}
          path="/categories/:categoryId"
          component={ProductsPage}
        />

        <Route
          exact={true}
          path="/cart"
          component={CartPage}
        />
        <Route
          exact={true}
          path="/orders"
          component={OrdersPage}
        />
        <Route
          exact={true}
          path="/best-practices"
          component={BestPracticesPage}
        />
        <Route component={NotFoundPage} />
      </Switch>
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

