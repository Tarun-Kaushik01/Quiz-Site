import React from 'react'

function UserDetails({name, score}) {
  return (
    <div className='user-details-card'>
      <h3>Name: {name}</h3>
      <h3>Score: {score}</h3>
    </div>
  )
}

export default UserDetails
