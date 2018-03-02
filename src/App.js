import React, { Component } from 'react';
import './App.css';
import Intro from './containers/Intro/Intro.js';
import Component2017 from './containers/2017/2017.js';
import Component2018 from './containers/2018Plan/2018Plan.js';
import CurrentYear from './containers/CurrentYear/CurrentYear.js';
import RevenueRecap from './containers/2017Revenue/2017Revenue.js';
import Changes from './containers/2017Changes/2017Changes.js';
import Revenue2018 from './containers/2018Revenue/2018Revenue.js';
import Challenges2018 from './containers/2018Challenges/2018Challenges.js';
import Prospecting from './containers/2018pros/2018pros.js';
import Future from './containers/future/future.js';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Router>
          <Switch>
            <Route exact path="/" component={Intro}/>
            <Route exact path="/2017" component={Component2017}/>
            <Route exact path="/2018plan" component={Component2018}/>
            <Route exact path="/currentyear" component={CurrentYear}/>
            <Route exact path="/2017/2017rev" component={RevenueRecap}/>
            <Route exact path="/2017/2017changes" component={Changes}/>
            <Route exact path="/currentyear/2018rev" component={Revenue2018}/>
            <Route exact path="/currentyear/2018challenges" component={Challenges2018}/>
            <Route exact path="/2018plan/prospecting" component={Prospecting}/>
            <Route exact path="/2018plan/future" component={Future}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
