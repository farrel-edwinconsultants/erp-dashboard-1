import React from 'react'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const RouteApp = () => {

    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/form" element={<ListPengguna />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default RouteApp;