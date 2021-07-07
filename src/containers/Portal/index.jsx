import React from 'react';
import Modal from '../../components/Modal/Modal';

class ReactPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { showModal } = this.state;
    this.setState({
      showModal: !showModal
    });
  }

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <div onClick={this.handleClick}>Click to Show / Hide Modal</div>
        <p>
          Open up the browser DevTools
          to observe that the Modal is not a child of the div.
        </p>
        {showModal &&
          <Modal>
            <div>Called from React Portal</div>
            <button onClick={() => console.log(123)}>Click here</button>
          </Modal>
        }
      </div>
    );
  }
}

export default ReactPortal;
