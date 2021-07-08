import React from 'react';

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    const scrollY = window.scrollY;
    return (
      <div style={{ position: 'absolute', left: mouse.x, top: scrollY + mouse.y }}>Cat</div>
    );
  }
}

class Dog extends React.Component {
  render() {
    const mouse = this.props.mouse;
    const scrollY = window.scrollY;
    return (
      <div style={{ position: 'absolute', left: mouse.x, top: scrollY + mouse.y }}>Dog</div>
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '40vh', border: '1px solid black' }} onMouseMove={this.handleMouseMove}>

        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )}/>
        <Mouse render={mouse => (
          <Dog mouse={mouse} />
        )}/>
      </div>
    );
  }
}

export default MouseTracker;
