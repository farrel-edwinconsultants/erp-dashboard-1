import React from 'react'
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell} from '@coreui/react'


const FakturTable = () => {
  return (
    <>
    <div className="container-list p-3 mb-5 bg-body rounded d-flex flex-column">
        <div className="container-table">
            <CTable striped hover className="container-form">
                <CTableHead>
                    <CTableRow>
                    <CTableHeaderCell scope="col">No. Akun</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Deskripsi</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Jumlah</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    <CTableRow>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    </CTableRow>
                </CTableBody>
            </CTable>
        </div>
    </div>
    </>
  )
}

export default FakturTable