import React from 'react'
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell} from '@coreui/react'


const SuratJalanFakturTable = () => {
  return (
    <>
    <div className="container-list p-3 mb-5 bg-body rounded d-flex flex-column">
        <div className="container-table">
        <CTable striped hover className="container-form">
                <CTableHead>
                    <CTableRow>
                    <CTableHeaderCell scope="col">No.</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nama Produk</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Qty</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Stn</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Harga</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Disc(%)</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Disc(Rp)</CTableHeaderCell>
                    <CTableHeaderCell scope="col">PPN</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Jumlah</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    <CTableRow>
                    <CTableDataCell scope="row">12</CTableDataCell>
                    <CTableDataCell>Produk</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>Rp2.000.000,-</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                    <CTableDataCell scope="row">12</CTableDataCell>
                    <CTableDataCell>Produk</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>Rp2.000.000,-</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                    <CTableDataCell scope="row">12</CTableDataCell>
                    <CTableDataCell>Produk</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>Rp2.000.000,-</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                    <CTableDataCell scope="row">12</CTableDataCell>
                    <CTableDataCell>Produk</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>Rp2.000.000,-</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    </CTableRow>
                </CTableBody>
            </CTable>
        </div>
    </div>
    </>
  )
}

export default SuratJalanFakturTable