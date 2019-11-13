import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  //we are grabbing component, and renaming it with a capital C. 
  //component: Component = const Component = props.component
  //now we can display it below line 14
  // ...rest is passing in the REST of this components props
  <Route 
    {...rest}
    // spreading in those props to Route EXCEPT component
    render={props =>
    localStorage.getItem('token') ? ( 
      //if local storage has our token, then render the component
      <Component {...props} />
    ) : ( 
      //if local storage does not have a token, then redirect the user to login
      <Redirect to='/login' /> )
    } 
  />
);

export default PrivateRoute;

/* Private Route Rules

  1. It has the same API as <Route />. 
    - we interface with components via props (path, component, exact, etc.)
    - it has to be able to take in the same PROPS as a route component

  2. It renders a <Route /> and passes all the props through to it.
  3. It checks if the user is authenticated, if they are, it renders the “component” prop. If not, it redirects the user to /login. */