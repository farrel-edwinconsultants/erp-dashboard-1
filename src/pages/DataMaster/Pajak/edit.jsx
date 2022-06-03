import './form.css'

const editPajak = () => {
    return (
        <>
            <form className="form-input shadow-lg p-3 mb-5 bg-body rounded">
            <div className="text-title text-start mb-4">
                <h3 className="title fw-bold">Buat Pajak</h3>
            </div>
                <div className="row mb-3">
                    <label htmlFor="inputKode3" className="col-sm-2 col-form-label">Kode</label>
                    <div className="col-sm-10">
                    <input type="kode" className="form-control" id="inputKode3"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Nama Pajak</label>
                    <div className="col-sm-10">
                    <input type="Nama" className="form-control" id="inputNama3"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Persentase</label>
                    <div className="col-sm-5">
                        <input type="Nama" className="form-control" id="inputNama3"/>
                    </div>
                    <div className="col-sm-1">
                        <span className="input-group-text" id="addon-wrapping">%</span>
                    </div>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-success" type="button">Simpan</button>
                </div>
            </form>
        </>
    )
}

export default editPajak