import './css/form.css'

const editGrup = () => {
    return (
        <>
            <form className="form-input shadow-lg p-3 mb-5 bg-body rounded">
            <div className="text-title text-start mb-4">
                <h3 className="title fw-bold">Buat Pengguna</h3>
            </div>
                <div className="row mb-3">
                    <label for="inputKode3" className="col-sm-2 col-form-label">Kode</label>
                    <div className="col-sm-10">
                    <input type="kode" className="form-control" id="inputKode3"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputNama3" className="col-sm-2 col-form-label">Nama Grup</label>
                    <div className="col-sm-10">
                    <input disabled="true" type="Nama" className="form-control" id="inputNama3"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Keterangan</label>
                    <div className="col-sm-10">
                    <textarea class="form-control" id="form4Example3" rows="4"/>
                    </div>
                </div>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-success" type="button">Simpan</button>
                </div>
            </form>
        </>
    )
}

export default editGrup