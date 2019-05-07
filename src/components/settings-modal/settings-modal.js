import React, { Component } from 'react';
import { Modal, ModalBody, ListGroup, ListGroupItem } from "reactstrap";

export class SettingsModal extends Component {
  render() {
    const { openModal, toggle } = this.props;
    return (
      <Modal isOpen={openModal} toggle={toggle}>
        <ModalBody className="px-0">
          <ListGroup className="text-center">
            <ListGroupItem tag="a" href="#" onClick={toggle} className="text-decoration-none">Change Password</ListGroupItem>
            <ListGroupItem tag="a" href="#" onClick={toggle} className="text-decoration-none">NameTag</ListGroupItem>
            <ListGroupItem tag="a" href="#" onClick={toggle} className="text-decoration-none">Authorized Apps</ListGroupItem>
            <ListGroupItem tag="a" href="#" onClick={toggle} className="text-decoration-none">Notifications</ListGroupItem>
            <ListGroupItem tag="a" href="#" onClick={toggle} className="text-decoration-none">Privacy and Security</ListGroupItem>
            <ListGroupItem tag="a" href="#" onClick={toggle} className="text-decoration-none">Logout</ListGroupItem>
            <ListGroupItem tag="a" href="#" onClick={toggle} className="text-decoration-none">Cancel</ListGroupItem>
          </ListGroup>
        </ModalBody>
      </Modal>
    );
  }
}
