import React from 'react';
import { Link } from 'react-router-dom';

const UserTable = ({ users, onDelete }) => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Avatar</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>First Name</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Last Name</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Email</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} style={{ width: '50px', borderRadius: '50%' }} />
            </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.first_name}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.last_name}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.email}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              <Link to={`/edit-user/${user.id}`} style={{ marginRight: '10px', color: '#007bff' }}>Edit</Link>
              <button onClick={() => onDelete(user.id)} style={{ color: '#dc3545', border: 'none', background: 'none', cursor: 'pointer' }}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;