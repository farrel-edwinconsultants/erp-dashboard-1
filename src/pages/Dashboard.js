import React from 'react'
import '../pages/content.css'
import Navbar from '../components/menu/Navbar'
import Sidebar from '../components/menu/Sidebar'
// import ListPengguna from '../components/content/listPengguna'
import EditGrup from '../components/content/editGrup'

function Dashboard() {
  return (
    <>
        <Navbar />
        <Sidebar />
        <div className="container-content">
            {/* <ListPengguna /> */}
            <EditGrup />
        </div>
    </>
  )
}

export default Dashboard