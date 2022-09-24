import './ProductCard.css';

import AddToCard from './AddToCart';
import { useEffect, useState } from 'react';

function trackEvent(eventName) {
  // console.log('Tracking:', eventName);
};


function ProductCard({ title, image, price, stock, showImage }) {
  const [showButton, setShowButton] = useState(false);
  const [quantity, setQuantity] = useState(0);

  function toggle() {
    setShowButton(!showButton);
  }

  useEffect(() => {
    // console.log('useEffect quantity', quantity);
    if (quantity > 5) {
      trackEvent('tooMuchQuantity');
    }
  }, [quantity]);

  useEffect(() => {
    // console.log('useEffect title', title);
  }, [title]);

  useEffect(() => {
    // console.log('useEffect showButton', showButton);
  }, [showButton]);

  useEffect(() => {
    // console.log('useEffect showButton and quantity', showButton, quantity);
    if (quantity > 5) {
      trackEvent('tooMuchQuantity');
    }
  }, [showButton, quantity]);

  // console.log('ProductCard', { title });

  return (
    <div className="product-card">
      {/* <img
        alt={title}
        className={`product-card-img ${showImage ? '' : 'hide'}`}
        src={image}
      /> */}
      {
        showImage ? (
          <img
            alt={title}
            className="product-card-img"
            src={image}
          />
        ) : null
      }
      <div className="product-card-details">
        <div className="product-card-title">
          {title}
        </div>
        <div className="product-card-stock">
          {stock} in stock
        </div>
        <div className="product-card-price">
          Rs. {price}
        </div>
        <button onClick={toggle}>Toggle</button>

        {showButton ? (
          <AddToCard
            quantity={quantity}
            setQuantity={setQuantity}
            title={title}
          />
        ) : null}
      </div>
    </div>
  );
}

const ProductCardVirtualDOM = {
  elementType: 'div',
  attributes: {
    className: 'product-card'
  },
  children: [
    {
      elementType: 'img',
      attributes: {
        className: 'product-card-img',
        alt: 'ABC',
        src: 'Some src'
      },
    },
    {
      elementType: 'div',
      attributes: {
        className: 'product-card-details'
      },
      children: [

      ]
    }
  ]
}

// currentVirtualDom
// newVirtualDom

export default ProductCard;
