
import './form.css'

const editKaryawan = () => {
    return (
        <>
        <form className="form-input shadow-lg p-3 mb-5 bg-body rounded">
        <div className="text-title text-start mb-4">
            <h3 className="title fw-bold">Edit Karyawan</h3>
        </div>
            <div className="row mb-3">
                <label htmlFor="inputKode3" className="col-sm-2 col-form-label">Kode</label>
                <div className="col-sm-10">
                <input type="kode" className="form-control" id="inputKode3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputKode3" className="col-sm-2 col-form-label">NIK</label>
                <div className="col-sm-10">
                <input type="kode" className="form-control" id="inputKode3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Nama Karyawan</label>
                <div className="col-sm-10">
                <input type="Nama" className="form-control" id="inputNama3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Inisial</label>
                <div className="col-sm-10">
                <input type="Nama" className="form-control" id="inputNama3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Departemen</label>
                <div className="col-sm-10">
                    <select id="departemenSelect" className="form-select">
                        <option>Departemen select</option>
                        <option>Departemen 2 select</option>
                    </select>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Posisi</label>
                <div className="col-sm-10">
                    <select id="posisiSelect" className="form-select">
                        <option>Posisi select</option>
                        <option>Posisi 2 select</option>
                    </select>
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
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Tanggal Lahir</label>
                <div className="col-sm-10">
                <input type="Nama" className="form-control" id="inputNama3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Tanggal Masuk</label>
                <div className="col-sm-10">
                <input type="Nama" className="form-control" id="inputNama3"/>
                </div>
            </div>
        </form>
        <form className="form-input shadow-lg p-3 mb-5 bg-body rounded">
        <div className="text-title text-start mb-4">
            <h3 className="title fw-bold">Dokumen</h3>
        </div>
            <div className="row mb-3">
                <label htmlFor="inputKode3" className="col-sm-2 col-form-label">Tanggal Keluar</label>
                <div className="col-sm-10">
                <input type="kode" className="form-control" id="inputKode3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">NPWP</label>
                <div className="col-sm-10">
                <input type="Nama" className="form-control" id="inputNama3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">KTP</label>
                <div className="col-sm-10">
                <input type="Nama" className="form-control" id="inputNama3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Alamat</label>
                <div className="col-sm-10">
                <textarea class="form-control" id="form4Example3" rows="4"/>
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
        </form>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-success" type="button">Simpan</button>
        </div>
    </>
    )
}

export default editKaryawan