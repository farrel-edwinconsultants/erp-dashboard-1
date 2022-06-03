import React from 'react'
import { Link } from 'react-router-dom'
import PajakTable from '../../../components/mollecules/PajakTable'

const Pajak = () => {
  return (
    <div>
        <div className="text-title text-start">
            <h3 className="title fw-bold">Daftar Pajak</h3>
        </div>
        <PajakTable />
        <div className="button-add">
            <Link to="/pajak/buat">
                <button type="button" className="btn btn-primary">
                        Buat
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Pajak