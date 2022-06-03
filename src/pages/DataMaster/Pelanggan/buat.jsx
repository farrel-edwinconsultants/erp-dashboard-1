
import './form.css'

const buatPelanggan = () => {
    return (
        <>
        <form className="form-input shadow-lg p-3 mb-5 bg-body rounded">
        <div className="text-title text-start mb-4">
            <h3 className="title fw-bold">Buat Pelanggan</h3>
        </div>
            <div className="row mb-3">
                <label htmlFor="inputKode3" className="col-sm-2 col-form-label">Kode</label>
                <div className="col-sm-10">
                <input type="kode" className="form-control" id="inputKode3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Nama Pelanggan</label>
                <div className="col-sm-10">
                <input type="Nama" className="form-control" id="inputNama3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">No Telepon</label>
                <div className="col-sm-10">
                <input type="Nama" className="form-control" id="inputNama3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input type="Nama" className="form-control" id="inputNama3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">NPWP</label>
                <div className="col-sm-10">
                    <select id="npwpSelect" className="form-select">
                        <option>NPWP select</option>
                        <option>NPWP 2 select</option>
                    </select>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Termin</label>
                <div className="col-sm-10">
                    <select id="terminSelect" className="form-select">
                        <option>Termin select</option>
                        <option>Termin 2 select</option>
                    </select>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Diskon</label>
                <div className="col-sm-10">
                <input type="Nama" className="form-control" id="inputNama3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Alamat 1</label>
                <div className="col-sm-10">
                <textarea className="form-control" id="form4Example3" rows="4"/>
                </div>
            </div>
            <fieldset className="row mb-3">
                <legend className="col-form-label col-sm-2 pt-0">Status</legend>
                <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                        <label className="form-check-label" htmlFor="gridRadios1">
                            Aktif
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                        <label className="form-check-label" htmlFor="gridRadios2">
                            Non-Aktif
                        </label>
                    </div>
                </div>
            </fieldset>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-success" type="button">Simpan</button>
            </div>
        </form>
        <form className="form-input shadow-lg p-3 mb-5 bg-body rounded">
        <div className="text-title text-start mb-4">
            <h3 className="title fw-bold">Tambah Alamat</h3>
        </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Alamat</label>
                <div className="col-sm-10">
                <textarea className="form-control" id="form4Example3" rows="4"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Kelurahan</label>
                <div className="col-sm-10">
                <input type="Nama" className="form-control" id="inputNama3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Kecamatan</label>
                <div className="col-sm-10">
                <input type="Nama" className="form-control" id="inputNama3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Kota</label>
                <div className="col-sm-10">
                <input type="Nama" className="form-control" id="inputNama3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Kode Pos</label>
                <div className="col-sm-10">
                <input type="Nama" className="form-control" id="inputNama3"/>
                </div>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-danger" type="button">Tambah</button>
            </div>
        </form>
    </>
    )
}

export default buatPelanggan