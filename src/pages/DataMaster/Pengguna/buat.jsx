import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell} from '@coreui/react'
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from "yup";
import jsCookie from 'js-cookie';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Url from '../../../Config';
import './form.css'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

const BuatPengguna = () => {
    const token = jsCookie.get('auth')
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [employees, setEmployees] = useState();
    const [groups, setGroups] = useState();
    const navigate = useNavigate();

    const [getUser, setGetUser] = useState();
    const [employeesData, setEmployeesData] = useState();

    const formik = useFormik({
        initialValues: {
          username: "",
          password: "",
          confirm_password: ""
        },
        validationSchema: Yup.object({
          username: Yup.string()
            .min(2, "Mininum 2 characters")
            .max(15, "Maximum 15 characters")
            .required("Required!"),
          password: Yup.string()
            .min(8, "Minimum 8 characters")
            .required("Required!"),
          confirm_password: Yup.string()
            .oneOf([Yup.ref("password")], "Password's not match")
            .required("Required!")
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        }
      });

    const handleSubmit = async e => {
        e.preventDefault();
        const userData = new FormData();
        userData.append('username', username);
        userData.append('password', password);
        userData.append('karyawan', employees);
        userData.append('grup[]', groups);
        axios({
          method: 'post',
          url: `${Url}/users`,
          data: userData,
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        .then(function (res) {
            //handle success
            console.log(res)
            navigate('/pengguna')
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
            `${getUser.data} Masuk dalam list`,
            'success'
          )
    }

    useEffect(() => {
        axios.get(`${Url}/get_new_user_id`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            setGetUser(res.data.data)
        })
        .catch((err) => {
            // Jika Gagal
            console.log(err)
          });

        axios.get(`${Url}/employees`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => setEmployeesData(res.data.data))
        .catch((err) => {
            // Jika Gagal
            console.log(err)
          });
    },[])

    if(employeesData?.length > 0) {
        return (
            <>
                <form className="form-input shadow-lg p-3 mb-5 bg-body rounded">
                <div className="text-title text-start mb-4">
                    <h3 className="title fw-bold">Buat Pengguna</h3>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Bagian</label>
                    <div className="col-sm-10">
                        <select onChange={e => setEmployees(e.target.value)} id="BagianSelect" className="form-select">
                            <option>Pilih Karyawan</option>
                            {employeesData?.map(d => {
                                return(
                                    <option value={d.id} key={d.id}>{d.id}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                    <div className="row mb-3">
                        <label htmlFor="inputKode3" className="col-sm-2 col-form-label">Kode</label>
                        <div className="col-sm-10">
                                    <input 
                                        type="kode" 
                                        className="form-control" 
                                        id="inputKode3"
                                        value={getUser}
                                        readOnly={getUser}
                                        // onChange={e => setName(e.target.value)}
                                        />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                        <input 
                            type="Nama" 
                            className="form-control" 
                            id="inputNama3"
                            onChange={e => setUsername(e.target.value)}
                            />
                            {formik.errors.username && formik.touched.username && (
                                <p>{formik.errors.username}</p>
                            )}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Kata Sandi</label>
                        <div className="col-sm-10">
                        <input 
                            type="password" 
                            className="form-control" 
                            id="inputNama3"
                            onChange={e => setPassword(e.target.value)}
                            />
                            {formik.errors.password && formik.touched.password && (
                                <p>{formik.errors.password}</p>
                            )}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Konfirmasi Kata Sandi</label>
                        <div className="col-sm-10">
                        <input 
                            type="password" 
                            className="form-control" 
                            id="inputNama3"
                            onChange={e => setPassword(e.target.value)}
                            />
                            {formik.errors.password && formik.touched.password && (
                                <p>{formik.errors.password}</p>
                            )}
                        </div>
                    </div>
                </form>
                <div className="container-list shadow-lg p-3 mb-3 bg-body rounded d-flex flex-column">
            <div className="container-table">
                <CTable striped hover className="container-form">
                    <CTableHead>
                        <CTableRow>
                        <CTableHeaderCell scope="col">Nama Grup</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Akses</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                            <CTableDataCell>test</CTableDataCell>
                            <CTableDataCell>
                                <input 
                                    // value={d.id} 
                                    // key={d.id}
                                    // onChange={e => setGroups(e.target.value)} 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    id="flexCheckDefault"/>
                            </CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </div>
        </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    {/* <button onClick={handleSubmit} className="btn btn-success" type="button">Simpan</button> */}
                    <Button onClick={handleSubmit} variant="contained" endIcon={<SendIcon />}>
                        Simpan
                    </Button>
                </div>
            </>
        )
    }
    }


export default BuatPengguna