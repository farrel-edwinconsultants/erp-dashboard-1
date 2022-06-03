import React from 'react'
import '../pages/content.css'
// import ListPengguna from '../components/content/listPengguna'
// import EditGrup from '../components/content/editGrup'
import EditModul from '../components/content/editModul'

function Dashboard() {
  return (
    <>
        <div className="container-content">
            {/* <ListPengguna /> */}
            {/* <EditGrup /> */}
            <EditModul />
        </div>
    </>
  )
}

export default Dashboard