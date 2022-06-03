import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Modul from '../pages/Modul'

const RouteApp = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Dashboard />} />
                    <Route path="/modul" exact element={<Modul />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouteApp;