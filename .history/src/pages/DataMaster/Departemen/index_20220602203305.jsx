import axios from 'axios'
import jsCookie from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DepartemenTable from '../../../components/mollecules/DepartemenTable'

const Departemen = () => {
  const token = jsCookie.get('auth')
  const [departments, setDepartments] = useState()

  useEffect(() => {
    axios.get('http://localhost:8000/api/departments', {
      headers: { 
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => setDepartments(res.data))
  }, [])

  console.log(departments);

  return (
    <div>
        <div className="text-title text-start">
            <h3 className="title fw-bold">Daftar Departemen</h3>
        </div>
        <DepartemenTable />
        <div className="button-add">
            <Link to="/departemen/buat">
                <button type="button" className="btn btn-primary">
                        Buat
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Departemen