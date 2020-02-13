import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Posts from '../Posts/Posts';
import NewPost from '../../components/NewPost/NewPost';
import Header from '../../components/Header/Header';
import './Blog.css';

class Blog extends Component {

  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/new-post" exact render = {() =>
            <section>
              <NewPost />
            </section>
          }/>
          <Route path="/" render = {(routeProps) =>
            <Posts
              { ...routeProps }
            />
          }/>
        </Switch>      
      </div>
    );
  }
}

export default Blog;