import React, { Component } from "react";
import { Card, CardImg } from "reactstrap"

export class PostCard extends Component {
  render(){
    const { props } = this;
    return(
      <Card>
        <CardImg src={props.image} alt={props.image} />
      </Card>
    )
  }
}