import React from 'react'
import '../pages/content.css'
import Navbar from '../components/menu/Navbar'
import Sidebar from '../components/menu/Sidebar'
// import ListPengguna from '../components/content/listPengguna'
// import EditGrup from '../components/content/editGrup'
import EditModul from '../components/content/editModul'

function Dashboard() {
  return (
    <>
        <Navbar />
        <Sidebar />
        <div className="container-content">
            {/* <ListPengguna /> */}
            {/* <EditGrup /> */}
            <EditModul />
        </div>
    </>
  )
}

export default Dashboard