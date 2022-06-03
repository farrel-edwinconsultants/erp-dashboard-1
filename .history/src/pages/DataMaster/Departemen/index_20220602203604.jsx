import React from 'react'
import { Link } from 'react-router-dom'
import DepartemenTable from '../../../components/mollecules/DepartemenTable'

const Departemen = () => {
  return (
    <div>
        <div className="text-title text-start">
            <h3 className="title fw-bold">Daftar Departemen</h3>
        </div>
        <DepartemenTable />
        <div className="button-add">
            <Link to="/departemen/buat">
                <button type="button" className="btn btn-primary">
                        Buat
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Departemen