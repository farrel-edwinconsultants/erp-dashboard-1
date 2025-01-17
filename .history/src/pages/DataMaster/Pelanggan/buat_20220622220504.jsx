import axios from "axios";
import MaterialTable from 'material-table'
import React, { useEffect } from "react";
import jsCookie from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Url from "../../../Config";
import "./form.css";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

const BuatPelanggan = () => {
  const token = jsCookie.get("auth");
  const [name, setName] = useState();
  const [bussiness_ent, setBussiness_ent] = useState();
  const [phone_number, setPhone_number] = useState();
  const [email, setEmail] = useState();
  const [npwp, setNpwp] = useState();
  const [term, setTerm] = useState();
  const [discount, setDiscount] = useState();
  const [status, setStatus] = useState();
  const [address, setAddress] = useState();
  const [kota, setKota] = useState([]);
  const [kecamatan, setKecamatan] = useState([]);
  const [kelurahan, setKelurahan] = useState([]);
  const [kode_pos, setKode_pos] = useState([]);
  const navigate = useNavigate();

  const [data, setData] = useState([])
  const columns = [
    { title: "ID", field: "id", editable: false },
    { title: "Alamat", field: "address" },
    { title: "Kelurahan", field: "kelurahan" },
    { title: "Kecamatan", field: 'kecamatan', },
    { title: "Kota", field: "kota", },
    { title: "Kode Pos", field: "kode_pos", }
  ]

  const [getCustomer, setGetCustomer] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data)
    const userData = new FormData();
    userData.append("nama", name);
    userData.append("badan_usaha", bussiness_ent);
    userData.append("nomor_telepon", phone_number);
    userData.append("email", email);
    userData.append("npwp", npwp);
    userData.append("term", term);
    userData.append("diskon", discount);
    userData.append("status", status);
    userData.append("alamat[]", data);
    userData.append("kota[]", data);
    userData.append("kecamatan[]", data);
    userData.append("kelurahan[]", data);
    userData.append("kode_pos[]", data);
    axios({
      method: "post",
      url: `${Url}/customers`,
      data: userData,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(function (res) {
        //handle success
        console.log(res);
        Swal.fire(
          "Berhasil Ditambahkan",
          `${getCustomer} Masuk dalam list`,
          "success"
        );
        navigate("/pelanggan");
      })
      .catch((err) => {
        if (err.response) {
          console.log("err.response ", err.response);
          Swal.fire("Gagal Ditambahkan", "Mohon Cek Dahulu..", "error");
        } else if (err.request) {
          console.log("err.request ", err.request);
          Swal.fire("Gagal Ditambahkan", "Mohon Cek Dahulu..", "error");
        } else if (err.message) {
          // do something other than the other two
          Swal.fire("Gagal Ditambahkan", "Mohon Cek Dahulu..", "error");
        }
      });
  };

  useEffect(() => {
    axios
      .get(`${Url}/get_new_customer_id`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setGetCustomer(res.data.data);
      })
      .catch((err) => {
        // Jika Gagal
        console.log(err);
      });
  }, []);

  return (
    <>
      <form className="form-input shadow-lg p-3 mb-5 bg-body rounded">
        <div className="text-title text-start mb-4">
          <h3 className="title fw-bold">Buat Pelanggan</h3>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputKode3" className="col-sm-2 col-form-label">
            Kode
          </label>
          <div className="col-sm-10">
            <input
              type="kode"
              className="form-control"
              id="inputKode3"
              value={getCustomer}
              readOnly={getCustomer}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputNama3" className="col-sm-2 col-form-label">
            Nama Pelanggan
          </label>
          <div className="col-sm-10">
            <input
              type="Nama"
              className="form-control"
              id="inputNama3"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputNama3" className="col-sm-2 col-form-label">
            No Telepon
          </label>
          <div className="col-sm-10">
            <input
              type="Nama"
              className="form-control"
              id="inputNama3"
              onChange={(e) => setPhone_number(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputNama3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="Nama"
              className="form-control"
              id="inputNama3"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputNama3" className="col-sm-2 col-form-label">
            NPWP
          </label>
          <div className="col-sm-10">
            <input
              type="Nama"
              className="form-control"
              id="inputNama3"
              onChange={(e) => setNpwp(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputNama3" className="col-sm-2 col-form-label">
            Badan Usaha
          </label>
          <div className="col-sm-10">
            <select
              onChange={(e) => setBussiness_ent(e.target.value)}
              id="bussinessSelect"
              className="form-select"
            >
              <option>Pilih Badan Usaha</option>
              <option value="PT" checked={bussiness_ent === "PT"}>
                PT
              </option>
              <option value="CV" checked={bussiness_ent === "CV"}>
                CV
              </option>
              <option value="Lainnya" checked={bussiness_ent === "Lainnya.."}>
                Lainnya..
              </option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputNama3" className="col-sm-2 col-form-label">
            Termin
          </label>
          <div className="col-sm-10">
            <input
              type="Nama"
              className="form-control"
              id="inputNama3"
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputNama3" className="col-sm-2 col-form-label">
            Diskon
          </label>
          <div className="col-sm-10">
            <input
              type="Nama"
              className="form-control"
              id="inputNama3"
              onChange={(e) => setDiscount(e.target.value)}
            />
          </div>
        </div>
        <fieldset className="row mb-3">
          <legend className="col-form-label col-sm-2 pt-0">Status</legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                onChange={(e) => setStatus(e.target.value)}
                value="active"
                checked={status === "active"}
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="gridRadios1">
                Aktif
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={(e) => setStatus(e.target.value)}
                value="non-active"
                checked={status === "non-active"}
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" htmlFor="gridRadios2">
                Non-Aktif
              </label>
            </div>
          </div>
        </fieldset>
      </form>
      <form className="form-input shadow-lg p-3 mb-3 bg-body rounded">
      <MaterialTable
        title="Alamat Pelanggan"
        data={data}
        columns={columns}
        onChange={e => setData(e.target.value)}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowDelete: selectedRow => new Promise((resolve, reject) => {
            const index = selectedRow.tableData.id;
            const updatedRows = [...data]
            updatedRows.splice(index, 1)
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
            const index=oldRow.tableData.id;
            const updatedRows=[...data]
            updatedRows[index]=updatedRow
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onBulkUpdate:selectedRows=>new Promise((resolve,reject)=>{
            const rows=Object.values(selectedRows)
            const updatedRows=[...data]
            let index;
            rows.map(emp=>{
               index=emp.oldData.tableData.id
               updatedRows[index]=emp.newData
            })
            setTimeout(()=>{
              setData(updatedRows)
              resolve()
            },2000)
          
          })

        }}
        options={{
          actionsColumnIndex: -1, addRowPosition: "first"
        }}
      />
      </form>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        {/* <button onClick={handleSubmit} className="btn btn-success" type="button">Simpan</button> */}
        <Button
          onClick={handleSubmit}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Simpan
        </Button>
      </div>
    </>
  );
};

export default BuatPelanggan;
