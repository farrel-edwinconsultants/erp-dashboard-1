import React from 'react'
import Navbar from './components/templates/Navbar'
import Sidebar from './components/templates/Sidebar'
import RouteApp from './routes'

function App() {
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