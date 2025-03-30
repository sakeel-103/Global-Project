import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            margin: '0 5px',
            padding: '5px 10px',
            backgroundColor: currentPage === page ? '#28a745' : '#ddd',
            color: currentPage === page ? '#fff' : '#000',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;