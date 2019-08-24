import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import {Tracker} from 'meteor/tracker';
import { createBrowserHistory } from 'history';

import Signup from './../imports/ui/Signup';
import Login from './../imports/ui/Login';
import Link from './../imports/ui/Link';
import NotFound from './../imports/ui/NotFound';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];
const history = createBrowserHistory();
const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    history.replace('/links');
  }
}
const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    history.replace('/');
  }
}

const routes = (
  <Router history={history}>
    <Switch>
      {/* Son páginas públicas, por eso llevan onEnter */}
      <Route exact path="/signup" component={Signup} onEnter={onEnterPublicPage} />
      <Route exact path="/" component={Login} onEnter={onEnterPublicPage}/>
      <Route exact path="/links" component={Link} onEnter={onEnterPrivatePage} />
      <Route exact path="/*" component={NotFound} />
    </Switch>
  </Router>
);

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const pathname = location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);
  console.log('isAuthenticated', isAuthenticated);
  if (isUnauthenticatedPage && isAuthenticated) {
    history.replace('/links');
  }else if (isAuthenticatedPage && !isAuthenticated) {
    history.replace('/');
  }
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app') );
});
