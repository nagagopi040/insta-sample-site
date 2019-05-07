import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardText, Button, Modal, ModalBody, CardBody, CardLink, Label, Input } from "reactstrap"

export class PostModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLiked: false,
      likes: this.props.likes
    }
  }

  likePost = () =>{
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      likes: prevState.isLiked ? prevState.likes-1 : prevState.likes+1
    }))
  }

  goToINputText = () => {
    document.getElementById("main_commentbox").focus();
  }

  updateComments = () => {
    console.log(this.comment.value);
  }

  render(){
    const { props } = this;
    const { likes, isLiked } =this.state
    return(
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className="border-0">
        <CardTitle className="d-flex flex-row p-0 border-0 text-center">
          <Button color="transparent" className=" d-inline fa fa-arrow-left no-underline text-dark" aria-hidden="true" onClick={this.props.toggle}></Button>
          <CardText tag="h5" className="d-inline text-center">Post</CardText>
        </CardTitle>
        <ModalBody className="w-100 p-0 pb-2">
          <Card className="border-0 p-0">
            <CardImg src={props.image} alt={props.image} />
            <CardBody className="d-flex flex-row">
              <CardLink className={`d-inline fa ${isLiked ? 'fa-heart' : 'fa-heart-o'}`} aria-hidden="true" onClick={ () => this.likePost()}> {likes}</CardLink>
              <CardLink className="d-inline fa fa-comment-o" aria-hidden="true" onClick={ () => this.goToINputText()}></CardLink>
            </CardBody>
            <CardBody className="border-0">
              <CardText className="text-dark">{props.views > 0 ? props.views+" views" : null}</CardText>
              <CardText className="text-dark">{props.title}</CardText>
              <CardLink className="" aria-hidden="true" onClick={ () => this.viewComments()}>view comments</CardLink>
              <Label for="comment" className="d-flex flex-row border-1">
                <Input type="text" id="main_commentbox" name="comment" innerRef={(input) => this.comment = input} placeholder="Add a comment" className="d-inline border-0 border-bottom-1"/>
                <Button color="primary" className="d-inline border-0" onClick={ () => this.updateComments()}>post</Button>
              </Label>
            </CardBody>
          </Card>
        </ModalBody>
      </Modal>
    )
  }
}