import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import { getAllPosts, deletePost } from '../../api/postsService';
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

  deletePostHandler = async (postId) => {
    await deletePost(postId)
      .then(res => res.data)
      .then(data => { console.log(data); })
      .catch(err => { console.log(err); });
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
        <section>
          <FullPost
            deletePost = { this.deletePostHandler }
            selectedPostId = { this.state.selectedPostId }
          />
        </section>
      </React.Fragment>
    );
  }
}

export default Posts;
