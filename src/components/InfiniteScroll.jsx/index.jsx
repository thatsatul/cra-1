import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const InfiniteScroll = (props) => {
  const { onReachBottom, hasError, isFinished } = props;
  useEffect(() => {
    const bottomReached = () => {
      if((window.scrollY + window.innerHeight) >= document.body.scrollHeight) {
        if(!hasError && !isFinished) {
          onReachBottom();
        }
      }
    }
    document.addEventListener('scroll', bottomReached);
    return () => {
      document.removeEventListener('scroll', bottomReached);
    }
  }, [hasError, isFinished, onReachBottom]);

  return (
    <div id="infinite-scroll">
      <h1>Infinite Scroll</h1>
      {props.children}
    </div>
  );
}

export default InfiniteScroll;

InfiniteScroll.propTypes = {
  onReachBottom: PropTypes.func,
  hasError: PropTypes.bool,
  isFinished: PropTypes.bool
};

InfiniteScroll.defaultProps = {
  onReachBottom: () => {},
  hasError: false,
  isFinished: false
};
