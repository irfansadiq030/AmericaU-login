import React from 'react'
import './Main.css'
import Header from './Header'
import Login from './Login/Login'
import ResetPassword from './ResetPassword/ResetPassword'
import MessageViewer from './MessageViewer/MessageViewer'
import ForgotPassword from './ForgotPassword/ForgotPassword'
import SignUpComingSoon from './SignUpComingSoon/SignUpComingSoon'
import ThankYou from './ThankYou/ThankYou'
import { Routes, Route } from 'react-router-dom'



const Main = () => {

    let message = 'You have successfully changed your password!';
    // let message2 = 'We have sent an email to addrress associated with your username.';
    // let message3 = 'Sorry, we coldn\'t find an account under that username.';

    return (
        <div className='container-fluid bg-top bg-cover main_bg relative flex justify-center flex-col items-center'>
            <Header />
            <div className="components-container">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/messageviewer" element={<MessageViewer message={message} is_link={true} />} />
                    {/* <Route path="/forgotpassword" element={<ForgotPassword />} />
                    <Route path="/resetpassword" element={<ResetPassword />} /> */}
                    <Route path="/signupcomingsoon" element={<SignUpComingSoon />} />
                    <Route path="/thankyou" element={<ThankYou />} />
                </Routes>
            </div>

        </div>
    )
}

export default Main