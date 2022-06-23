
import axios from 'axios';
import jsCookie from 'js-cookie';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Url from '../../../Config';
import './form.css'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

const EditGudang = () => {
    const token = jsCookie.get('auth')
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [postal_code, setPostal_code] = useState();
    const [phone_number, setPhone_number] = useState();
    const [employees, setEmployees] = useState();
    const navigate = useNavigate();
    const { id } = useParams();

    const [employeesData, setEmployeesData] = useState();

    const [data, setData] = useState();
    const [isLoading, setisLoading] = useState(false);
    const [isError, setisError] = useState(false);

    const handleUpdate = async e => {
        e.preventDefault();
        const userData = new URLSearchParams();
        userData.append('nama', name);
        userData.append('alamat', address);
        userData.append('kota', city);
        userData.append('kode_pos', postal_code);
        userData.append('nomor_telepon', phone_number);
        userData.append('karyawan', employees);
        axios({
          method: 'put',
          url: `${Url}/warehouses/${id}`,
          data: userData,
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        .then(function (response) {
            //handle success
            console.log(response)
            Swal.fire(
                'Berhasil Di Update',
                `${id} Masuk dalam list`,
                'success'
              )
              navigate('/gudang')
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
        .then(res => setEmployeesData(res.data.data))

        setisLoading(true);
        axios.get(`${Url}/warehouses?kode=${id}`, {
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
    else if (data && employeesData?.length > 0 && !isError)
        return (
            <>
            <form className="form-input shadow-lg p-3 mb-3 bg-body rounded">
            <div className="text-title text-start mb-4">
                <h3 className="title fw-bold">Buat Gudang</h3>
            </div>
                <div className="row mb-3">
                    <label htmlFor="inputKode3" className="col-sm-2 col-form-label">Kode</label>
                    <div className="col-sm-10">
                    <input 
                        type="kode" 
                        className="form-control" 
                        id="inputKode3"
                        value={id}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Nama Gudang</label>
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
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Alamat</label>
                    <div className="col-sm-10">
                    {data?.map((data) => (
                        <textarea 
                            className="form-control" 
                            id="form4Example3" 
                            rows="4"
                            defaultValue={data.address}
                            onChange={e => setAddress(e.target.value)}
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
                        defaultValue={data.city}
                        onChange={e => setCity(e.target.value)}
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
                            defaultValue={data.postal_code}
                            onChange={e => setPostal_code(e.target.value)}
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
                    <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Nama Karyawan</label>
                    <div className="col-sm-10">
                        <select onChange={e => setEmployees(e.target.value)} className="form-select">
                            <option>Pilih Karyawan</option>
                        {employeesData?.map(d => {
                                return (
                                    <option value={d.id} key={d.id}>{d.id}</option>
                                )
                        })}
                        </select>
                    </div>
                </div>
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


export default EditGudang