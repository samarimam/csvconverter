import Home from './Home.js';
import Dashboard from './dashboard.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Login from "./Login";

var isLoggedIn = true;

function App() {
  return (
    isLoggedIn ?
    <Router>
        <div>
          <nav>
          <ul>
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/dashboard'} className="nav-link">Dashboard</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/dashboard' component={Dashboard} />
              
          </Switch>
        </div>
      </Router>: <Login />
  );
}

export default App;
