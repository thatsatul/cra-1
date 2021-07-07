import React, { useEffect } from 'react';
import InputEl from './Input';
import InputEl2 from './InputForwardingRef';

const test1Ref = React.createRef();
const test2Ref = React.createRef();

const Route2Comp1 = () => {
  useEffect(() => {
    test1Ref.current.focus();
    const tm = setTimeout(() => {
      test2Ref.current.focus();
      clearTimeout(tm);
    }, 2000);
  })

  return (
    <div>
      <div>Route 2 ... Comp 1</div>
      {/* We can pass test1Ref as props with any custom prop key other then ref */}
      <InputEl test1Ref={test1Ref} />
      {/* Below 'ref' is a special key and will work only if passed with using forwardingRefs */}
      <InputEl2 ref={test2Ref} />
    </div>
  );
}

export default Route2Comp1;
