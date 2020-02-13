import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Posts from '../Posts/Posts';
import NewPost from '../../components/NewPost/NewPost';
import FullPost from '../../components/FullPost/FullPost';
import Header from '../../components/Header/Header';
import './Blog.css';

class Blog extends Component {

  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact render = {(routeProps) =>
            <Posts
              { ...routeProps }
            />
          }/>
          <Route path="/new-post" exact render = {() =>
            <section>
              <NewPost />
            </section>
          }/>
          <Route
            path="/:id" exact render = {(routeProps) =>
              <FullPost
                { ...routeProps }
              />
          }/>
        </Switch>      
      </div>
    );
  }
}

export default Blog;