import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './components/templates/Navbar'
import Sidebar from './components/templates/Sidebar'
import Login from './pages/Login'
import RouteApp from './routes'

function App() {
  const location = useLocation();
  const isLoggedIn = location.state.isLoggedIn;

  console.log(isLoggedIn)
  
  return (
      <>
          {isLoggedIn ? (
            <>
              <Navbar />
              <div className="wrapper">
                <Sidebar />
                <div className="p-4">
                  <RouteApp />
                </div>
              </div>
            </>
          ) : (
            <Login />
          )}

      </>
  )
}

export default App