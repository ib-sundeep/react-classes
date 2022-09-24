import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SwapiApp from './SwapiApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



// const currentVirtualDom = {
//   elementType: 'div',
//   attribute: {
//     className: 'App'
//   },
//   children: [
//     ProductCard1,
//     ProductCard2,
//     ProductCard3,
//   ]
// };

// const ProductCard1 = {
//   elementType: 'div',
//   attributes: {
//     className: 'product-card'
//   },
//   children: [
//     {
//       elementType: 'img',
//       attributes: {
//         className: 'product-card-img',
//         alt: 'ABC',
//         src: 'Some src'
//       },
//     },
//     {
//       elementType: 'div',
//       attributes: {
//         className: 'product-card-details'
//       },
//       children: []
//     }
//   ]
// };
// const UpdatedProductCard1 = {
//   elementType: 'div',
//   attributes: {
//     className: 'product-card'
//   },
//   children: [
//     {
//       elementType: 'img',
//       attributes: {
//         className: 'product-card-img',
//         alt: 'ABC',
//         src: 'Some src'
//       },
//     },
//     {
//       elementType: 'div',
//       attributes: {
//         className: 'product-card-details active'
//       },
//       children: [
//       ]
//     }
//   ]
// };
// const ProductCard2 = {};
// const ProductCard3 = {};

// const newVirtualDom = {
//   elementType: 'div',
//   attribute: {
//     className: 'App'
//   },
//   children: [
//     UpdatedProductCard1,
//     ProductCard2,
//     ProductCard3,
//   ]
// };


// const updates = [
//   {
//     element: 'reference',
//     changeType: 'className',
//     newClassName: 'product-card-details active'
//   },
//   {
//     element: 'reference',
//     changeType: 'addChild',
//     child: {
//       elementType: 'button',
//       children: 'Add to cart'
//     },
//   },
// ]