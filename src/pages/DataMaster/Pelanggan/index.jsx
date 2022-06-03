import React from 'react'
import { Link } from 'react-router-dom'
import PelangganTable from '../../../components/mollecules/PelangganTable'

const Pelanggan = () => {
  return (
    <div>
        <div className="text-title text-start">
            <h3 className="title fw-bold">Daftar Pelanggan</h3>
        </div>
        <PelangganTable />
        <div className="button-add">
            <Link to="/pelanggan/buat">
                <button type="button" className="btn btn-primary">
                        Buat
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Pelanggan