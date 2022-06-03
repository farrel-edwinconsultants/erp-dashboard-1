import './form.css'
import SuratJalanFakturTable from '../../../components/mollecules/FakturTable/SuratJalanFakturTable'
import PenguranganTable from '../../../components/mollecules/FakturTable/PenguranganTable'

const ëditFaktur = () => {
    return (
        <>
            <form className="form-input shadow-lg p-3 mb-5 bg-body rounded">
            <div className="text-title text-start mb-4">
                <h3 className="title fw-bold">Edit Faktur</h3>
            </div>
            <div className="row">
                <div className="col">
                    <div className="row mb-3">
                            <label htmlFor="inputKode3" className="col-sm-4 col-form-label">Tanggal</label>
                            <div className="col-sm-4">
                                <input id="startDate" className="form-control" type="date" />
                            </div>
                    </div>
                <div className="row mb-3">
                    <label htmlFor="inputNama3" className="col-sm-4 col-form-label">No. Faktur</label>
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
                    <label htmlFor="inputNama3" className="col-sm-4 col-form-label">Tipe Faktur</label>
                    <div className="col-sm-7">
                        <select id="TipeFakturSelect" className="form-select">
                            <option>Tipe Faktur select</option>
                            <option>Tipe Faktur 2 select</option>
                        </select>
                    </div>
                </div>
                </div>
                <div className="col">
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
                            <h4 className="title fw-normal">Cari Surat Jalan</h4>
                        </div>
                        <div className="col-sm-3 me-5">
                        <div className="input-group">
                            <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Type..."/>
                            <div className="input-group-text">Search</div>
                        </div>
                        </div>
                    </div>
                <SuratJalanFakturTable />
                </div>
                <div className="text-title text-start mb-4">
                    <div className="row">
                        <div className="col">
                            <h4 className="title fw-normal">Pengurangan</h4>
                        </div>
                        <div className="col-sm-3 me-5">
                        <div className="input-group">
                            <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Type..."/>
                            <div className="input-group-text">Search</div>
                        </div>
                        </div>
                    </div>
                <PenguranganTable />
                </div>
            <div className="row p-0">
                <div className="col ms-5">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Harga Termasuk Pajak
                        </label>
                    </div>
                </div>
                <div className="col">
                    <div className="row mb-3">
                        <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Subtotal</label>
                        <div className="col-sm-6 ms-3">
                            <input type="email" className="form-control form-control-sm" id="colFormLabelSm"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Diskon</label>
                        <div className="col-sm-6 ms-3">
                            <input type="email" className="form-control form-control-sm" id="colFormLabelSm"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm p-0 m-0">Uang Muka</label>
                        <div className="col-sm-6 ms-3">
                            <input type="email" className="form-control form-control-sm" id="colFormLabelSm"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">PPN</label>
                        <div className="col-sm-6 ms-3">
                            <input type="email" className="form-control form-control-sm" id="colFormLabelSm"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Total</label>
                        <div className="col-sm-6 ms-3">
                            <input type="email" className="form-control form-control-sm" id="colFormLabelSm"/>
                        </div>
                    </div>
                </div>
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

export default ëditFaktur