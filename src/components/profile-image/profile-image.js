import React, { Component } from 'react';
import { CardImg, CardLink, Modal, ModalBody, ModalHeader, ModalFooter, ListGroup, ListGroupItem } from "reactstrap";

export class ProfileImage extends Component {
  constructor(props){
    super(props);
    this.state = {
      openImageModal: false
    }
  }

  openImageModal = () => {
    this.setState({openImageModal: !this.state.openImageModal})
  }

  render() {
    const { src } = this.props
    return (
      <>
        <CardLink  href="#" onClick={this.openImageModal} className="text-decoration-none">
          <CardImg src={src} className="order-0 rounded-circle" />
        </CardLink>
        <Modal isOpen={this.state.openImageModal} toggle={this.openImageModal} centered={true} className="text-center">
          <ModalHeader className="border-0 justify-content-center">Change Profile Photo</ModalHeader>
          <ModalBody className="px-0">
            <ListGroup>
              <ListGroupItem tag="a" href="#" onClick={this.openImageModal} className="text-decoration-none px-0">Upload Photo</ListGroupItem>
              <ListGroupItem tag="a" href="#" onClick={this.openImageModal} className="text-decoration-none px-0 text-danger">Remove Current Photo</ListGroupItem>
            </ListGroup>
          </ModalBody>
          <ModalFooter className="border-0 justify-content-center">Cancel</ModalFooter>
        </Modal>
      </>
    );
  }
}
