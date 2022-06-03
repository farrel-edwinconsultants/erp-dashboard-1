import React from 'react'
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell} from '@coreui/react'
import { Link } from 'react-router-dom'


const SuratJalanTable = () => {
  return (
    <>
    <div className="container-list shadow-lg p-3 mb-5 bg-body rounded d-flex flex-column">
        <div className="container-table">
            <CTable striped hover className="container-form">
                <CTableHead>
                    <CTableRow>
                    <CTableHeaderCell scope="col">Tanggal</CTableHeaderCell>
                    <CTableHeaderCell scope="col">No. Transaksi</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Pelanggan</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Kendaraan</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    <CTableRow>
                    <CTableDataCell scope="row">1/1/2022</CTableDataCell>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>
                        <h3 className="badge bg-danger text-center m-1">
                            Draft
                        </h3>
                    </CTableDataCell>
                    <CTableDataCell>
                        <Link to="/suratjalan/detail">
                            <button type="button" class="btn btn-warning">Lihat</button>
                        </Link>
                        <Link to="/suratjalan/edit">
                            <button type="button" class="btn btn-success m-1">Edit</button>
                        </Link>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                    <CTableDataCell scope="row">1/1/2022</CTableDataCell>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>
                        <h3 className="badge bg-danger text-center m-1">
                            Draft
                        </h3>
                    </CTableDataCell>
                    <CTableDataCell>
                        <Link to="/suratjalan/detail">
                            <button type="button" class="btn btn-warning">Lihat</button>
                        </Link>
                        <Link to="/suratjalan/edit">
                            <button type="button" class="btn btn-success m-1">Edit</button>
                        </Link>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                    <CTableDataCell scope="row">1/1/2022</CTableDataCell>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>
                        <h3 className="badge bg-warning text-center m-1">
                            On Going
                        </h3>
                    </CTableDataCell>
                    <CTableDataCell>
                        <Link to="/suratjalan/detail">
                            <button type="button" class="btn btn-warning">Lihat</button>
                        </Link>
                        <Link to="/suratjalan/edit">
                            <button type="button" class="btn btn-success m-1">Edit</button>
                        </Link>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                    <CTableDataCell scope="row">1/1/2022</CTableDataCell>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>
                        <h3 className="badge bg-success text-center m-1">
                            Done
                        </h3>
                    </CTableDataCell>
                    <CTableDataCell>
                        <Link to="/suratjalan/detail">
                            <button type="button" class="btn btn-warning">Lihat</button>
                        </Link>
                        <Link to="/suratjalan/edit">
                            <button type="button" class="btn btn-success m-1">Edit</button>
                        </Link>
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

export default SuratJalanTable