import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'

const RouteApp = () => {

    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default RouteApp;