import React from 'react'
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell} from '@coreui/react'
import { Link } from 'react-router-dom'


const ProdukTable = () => {
  return (
    <>
    <div className="container-list shadow-lg p-3 mb-5 bg-body rounded d-flex flex-column">
        <div className="container-table">
            <CTable striped hover className="container-form">
                <CTableHead>
                    <CTableRow>
                    <CTableHeaderCell scope="col">No.</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nama Produk</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Produk</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Kategori</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>
                        <Link to="/produk/detail">
                            <button type="button" className="btn btn-warning">Lihat</button>
                        </Link>
                        <Link to="/produk/edit">
                            <button type="button" className="btn btn-success m-1">Edit</button>
                        </Link>
                        <button type="button" className="btn btn-danger">Delete</button>
                    </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>
                        <button type="button" className="btn btn-warning">Lihat</button>
                        <button type="button" className="btn btn-success m-1">Edit</button>
                        <button type="button" className="btn btn-danger">Delete</button>
                    </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell>Larry the Bird</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>
                        <button type="button" className="btn btn-warning">Lihat</button>
                        <button type="button" className="btn btn-success m-1">Edit</button>
                        <button type="button" className="btn btn-danger">Delete</button>
                    </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell>Larry the Bird</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>
                        <button type="button" className="btn btn-warning">Lihat</button>
                        <button type="button" className="btn btn-success m-1">Edit</button>
                        <button type="button" className="btn btn-danger">Delete</button>
                    </CTableDataCell>
                    </CTableRow>
                </CTableBody>
            </CTable>
        </div>
    </div>
    </>
  )
}

export default ProdukTable