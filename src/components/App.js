import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Detail from '../router/Detail';
import Home from '../router/Home';

export default function App(){
  return (
    <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/:id" component={Detail}/>
    </Router>
  )
}