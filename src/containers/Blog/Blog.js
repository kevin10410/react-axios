import React, { Component } from 'react';

import Posts from '../Posts/Posts';
import NewPost from '../../components/NewPost/NewPost';
import Header from '../../components/Header/Header';
import './Blog.css';

class Blog extends Component {

  render () {
    return (
      <div>
        <Header />
        <Posts />
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;