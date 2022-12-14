import React, {useEffect, useState} from 'react';

import styles from './OrderList.module.css'

function OrderList() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadOrders() {
      try {
        const response = await fetch(
          `http://localhost:3001/orders?_sort=id&_order=desc`
        );
        const result = await response.json();
        setIsLoading(false);
        setOrders(result);
      } catch (error) {
        console.log('Error');
        setError(error);
      }
    }
  
    loadOrders();
  }, [])

  // Falsy values:  false, null, undefined, '', 0
  // Truthy values: Any other than falsy
  if (error) {
    return <div>{error.message}</div>;
  } else if (isLoading) {
    return <div>Loading...</div>;
  } else if (orders.length > 0) {
    return (
      <div>
        {/* [Nodes] */}
        {
          orders.map(order => (
            <div key={order.id} className={styles.order}>
              <div>Order #{order.id}</div>
              <div>
                {
                  // ['1 x Apple iPhone', '2 x MacBook']
                  // '1 x Apple iPhone, 2 x MacBook'
                  order.products
                    .map(product => `${product.title} x ${product.quantity}`)
                    .join(', ')
                }
              </div>
            </div>
          ))
        }
      </div>
    );
  } else {
    return <div>No orders found. Place an order now!</div>
  }
}

export default OrderList;

// {
//   "products": [
//     {
//       "id": 7,
//       "categoryId": 2,
//       "title": "Apple Macbook Air M1",
//       "price": 120000,
//       "quantity": 1
//     },
//     {
//       "id": 8,
//       "categoryId": 2,
//       "title": "HP Pavilion E5",
//       "price": 70000,
//       "quantity": 1
//     },
//     {
//       "id": 9,
//       "categoryId": 3,
//       "title": "Tshirt",
//       "price": 1000,
//       "quantity": 1
//     }
//   ],
//   "subTotal": 191000,
//   "discount": 0,
//   "tax": 34380,
//   "total": 225380,
//   "id": 5
// },
