import React from "react";
// import styles from "./modal.css";
import { Modal, Button } from 'react-bootstrap';

export default class ModalDialog extends React.Component {
  onClose = e => {
    console.log(this.props.onClose);
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      // <div className="modol" id="modol">
      //   <h2>Modal Window</h2>
      //   <div className="content">{this.props.children}</div>
      //   <div className="actions">
      //     <button className="toggle-button" onClick={this.onClose}>
      //       close
      //     </button>
      //   </div>
      // </div>
      <Modal dialogClassName="modal-90w">
        <Modal.Body>
          <div className="ajax_quick_view">
              
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}