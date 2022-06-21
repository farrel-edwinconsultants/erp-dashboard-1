import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { useState } from 'react';
import jsCookie from 'js-cookie'
import Url from '../../../Config';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const KaryawanTable = () => {
    const token = jsCookie.get('auth')
    const [employees, setEmployees] = useState()
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        getEmployees();
    }, [])

    const getEmployees = async () => {
        axios.get(`${Url}/employees`, {
        headers: { 
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        })
        .then(res => setEmployees(res.data.data))
    }

    const deleteEmployees = async (id) => {
        await axios.delete(`${Url}/employees/${id}`,{
            headers: { 
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        getEmployees();
        Swal.fire(
            'Berhasil Dihapus!',
            `${id} Berhasil hapus`,
            'success'
          )
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
      };

    if(employees?.length > 0) {
        return (
          <>
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Kode</TableCell>
                  <TableCell>Nama Karyawan</    TableCell>
                  <TableCell>Departemen</TableCell>
                  <TableCell>Posisi</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                          {employees
                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                          .map((d) => {
                              return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={d.id}>
                                <TableCell>{d.id}</TableCell>
                                <TableCell>{d.name}</TableCell>
                                <TableCell>{d.department_id}</TableCell>
                                <TableCell>{d.position_id}</TableCell>
                                <TableCell>
                                    <Link to="/karyawan/detail">
                                        <button type="button" className="btn">
                                            <InfoIcon />
                                        </button>
                                    </Link>
                                    <Link to={`/karyawan/edit/${d.id}`}>
                                        <button type="button" className="btn">
                                            <EditIcon />
                                        </button>
                                    </Link>
                                        <button onClick={() => deleteEmployees(d.id)} type="button" className="btn">
                                            <DeleteIcon />
                                        </button>
                                        </TableCell>
                            </TableRow>
                              )
                          })}
                      </TableBody>
        </Table>
    </TableContainer>
    <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={employees.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
    </Paper>
          </>
        )
    }

    return (
        <p>Loading</p>
    )
}

export default KaryawanTable