import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Modul from '../pages/Modul'

const RouteApp = () => {

    return (
        <>
            <Routes>
                <Route path="/" exact element={<Dashboard />} />
                <Route path="/modul" exact element={<Modul />} />
            </Routes>
        </>
    )
}

export default RouteApp;