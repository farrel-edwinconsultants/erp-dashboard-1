
import axios from 'axios';
import jsCookie from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Url from '../../../Config';
import './form.css'

const EditDepartemen = () => {
    const token = jsCookie.get('auth')
    const [kode, setKode] = useState();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();
    const { id } = useParams();

    const [deptData, setDeptData] = useState();


    const handleSubmit = async e => {
        e.preventDefault();
        const userData = new URLSearchParams();
        userData.append('id', kode);
        userData.append('nama', name);
        userData.append('deskripsi', description);
        axios({
          method: 'put',
          url: `${Url}/departments/${id}`,
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
        axios.get(`${Url}/departments/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => setDeptData(res.data.data))

    },[token])

    return (
        <>
        <form className="form-input shadow-lg p-3 mb-5 bg-body rounded">
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
                    onChange={e => setKode(e.target.value)}
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
                    value={deptData.name}
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
                <button onClick={handleSubmit} className="btn btn-success" type="submit">Simpan</button>
            </div>
        </form>
    </>
    )
}

export default EditDepartemen