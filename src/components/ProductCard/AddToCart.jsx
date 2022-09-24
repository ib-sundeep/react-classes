import { useEffect, useState } from "react";

// const AddToCardComponent1 = { 
//   props: {},
//   state: 1,
//   render: function() {
//     return AddToCard(this.props);
//   }
// }

// Component lifecycle
// -> Mounting (State init 0)
// -> Update/Re render (State changes)
// -> Unmounting (State destroy)

function trackEvent(eventName) {
  console.log('Tracking:', eventName);
};

function AddToCard({ title }) {
  console.log('AddToCart', { title });
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    console.log('useEffect');
    if (quantity > 5) {
      trackEvent('tooMuchQuantity');
    }
  });

  function incrementQuantity() {
    setQuantity(quantity + 1);
  }

  function decrementQuantity() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  

  if (quantity > 0) {
    return (
      <div className="product-card-counter">
        <button
          className="product-card-cta"
          onClick={decrementQuantity}
        >
          -
        </button>
        <span className="product-qty">{quantity}</span>
        <button
          className="product-card-cta"
          onClick={incrementQuantity}
        >
          +
        </button>
      </div>
    );
  } else {
    return (
      <button
        className="product-card-cta"
        onClick={incrementQuantity}
      >
        Add to cart
      </button>
    );
  }
}

export default AddToCard;
