import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Person from '../../assets/person.jpg'

const Sidebar = () => {
    return (
        <>
        <ProSidebar>
            <Menu iconShape="square">
                <SidebarHeader>
                    <img className="person" src={Person} alt="" />
                    <h3 className="account">Welcome, Master Admin</h3>
                </SidebarHeader>
                <MenuItem>Dashboard</MenuItem>
                <MenuItem>Modul</MenuItem>
                <SubMenu title="Data Master" >
                    <MenuItem>Grup Pengguna</MenuItem>
                    <MenuItem>Pengguna</MenuItem>
                    <MenuItem>Departement</MenuItem>
                    <MenuItem>Posisi</MenuItem>
                    <MenuItem>Karyawan</MenuItem>
                    <MenuItem>Pelanggan</MenuItem>
                    <MenuItem>Gudang</MenuItem>
                    <MenuItem>Bagian</MenuItem>
                    <MenuItem>Kategori</MenuItem>
                    <MenuItem>Merek Produk</MenuItem>
                    <MenuItem>Produk</MenuItem>
                    <MenuItem>Pajak</MenuItem>
                </SubMenu>
                <SubMenu title="Penjualan" >
                    <MenuItem>Pesanan Penjualan</MenuItem>
                    <MenuItem>Tally Sheet</MenuItem>
                    <MenuItem>Surat Jalan</MenuItem>
                    <MenuItem>Faktur Penjualan</MenuItem>
                    <MenuItem>Rektur Penjualan</MenuItem>
                    <MenuItem>Pelunasan Penjualan</MenuItem>
                </SubMenu>
            <SidebarFooter className="sidebar-footer">
                <MenuItem >Logout</MenuItem>
            </SidebarFooter>
            </Menu>
        </ProSidebar>
        </>
    )
}

export default Sidebar