import React, { useState } from 'react'

function UserForm(props) {
    const [userName, setUserName] = useState("");
  return (
    <form 
        onSubmit={(e) => {    
            e.preventDefault();
            props.setUser(userName)
        }} 
        className='form-container'
    >
        <h3>Please Enter Your Name:</h3>
        <input type="text" name='Name' value={userName} onChange={(e) => {setUserName(e.target.value)}} />
    </form>
  )
}

export default UserForm
