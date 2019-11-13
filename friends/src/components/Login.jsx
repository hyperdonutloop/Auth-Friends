import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = props => {
  const [ credentials, setCredentials ] = useState({
    username: 'Ryan',
    password: '1234',
  });

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = e => {
    e.preventDefault();

    axiosWithAuth()
      .post('http://localhost:5000/api/login', credentials)
      .then(response => {
        localStorage.setItem('token', response.data.payload);
        props.history.push('/protected');
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