import { useMemo, useState } from 'react';
import './App.css';

// import Greeting from './components/Greeting';
import products from './assignment';
import ProductCard from './components/ProductCardV2';
import useMyMemo from './hooks/useMyMemo';
// import ProductCard from './components/ProductCard';

// ./components/ProductCard.js
// ./components/ProductCard.jsx
// ./components/ProductCard/index.js
// ./components/ProductCard/index.jsx

const users = [
  {
    firstName: "Abhijeet",
    lastName: "Negi",
  },
  {
    firstName: "Saurabh",
    lastName: "Tyagi",
  },
  {
    firstName: "Vishnu",
    lastName: "Vardhan",
  },
  {
    firstName: "Shubham",
    lastName: "Sudame",
  }
]

const App = () => {
  const [exclude, setExclude] = useState(false);
  const [showImage, setShowImage] = useState(true);

  function handleExcludeChange(event) {
    setExclude(event.target.checked);
  }

  function handleShowChange(event) {
    setShowImage(event.target.checked);
  }

  function getFilteredProducts() {
    console.log('Products filtered');
    return products.filter((product) => {
      if (exclude) {
        return product.stock > 0;
      } else {
        return true;
      }
    })
  }

  const filteredProducts = useMyMemo(getFilteredProducts, [exclude]);

  // const filteredProducts = getFilteredProducts();

  return (
    <div className="App">
      <label>
        <input
          type="checkbox"
          onChange={handleShowChange}
          checked={showImage}
        />
        Show/Hide Images
      </label>
      <div className="filters">
        <label>
          <input
            type="checkbox"
            onChange={handleExcludeChange}
            checked={exclude}
          />
          Exclude out of stock
        </label>
      </div>
      <div className="products">
        {
          filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              stock={product.stock}
              showImage={showImage}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;


// [
//   <Greeting
//     // key={index}
//     firstName={users[0].firstName}
//     lastName={user[0].lastName}
//   />,
//   <Greeting
//     // key={index}
//     firstName={users[1].firstName}
//     lastName={user[2].lastName}
//   />,
// ]