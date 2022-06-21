import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'

import Login from '../pages/Login'

import Modul from '../pages/Modul'
import BuatModul from '../pages/Modul/buat'

import Grup from '../pages/DataMaster/Grup'
import BuatGrup from '../pages/DataMaster/Grup/buat'
import EditGrup from '../pages/DataMaster/Grup/edit'
import DetailGrup from '../pages/DataMaster/Grup/detail'

import Pengguna from '../pages/DataMaster/Pengguna'
import BuatPengguna from '../pages/DataMaster/Pengguna/buat'
import EditPengguna from '../pages/DataMaster/Pengguna/edit'
import DetailPengguna from '../pages/DataMaster/Pengguna/detail'

import Departemen from '../pages/DataMaster/Departemen'
import BuatDepartemen from '../pages/DataMaster/Departemen/buat'
import EditDepartemen from '../pages/DataMaster/Departemen/edit'
import DetailDepartemen from '../pages/DataMaster/Departemen/detail'

import Posisi from '../pages/DataMaster/Posisi'
import BuatPosisi from '../pages/DataMaster/Posisi/buat'
import EditPosisi from '../pages/DataMaster/Posisi/edit'
import DetailPosisi from '../pages/DataMaster/Posisi/detail'

import Karyawan from '../pages/DataMaster/Karyawan'
import BuatKaryawan from '../pages/DataMaster/Karyawan/buat'
import EditKaryawan from '../pages/DataMaster/Karyawan/edit'
import DetailKaryawan from '../pages/DataMaster/Karyawan/detail'

import Pelanggan from '../pages/DataMaster/Pelanggan'
import BuatPelanggan from '../pages/DataMaster/Pelanggan/buat'
import EditPelanggan from '../pages/DataMaster/Pelanggan/edit'
import DetailPelanggan from '../pages/DataMaster/Pelanggan/detail'

import Gudang from '../pages/DataMaster/Gudang'
import BuatGudang from '../pages/DataMaster/Gudang/buat'
import EditGudang from '../pages/DataMaster/Gudang/edit'
import DetailGudang from '../pages/DataMaster/Gudang/detail'

import Bagian from '../pages/DataMaster/Bagian'
import BuatBagian from '../pages/DataMaster/Bagian/buat'
import EditBagian from '../pages/DataMaster/Bagian/edit'
import DetailBagian from '../pages/DataMaster/Bagian/detail'

import Kategori from '../pages/DataMaster/Kategori'
import BuatKategori from '../pages/DataMaster/Kategori/buat'
import EditKategori from '../pages/DataMaster/Kategori/edit'
import DetailKategori from '../pages/DataMaster/Kategori/detail'

import Merek from '../pages/DataMaster/Merek'
import BuatMerek from '../pages/DataMaster/Merek/buat'
import EditMerek from '../pages/DataMaster/Merek/edit'
import DetailMerek from '../pages/DataMaster/Merek/detail'

import Pajak from '../pages/DataMaster/Pajak'
import BuatPajak from '../pages/DataMaster/Pajak/buat'
import EditPajak from '../pages/DataMaster/Pajak/edit'
import DetailPajak from '../pages/DataMaster/Pajak/detail'

import Grade from '../pages/DataMaster/Grade'
import BuatGrade from '../pages/DataMaster/Grade/buat'
import EditGrade from '../pages/DataMaster/Grade/edit'
import DetailGrade from '../pages/DataMaster/Grade/detail'

import TipeProduk from '../pages/DataMaster/Tipe Produk'
import BuatTipeProduk from '../pages/DataMaster/Tipe Produk/buat'
import EditTipeProduk from '../pages/DataMaster/Tipe Produk/edit'
import DetailTipeProduk from '../pages/DataMaster/Tipe Produk/detail'

import Produk from '../pages/DataMaster/Produk'
import BuatProduk from '../pages/DataMaster/Produk/buat'
import EditProduk from '../pages/DataMaster/Produk/edit'
import DetailProduk from '../pages/DataMaster/Produk/detail'

import Pesanan from '../pages/Penjualan/Pesanan'
import BuatPesanan from '../pages/Penjualan/Pesanan/buat'
import EditPesanan from '../pages/Penjualan/Pesanan/edit'
import DetailPesanan from '../pages/Penjualan/Pesanan/detail'

import SuratJalan from '../pages/Penjualan/SuratJalan'
import BuatSuratJalan from '../pages/Penjualan/SuratJalan/buat'
import EditSuratJalan from '../pages/Penjualan/SuratJalan/edit'
import DetailSuratJalan from '../pages/Penjualan/SuratJalan/detail'

import Faktur from '../pages/Penjualan/Faktur'
import BuatFaktur from '../pages/Penjualan/Faktur/buat'
import EditFaktur from '../pages/Penjualan/Faktur/edit'
import DetailFaktur from '../pages/Penjualan/Faktur/detail'

import Pelunasan from '../pages/Penjualan/Pelunasan'
import BuatPelunasan from '../pages/Penjualan/Pelunasan/buat'
import EditPelunasan from '../pages/Penjualan/Pelunasan/edit'
import DetailPelunasan from '../pages/Penjualan/Pelunasan/detail'

import Tally from '../pages/Penjualan/TallySheet'
import BuatTally from '../pages/Penjualan/TallySheet/buat'
import EditTally from '../pages/Penjualan/TallySheet/edit'
import DetailTally from '../pages/Penjualan/TallySheet/detail'



const RouteApp = () => {
    
    return (
        <>
            <Routes>
                <Route path="/login" exact element={<Login />} />
                
                <Route path="/" exact element={<Dashboard />} />

                <Route path="/modul" exact element={<Modul />} />
                <Route path="/modul/buat" exact element={<BuatModul />} />

                <Route path="/grup" exact element={<Grup />} />
                <Route path="/grup/buat" exact element={<BuatGrup />} />
                <Route path="/grup/edit/:id" exact element={<EditGrup />} />
                <Route path="/grup/detail" exact element={<DetailGrup />} />

                <Route path="/pengguna" exact element={<Pengguna />} />
                <Route path="/pengguna/buat" exact element={<BuatPengguna />} />
                <Route path="/pengguna/edit/:id" exact element={<EditPengguna />} />
                <Route path="/pengguna/detail" exact element={<DetailPengguna />} />

                <Route path="/departemen" exact element={<Departemen />} />
                <Route path="/departemen/buat" exact element={<BuatDepartemen />} />
                <Route path="/departemen/edit/:id" exact element={<EditDepartemen />} />
                <Route path="/departemen/detail" exact element={<DetailDepartemen />} />

                <Route path="/posisi" exact element={<Posisi />} />
                <Route path="/posisi/buat" exact element={<BuatPosisi />} />
                <Route path="/posisi/edit/:id" exact element={<EditPosisi />} />
                <Route path="/posisi/detail" exact element={<DetailPosisi />} />

                <Route path="/karyawan" exact element={<Karyawan />} />
                <Route path="/karyawan/buat" exact element={<BuatKaryawan />} />
                <Route path="/karyawan/edit/:id" exact element={<EditKaryawan />} />
                <Route path="/karyawan/detail" exact element={<DetailKaryawan />} />

                <Route path="/pelanggan" exact element={<Pelanggan />} />
                <Route path="/pelanggan/buat" exact element={<BuatPelanggan />} />
                <Route path="/pelanggan/edit/:id" exact element={<EditPelanggan />} />
                <Route path="/pelanggan/detail" exact element={<DetailPelanggan />} />
                
                <Route path="/gudang" exact element={<Gudang />} />
                <Route path="/gudang/buat" exact element={<BuatGudang />} />
                <Route path="/gudang/edit/:id" exact element={<EditGudang />} />
                <Route path="/gudang/detail" exact element={<DetailGudang />} />

                <Route path="/bagian" exact element={<Bagian />} />
                <Route path="/bagian/buat" exact element={<BuatBagian />} />
                <Route path="/bagian/edit/:id" exact element={<EditBagian />} />
                <Route path="/bagian/detail" exact element={<DetailBagian />} />

                <Route path="/kategori" exact element={<Kategori />} />
                <Route path="/kategori/buat" exact element={<BuatKategori />} />
                <Route path="/kategori/edit/:id" exact element={<EditKategori />} />
                <Route path="/kategori/detail" exact element={<DetailKategori />} />

                <Route path="/merek" exact element={<Merek />} />
                <Route path="/merek/buat" exact element={<BuatMerek />} />
                <Route path="/merek/edit/:id" exact element={<EditMerek />} />
                <Route path="/merek/detail" exact element={<DetailMerek />} />

                <Route path="/pajak" exact element={<Pajak />} />
                <Route path="/pajak/buat" exact element={<BuatPajak />} />
                <Route path="/pajak/edit/:id" exact element={<EditPajak />} />
                <Route path="/pajak/detail" exact element={<DetailPajak />} />

                <Route path="/grade" exact element={<Grade />} />
                <Route path="/grade/buat" exact element={<BuatGrade />} />
                <Route path="/grade/edit/:id" exact element={<EditGrade />} />
                <Route path="/grade/detail" exact element={<DetailGrade />} />

                <Route path="/tipe" exact element={<TipeProduk />} />
                <Route path="/tipe/buat" exact element={<BuatTipeProduk />} />
                <Route path="/tipe/edit/:id" exact element={<EditTipeProduk />} />
                <Route path="/tipe/detail" exact element={<DetailTipeProduk />} />

                <Route path="/produk" exact element={<Produk />} />
                <Route path="/produk/buat" exact element={<BuatProduk />} />
                <Route path="/produk/edit/:id" exact element={<EditProduk />} />
                <Route path="/produk/detail" exact element={<DetailProduk />} />

                <Route path="/pesanan" exact element={<Pesanan />} />
                <Route path="/pesanan/buat" exact element={<BuatPesanan />} />
                <Route path="/pesanan/edit/:id" exact element={<EditPesanan />} />
                <Route path="/pesanan/detail" exact element={<DetailPesanan />} />

                <Route path="/suratjalan" exact element={<SuratJalan />} />
                <Route path="/suratjalan/buat" exact element={<BuatSuratJalan />} />
                <Route path="/suratjalan/edit/:id" exact element={<EditSuratJalan />} />
                <Route path="/suratjalan/detail" exact element={<DetailSuratJalan />} />

                <Route path="/faktur" exact element={<Faktur />} />
                <Route path="/faktur/buat" exact element={<BuatFaktur />} />
                <Route path="/faktur/edit/:id" exact element={<EditFaktur />} />
                <Route path="/faktur/detail" exact element={<DetailFaktur />} />

                <Route path="/pelunasan" exact element={<Pelunasan />} />
                <Route path="/pelunasan/buat" exact element={<BuatPelunasan />} />
                <Route path="/pelunasan/edit/:id" exact element={<EditPelunasan />} />
                <Route path="/pelunasan/detail" exact element={<DetailPelunasan />} />

                <Route path="/tally" exact element={<Tally />} />
                <Route path="/tally/buat" exact element={<BuatTally />} />
                <Route path="/tally/edit/:id" exact element={<EditTally />} />
                <Route path="/tally/detail" exact element={<DetailTally />} />
            </Routes>
        </>
    )
}

export default RouteApp;