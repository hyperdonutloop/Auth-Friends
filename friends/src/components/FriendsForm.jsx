import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsForm = ({ setFriends }) => {
  const [ friend, setFriend ] = useState({
    name: '',
    age: '',
    email: ''
  });

  const addFriend = (event, obj) => {
    event.preventDefault();
    // const token = localStorage.getItem('token');
      axiosWithAuth()
        .post('/api/friends', friend)
        .then(response => {
          setFriends(response.data)
          console.log('response', response);
        })
        .catch(error => {
          console.log('this is an error', error);
          
        })
    
  };

  const handleChanges = event => {
    setFriend({ ...friend, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={addFriend}>
      <label>Add Some Friends</label>
      <input
        type="text"
        name="name" 
        placeholder="name"
        value={friend.name}
        onChange={handleChanges}
      />
      <input
        type="text"
        name="age" 
        placeholder="age"
        value={friend.age}
        onChange={handleChanges}
      />
      <input
        type="text"
        name="email" 
        placeholder="email"
        value={friend.email}
        onChange={handleChanges}
      />
      <button>Add Friend!</button>
    </form>
  )
}

export default FriendsForm;