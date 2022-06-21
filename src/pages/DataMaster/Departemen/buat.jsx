import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import axios from 'axios';
import jsCookie from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Url from '../../../Config';
import './form.css'

const BuatDepartemen = () => {
    const token = jsCookie.get('auth')
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    const [getDepartment, setGetDepartment] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const userData = new FormData();
        userData.append('id', id);
        userData.append('nama', name);
        userData.append('deskripsi', description);
        axios({
          method: 'post',
          url: `${Url}/departments`,
          data: userData,
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        .then(function (response) {
            //handle success
            navigate('/departemen')
        })
        Swal.fire(
            'Berhasil Ditambahkan',
            `${id} Masuk dalam list`,
            'success'
          )
    }

    useEffect(() => {
        axios.get(`${Url}/get_new_department_id`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            setGetDepartment(res.data.data)
        })
        .catch((err) => {
            // Jika Gagal
            console.log(err)
          });
    }, [])

    return (
        <>
        <form className="form-input shadow-lg p-3 mb-3 bg-body rounded">
        <div className="text-title text-start mb-4">
            <h3 className="title fw-bold">Buat Departemen</h3>
        </div>
            <div className="row mb-3">
                <label htmlFor="inputKode3" className="col-sm-2 col-form-label">Kode</label>
                <div className="col-sm-10">
                <input 
                    type="kode"
                    className="form-control"
                    id="inputKode3"
                    // onChange={e => setId(e.target.value)}
                    value={getDepartment}
                    readOnly={getDepartment}
                    />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Nama Departemen</label>
                <div className="col-sm-10">
                <input
                    type="Name"
                    className="form-control"
                    id="inputNama3"
                    onChange={e => setName(e.target.value)}
                    />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Keterangan</label>
                <div className="col-sm-10">
                <textarea
                    className="form-control"
                    id="form4Example3"
                    rows="4"
                    onChange={e => setDescription(e.target.value)}
                    />
                </div>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                {/* <button onClick={handleSubmit} className="btn btn-success" type="submit">Simpan</button> */}
                <Button onClick={handleSubmit} variant="contained" endIcon={<SendIcon />}>
                        Simpan
                </Button>
            </div>
        </form>
    </>
    )
}

export default BuatDepartemen