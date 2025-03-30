import React from 'react';

const Alert = ({ message, type }) => {
  const alertStyles = {
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    color: '#fff',
    backgroundColor: type === 'error' ? '#dc3545' : '#28a745'
  };

  return (
    <div style={alertStyles}>
      {message}
    </div>
  );
};

export default Alert;