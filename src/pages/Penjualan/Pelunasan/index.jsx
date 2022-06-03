import React from 'react'
import { Link } from 'react-router-dom'
import PelunasanTable from '../../../components/mollecules/PelunasanTable'

const Pelunasan = () => {
  return (
    <div>
        <div className="text-title text-start">
            <h3 className="title fw-bold">Daftar Pelunasan</h3>
        </div>
        <PelunasanTable />
        <div className="button-add">
            <Link to="/pelunasan/buat">
                <button type="button" className="btn btn-primary">
                        Buat
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Pelunasan