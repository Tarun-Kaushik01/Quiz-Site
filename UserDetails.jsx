import React from 'react';

function UserDetails({ name, score }) {
  return (
    <div className='user-details-card'>
      <h3>Participant: <span>{name}</span></h3>
      <h3>Current Score: <span>{score}</span></h3>
    </div>
  );
}

export default UserDetails;
