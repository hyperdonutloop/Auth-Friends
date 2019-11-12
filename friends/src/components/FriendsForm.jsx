import React from 'react';

const FriendsForm = () => {
  
  return (
    <form>
      <label>Add Some Friends</label>
      <input
        type="text"
        name="name" 
        placeholder="name"
      />
      <input
        type="text"
        age="age" 
        placeholder="age"
      />
      <input
        type="text"
        email="email" 
        placeholder="email"
      />
      <button>Add Friend</button>
    </form>
  )
}

export default FriendsForm;