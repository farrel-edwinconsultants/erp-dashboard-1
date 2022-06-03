import React from 'react'
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell} from '@coreui/react'


const CariFakturTable = () => {
  return (
    <>
    <div className="container-list p-3 mb-5 bg-body rounded d-flex flex-column">
        <div className="container-table">
            <CTable striped hover className="container-form">
                <CTableHead>
                    <CTableRow>
                    <CTableHeaderCell scope="col">No. Faktur</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Sisa</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Total</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Dibayarkan</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    <CTableRow>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>Daging</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>Daging</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>Daging</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>Daging</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                    <CTableDataCell colSpan="3">
                        <div className="text text-end fw-bold me-5 p-1">
                                Total Yang Dibayarkan
                        </div>
                    </CTableDataCell>
                    <CTableDataCell>Rp2.000.000,-</CTableDataCell>
                    </CTableRow>
                </CTableBody>
            </CTable>
        </div>
    </div>
    </>
  )
}

export default CariFakturTable