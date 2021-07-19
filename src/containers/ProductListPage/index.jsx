import React, { useEffect, useRef, useState } from 'react';
import InfiniteScroll from '../../components/InfiniteScroll.jsx/index.jsx';
import ProductList from '../../components/ProductList/index.jsx';

const ProductListPage = () => {
  const [list, setList] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [hasError, setError] = useState(false);
  
  let cursor = useRef(0);
  const limit = 100;
  const maxCount = 700;
  const errorCount = 500;

  const onReachBottom = () => {
    const newList = JSON.parse(JSON.stringify(list));
    for(let i = cursor.current + 1; i <= cursor.current + limit; i++) {
      if (i >= errorCount) {
        setError(true);
      }
      if (i >= maxCount) {
        setIsFinished(true);
      }
      newList.push(i);
    }
    cursor.current = cursor.current + limit;
    setList(newList);
  }

  useEffect(() => {
    const initialList = [];
    for(let i = cursor.current + 1; i <= cursor.current + limit; i++) {
      initialList.push(i);
    }
    cursor.current = cursor.current + limit;
    setList(initialList);
  }, []);

  return (
    <div>
      <h1>Product List Page</h1>
      <InfiniteScroll onReachBottom={onReachBottom} isFinished={isFinished} hasError={hasError}>
        <ProductList list={list} />
        {hasError && <div>Some error occurred while fetching data</div>}
        {isFinished && <div>All records shown</div>}
      </InfiniteScroll>
    </div>
  )
};

export default ProductListPage;
