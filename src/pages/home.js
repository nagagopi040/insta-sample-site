import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import { PostCard } from "./../components";

export default class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    axios.get("http://www.mocky.io/v2/5c924ba432000029056bced2")
      .then(res => {
        const { data } = res;
        this.setState({
          posts: data ? data : []
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
  render(){
    const { posts } = this.state;
    return(
      <Container>
      <h1>Welcome to Home Page</h1>
      {
        posts.map(post => {
          return(
            <PostCard {...post} key={post.id} />
          )
        })
      }
      </Container>
    )
  }
}