import React from 'react'
import { Link } from 'react-router-dom'
import PenggunaTable from '../../../components/mollecules/PenggunaTable'

const Pengguna = () => {
  return (
    <div>
        <div className="text-title text-start">
            <h3 className="title fw-bold">Daftar Pengguna</h3>
        </div>
        <PenggunaTable />
        <div className="button-add">
            <Link to="/pengguna/buat">
                <button type="button" className="btn btn-primary">
                        Buat
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Pengguna