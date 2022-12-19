import React from 'react';
import { useParams } from 'react-router-dom';

import Categories from '../../components/Categories';
import ProductList from '../../components/ProductList';

function ProductsPage() {
  // /categories/:categoryId/sub/:subCategoryId
  // /categories/1/sub/234, /categories/2/sub/456
  // { categoryId: '1', subCategoryId: '234' },
  // { categoryId: '1', subCategoryId: '456' }
  const params = useParams();
  console.log(params);

  return (
    <div>
      <Categories />
      <ProductList categoryId={params.categoryId} />
    </div>
  )
}

export default ProductsPage;
