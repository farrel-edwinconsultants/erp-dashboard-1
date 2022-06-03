import React from 'react'
import { Link } from 'react-router-dom'
import PosisiTable from '../../../components/mollecules/PosisiTable'

const Posisi = () => {
  return (
    <div>
        <div className="text-title text-start">
            <h3 className="title fw-bold">Daftar Posisi</h3>
        </div>
        <PosisiTable />
        <div className="button-add">
            <Link to="/posisi/buat">
                <button type="button" className="btn btn-primary">
                        Buat
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Posisi