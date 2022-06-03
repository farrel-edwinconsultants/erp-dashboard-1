import React from 'react'
import { Link } from 'react-router-dom'
import KategoriTable from '../../../components/mollecules/KategoriTable'

const Kategori = () => {
  return (
    <div>
        <div className="text-title text-start">
            <h3 className="title fw-bold">Daftar Kategori</h3>
        </div>
        <KategoriTable />
        <div className="button-add">
            <Link to="/kategori/buat">
                <button type="button" className="btn btn-primary">
                        Buat
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Kategori