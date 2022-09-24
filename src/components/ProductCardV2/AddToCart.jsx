// const AddToCardComponent1 = { 
//   props: {},
//   state: 1,
//   render: function() {
//     return AddToCard(this.props);
//   }
// }

import { useEffect } from "react";

// Component lifecycle
// -> Mounting (State init 0)
// -> Update/Re render (State changes)
// -> Unmounting (State destroy)

function AddToCard({ title, quantity, setQuantity }) {
  // console.log('AddToCart', { title });
  
  useEffect(() => {
    // console.log('Addto card effect', quantity);
  }, [quantity])

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
