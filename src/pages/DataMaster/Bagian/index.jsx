import React from 'react'
import { Link } from 'react-router-dom'
import BagianTable from '../../../components/mollecules/BagianTable'

const Bagian = () => {
  return (
    <div>
        <div className="text-title text-start">
            <h3 className="title fw-bold">Daftar Bagian</h3>
        </div>
        <BagianTable />
        <div className="button-add">
            <Link to="/bagian/buat">
                <button type="button" className="btn btn-primary">
                        Buat
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Bagian