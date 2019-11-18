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

/*
1. import BrowserRouter as Router from reac-router-dom

2. Use Router as base component to surround entire app - in index.js surround APP by ROUTER

3. The Route component is the way we delcare what components will be mounted based on what URL's are being requested by the user. In the Route component we need to pass two props PATH -> we need to specifiy the path, and COMPONENT-> which component the user needs to see when they navigate to that PATH.

4. Use exact path - this is to prevent 2 components from showing up on the same page (ex: /, /about)

5. A SWITCH looks through it's children and and renders the first one that matches the current URL, and ignores all others. 

6. PrivateRoute means that it's a protected route. See PrivateRoute.jsx for more.

7. The Link tag is just like an anchor tag. 
*/