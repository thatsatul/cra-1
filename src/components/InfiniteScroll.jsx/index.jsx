import React, { useEffect } from 'react';

const InfiniteScroll = (props) => {
  const { onReachBottom } = props;
  useEffect(() => {
    const bottomReached = () => {
      if((window.scrollY + window.innerHeight) >= document.body.scrollHeight) {
        onReachBottom();
      }
    }
    document.addEventListener('scroll', bottomReached);
    return () => {
      document.removeEventListener('scroll', bottomReached);
    }
  });
  return (
    <div id="infinite-scroll">
      <h1>Infinite Scroll</h1>
      {props.children}
    </div>
  );
}

export default InfiniteScroll;
