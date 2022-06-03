import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import RouteApp from './routes'
import Navbar from './components/templates/Navbar'
import Sidebar from './components/templates/Sidebar'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="wrapper">
        <Sidebar />
        <div className="p-4">
          <RouteApp />
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);