import { useEffect, useState } from "react";

import ProductCard from "../ProductCard";

// First time
// isLoading = true;
// products = [];
// API call triggered

// Wait 3 secs
// isLoading = false;
// API call triggered - 3 secs


// Products is set
// API call triggered - 
function ProductList() {
  // `useState` should be used when you need a dynamic variable
  // which your UI logic depends or the variable can cause some
  // changes in UI.
  // const loadingState = useState(true);
  // // [value, setValue]
  // const isLoading = loadingState[0];
  // const setIsLoading = loadingState[1];
  const [isLoading, setIsLoading] = useState(true);

  // const productsState = useState([]);
  // const products = productsState[0];
  // const setProducts = productsState[1];
  const [products, setProducts] = useState([]);

  const [error, setError] = useState(null);

  // `useEffect` should be used whenever you need to 
  // detect some react lifecycle event.
  useEffect(() => {
    // const promise = fetch('http://localhost:3001/products');
    // promise.then(response => {
    //   const promise1 = response.json()
    //   promise1.then(result => {
    //     console.log('Mock result', result);
    //   });

    //   promise1.catch(error => {
    //     console.log('Mock result error', error);
    //   });
    // });
    // promise.catch(error => {
    //   console.log('Mock Error', error);
    // })

    fetch('http://localhost:3002/products')
      .then(response => {
        return response.json();
      })
      .then(result => {
        setIsLoading(false);
        setProducts(result);
      })
      .catch(error => {
        console.log('Error');
        setError(error);
      })
  }, []);
  
  // Falsy values:  false, null, undefined, '', 0
  // Truthy values: Any other than falsy
  if (error) {
    return <div>{error.message}</div>;
  } else if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {
          products.map(function(product) {
            return <ProductCard title={product.title} price={product.price} />
          })
        }
      </div>
    );
  }
}

export default ProductList;


// Components - Lifecycle
// 1. mounting
// 2. updating x n
// 3. unmounting


