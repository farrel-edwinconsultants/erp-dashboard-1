import './form.css'
import CariFakturTable from '../../../components/mollecules/PelunasanTable/CariFakturTable'

const BuatPelunasan = () => {
    return (
        <>
            <form className="form-input shadow-lg p-3 mb-5 bg-body rounded">
            <div className="text-title text-start mb-4">
                <h3 className="title fw-bold">Buat Pelunasan Penjualan</h3>
            </div>
            <div className="row">
                <div class="col">
                    <div className="row mb-3">
                            <label htmlFor="inputKode3" className="col-sm-4 col-form-label">Tanggal</label>
                            <div className="col-sm-4">
                                <input id="startDate" className="form-control" type="date" />
                            </div>
                    </div>
                <div className="row mb-3">
                    <label htmlFor="inputNama3" className="col-sm-4 col-form-label">No. Kwitansi</label>
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
                    <label htmlFor="inputNama3" className="col-sm-4 col-form-label">Metode Pembayaran</label>
                    <div className="col-sm-7">
                        <select id="MetodeSelect" className="form-select">
                            <option>Metode Pembayaran select</option>
                            <option>Metode Pembayaran 2 select</option>
                        </select>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="row mb-3">
                    <label htmlFor="inputNama3" className="col-sm-4 col-form-label">Total</label>
                    <div className="col-sm-7">
                    <input type="Nama" className="form-control" id="inputNama3"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputNama3" className="col-sm-4 col-form-label">Sisa</label>
                    <div className="col-sm-7">
                    <input type="Nama" className="form-control" id="inputNama3"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Status</label>
                    <div className="col-sm-4 p-1">
                        <h5>
                            <span className="badge bg-danger">Draft</span>
                        </h5>
                    </div>
                </div>
                </div>
            </div>
            </form>
            <form className="form-input shadow-lg p-3 mb-5 bg-body rounded">
                <div className="text-title text-start mb-4">
                    <div className="row">
                        <div className="col">
                            <h4 className="title fw-normal">Cari Faktur</h4>
                        </div>
                        <div className="col-sm-3 me-5">
                        <div className="input-group">
                            <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Type..."/>
                            <div className="input-group-text">Search</div>
                        </div>
                        </div>
                    </div>
                <CariFakturTable />
                </div>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-success rounded m-1">Simpan</button>
                <button type="button" className="btn btn-primary rounded m-1">Submit</button>
                <button type="button" className="btn btn-warning rounded m-1">Cetak</button>
            </div>
            </form>
        </>
    )
}

export default BuatPelunasan