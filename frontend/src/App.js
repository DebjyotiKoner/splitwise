import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Landing Page</h1>
        <p>This is a custom landing page served by the frontend service.</p>
        <p>You can customize this content in <code>frontend/src/App.js</code>.</p>
        <a
          className="App-link"
          href="http://localhost:3000/health"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Backend Health (localhost:3000/health)
        </a>
      </header>
    </div>
  );
}

export default App;