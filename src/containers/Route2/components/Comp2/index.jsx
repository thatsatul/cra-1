import React from 'react';
import { TestContext } from '../../../../utils/context';

class Route2Comp2 extends React.Component {
  render() {
    let test = this.context;
    return <div>Route 2 ... Comp 2 ({test.name})</div>;
  }
}

export default Route2Comp2;

Route2Comp2.contextType = TestContext;
