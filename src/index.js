import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import ProductList from './components/ProductList';

const root = ReactDOM.createRoot(document.getElementById('root'));

// React component conventions
// 1. Any file that defines a react component should use
//    PascalCase for file name and should export only
//    1 component.
// 2. File extension should .jsx
// 3. Component also should use PascalCase
root.render(<ProductList />);
