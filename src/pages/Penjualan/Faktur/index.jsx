import React from 'react'
import { Link } from 'react-router-dom'
import FakturTable from '../../../components/mollecules/FakturTable'

const Faktur = () => {
  return (
    <div>
        <div className="text-title text-start">
            <h3 className="title fw-bold">Daftar Faktur</h3>
        </div>
        <FakturTable />
        <div className="button-add">
            <Link to="/faktur/buat">
                <button type="button" className="btn btn-primary">
                        Buat
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Faktur