import React from 'react'
import { Link } from 'react-router-dom'
import PesananTable from '../../../components/mollecules/PesananTable'

const Pesanan = () => {
  return (
    <div>
        <div className="text-title text-start">
            <h3 className="title fw-bold">Daftar Pesanan</h3>
        </div>
        <PesananTable />
        <div className="button-add">
            <Link to="/pesanan/buat">
                <button type="button" className="btn btn-primary">
                        Buat
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Pesanan