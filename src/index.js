import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';

// import CountDown from './components/CountDown';

const root = ReactDOM.createRoot(document.getElementById('root'));

// React component conventions
// 1. Any file that defines a react component should use
//    PascalCase for file name and should export only
//    1 component.
// 2. File extension should .jsx
// 3. Component also should use PascalCase
root.render(
  <App />
);

// We will start at 9:05pm
