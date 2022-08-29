import React from 'react';
import ReactDOM from 'react-dom/client';
import GradientButton from './lib/index.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{ background: 'grey', height: '100vh' }}>
      <GradientButton>click</GradientButton>{' '}
    </div>
  </React.StrictMode>
);
