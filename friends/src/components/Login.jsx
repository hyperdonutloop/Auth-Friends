import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = props => {
  const [ credentials, setCredentials ] = useState({
    username: 'Ryan',
    password: '1234',
  });

  //setting up state to store what the user enters into the form. the useState hook gives you the current value of the variable you want to store in the state, and a function to set the new value

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // e.target.value is what the user types in and we are using setCredentials to connect the state to our fields in the form

  const login = e => {
    e.preventDefault();
    //calling the login endpoint with a POST request when the user submits the form, redirects the user to the protected route when the login API call returns
    axiosWithAuth() 
    // axiosWithAuth returns -> axios instance. then .post returns our promise. 
      .post('/api/login', credentials) 
      .then(response => {
        localStorage.setItem('token', response.data.payload);
        //response.data.payload has the token we are looking for
        props.history.push('/protected');
        //props.history comes from react router (we are given history, location, and match)
        //we are then routing this login to the PROTECTED web page
      })
      .catch(error => {
      alert(error.response.data.error);
      })
  };

    return (
      <div>
        <h2>Login Please!</h2>
        <form onSubmit={login}>
          <input
            type='text'
            name='username'
            // value={username} 
            onChange={handleChange}
          />
          <input
            type='text'
            name='password'
            // value={password}
            onChange={handleChange} 
          />
          <button>Login</button>
        </form>
      </div>
    );
};

export default Login;

//when submitting login form we are calling the Login function