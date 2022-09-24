import './ProductCard.css';

import AddToCard from './AddToCart';
import { useState } from 'react';

function ProductCard({ title, image, price }) {
  console.log('ProductCard', { title });
  const [showButton, setShowButton] = useState(false);

  function toggle() {
    setShowButton(!showButton);
  }

  return (
    <div className="product-card">
      <img
        alt={title}
        className="product-card-img"
        src={image}
      />
      <div className="product-card-details">
        <div className="product-card-title">
          {title}
        </div>
        <div className="product-card-price">
          Rs. {price}
        </div>
        <button onClick={toggle}>Toggle</button>

        {showButton ? <AddToCard title={title} /> : null}
      </div>
    </div>
  );
}

export default ProductCard;
