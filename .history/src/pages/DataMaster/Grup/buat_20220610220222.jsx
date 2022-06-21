import './form.css'
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jsCookie from 'js-cookie';
import Swal from 'sweetalert2';
import Url from '../../../Config';

const BuatGrup = () => {
    const token = jsCookie.get('auth')
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        const userData = new FormData();
        userData.append('id', id);
        userData.append('nama', name);
        userData.append('deskripsi', description);
        axios({
          method: 'post',
          url: `${Url}/groups`,
          data: userData,
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        .then(function (response) {
            //handle success
            navigate('/grup')
        })
        Swal.fire(
            'Berhasil Ditambahkan',
            `${id} Masuk dalam list`,
            'success'
          )
    }

    return (
        <>
            <form className="form-input shadow-lg p-3 mb-5 bg-body rounded">
            <div className="text-title text-start mb-4">
                <h3 className="title fw-bold">Buat Grup Pengguna</h3>
            </div>
                <div className="row mb-3">
                    <label htmlFor="inputKode3" className="col-sm-2 col-form-label">Kode</label>
                    <div className="col-sm-10">
                    <input type="kode" className="form-control" id="inputKode3" onChange={e => setId(e.target.value)}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Nama Grup</label>
                    <div className="col-sm-10">
                    <input type="Nama" className="form-control" id="inputNama3" onChange={e => setName(e.target.value)}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Keterangan</label>
                    <div className="col-sm-10">
                    <textarea className="form-control" id="form4Example3" rows="4" onChange={e => setDescription(e.target.value)}/>
                    </div>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-success" type="button" onClick={handleSubmit}>Simpan</button>
                </div>
            </form>
        </>
    )
}

export default BuatGrup