import React from 'react'
import { Link } from 'react-router-dom'
import GudangTable from '../../../components/mollecules/GudangTable'

const Gudang = () => {
  return (
    <div>
        <div className="text-title text-start">
            <h3 className="title fw-bold">Daftar Gudang</h3>
        </div>
        <GudangTable />
        <div className="button-add">
            <Link to="/gudang/buat">
                <button type="button" className="btn btn-primary">
                        Buat
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Gudang