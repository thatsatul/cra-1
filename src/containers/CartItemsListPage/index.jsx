import React, { useEffect, useRef, useState } from 'react';
import CartItemsList from '../../components/CartItemsList/index.jsx';
import InfiniteScroll from '../../components/InfiniteScroll.jsx/index.jsx';

const CartItemsListPage = () => {
  const [list, setList] = useState([]);
  
  let cursor = useRef(0);
  const limit = 300;

  const onReachBottom = () => {
    const newList = JSON.parse(JSON.stringify(list));
    for(let i = cursor.current + 1; i <= cursor.current + limit; i++) {
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
      <h1>Cart Items List Page</h1>
      <InfiniteScroll onReachBottom={onReachBottom}>
        <CartItemsList list={list} />
      </InfiniteScroll>
    </div>
  )
};

export default CartItemsListPage;
