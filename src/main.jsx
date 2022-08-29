import React from 'react';
import ReactDOM from 'react-dom/client';
import GradientButton from './lib/index.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{ background: 'grey', height: '100vh' }}>
      <input type="text" />
      <input type="text" />
      <GradientButton onClick={() => console.log('sdf')}>click</GradientButton>
    </div>
  </React.StrictMode>
);
