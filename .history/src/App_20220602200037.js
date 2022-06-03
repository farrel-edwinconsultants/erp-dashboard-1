import jsCookie from 'js-cookie'
import React from 'react'
import Navbar from './components/templates/Navbar'
import Sidebar from './components/templates/Sidebar'
import Login from './pages/Login'
import RouteApp from './routes'

function App() {
  const isLoggedIn = jsCookie.get('laravel_session')
  console.log(isLoggedIn);

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