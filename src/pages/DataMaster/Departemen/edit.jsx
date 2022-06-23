
import axios from 'axios';
import jsCookie from 'js-cookie';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Url from '../../../Config';
import './form.css'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

const EditDepartemen = () => {
    const token = jsCookie.get('auth')
    const [code, setCode] = useState();
    const [nama, setNama] = useState();
    const [deskripsi, setDeskripsi] = useState();
    const navigate = useNavigate();
    const { id } = useParams();

    const [data, setData] = useState();
    const [isLoading, setisLoading] = useState(false);
    const [isError, setisError] = useState(false);

    const handleUpdate = async e => {
        e.preventDefault();
        const userData = new URLSearchParams();
        userData.append('id', code);
        userData.append('nama', nama);
        userData.append('deskripsi', deskripsi);
        axios({
          method: 'put',
          url: `${Url}/departments/${id}`,
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
            navigate('/departemen')
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
        axios.get(`${Url}/departments?kode=${id}`, {
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
        <form className="form-input shadow-lg p-3 mb-3 bg-body rounded">
        <div className="text-title text-start mb-4">
            <h3 className="title fw-bold">Edit Departemen</h3>
        </div>
            <div className="row mb-3">
                <label htmlFor="inputKode3" className="col-sm-2 col-form-label">Kode</label>
                <div className="col-sm-10">
                <input 
                    type="kode"
                    className="form-control"
                    value={id}
                    id="inputKode3"
                    onChange={e => setCode(e.target.value)}
                    />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Nama Departemen</label>
                <div className="col-sm-10">
                {data?.map((data) => (
                    <input
                        type="Name"
                        className="form-control"
                        id="inputNama3"
                        defaultValue={data.name}
                        onChange={e => setNama(e.target.value)}
                        />
                ))}
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Keterangan</label>
                <div className="col-sm-10">
                {data?.map((data) => (
                    <textarea
                        className="form-control"
                        id="form4Example3"
                        rows="4"
                        defaultValue={data.description}
                        onChange={e => setDeskripsi(e.target.value)}
                        />
                ))}
                </div>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                {/* <button onClick={handleSubmit} className="btn btn-success" type="submit">Simpan</button> */}
                <Button onClick={handleUpdate} variant="contained" endIcon={<SendIcon />}>
                    Simpan
                </Button>
            </div>
        </form>
    </>
    )
}

export default EditDepartemen