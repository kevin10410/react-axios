import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import { getAllPosts } from '../../api/postsService';
import { Link } from 'react-router-dom';

import './Posts.css';

class Posts extends Component {
  state = {
    allPosts: [],
    selectedPostId: null,
  }

  handleUpdateSelectedPost = (postId) => {
    const selectedPostId = postId;
    this.setState({ selectedPostId }); 
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
              <Link
                to={`/${post.id}`}
                key = { post.id }
              >
                <Post
                  title = { post.title }
                  author = 'OTree'
                  postId = { post.id }
                  updateSelectedPost = { this.handleUpdateSelectedPost }
                />
              </Link>
            ))
          }
        </section>
      </React.Fragment>
    );
  }
}

export default Posts;
