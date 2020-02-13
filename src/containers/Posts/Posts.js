import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import { Route } from 'react-router-dom';
import { getAllPosts } from '../../api/postsService';

import './Posts.css';

class Posts extends Component {
  state = {
    allPosts: [],
  }

  handleUpdateSelectedPost = (postId) => {
    this.props.history.push(`/${postId}`);
  }

  componentDidMount = async () => {
    const allPosts = await getAllPosts()
      .then(res => res.data)
      .then(data => data.filter(post => post.id < 5))
      .catch(() => []);
    
    this.setState({ allPosts });
  }

  render() {
    return(
      <React.Fragment>
        <section className="Posts">
          {
            this.state.allPosts.map(post => (
              <Post
                key = { post.id }
                title = { post.title }
                author = 'OTree'
                postId = { post.id }
                updateSelectedPost = { this.handleUpdateSelectedPost }
              />
            ))
          }
        </section>
        <Route
          path="/:id"
          exact
          component = { FullPost }/>
      </React.Fragment>
    );
  }
}

export default Posts;
