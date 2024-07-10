import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ShopContextProvider from './Context/ShopContext.jsx';
import { AppProvider } from './Context/context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContextProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </ShopContextProvider>
  </React.StrictMode>,
);
