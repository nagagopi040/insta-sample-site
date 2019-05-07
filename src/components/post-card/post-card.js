import React, { Component } from "react";
import { Card, CardImg, CardLink } from "reactstrap";

import { PostModal } from "./../post-modal";
export class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  openModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render(){
    const { props } = this;
    return(
      <Card className="border-0 py-0 h-100">
        <CardLink href="#" className="m-1 p-0 h-100" onClick={this.openModal}>
          <CardImg src={props.image} alt={props.image} height="100%" width="100%" />
        </CardLink>
        <PostModal {...props} isOpen={this.state.modal} toggle={this.openModal}/>
      </Card>
    )
  }
}