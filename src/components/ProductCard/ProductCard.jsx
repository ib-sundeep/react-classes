import React from 'react';
import AddToCart from '../AddToCart';

import styles from './ProductCard.module.css';

function ProductCard({
  product
}) {
  console.log('ProductCard rendered', product.id);

  return (
    <div className={styles.card}>
      <h3>{product.title}</h3>
      <h5>Rs. {product.price}</h5>
      <AddToCart product={product} />
    </div>
  );
}
// Add to cart
export default ProductCard;
