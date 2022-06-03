import React, { useEffect, useState } from 'react'
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell} from '@coreui/react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import jsCookie from 'js-cookie';


const DepartemenTable = () => {
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

  if (departments?.length > 0) {
    return (
        <>
        <div className="container-list shadow-lg p-3 mb-5 bg-body rounded d-flex flex-column">
            <div className="container-table">
                <CTable striped hover className="container-form">
                    <CTableHead>
                        <CTableRow>
                        <CTableHeaderCell scope="col">Kode</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Departemen</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Keterangan</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {departments.map(d => {
                            return (
                                <CTableRow>
                                    <CTableHeaderCell scope="row">{d.id}</CTableHeaderCell>
                                    <CTableDataCell>{d.name}</CTableDataCell>
                                    <CTableDataCell>Otto</CTableDataCell>
                                    <CTableDataCell>
                                        <Link to="/departemen/detail">
                                            <button type="button" class="btn btn-warning">Lihat</button>
                                        </Link>
                                        <Link to="/departemen/edit">
                                            <button type="button" class="btn btn-success m-1">Edit</button>
                                        </Link>
                                        <button type="button" class="btn btn-danger">Delete</button>
                                    </CTableDataCell>
                                </CTableRow>
                            )
                        })}
                    </CTableBody>
                </CTable>
            </div>
        </div>
        </>
    )
  }

  return (
      <p>Loading</p>
  )
}

export default DepartemenTable