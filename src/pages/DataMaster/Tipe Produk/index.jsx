import React from 'react'
import { Link } from 'react-router-dom'
import TipeProdukTable from '../../../components/mollecules/TipeProdukTable'

const TipeProduk = () => {
  return (
    <div>
        <div className="text-title text-start">
            <h3 className="title fw-bold">Daftar TipeProduk</h3>
        </div>
        <TipeProdukTable />
        <div className="button-add">
            <Link to="/tipe/buat">
                <button type="button" className="btn btn-primary">
                        Buat
                </button>
            </Link>
        </div>
    </div>
  )
}

export default TipeProduk