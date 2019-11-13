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
            <Link to='/friends'>My Friends</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path='/friends' component={FriendsList} />
          <Route path='/login' component={Login} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
