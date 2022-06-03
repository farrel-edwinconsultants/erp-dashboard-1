import React from 'react'
import Navbar from './components/templates/Navbar'
import Sidebar from './components/templates/Sidebar'
import Login from './pages/Login';
import RouteApp from './routes'

import useToken from './useToken';

function App() {
    const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
      <>
        <Navbar />
        <div className="wrapper">
            <Sidebar />
            <div className="p-4">
            <RouteApp />
            </div>
        </div>
      </>
  )
}

export default App