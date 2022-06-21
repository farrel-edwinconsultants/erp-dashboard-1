import axios from 'axios';
import jsCookie from 'js-cookie';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Url from '../../../Config';
import './form.css'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

const BuatKategori = () => {
    const token = jsCookie.get('auth')
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    const [getCategory, setGetCategory] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const userData = new FormData();
        console.log(id, name, description);
        userData.append('id', id);
        userData.append('nama', name);
        userData.append('deskripsi', description);
        console.log(userData);
        axios({
          method: 'post',
          url: `${Url}/categories`,
          data: userData,
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        .then(function (response) {
            //handle success
            navigate('/kategori')
        })
        .catch(err => {
            if (err.response) {
                console.log("err.response ", err.response);
              } else if (err.request) {
                console.log("err.request ", err.request);
              } else if (err.message) {
                // do something other than the other two
              }
        })
        Swal.fire(
            'Berhasil Ditambahkan',
            `${id} Masuk dalam list`,
            'success'
          )
    }

    useEffect(() => {
        axios.get(`${Url}/get_new_category_id`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            setGetCategory(res.data.data)
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
                <h3 className="title fw-bold">Buat Kategori</h3>
            </div>
                <div className="row mb-3">
                    <label htmlFor="inputKode3" className="col-sm-2 col-form-label">Kode</label>
                    <div className="col-sm-10">
                    <input 
                        type="kode" 
                        className="form-control" 
                        id="inputKode3"
                        // onChange={e => setId(e.target.value)}
                        value={getCategory}
                        readOnly={getCategory}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Nama Kategori</label>
                    <div className="col-sm-10">
                    <input 
                        type="Nama" 
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
                    {/* <button onClick={handleSubmit} className="btn btn-success" type="button">Simpan</button> */}
                    <Button onClick={handleSubmit} variant="contained" endIcon={<SendIcon />}>
                        Simpan
                    </Button>
                </div>
            </form>
        </>
    )
}

export default BuatKategori