import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user, onDelete }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      margin: '10px',
      width: '200px',
      textAlign: 'center'
    }}>
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} style={{ borderRadius: '50%', width: '100px' }} />
      <h3>{user.first_name} {user.last_name}</h3>
      <p>{user.email}</p>
      <div>
        <Link to={`/edit-user/${user.id}`} style={{ marginRight: '10px', color: '#007bff' }}>Edit</Link>
        <button onClick={() => onDelete(user.id)} style={{ color: '#dc3545', border: 'none', background: 'none', cursor: 'pointer' }}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;