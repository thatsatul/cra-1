import React, { useEffect, useState } from 'react';
import usePrevious from '../../../../utils/usePrevious';
import InputEl from './Input';
import InputEl2 from './InputForwardingRef';

const test1Ref = React.createRef();
const test2Ref = React.createRef();

const Route2Comp1 = (props) => {
  const [intention, setIntention] = useState('I hate you', Route2Comp1, document.getElementById('root'));
  const prevProps = usePrevious(props);

  useEffect(() => {
    test1Ref.current.focus();
    const tm = setTimeout(() => {
      test2Ref.current.focus();
      clearTimeout(tm);
    }, 2000);
  })

  console.log('REACT_APP_VERSION : ', process.env.REACT_APP_VERSION);

  return (
    <div>
      <div>Route 2 ... Comp 1</div>
      <div onClick={() => setIntention(intention === 'I hate you' ? 'No .. I love you' : 'I hate you')}>
        {intention}
      </div>
      {/* We can pass test1Ref as props with any custom prop key other then ref */}
      <InputEl test1Ref={test1Ref} />
      {/* Below 'ref' is a special key and will work only if passed with using forwardingRefs */}
      <InputEl2 ref={test2Ref} />
    </div>
  );
}

export default Route2Comp1;
