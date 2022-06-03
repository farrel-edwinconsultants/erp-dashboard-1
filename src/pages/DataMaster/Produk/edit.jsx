import './form.css'

const editProduk = () => {
    return (
        <>
        <form className="form-input shadow-lg p-3 mb-5 bg-body rounded">
        <div className="text-title text-start mb-4">
            <h3 className="title fw-bold">Buat Produk</h3>
        </div>
            <div className="row mb-3">
                <label htmlFor="inputKode3" className="col-sm-2 col-form-label">Kode</label>
                <div className="col-sm-10">
                <input type="kode" className="form-control" id="inputKode3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputKode3" className="col-sm-2 col-form-label">Nama Produk</label>
                <div className="col-sm-10">
                <input type="kode" className="form-control" id="inputKode3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Nama Alias</label>
                <div className="col-sm-10">
                <input type="Nama" className="form-control" id="inputNama3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Grup</label>
                <div className="col-sm-10">
                    <select id="GrupSelect" className="form-select">
                        <option>Grup select</option>
                        <option>Grup 2 select</option>
                    </select>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Bagian</label>
                <div className="col-sm-10">
                    <select id="BagianSelect" className="form-select">
                        <option>Bagian select</option>
                        <option>Bagian 2 select</option>
                    </select>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Kategori</label>
                <div className="col-sm-10">
                    <select id="KategoriSelect" className="form-select">
                        <option>Kategori select</option>
                        <option>Kategori 2 select</option>
                    </select>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Grade</label>
                <div className="col-sm-10">
                    <select id="GradeSelect" className="form-select">
                        <option>Grade select</option>
                        <option>Grade 2 select</option>
                    </select>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Tipe</label>
                <div className="col-sm-10">
                    <select id="TipeSelect" className="form-select">
                        <option>Tipe select</option>
                        <option>Tipe 2 select</option>
                    </select>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Merek</label>
                <div className="col-sm-10">
                    <select id="MerekSelect" className="form-select">
                        <option>Merek select</option>
                        <option>Merek 2 select</option>
                    </select>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Satuan</label>
                <div className="col-sm-10">
                <input type="Nama" className="form-control" id="inputNama3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Keterangan</label>
                <div className="col-sm-10">
                <textarea className="form-control" id="form4Example3" rows="4"/>
                </div>
            </div>
        </form>
        <form className="form-input shadow-lg p-3 mb-5 bg-body rounded">
        <div className="text-title text-start mb-4">
            <h3 className="title fw-bold">Lain-lain</h3>
        </div>
            <div className="row mb-3">
                <label htmlFor="inputKode3" className="col-sm-2 col-form-label">Harga Beli</label>
                <div className="col-sm-10">
                <input type="kode" className="form-control" id="inputKode3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Harga Jual</label>
                <div className="col-sm-10">
                <input type="Nama" className="form-control" id="inputNama3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Diskon</label>
                <div className="col-sm-5">
                    <input type="Nama" className="form-control" id="inputNama3"/>
                </div>
                <div className="col-sm-1">
                   <span className="input-group-text" id="addon-wrapping">%</span>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Pajak</label>
                <div className="col-sm-10">
                    <select id="PajakSelect" className="form-select">
                        <option>Pajak select</option>
                        <option>Pajak 2 select</option>
                    </select>
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
                            Arsip
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

export default editProduk