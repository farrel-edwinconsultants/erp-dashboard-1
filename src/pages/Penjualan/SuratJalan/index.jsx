import React from 'react'
import { Link } from 'react-router-dom'
import SuratJalanTable from '../../../components/mollecules/SuratJalanTable'

const SuratJalan = () => {
  return (
    <div>
        <div className="text-title text-start">
            <h3 className="title fw-bold">Daftar Surat Jalan</h3>
        </div>
        <SuratJalanTable />
        <div className="button-add">
            <Link to="/suratjalan/buat">
                <button type="button" className="btn btn-primary">
                        Buat
                </button>
            </Link>
        </div>
    </div>
  )
}

export default SuratJalan