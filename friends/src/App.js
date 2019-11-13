import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';
// import FriendsForm from './components/FriendsForm';
import PrivateRoute from './utils/PrivateRoute';
import Login from './components/Login';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/protected'>My Friends</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path='/protected' component={FriendsList} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Surrounded app by Router 
// In the Route component we need to pass two props PATH -> we need to specifiy the path, and COMPONENT-> which component the user needs to see when they navigate to that PATH.
//PrivateRoute means that it's a protected route