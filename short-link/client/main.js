import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Signup from './../imports/ui/Signup';
import Login from './../imports/ui/Login';
import Link from './../imports/ui/Link';
import NotFound from './../imports/ui/NotFound';

const routes = (
  <Router>
    <Switch>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/" component={Login} />
      <Route exact path="/links" component={Link} />
      <Route exact path="/*" component={NotFound} />
    </Switch>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app') );
});
