import axios from "axios";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import React, { useEffect } from "react";
import jsCookie from "js-cookie";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Url from "../../../Config";
import "./form.css";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextField } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const EditPelanggan = () => {
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
  const [kota, setKota] = useState();
  const [kecamatan, setKecamatan] = useState();
  const [kelurahan, setKelurahan] = useState();
  const [kode_pos, setKode_pos] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  const [rows, setRows] = useState([
    {
      id: 1,
      address: "",
      kota: "",
      kelurahan: "",
      kecamatan: "",
      kodepos: "",
    },
  ]);

  const [open, setOpen] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleAdd = () => {
    setRows([
      ...rows,
      {
        id: rows.length + 1,
        address: "",
        kota: "",
        kelurahan: "",
        kecamatan: "",
        kodepos: "",
      },
    ]);
    setEdit(true);
  };

  const handleSave = () => {
    setEdit(!isEdit);
    setRows(rows);
    console.log("saved : ", rows);
    setOpen(true);
  };

  const handleRemoveClick = (i) => {
    const list = [...rows];
    list.splice(i, 1);
    setRows(list);
    setShowConfirm(false);
  };

  const handleEdit = (i) => {
    // If edit mode is true setEdit will
    // set it to false and vice versa
    setEdit(!isEdit);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const userData = new URLSearchParams();
    userData.append("nama", name);
    userData.append("badan_usaha", bussiness_ent);
    userData.append("nomor_telepon", phone_number);
    userData.append("email", email);
    userData.append("npwp", npwp);
    userData.append("term", term);
    userData.append("diskon", discount);
    userData.append("status", status);
    userData.append("alamat[]", address);
    userData.append("kota[]", kota);
    userData.append("kecamatan[]", kecamatan);
    userData.append("kelurahan[]", kelurahan);
    userData.append("kode_pos[]", kode_pos);
    axios({
      method: "put",
      url: `${Url}/customers/${id}`,
      data: userData,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(function (res) {
        //handle success
        console.log(res);
        Swal.fire("Berhasil Ditambahkan", `${id} Masuk dalam list`, "success");
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
    setisLoading(true);
    axios
      .get(`${Url}/customers?kode=${id}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
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
  }, []);

  if (isLoading) return <h1>Loading data</h1>;
  else if (data && !isError)
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
                defaultValue={id}
                id="inputKode3"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputNama3" className="col-sm-2 col-form-label">
              Nama Pelanggan
            </label>
            <div className="col-sm-10">
              {data?.map((data) => (
                <input
                  type="Nama"
                  className="form-control"
                  defaultValue={data.name}
                  id="inputNama3"
                  onChange={(e) => setName(e.target.value)}
                />
              ))}
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputNama3" className="col-sm-2 col-form-label">
              No Telepon
            </label>
            <div className="col-sm-10">
              {data?.map((data) => (
                <input
                  type="Nama"
                  className="form-control"
                  id="inputNama3"
                  defaultValue={data.phone_number}
                  onChange={(e) => setPhone_number(e.target.value)}
                />
              ))}
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputNama3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              {data?.map((data) => (
                <input
                  type="Nama"
                  className="form-control"
                  id="inputNama3"
                  defaultValue={data.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              ))}
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputNama3" className="col-sm-2 col-form-label">
              NPWP
            </label>
            <div className="col-sm-10">
              {data?.map((data) => (
                <input
                  type="Nama"
                  className="form-control"
                  id="inputNama3"
                  defaultValue={data.npwp}
                  onChange={(e) => setNpwp(e.target.value)}
                />
              ))}
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
              {data?.map((data) => (
                <input
                  type="Nama"
                  className="form-control"
                  id="inputNama3"
                  defaultValue={data.term}
                  onChange={(e) => setTerm(e.target.value)}
                />
              ))}
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputNama3" className="col-sm-2 col-form-label">
              Diskon
            </label>
            <div className="col-sm-10">
              {data?.map((data) => (
                <input
                  type="Nama"
                  className="form-control"
                  id="inputNama3"
                  defaultValue={data.discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
              ))}
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
        <div className="row">
          <div className="col text-title text-start mb-1">
            <h3 className="title fw-bold">Tambah Alamat</h3>
          </div>
          <div className="col button-add text-end me-3">
            <AddOutlinedIcon
              onClick={handleAdd}
              type="button"
              className="btn-dark m-1"
            />
            <CheckIcon
              onClick={handleSave}
              type="button"
              className="btn-dark m-1"
            />
          </div>
        </div>
        <div className="row mb-3">
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Alamat</TableCell>
                    <TableCell>Kelurahan</TableCell>
                    <TableCell>Kecamatan</TableCell>
                    <TableCell>Kota</TableCell>
                    <TableCell>Kode Pos</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key="">
                        {isEdit ? (
                          <>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>
                              <TextField
                                id="standard-basic"
                                variant="standard"
                                value={row.address[id]}
                                onChange={(e) => setAddress(e.target.value)}
                              />
                            </TableCell>
                            <TableCell>
                              <TextField
                                id="standard-basic"
                                variant="standard"
                                value={row.kelurahan[id]}
                                onChange={(e) => setKelurahan(e.target.value)}
                              />
                            </TableCell>
                            <TableCell>
                              <TextField
                                id="standard-basic"
                                variant="standard"
                                value={row.kecamatan[id]}
                                onChange={(e) => setKecamatan(e.target.value)}
                              />
                            </TableCell>
                            <TableCell>
                              <TextField
                                id="standard-basic"
                                variant="standard"
                                value={row.kota[id]}
                                onChange={(e) => setKota(e.target.value)}
                              />
                            </TableCell>
                            <TableCell>
                              <TextField
                                id="standard-basic"
                                variant="standard"
                                value={row.kodepos[id]}
                                onChange={(e) => setKode_pos(e.target.value)}
                              />
                            </TableCell>
                            <TableCell>
                              <button type="button" className="btn">
                                <EditIcon onClick={handleEdit} />
                              </button>
                              <button type="button" className="btn">
                                <DeleteIcon onClick={handleRemoveClick} />
                              </button>
                            </TableCell>
                          </>
                        ) : (
                          <>
                          </>
                        )}
                            <TableCell component="th" scope="row">
                              {row.address[id]}
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {row.kelurahan[id]}
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {row.kecamatan[id]}
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {row.kota[id]}
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {row.kodepos[id]}
                            </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count=""
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
          {/* <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Alamat 2</label>
                <div className="col-sm-10">
                <textarea 
                    className="form-control" 
                    id="form4Example3" 
                    rows="4"
                    onChange={e => setAddress2(e.target.value)}
                    />
                </div> */}
        </div>
        </form>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            {/* <button onClick={handleUpdate} className="btn btn-success" type="button">Simpan</button> */}
            <Button
              onClick={handleUpdate}
              variant="contained"
              endIcon={<SendIcon />}
            >
              Simpan
            </Button>
          </div>
      </>
    );
};

export default EditPelanggan;
