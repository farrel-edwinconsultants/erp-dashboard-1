import React from 'react'
import { Link } from 'react-router-dom'
import KaryawanTable from '../../../components/mollecules/KaryawanTable'

const Karyawan = () => {
  return (
    <div>
        <div className="text-title text-start">
            <h3 className="title fw-bold">Daftar Karyawan</h3>
        </div>
        <KaryawanTable />
        <div className="button-add">
            <Link to="/karyawan/buat">
                <button type="button" className="btn btn-primary">
                        Buat
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Karyawan