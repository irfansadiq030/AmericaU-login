import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className="forgot-password-container mx-auto flex flex-col">
        
                {/* Heading */}
                <div className="heading-container flex justify-center items-center">
                    <h1 className='reset-form-heading uppercase'>Sign In</h1>
                </div>

                {/* Box Content Container */}
                <main className='login-main flex-col flex items-center justify-center'>
                    <form action="/" className='w-full login-form flex justify-between flex-col'>
                        <div className="">
                            <input name="Username" type="text" placeholder="Username" class="w-full input-field" />
                        </div>
                        <div className="">
                            <input type='password' name="password" placeholder="Password" class="w-full input-field" />
                        </div>
                        <div className="">
                            <button className='btn-americau green-btn w-full uppercase'>Login</button>
                        </div>
                    </form>
                    <div className="forgot-pwd-container uppercase flex justify-end w-full">
                        <Link to="/resetpassword" className='forgot-pwd-txt'>Forgot Password?</Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Link className='or-text' to="/messageviewer" >OR</Link>
                        <Link to="/" className="uppercase login-class-btn">Login with classLink</Link>

                        {/* this Text will be display only on Tablet and Mobile screen */}
                        <Link to="/resetpassword" className='forgot-pwd-txt2'>Forgot Password?</Link>
                    </div>
                </main>

                {/* Footer Container */}
                <div className="bottom-container flex justify-between items-end">
                <Link to="/forgotpassword"> <h1 className="learn-more-heading uppercase">Learn More</h1> </Link>
                    <div className="flex flex-col items-center">
                        <p className='dont-have-account uppercase'>Don't have an account?</p>
                        <a href="/"><h1 className="signup-text uppercase">Sign Up</h1></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login