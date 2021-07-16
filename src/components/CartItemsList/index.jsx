import React from 'react';

const CartItemsList = (props) => {
  const { list } = props;
  return (
    <div id="cartItem_list">
      <h1>Cart Item List</h1>
      {list.map(cartItem => <div key={cartItem} className="cart_item">Cart Item {cartItem}</div>)}
    </div>
  );
}

export default CartItemsList;
