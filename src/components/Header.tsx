import React from 'react';

const Header = () => {
  return (
    <header style={{
      backgroundColor: '#0f1923',
      padding: '1rem',
      color: '#c79b3b',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div className="logo">
        <h1>WildRiftStats LATAM</h1>
      </div>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
          <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Inicio</a></li>
          <li><a href="/champions" style={{ color: 'white', textDecoration: 'none' }}>Campeones</a></li>
          <li><a href="/patches" style={{ color: 'white', textDecoration: 'none' }}>Parches</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 