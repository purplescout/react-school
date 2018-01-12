import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './home';
import Week1 from './week1';

const Content = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/week1" component={Week1} />
      {/* <Route path="/week2" component={Week2} /> */}
      </div>
  </Router>
);

export default Content;
