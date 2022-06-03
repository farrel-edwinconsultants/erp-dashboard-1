import React from 'react'
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell} from '@coreui/react'
import { Link } from 'react-router-dom'


const PenggunaTable = () => {
  return (
    <>
    <div className="container-list shadow-lg p-3 mb-5 bg-body rounded d-flex flex-column">
        <div className="container-table">
            <CTable striped hover className="container-form">
                <CTableHead>
                    <CTableRow>
                    <CTableHeaderCell scope="col">Kode</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Grup</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Username</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>
                        <Link to="/pengguna/detail">
                            <button type="button" class="btn btn-warning">Lihat</button>
                        </Link>
                        <Link to="/pengguna/edit">
                            <button type="button" class="btn btn-success m-1">Edit</button>
                        </Link>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>
                        <button type="button" class="btn btn-warning">Lihat</button>
                        <button type="button" class="btn btn-success m-1">Edit</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
                    <CTableDataCell>
                        <button type="button" class="btn btn-warning">Lihat</button>
                        <button type="button" class="btn btn-success m-1">Edit</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
                    <CTableDataCell>
                        <button type="button" class="btn btn-warning">Lihat</button>
                        <button type="button" class="btn btn-success m-1">Edit</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </CTableDataCell>
                    </CTableRow>
                </CTableBody>
            </CTable>
        </div>
    </div>
    </>
  )
}

export default PenggunaTable