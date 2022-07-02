import React from 'react'
import './Main.css'
import Header from './Header'
import Login from './Login/Login'
import ResetPassword from './ResetPassword/ResetPassword'
import { Routes, Route } from 'react-router-dom'

const Main = () => {
    return (
        <div className='container-fluid p-5 bg-top bg-cover main_bg pb-32'>
            <Header />
            <div className="components-container">
                <Routes>

                    <Route path="/" element={<Login />} />
                    <Route path="/resetpassword" element={<ResetPassword />} />

                </Routes>
            </div>

        </div>
    )
}

export default Main