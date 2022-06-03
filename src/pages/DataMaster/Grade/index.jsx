import React from 'react'
import { Link } from 'react-router-dom'
import GradeTable from '../../../components/mollecules/GradeTable'

const Grade = () => {
  return (
    <div>
        <div className="text-title text-start">
            <h3 className="title fw-bold">Daftar Grade</h3>
        </div>
        <GradeTable />
        <div className="button-add">
            <Link to="/grade/buat">
                <button type="button" className="btn btn-primary">
                        Buat
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Grade