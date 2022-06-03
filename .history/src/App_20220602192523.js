import React, { useState } from 'react'
import Navbar from './components/templates/Navbar'
import Sidebar from './components/templates/Sidebar'
import Login from './pages/Login'
import RouteApp from './routes'

function App(props) {
  const isLoggedIn = props.isLoggedIn;
  
  return (
      <>
        <Navbar />
        <div className="wrapper">
          {isLoggedIn ? (
            <Sidebar />
            <div className="p-4">
              <RouteApp />
            </div>
          ) : (
            <Login />
          )}

        </div>
      </>
  )
}

export default App