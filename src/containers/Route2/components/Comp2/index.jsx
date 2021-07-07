import React from 'react';
import { TestContext } from '../../../../utils/context';

class Route2Comp2 extends React.Component {
  constructor(props) {
    super(props);
    this.testRef = React.createRef();
  }

  componentDidMount() {
    this.testRef.current.focus();
  }

  render() {
    let test = this.context;
    return (
      <div>
        <div>Route 2 ... Comp 2 ({test.name})</div>
        <div><input type="text" ref={this.testRef} placeholder="ref usage" /></div>
      </div>
    );
  }
}

export default Route2Comp2;

Route2Comp2.contextType = TestContext;
