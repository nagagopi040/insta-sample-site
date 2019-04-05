import React, { Component } from "react";
import axios from "axios";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Container, Row, Col } from "reactstrap";

import { PostCard } from "./../../components";
import { getAllPosts } from "./actions";
import { API } from "./../../utils";

class Home extends Component{
  componentDidMount(){
    API.getInitialPosts()
      .then(res => {
        this.props.getAllPosts(res);
      })
  }

  render(){
    const { posts } = this.props;
    return(
      <Container>
        <Row>
            {
              posts.map(( post, index )  => {
                return(
                  <Col xs="4" key={index} className="px-0">
                    <PostCard {...post} key={post.id} />
                  </Col>
                )
              })
            }
          </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  posts : state.homeReducer.posts
})

const mapDispatchToProps = (dispatch) => ({
  getAllPosts: bindActionCreators(getAllPosts, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);