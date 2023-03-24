import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ListProvider } from './context/list.context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ListProvider>
      <App />
    </ListProvider>
  </React.StrictMode>
);
