import React, { useState } from 'react'
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell} from '@coreui/react'
import { Link } from 'react-router-dom'
import TallyModalTable from '../TallyModalTable/index'


const TallyPesananTable = () => {
    const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
    <div className="container-list p-3 mb-5 bg-body rounded d-flex flex-column">
        <div className="container-table">
            <CTable striped hover className="container-form">
                <CTableHead>
                    <CTableRow>
                    <CTableHeaderCell scope="col">No. Pesanan</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nama Alias</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Produk</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Qty</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Stn</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Box</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    <CTableRow>
                    <CTableDataCell scope="row">11225414215</CTableDataCell>
                    <CTableDataCell>Agus</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>2</CTableDataCell>
                    <CTableDataCell>2</CTableDataCell>
                    <CTableDataCell>
                            <button onClick={() => setModalOpen(true)} type="button" class="btn btn-success m-1">Edit</button>
                            
                    </CTableDataCell>
                    
                    </CTableRow>
                    <CTableRow>
                    <CTableDataCell scope="row">11225414215</CTableDataCell>
                    <CTableDataCell>Agus</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>2</CTableDataCell>
                    <CTableDataCell>2</CTableDataCell>
                    <CTableDataCell>
                        <Link to="/suratjalan/edit">
                            <button type="button" class="btn btn-success m-1">Edit</button>
                        </Link>
                    </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                    <CTableDataCell scope="row">11225414215</CTableDataCell>
                    <CTableDataCell>Agus</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>2</CTableDataCell>
                    <CTableDataCell>2</CTableDataCell>
                    <CTableDataCell>
                        <Link to="/suratjalan/edit">
                            <button type="button" class="btn btn-success m-1">Edit</button>
                        </Link>
                    </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                    <CTableDataCell scope="row">11225414215</CTableDataCell>
                    <CTableDataCell>Agus</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>2</CTableDataCell>
                    <CTableDataCell>2</CTableDataCell>
                    <CTableDataCell>
                        <Link to="/suratjalan/edit">
                            <button type="button" class="btn btn-success m-1">Edit</button>
                        </Link>
                    </CTableDataCell>
                    </CTableRow>
                </CTableBody>
            </CTable>
        </div>
        {modalOpen && <TallyModalTable setOpenModal={setModalOpen} />}
    </div>
    </>
  )
}

export default TallyPesananTable