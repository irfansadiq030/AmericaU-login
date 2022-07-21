import React from 'react'
import './ForgotPassword.css'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    return (
        <>
            <div className="forgot-password-container mx-auto flex flex-col">
                {/* Back Button */}
                <Link to="/" className="back-button">
                    <img src="images/icon-back.png" alt="" srcset="" />
                </Link>
                {/* Heading */}
                <div className="heading-container flex justify-center items-center">
                    <h1 className='reset-form-heading uppercase'>Reset Password</h1>
                </div>

                {/* Box Content Container */}
                <main className='login-main flex-col flex items-center justify-center'>
                    <form action="/" className='w-full reset-form login-form flex justify-between flex-col'>
                        <div className="">
                            <input name="Username" type="text" placeholder="Username" className="w-full input-field" />
                        </div>
                        <div className="">
                            <button className='btn-americau green-btn w-full uppercase'>Reset</button>
                        </div>
                    </form>

                </main>

                {/* Footer Container */}
                <div className="bottom-container flex justify-between items-end">
                    <a href='https://heroesleaguegameday.com/'> <h1 className="learn-more-heading uppercase">Learn More</h1> </a>
                    <div className="flex flex-col items-center">
                        <p className='dont-have-account uppercase'>Don't have an account?</p>
                        <a href="/"><h1 className="signup-text uppercase">Sign Up</h1></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword