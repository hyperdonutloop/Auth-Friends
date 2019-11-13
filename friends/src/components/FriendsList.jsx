import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendsForm from './FriendsForm';
import Friend from './Friend';


const FriendsList = () => {
  const [ friends, setFriends ] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(response => {
        setFriends(response.data);
      })
      .catch(error => {
        console.log('the data was not returned', error);
        
      })
  }

  return (
    <div>
      <h1>These Are My Friends</h1>
      <FriendsForm setFriends={setFriends}/>
      {friends.map(item => (
        <Friend key={item.id} setFriends={setFriends} friend={item} />
      ))}
    </div>
  )
}

export default FriendsList;