import React from 'react'
import { Link } from 'react-router-dom'
import TallyTable from '../../../components/mollecules/TallyTable'

const Tally = () => {
  return (
    <div>
        <div className="text-title text-start">
            <h3 className="title fw-bold">Daftar Tally</h3>
        </div>
        <TallyTable />
        <div className="button-add">
            <Link to="/tally/buat">
                <button type="button" className="btn btn-primary">
                        Buat
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Tally