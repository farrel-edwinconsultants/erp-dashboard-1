import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import Person from '../../../assets/person.jpg'

const Sidebar = () => {
    return (
        <>
        <ProSidebar>
            <Menu iconShape="square">
                <SidebarHeader>
                    <img className="person" src={Person} alt="" />
                    <h3 className="account">Welcome, Master Admin</h3>
                </SidebarHeader>
                <MenuItem>
                    Dashboard
                    <Link to="/" />
                </MenuItem>
                <MenuItem>
                    Modul
                    <Link to="/modul" />
                </MenuItem>
                <SubMenu title="Data Master" >
                    <MenuItem>
                        Grup Pengguna
                        <Link to="/grup" />
                    </MenuItem>
                    <MenuItem>
                        Pengguna
                        <Link to="/pengguna" />
                    </MenuItem>
                    <MenuItem>
                        Departement
                        <Link to="/departemen" />
                    </MenuItem>
                    <MenuItem>
                        Posisi
                        <Link to="/posisi" />
                    </MenuItem>
                    <MenuItem>
                        Karyawan
                        <Link to="/karyawan" />
                    </MenuItem>
                    <MenuItem>
                        Pelanggan
                        <Link to="/pelanggan" />
                    </MenuItem>
                    <MenuItem>
                        Gudang
                        <Link to="/gudang" />
                    </MenuItem>
                    <MenuItem>
                        Bagian
                        <Link to="/bagian" />
                    </MenuItem>
                    <MenuItem>
                        Kategori
                        <Link to="/kategori" />
                    </MenuItem>
                    <MenuItem>
                        Merek Produk
                        <Link to="/merek" />
                    </MenuItem>
                    <MenuItem>
                        Produk
                        <Link to="/produk" />
                    </MenuItem>
                    <MenuItem>
                        Pajak
                        <Link to="/pajak" />
                    </MenuItem>
                </SubMenu>
                <SubMenu title="Penjualan" >
                    <MenuItem>
                        Pesanan Penjualan
                        <Link to="/pesanan" />
                    </MenuItem>
                    <MenuItem>
                        Tally Sheet
                        <Link to="/tally" />
                    </MenuItem>
                    <MenuItem>
                        Surat Jalan
                        <Link to="/suratjalan" />
                    </MenuItem>
                    <MenuItem>
                        Faktur Penjualan
                        <Link to="/faktur" />
                    </MenuItem>
                    <MenuItem>
                        Rektur Penjualan
                        <Link to="/rektur" />
                    </MenuItem>
                    <MenuItem>
                        Pelunasan Penjualan
                        <Link to="/pelunasan" />
                    </MenuItem>
                </SubMenu>
            <SidebarFooter className="sidebar-footer">
                <MenuItem ></MenuItem>
            </SidebarFooter>
            </Menu>
        </ProSidebar>
        </>
    )
}

export default Sidebar