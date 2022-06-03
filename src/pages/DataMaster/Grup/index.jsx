// import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import GrupTable from '../../../components/mollecules/GrupTable'

// axios.get('http://localhost:8000/groups')
// 	.then(res => console.log(res.data))
// 	.catch(() => {})

const Grup = () => {
  return (
    <div>
        <div className="text-title text-start">
            <h3 className="title fw-bold">Daftar Grup</h3>
        </div>
        <GrupTable />
        <div className="button-add">
            <Link to="/grup/buat">
                <button type="button" className="btn btn-primary">
                        Buat
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Grup