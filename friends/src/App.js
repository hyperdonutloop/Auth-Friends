import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';
import FriendsForm from './components/FriendsForm';
import PrivateRoute from './utils/PrivateRoute';
import FriendsList from './components/FriendsList';
import Login from './components/Login';

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
          <PrivateRoute path='/friends'>
            <FriendsList />
            <FriendsForm />
          </PrivateRoute>
          <Route path='/login' component={Login} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
