import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PostList from './PostList';
import PostPage from './PostPage';
import PostForm from './PostForm';
import Footer from './Footer';

/** Main routes for Microblog App */

function Routes() {

  return (
    <Switch>

      <Route exact path="/">
        <PostList />
        <Footer />
      </Route>

      <Route exact path="/new">
        <PostForm />
      </Route>

      <Route exact path="/:id">
        <PostPage />
        <Footer />
      </Route>

      <Redirect to="/" />

    </Switch>
  )
}

export default Routes;