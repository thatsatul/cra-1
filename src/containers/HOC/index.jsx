import React from 'react';
import withStorage from '../../utils/withStorage';

const HOC = (props) => {
  const { storeData, getData, removeData } = props;
  return (
    <div>
      <div>HOC - {props.name}</div>
      <button onClick={() => storeData('test_cra', {value: 'test'})}>Store</button>
      <button onClick={() => console.log(getData('test_cra'))}>Get</button>
      <button onClick={() => removeData('test_cra')}>Remove</button>
    </div>
  );
};

export default withStorage(HOC);
