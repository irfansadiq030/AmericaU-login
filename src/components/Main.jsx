import React from 'react'
import './Main.css'
import Header from './Header'
import Login from './Login/Login'
import ResetPassword from './ResetPassword/ResetPassword'
import ForgotPassword from './ForgotPassword/ForgotPassword'
import SuccessForgotPassword from './SuccessForgotPassword/SuccessForgotPassword'
import { Routes, Route } from 'react-router-dom'

const Main = () => {
    return (
        <div className='container-fluid p-5 bg-top bg-cover main_bg relative'>
            <Header />
            <div className="components-container">
                <Routes>

                    <Route path="/" element={<Login />} />
                    <Route path="/forgotpassword" element={<ForgotPassword />} />
                    <Route path="/resetpassword" element={<ResetPassword />} />
                    <Route path="/successpasswordchanged" element={<SuccessForgotPassword />} />

                </Routes>
            </div>

        </div>
    )
}

export default Main