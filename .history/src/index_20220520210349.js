import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import RouteApp from './routes'
import Navbar from './components/templates/Navbar'
import Sidebar from './components/templates/Sidebar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <div className="wrapper">
      <Sidebar />
      <div className="p-4">
        <RouteApp />
      </div>
    </div>
  </React.StrictMode>
);