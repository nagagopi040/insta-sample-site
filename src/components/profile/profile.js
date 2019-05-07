import React, { Component } from "react";
import { Row, Col, Card, CardBody, CardImg, CardTitle, CardText, CardLink, Modal, ModalBody, ModalHeader, ModalFooter, ListGroup, ListGroupItem } from "reactstrap";
import axios from "axios";
import { ProfileImage } from "./../../components";

export class Profile extends Component{
  constructor(props){
    super(props);
    this.state = {
      openModal: false,
      openImageModal: false,
      profile_data: {}
    }
  }

  componentDidMount(){
    axios.get("http://www.mocky.io/v2/5cd123be3300003c07b126c0")
      .then(res => {
        this.setState({profile_data: res.data ? res.data : {}})
      })
      .catch(error => {
        console.log(error);
      })
  }

  toggle = () => {
    this.setState({openModal: !this.state.openModal})
  }

  render(){
    const { profile_data } = this.state;

    return(
      <Row className="py-5">
        <Col xs="2">
          <ProfileImage src={profile_data.profile_image}/>
        </Col>
        <Col xs="10">
          <Row>
            <Col>
              <Card className="border-0 flex-row">
                <CardBody className="py-2">
                  <CardTitle tag="h3" className="d-inline px-2">{profile_data.username}</CardTitle>
                  <CardLink href="/edit_profile" className="d-inline px-2 py-1 border">Edit Profile</CardLink>
                  <CardLink href="#" className="d-inline px-2" onClick={this.toggle}>Settings</CardLink>
                  <Modal isOpen={this.state.openModal} toggle={this.toggle} className={this.props.className}>
                    <ModalBody className="px-0">
                      <ListGroup className="text-center">
                        <ListGroupItem tag="a" href="#" onClick={this.toggle} className="text-decoration-none">Change Password</ListGroupItem>
                        <ListGroupItem tag="a" href="#" onClick={this.toggle} className="text-decoration-none">NameTag</ListGroupItem>
                        <ListGroupItem tag="a" href="#" onClick={this.toggle} className="text-decoration-none">Authorized Apps</ListGroupItem>
                        <ListGroupItem tag="a" href="#" onClick={this.toggle} className="text-decoration-none">Notifications</ListGroupItem>
                        <ListGroupItem tag="a" href="#" onClick={this.toggle} className="text-decoration-none">Privacy and Security</ListGroupItem>
                        <ListGroupItem tag="a" href="#" onClick={this.toggle} className="text-decoration-none">Logout</ListGroupItem>
                        <ListGroupItem tag="a" href="#" onClick={this.toggle} className="text-decoration-none">Cancel</ListGroupItem>
                      </ListGroup>
                    </ModalBody>
                  </Modal>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className="border-0">
                <CardBody className="py-2">
                  <CardText className="d-inline px-2"><span className="font-weight-bold">{profile_data.no_of_posts}</span> posts</CardText>
                  <CardText className="d-inline px-2"><span className="font-weight-bold">{profile_data.no_of_followers}</span> followers</CardText>
                  <CardText className="d-inline px-2"><span className="font-weight-bold">{profile_data.no_of_following}</span> following</CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className="border-0">
                <CardBody className="py-2">
                  <CardTitle className="font-weight-bold px-2">{profile_data.name}</CardTitle>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}