import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell} from '@coreui/react'
import './form.css'

const editDepartemen = () => {
    return (
        <>
            <form className="form-input shadow-lg p-3 mb-5 bg-body rounded">
            <div className="text-title text-start mb-4">
                <h3 className="title fw-bold">Buat Departemen</h3>
            </div>
                <div className="row mb-3">
                    <label htmlFor="inputKode3" className="col-sm-2 col-form-label">Kode</label>
                    <div className="col-sm-10">
                    <input type="kode" className="form-control" id="inputKode3"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                    <input type="Nama" className="form-control" id="inputNama3"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Kata Sandi</label>
                    <div className="col-sm-10">
                    <input type="Nama" className="form-control" id="inputNama3"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Konfirmasi Kata Sandi</label>
                    <div className="col-sm-10">
                    <input type="Nama" className="form-control" id="inputNama3"/>
                    </div>
                </div>
            </form>
            <div className="container-list shadow-lg p-3 mb-5 bg-body rounded d-flex flex-column">
        <div className="container-table">
            <CTable striped hover className="container-form">
                <CTableHead>
                    <CTableRow>
                    <CTableHeaderCell scope="col">Nama Grup</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Akses</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    <CTableRow>
                        <CTableDataCell>Jacob</CTableDataCell>
                        <CTableDataCell>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableDataCell >Larry the Bird</CTableDataCell>
                        <CTableDataCell>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableDataCell >Larry the Bird</CTableDataCell>
                        <CTableDataCell>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        </CTableDataCell>
                    </CTableRow>
                </CTableBody>
            </CTable>
        </div>
    </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-success" type="button">Simpan</button>
            </div>
        </>
    )
}

export default editDepartemen