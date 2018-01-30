import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Navigation from './components/Navigation.js';


import Send from './pages/Send.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Order from './pages/Order.js';

const App = () =>
  <Router>
    <div>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route exact path="/send" component={Send} />
      <Route path="/order" component={Order} />
      <Route exact path="/about" component={About} />
    
    </div>
  </Router>;

export default App;
