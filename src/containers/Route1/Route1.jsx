// Component to check lazy loading and chunking
// Component to check force update on a click

import React, { Component } from 'react';

class Route1 extends Component {
  onDivClick = () => {
    this.forceUpdate();
  }

  render() {
    console.log('render called');
    return <div onClick={() => this.onDivClick()}>Route1</div>;
  }
} 

export default Route1;
