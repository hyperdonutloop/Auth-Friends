import React, { useState } from 'react';
// import { axiosWithAuth } from '../utils/axiosWithAuth';

const Friend = ({ friend, setFriend }) => {
  const { id, name, age, email } = friend;
  // const [ thisFriend, setThisFriend ] = useState({
  //   id: id,
  //   name: name,
  //   email: email,
  //   age: age
  // })

  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{email}</p>
    </div>
  )
}

export default Friend;