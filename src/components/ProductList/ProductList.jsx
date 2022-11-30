import { useEffect, useState } from "react";

import ProductCard from "../ProductCard";

// First time
// isLoading = true;
// products = [];
// API call triggered

// Wait 3 secs
// isLoading = false;
// API call triggered - 3 secs

// async await

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

    async function loadProducts(a) {
      try {
        const response = await fetch('http://localhost:3001/products');
        const result = await response.json();
        setIsLoading(false);
        setProducts(result);
      } catch (error) {
        console.log('Error');
        setError(error);
      }
    }

    loadProducts();
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
        {/* [Nodes] */}
        {
          products.map(function(product, index) {
            return <ProductCard key={index} title={product.title} price={product.price} />
          })
        }
      </div>
    );
  }
}

export default ProductList;

// oldDom = [
//   <ProductCard key={0} title="Title 1" />,
//   <ProductCard key={1} title="Title 2" />,
//   <ProductCard key={2} title="Title 3" />
// ]

// Without keys [{title change}, {title change}, {append node}]
// // With keys [{append node key 4 after key 1}]
// newDom = [
//   <ProductCard key={0} title="Title 1" />,
//   <ProductCard key={1} title="Title 4" />,
//   <ProductCard key={2} title="Title 2" />,
//   <ProductCard key={3} title="Title 3" />
// ]

// [move key 4 from after key 1 to key 3]
// newDom = [
//   <ProductCard key={1} title="Title 1" />,
//   <ProductCard key={2} title="Title 2" />,
//   <ProductCard key={3} title="Title 3" />,
//   <ProductCard key={4} title="Title 4" />,
// ]


// Components - Lifecycle
// 1. mounting
// 2. updating x n
// 3. unmounting


// Virtual DOM?

// <App />
    // <Header />
    //   <Logo />
    //   <Link />
    //   <Link />
    //   <Link />
    // <Body />
    //   <Filters />
    //   <List />

// function App() {
//   const [show, setShow] = useState(false);

//   return (
//     <div>
//       <ul id="ul" className="list">
//         <li id="item-1"><a>Item 1</a></li>
//         <li>Item 2</li>
//         <li>Item 3</li>
//         {show && <li>Item 4</li>}
//       </ul>
//       <button onClick={() => setShow(!show)}>
//         Toggle
//       </button>
//     </div>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('root'))

// VDOM -> JSON reprentation of DOM
// let currentVdom = {
//   nodeName: 'div',
//   children: [
//     {
//       nodeName: 'ul',
//       properties: {
//         className: 'list',
//         children: [
//           {
//             nodeName: 'li',
//             properties: {
//               id: 'item-1',
//               children: [
//                 {
//                   nodeName: 'a',
//                   children: ['Item 1']
//                 }
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 2'
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 3'
//               ]
//             }
//           }
//         ]
//       }
//     },
//     {
//       nodeName: 'button',
//       children: ['Toggle']
//     }
//   ]
// }

// let newVDom = {
//   nodeName: 'div',
//   children: [
//     {
//       nodeName: 'ul',
//       properties: {
//         className: 'list',
//         children: [
//           {
//             nodeName: 'li',
//             properties: {
//               id: 'item-1',
//               children: [
//                 {
//                   nodeName: 'a',
//                   children: ['Item 1']
//                 }
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 2'
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 3'
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 4'
//               ]
//             }
//           }
//         ]
//       }
//     },
//     {
//       nodeName: 'button',
//       children: ['Toggle']
//     }
//   ]
// }

// 2 vdom
// currentVDom -> Exact representation of browser DOM.
// newVDom -> Updated representation

// diff = diffAndGenerateChanges(currentVdom, newVDom);
// ReactDOM.applyChanges(diff);
// currentVdom = newVDom;

// {
//   action: 'addNode',
//   nodeDetails: {
//     nodeName: 'li',
//     properties: {
//       children: [
//         'Item 4'
//       ]
//     }
//   }
// }

// domRepUlElement = document.getElementById('ul');
// const newElement = domRepUlElement.appendChild('li')
// newElement.innerHtml = 'Item 4';


