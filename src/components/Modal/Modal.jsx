import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './modal.scss';

const modalRoot = document.getElementById('modal-root');
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // The portal element is inserted in the DOM tree after
    // the Modal's children are mounted, meaning that children
    // will be mounted on a detached DOM node. If a child
    // component requires to be attached to the DOM tree
    // immediately when mounted, for example to measure a
    // DOM node, or uses 'autoFocus' in a descendant, add
    // state to Modal and only render the children when Modal
    // is inserted in the DOM tree.
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}

const ModalWrapper = (props) => {
  const [show, showModal] = useState(true);
  const modalBodyClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }
  return (
    show && (
      <Modal>
        <div className="modal-wrapper" onClick={() => showModal(false)}>
          <div className="modal-body" onClick={(e) => modalBodyClick(e)}>
            {props.children}
          </div>
        </div>
      </Modal>
    )
  );
}

export default ModalWrapper;
