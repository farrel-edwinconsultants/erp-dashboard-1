
import axios from 'axios';
import jsCookie from 'js-cookie';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Url from '../../../Config';
import './form.css'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

const EditPelanggan = () => {
    const token = jsCookie.get('auth')
    const [name, setName] = useState();
    const [bussiness_ent, setBussiness_ent] = useState();
    const [phone_number, setPhone_number] = useState();
    const [email, setEmail] = useState();
    const [npwp, setNpwp] = useState();
    const [term, setTerm] = useState();
    const [discount, setDiscount] = useState();
    const [status, setStatus] = useState();
    const [address1, setAddress1] = useState();
    const [address2, setAddress2] = useState();
    const [kota1, setKota1] = useState();
    const [kota2, setKota2] = useState();
    const [kecamatan1, setKecamatan1] = useState();
    const [kecamatan2, setKecamatan2] = useState();
    const [kelurahan1, setKelurahan1] = useState();
    const [kelurahan2, setKelurahan2] = useState();
    const [kode_pos1, setKode_pos1] = useState();
    const [kode_pos2, setKode_pos2] = useState();
    const navigate = useNavigate();
    const { id } = useParams();

    const [address, setAddress] = useState();
    const [kota, setKota] = useState();
    const [kecamatan, setKecamatan] = useState();
    const [kelurahan, setKelurahan] = useState();
    const [kode_pos, setKode_pos] = useState();

    const [data, setData] = useState();
    const [isLoading, setisLoading] = useState(false);
    const [isError, setisError] = useState(false);

    const handleUpdate = async e => {
        e.preventDefault();
        const userData = new URLSearchParams();
        userData.append('nama', name);
        userData.append('badan_usaha', bussiness_ent);
        userData.append('nomor_telepon', phone_number);
        userData.append('email', email);
        userData.append('npwp', npwp);
        userData.append('term', term);
        userData.append('diskon', discount);
        userData.append('status', status);
        userData.append('alamat[]', address1);
        userData.append('alamat[]', address2);
        userData.append('kota[]', kota1);
        userData.append('kota[]', kota2);
        userData.append('kecamatan[]', kecamatan1);
        userData.append('kecamatan[]', kecamatan2);
        userData.append('kelurahan[]', kelurahan1);
        userData.append('kelurahan[]', kelurahan2);
        userData.append('kode_pos[]', kode_pos1);
        userData.append('kode_pos[]', kode_pos2);
        axios({
          method: 'put',
          url: `${Url}/customers/${id}`,
          data: userData,
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        .then(function (res) {
            //handle success
            console.log(res)
            Swal.fire(
                'Berhasil Ditambahkan',
                `${name} Masuk dalam list`,
                'success'
              )
            navigate('/pelanggan')
        })
        .catch(err => {
            if (err.response) {
                console.log("err.response ", err.response);
                Swal.fire(
                    'Gagal Ditambahkan',
                    'Mohon Cek Dahulu..',
                    'error'
                )
              } else if (err.request) {
                console.log("err.request ", err.request);
                Swal.fire(
                    'Gagal Ditambahkan',
                    'Mohon Cek Dahulu..',
                    'error'
                )
              } else if (err.message) {
                // do something other than the other two
                Swal.fire(
                    'Gagal Ditambahkan',
                    'Mohon Cek Dahulu..',
                    'error'
                )
              }
        })
        
    }

    const handleAdd = async e => {
        e.preventDefault();
        const userData = new FormData();
        userData.append('alamat', address);
        userData.append('kota', kota);
        userData.append('kecamatan', kecamatan);
        userData.append('kelurahan', kelurahan);
        userData.append('kode_pos', kode_pos);
        axios({
          method: 'patch',
          url: `${Url}/customers/add_address/${id}`,
          data: userData,
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        .then(function (res) {
            //handle success
            console.log(res)
            Swal.fire(
                'Berhasil Ditambahkan',
                'Alamat Berhasil ',
                'success'
              )
            navigate(`/pelanggan/`)
        })
        .catch(err => {
            if (err.response) {
                console.log("err.response ", err.response);
                Swal.fire(
                    'Gagal Ditambahkan',
                    'Mohon Cek Dahulu..',
                    'error'
                )
              } else if (err.request) {
                console.log("err.request ", err.request);
                Swal.fire(
                    'Gagal Ditambahkan',
                    'Mohon Cek Dahulu..',
                    'error'
                )
              } else if (err.message) {
                // do something other than the other two
                Swal.fire(
                    'Gagal Ditambahkan',
                    'Mohon Cek Dahulu..',
                    'error'
                )
              }
        })
        
    }

    useEffect(() => {
        setisLoading(true);
        axios.get(`${Url}/customers?kode=${id}`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }

        })
        .then(function (response) {
            setData(response.data.data);
            setisLoading(false);
            console.log(response.data.data);
        })
        .catch((err) => {
            // Jika Gagal
            setisError(true);
            setisLoading(false);
          });
        
    }, [])

    if (isLoading) return <h1>Loading data</h1>;
    else if (data && !isError)

    return (
        <>
        <form className="form-input shadow-lg p-3 mb-5 bg-body rounded">
        <div className="text-title text-start mb-4">
            <h3 className="title fw-bold">Buat Pelanggan</h3>
        </div>
            <div className="row mb-3">
                <label htmlFor="inputKode3" className="col-sm-2 col-form-label">Kode</label>
                <div className="col-sm-10">
                <input 
                    type="kode" 
                    className="form-control" 
                    defaultValue={id}
                    id="inputKode3"
                    />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Nama Pelanggan</label>
                <div className="col-sm-10">
                {data?.map((data) => (
                    <input 
                        type="Nama" 
                        className="form-control" 
                        defaultValue={data.name}
                        id="inputNama3"
                        onChange={e => setName(e.target.value)}
                        />
                ))}
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">No Telepon</label>
                <div className="col-sm-10">
                {data?.map((data) => (
                    <input 
                        type="Nama" 
                        className="form-control" 
                        id="inputNama3"
                        defaultValue={data.phone_number}
                        onChange={e => setPhone_number(e.target.value)}
                        />
                ))}
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                {data?.map((data) => (
                    <input 
                        type="Nama" 
                        className="form-control" 
                        id="inputNama3"
                        defaultValue={data.email}
                        onChange={e => setEmail(e.target.value)}
                        />
                ))}
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">NPWP</label>
                <div className="col-sm-10">
                {data?.map((data) => (
                    <input 
                        type="Nama" 
                        className="form-control" 
                        id="inputNama3"
                        defaultValue={data.npwp}
                        onChange={e => setNpwp(e.target.value)}
                        />
                ))}
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Badan Usaha</label>
                <div className="col-sm-10">
                    <select onChange={e => setBussiness_ent(e.target.value)} id="bussinessSelect" className="form-select">
                        <option>Pilih Badan Usaha</option>
                        <option value="PT" checked={bussiness_ent === 'PT'}>PT</option>
                        <option value="CV" checked={bussiness_ent === 'CV'}>CV</option>
                        <option value="Lainnya" checked={bussiness_ent === 'Lainnya..'}>Lainnya..</option>
                    </select>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Termin</label>
                <div className="col-sm-10">
                {data?.map((data) => (
                    <input 
                        type="Nama" 
                        className="form-control" 
                        id="inputNama3"
                        defaultValue={data.term}
                        onChange={e => setTerm(e.target.value)}
                        />
                ))}
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Diskon</label>
                <div className="col-sm-10">
                {data?.map((data) => (
                    <input 
                        type="Nama" 
                        className="form-control" 
                        id="inputNama3"
                        defaultValue={data.discount}
                        onChange={e => setDiscount(e.target.value)}
                        />
                ))}
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Alamat 1</label>
                <div className="col-sm-10">
                {data?.map((data) => (
                    <textarea
                        className="form-control" 
                        id="form4Example3" 
                        rows="4"
                        defaultValue={data.customer_addresses[0].address}
                        onChange={e => setAddress1(e.target.value)}
                        />
                ))}
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Kelurahan</label>
                <div className="col-sm-10">
                {data?.map((data) => (
                    <input
                        type="Nama" 
                        className="form-control" 
                        id="inputNama3"
                        defaultValue={data.customer_addresses[0].urban_village}
                        onChange={e => setKelurahan1(e.target.value)}
                        />
                ))}
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Kecamatan</label>
                <div className="col-sm-10">
                {data?.map((data) => (
                    <input
                        type="Nama" 
                        className="form-control" 
                        id="inputNama3"
                        defaultValue={data.customer_addresses[0].sub_district}
                        onChange={e => setKecamatan1(e.target.value)}
                        />
                ))}
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Kota</label>
                <div className="col-sm-10">
                {data?.map((data) => (
                    <input 
                        type="Nama" 
                        className="form-control" 
                        id="inputNama3"
                        defaultValue={data.customer_addresses[0].city}
                        onChange={e => setKota1(e.target.value)}
                        />
                ))}
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Kode Pos</label>
                <div className="col-sm-10">
                {data?.map((data) => (
                    <input 
                        type="Nama" 
                        className="form-control"
                        id="inputNama3"
                        defaultValue={data.customer_addresses[0].postal_code}
                        onChange={e => setKode_pos1(e.target.value)}
                        />
                ))}
                </div>
            </div>
            <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Status</legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input onChange={e => setStatus(e.target.value)} value="active" checked={status === 'active'} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" htmlFor="gridRadios1">
                                Aktif
                            </label>
                        </div>
                        <div className="form-check">
                        <input onChange={e => setStatus(e.target.value)} value="non-active" checked={status === 'non-active'} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label" htmlFor="gridRadios2">
                                Non-Aktif
                            </label>
                        </div>
                    </div>
                </fieldset>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                {/* <button onClick={handleUpdate} className="btn btn-success" type="button">Simpan</button> */}
                <Button onClick={handleUpdate} variant="contained" endIcon={<SendIcon />}>
                    Simpan
                </Button>
            </div>
        </form>
        <form className="form-input shadow-lg p-3 mb-5 bg-body rounded">
        <div className="text-title text-start mb-4">
            <h3 className="title fw-bold">Tambah Alamat</h3>
        </div>
        <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Alamat 1</label>
                <div className="col-sm-10">
                <textarea
                    className="form-control" 
                    id="form4Example3" 
                    rows="4"
                    onChange={e => setAddress(e.target.value)}
                    />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Kelurahan</label>
                <div className="col-sm-10">
                <input
                    type="Nama" 
                    className="form-control" 
                    id="inputNama3"
                    onChange={e => setKelurahan(e.target.value)}
                    />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Kecamatan</label>
                <div className="col-sm-10">
                <input
                    type="Nama" 
                    className="form-control" 
                    id="inputNama3"
                    onChange={e => setKecamatan(e.target.value)}
                    />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Kota</label>
                <div className="col-sm-10">
                <input 
                    type="Nama" 
                    className="form-control" 
                    id="inputNama3"
                    onChange={e => setKota(e.target.value)}
                    />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Kode Pos</label>
                <div className="col-sm-10">
                <input 
                    type="Nama" 
                    className="form-control"
                    id="inputNama3"
                    onChange={e => setKode_pos(e.target.value)}
                    />
                </div>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button onClick={handleAdd} className="btn btn-danger" type="button">Tambah</button>
            </div>
        </form>
        
    </>
    )
}

export default EditPelanggan