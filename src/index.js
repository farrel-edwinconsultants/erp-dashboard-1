import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// import RouteApp from './routes'
// import Navbar from './components/templates/Navbar'
// import Sidebar from './components/templates/Sidebar'
import { BrowserRouter } from 'react-router-dom';
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);