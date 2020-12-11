import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Header from '../Components/Header';
import { Home } from '../Routes/Home';
import { Tv } from '../Routes/TV';
import { Search } from '../Routes/Search';

export const RouterContainer = () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/tv' component={Tv} />
        <Route path='/search' component={Search} />
        <Redirect from='*' to='/' />
      </Switch>
    </>
  </Router>
);
