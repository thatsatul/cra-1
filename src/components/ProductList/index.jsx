import React from 'react';

const ProductList = (props) => {
  const { list } = props;
  return (
    <div id="product_list">
      <h1>Product List</h1>
      {list.map(product => <div key={product} className="product_item">Product {product}</div>)}
    </div>
  );
}

export default ProductList;
