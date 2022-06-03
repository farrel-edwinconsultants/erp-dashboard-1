import React from 'react'
import { Link } from 'react-router-dom'
import ModulTable from '../../components/mollecules/ModulTable'

const Modul = () => {
  return (
    <div>
        <div className="text-title text-start">
            <h3 className="title fw-bold">Daftar Modul</h3>
        </div>
        <ModulTable />
        <div className="button-add">
            <button type="button" className="btn btn-primary">
                <Link to="/modul/buat">
                    Buat
                <Link>
            </button>
        </div>
    </div>
  )
}

export default Modul