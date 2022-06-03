import React from 'react'
import { Link } from 'react-router-dom'
import MerekTable from '../../../components/mollecules/MerekTable'

const Merek = () => {
  return (
    <div>
        <div className="text-title text-start">
            <h3 className="title fw-bold">Daftar Merek</h3>
        </div>
        <MerekTable />
        <div className="button-add">
            <Link to="/merek/buat">
                <button type="button" className="btn btn-primary">
                        Buat
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Merek