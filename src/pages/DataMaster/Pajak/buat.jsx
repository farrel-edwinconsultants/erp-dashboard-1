import axios from 'axios';
import jsCookie from 'js-cookie';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Url from '../../../Config';
import './form.css'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

const BuatPajak = () => {
    const token = jsCookie.get('auth')
    const [id, setId] = useState();
    const [type, setType] = useState();
    const [rate, setRate] = useState();
    const navigate = useNavigate();

    const [getTaxes, setGetTaxes] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const userData = new FormData();
        userData.append('id', id);
        userData.append('jenis', type);
        userData.append('tarif', rate);
        axios({
          method: 'post',
          url: `${Url}/taxes`,
          data: userData,
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        .then(function (response) {
            //handle success
            Swal.fire(
                'Berhasil Ditambahkan',
                `${getTaxes} Masuk dalam list`,
                'success'
            )
            navigate('/pajak')
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
        axios.get(`${Url}/get_new_tax_id`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            setGetTaxes(res.data.data)
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
                <h3 className="title fw-bold">Buat Pajak</h3>
            </div>
                <div className="row mb-3">
                    <label htmlFor="inputKode3" className="col-sm-2 col-form-label">Kode</label>
                    <div className="col-sm-10">
                    <input 
                        type="kode" 
                        className="form-control" 
                        id="inputKode3"
                        // onChange={e => setId(e.target.value)}
                        value={getTaxes}
                        readOnly={getTaxes}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Nama Pajak</label>
                    <div className="col-sm-10">
                    <input 
                        type="Nama" 
                        className="form-control" 
                        id="inputNama3"
                        onChange={e => setType(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Persentase</label>
                    <div className="col-sm-5">
                        <input 
                            type="Nama" 
                            className="form-control" 
                            id="inputNama3"
                            onChange={e => setRate(e.target.value)}
                            />
                    </div>
                    <div className="col-sm-1">
                        <span className="input-group-text" id="addon-wrapping">%</span>
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

export default BuatPajak