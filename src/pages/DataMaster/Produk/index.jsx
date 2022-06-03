import React from 'react'
import { Link } from 'react-router-dom'
import ProdukTable from '../../../components/mollecules/ProdukTable'

const Produk = () => {
  return (
    <div>
        <div className="text-title text-start">
            <h3 className="title fw-bold">Daftar Produk</h3>
        </div>
        <ProdukTable />
        <div className="button-add">
            <Link to="/produk/buat">
                <button type="button" className="btn btn-primary">
                        Buat
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Produk