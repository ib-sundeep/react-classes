import { useEffect, useState } from "react";

import ProductCard from "../ProductCard";

const globalProducts = [
  {
    title: "Apple iPhone 14",
    price: "Rs. 1,00,000"
  },
  {
    title: "Apple iPhone 13",
    price: "Rs. 70,000"
  },
  {
    title: "Google Pixel 7",
    price: "Rs. 50,000"
  },
  {
    title: "Nokia 1100",
    price: "Rs. 2,000"
  },
  {
    title: "Samsung Galaxy S10",
    price: "Rs. 1,00,000"
  },
  {
    title: "Sony Xperia S10",
    price: "Rs. 1,00,000"
  }
]

function getProductsApi(callback) {
  console.log('API called');
  setTimeout(function () {
    callback(globalProducts);
  }, 3000);
}


// First time
// isLoading = true;
// products = [];
// API call triggered

// Wait 3 secs
// isLoading = false;
// API call triggered - 3 secs


// Products is set
// API call triggered - 
function ProductList({ prop1 }) {
  // `useState` should be used when you need a dynamic variable
  // which your UI logic depends or the variable can cause some
  // changes in UI.
  const loadingState = useState(true);
  // [value, setValue]
  const isLoading = loadingState[0];
  const setIsLoading = loadingState[1];

  const productsState = useState([]);
  const products = productsState[0];
  const setProducts = productsState[1];

  // `useEffect` should be used whenever you need to 
  // detect some react lifecycle event.
  useEffect(() => {
    // console.log('API call started', isLoading, products);
    getProductsApi(function(res) {
      setIsLoading(false);
      setProducts(res);
      // console.log('API call ended', isLoading, products);
    });
  }, [products, isLoading]);
  
  
  
  if (isLoading) {
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


