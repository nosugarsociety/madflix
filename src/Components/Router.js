import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Header from '../Components/Header';
import Home from '../Routes/Home';
import Tv from '../Routes/TV/TVContainer';
import Search from '../Routes/Search/SearchContainer';
import Detail from '../Routes/Detail/DetailContainer';

export const RouterContainer = () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/tv' component={Tv} />
        <Route path='/search' component={Search} />
        <Route path='/movie/:id' component={Detail} />
        <Route path='/show/:id' component={Detail} />
        <Redirect from='*' to='/' />
      </Switch>
    </>
  </Router>
);
