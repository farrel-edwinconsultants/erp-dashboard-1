import './form.css'
import ProdukPesananTable from '../../../components/mollecules/PesananTable/ProdukPesananTable'

const buatPesanan = () => {
    return (
        <>
            <form className="form-input shadow-lg p-3 mb-5 bg-body rounded">
            <div className="text-title text-start mb-4">
                <h3 className="title fw-bold">Buat Pesanan</h3>
            </div>
            <div class="row">
                <div class="col">
                    <div className="row mb-3">
                            <label htmlFor="inputKode3" className="col-sm-4 col-form-label">Tanggal</label>
                            <div className="col-sm-4">
                                <input id="startDate" className="form-control" type="date" />
                            </div>
                    </div>
                <div className="row mb-3">
                    <label htmlFor="inputNama3" className="col-sm-4 col-form-label">No. Pesanan</label>
                    <div className="col-sm-7">
                    <input type="Nama" className="form-control" id="inputNama3"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputNama3" className="col-sm-4 col-form-label">Pelanggan</label>
                    <div className="col-sm-7">
                        <select id="PelangganSelect" className="form-select">
                            <option>Pelanggan select</option>
                            <option>Pelanggan 2 select</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputNama3" className="col-sm-4 col-form-label">Referensi</label>
                    <div className="col-sm-7">
                    <input type="Nama" className="form-control" id="inputNama3"/>
                    </div>
                </div>
                </div>
                <div class="col">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Catatan</label>
                    <div className="row mb-3">
                        <div className="col-sm-10">
                        <textarea className="form-control" id="form4Example3" rows="4"/>
                        </div>
                    </div>
                <div className="row mb-3">
                    <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Status</label>
                    <div className="col-sm-4 p-1">
                        <h5>
                            <span class="badge bg-danger">Draft</span>
                        </h5>
                    </div>
                </div>
                </div>
            </div>
            </form>
            <form className="form-input shadow-lg p-3 mb-5 bg-body rounded">
                <div className="text-title text-start mb-4">
                    <div class="row">
                        <div class="col">
                            <h4 className="title fw-normal">Cari Produk</h4>
                        </div>
                        <div class="col-sm-3 me-5">
                        <div class="input-group">
                            <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Type..."/>
                            <div class="input-group-text">Search</div>
                        </div>
                        </div>
                    </div>
                <ProdukPesananTable />
                </div>
            <div class="row p-0">
                <div class="col ms-5">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Harga Termasuk Pajak
                        </label>
                    </div>
                </div>
                <div class="col">
                    <div class="row mb-3">
                        <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Subtotal</label>
                        <div class="col-sm-6">
                            <input type="email" class="form-control form-control-sm" id="colFormLabelSm"/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Diskon</label>
                        <div class="col-sm-6">
                            <input type="email" class="form-control form-control-sm" id="colFormLabelSm"/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">PPN</label>
                        <div class="col-sm-6">
                            <input type="email" class="form-control form-control-sm" id="colFormLabelSm"/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Total</label>
                        <div class="col-sm-6">
                            <input type="email" class="form-control form-control-sm" id="colFormLabelSm"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" class="btn btn-success rounded m-1">Simpan</button>
                <button type="button" class="btn btn-primary rounded m-1">Submit</button>
                <button type="button" class="btn btn-warning rounded m-1">Cetak</button>
            </div>
            </form>
        </>
    )
}

export default buatPesanan