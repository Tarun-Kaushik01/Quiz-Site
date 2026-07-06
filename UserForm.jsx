import React, { useState } from 'react';

function UserForm(props) {
  const [userName, setUserName] = useState("");
  
  return (
    <form 
      onSubmit={(e) => {    
        e.preventDefault();
        if (userName.trim()) {
          props.setUser(userName.trim());
        }
      }} 
      className='form-container'
    >
      <h3>Please Enter Your Name:</h3>
      <input 
        type="text" 
        name='Name' 
        value={userName} 
        onChange={(e) => setUserName(e.target.value)} 
        placeholder="Enter name here..."
        required
      />
      <button type="submit" className="primary-btn">Join Quiz</button>
    </form>
  );
}

export default UserForm;
