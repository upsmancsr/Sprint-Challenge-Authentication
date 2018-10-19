import React, { Component } from 'react';
import {NavLink, Route} from 'react-router-dom';

import Jokes from './jokes/Jokes.js';
import SignUp from './auth/SignUp';
import LogIn from './auth/LogIn';

import './App.css';

const Home = props => {
  return (
    <div>
      <h1>Home Component</h1>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink to="/" exact>
              Home
            </NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/users">Jokes</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/signup">Sign Up</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/login">Log In</NavLink>
            &nbsp;|&nbsp;
            <button onClick={this.logOut}>Log Out</button>
          </nav>
          <main>
            <Route path="/" component={Home} exact />
            <Route path="/jokes" component={Jokes} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
          </main>
        </header>
      </div>
    );
  }

  logOut = () => {
    localStorage.removeItem('jwt');
  };
}

export default App;
