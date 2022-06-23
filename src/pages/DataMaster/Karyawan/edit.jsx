
import axios from 'axios';
import jsCookie from 'js-cookie';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Url from '../../../Config';
import './form.css'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

const EditKaryawan = () => {
    const token = jsCookie.get('auth')
    const [nip, setNip] = useState();
    const [name, setName] = useState();
    const [initial, setInitial] = useState();
    const [department_id, setDepartment_id] = useState();
    const [position_id, setPosition_id] = useState();
    const [email, setEmail] = useState();
    const [phone_number, setPhone_number] = useState();
    const [nik, setNik] = useState();
    const [npwp, setNpwp] = useState();
    const [date_of_birth, setDate_of_birth] = useState(null);
    const [start_date, setStart_date] = useState(null);
    const [status, setStatus] = useState();
    const navigate = useNavigate();
    const { id } = useParams();


    const [deptData, setDeptData] = useState();
    const [posData, setPosData] = useState();

    const [data, setData] = useState();
    const [isLoading, setisLoading] = useState(false);
    const [isError, setisError] = useState(false);

    const handleUpdate = async e => {
        e.preventDefault();
        const userData = new URLSearchParams();
        userData.append('nip', nip);
        userData.append('nama', name);
        userData.append('inisial', initial);
        userData.append('departemen', department_id);
        userData.append('posisi', position_id);
        userData.append('email', email);
        userData.append('nomor_telepon', phone_number);
        userData.append('nik', nik);
        userData.append('npwp', npwp);
        userData.append('tanggal_lahir', date_of_birth);
        userData.append('tanggal_masuk', start_date);
        userData.append('status', status);
        axios({
          method: 'put',
          url: `${Url}/employees/${id}`,
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
                `${id} Masuk dalam list`,
                'success'
              )
            navigate('/karyawan')
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
        axios.get(`${Url}/departments`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => setDeptData(res.data.data))

        axios.get(`${Url}/positions`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => setPosData(res.data.data))

        setisLoading(true);
        axios.get(`${Url}/employees?kode=${id}`, {
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
    },[])

    if (isLoading) return <h1>Loading data</h1>;
    else if (data && deptData?.length > 0 & posData?.length > 0 && !isError)

        return (
            <>
            <form className="form-input shadow-lg p-3 mb-5 bg-body rounded">
            <div className="text-title text-start mb-4">
                <h3 className="title fw-bold">Buat Karyawan</h3>
            </div>
            <div className="row mb-3">
                    <label htmlFor="inputKode3" className="col-sm-2 col-form-label">Kode</label>
                    <div className="col-sm-10">
                    <input 
                        type="kode" 
                        className="form-control" 
                        value={id}
                        id="inputKode3"
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputKode3" className="col-sm-2 col-form-label">NIP</label>
                    <div className="col-sm-10">
                    {data?.map((data) => (
                        <input 
                            type="kode" 
                            className="form-control" 
                            id="inputKode3"
                            defaultValue={data.nip}
                            onChange={e => setNip(e.target.value)}
                            />
                    ))}
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputKode3" className="col-sm-2 col-form-label">NIK</label>
                    <div className="col-sm-10">
                    {data?.map((data) => (
                        <input 
                            type="kode" 
                            className="form-control" 
                            id="inputKode3"
                            defaultValue={data.nik}
                            onChange={e => setNik(e.target.value)}
                            />
                    ))}
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Nama Karyawan</label>
                    <div className="col-sm-10">
                    {data?.map((data) => (
                        <input 
                            type="Nama" 
                            className="form-control" 
                            id="inputNama3"
                            defaultValue={data.name}
                            onChange={e => setName(e.target.value)}
                            />
                    ))}
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Inisial</label>
                    <div className="col-sm-10">
                    {data?.map((data) => (
                        <input 
                            type="Nama" 
                            className="form-control" 
                            id="inputNama3"
                            defaultValue={data.initial}
                            onChange={e => setInitial(e.target.value)}
                            />
                    ))}
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Departemen</label>
                    <div className="col-sm-10">
                        <select onChange={e => setDepartment_id(e.target.value)} className="form-select">
                            <option>Pilih Departemen</option>
                            {deptData?.map(d => {
                                return (
                                    <option value={d.id} key={d.id}>{d.id}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Posisi</label>
                    <div className="col-sm-10">
                        <select onChange={e => setPosition_id(e.target.value)} className="form-select">
                            <option>Pilih Posisi</option>
                        {posData?.map(d => {
                                return (
                                    <option value={d.id} key={d.id}>{d.id}</option>
                                )
                            })}
                        </select>
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
                    <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Tanggal Lahir</label>
                    <div className="col-sm-10">
                    <input 
                        type="date" 
                        className="form-control"
                        onChange={e => setDate_of_birth(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Tanggal Masuk</label>
                    <div className="col-sm-10">
                    <input 
                        type="date" 
                        className="form-control"
                        onChange={e => setStart_date(e.target.value)}
                        />
                    </div>
                </div>
            </form>
            <form className="form-input shadow-lg p-3 mb-3 bg-body rounded">
            <div className="text-title text-start mb-4">
                <h3 className="title fw-bold">Dokumen</h3>
            </div>
                {/* <div className="row mb-3">
                    <label htmlFor="inputKode3" className="col-sm-2 col-form-label">Tanggal Keluar</label>
                    <div className="col-sm-10">
                    <input type="kode" className="form-control" id="inputKode3"/>
                    </div>
                </div> */}
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
                {/* <div className="row mb-3">
                    <label htmlFor="inputNama3" className="col-sm-2 col-form-label">KTP</label>
                    <div className="col-sm-10">
                    <input 
                        type="Nama" 
                        className="form-control" 
                        id="inputNama3"
                        />
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
                </div> */}
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
            </form>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                {/* <button onClick={handleUpdate} className="btn btn-success" type="button">Simpan</button> */}
                <Button onClick={handleUpdate} variant="contained" endIcon={<SendIcon />}>
                    Simpan
                </Button>
            </div>
        </>
        )

    }


export default EditKaryawan