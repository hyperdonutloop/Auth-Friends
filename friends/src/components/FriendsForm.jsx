import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsForm = ({ setFriends }) => {
  const [ friend, setFriend ] = useState({
    name: '',
    age: '',
    email: ''
  });

  const handleChanges = event => {
    setFriend({ ...friend, [event.target.name]: event.target.value });
  };

  const addFriend = (e, obj) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (obj.name && obj.email && obj.age) {
      axiosWithAuth()
        .post('http://localhost:5000/api/friends', obj, token)
        .then(response => {
          setFriends(response.data);

        })
    }
  }

  return (
    <form onSubmit={e => addFriend(e, friend)} action=''>
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
        age="age" 
        placeholder="age"
        value={friend.age}
        onChange={handleChanges}
      />
      <input
        type="text"
        email="email" 
        placeholder="email"
        value={friend.email}
        onChange={handleChanges}
      />
      <button>Add Friend!</button>
    </form>
  )
}

export default FriendsForm;