import React from 'react';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '100px' }}>
      <h1 style={{ fontSize: '60px', color: '#ff8c42' }}>404</h1>
      <p>Page not found 💛</p>
      <a href="/" style={{
        background: '#ff8c42',
        padding: '10px 20px',
        color: 'white',
        borderRadius: '10px',
        textDecoration: 'none'
      }}>
        Go to Home
      </a>
    </div>
  );
}