import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import AppRouter from './Router';

const linkStyle = {
  padding: 10
}

function App() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 20, background: '#f3f3f3' }}>
      <div>
        <Link style={linkStyle} to="/programmatic">Programmatic</Link>
        <Link style={linkStyle} to="/declarative">Declarative</Link>
      </div>
      <AppRouter />
    </div>
  );
}

export default App;
