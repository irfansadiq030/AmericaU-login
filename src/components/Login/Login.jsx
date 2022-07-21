import React from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const Login = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const formData = new FormData();
    formData.append('cmd', 'WoogiOAuth.signInMod');
    formData.append('name', userName.trim());
    formData.append('password', password.trim());

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            let result = await axios.post(
                "https://portal.americau.com/woogi/0.1/actor/cgi.php",
                formData
            )

            if (result.data.code !== 200) {
                // navigate('/messageviewer');
                navigate('/messageviewer', { state: { msg: result.data.msg } });
            }

        } catch (error) {
            console.log(error)
        }
    }

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
                            <input onChange={(e) => setUserName(e.target.value)} value={userName} name="username" type="text" placeholder="Username" class="w-full input-field" />
                        </div>
                        <div className="">
                            <input onChange={(e) => setPassword(e.target.value)} value={password} name="password" type='password' placeholder="Password" class="w-full input-field" />
                        </div>
                        <div className="">
                            <button onClick={(event) => handleSubmit(event)} className='btn-americau green-btn w-full uppercase'>Login</button>
                        </div>
                    </form>
                    <div className="forgot-pwd-container uppercase flex justify-end w-full">
                        {/* <Link to="/resetpassword" className='forgot-pwd-txt'>Forgot Password?</Link> */}
                    </div>
                    <div className='flex flex-col items-center mt-10'>
                        <Link className='or-text' to="/messageviewer" >OR</Link>
                        <Link to="/" className="uppercase login-class-btn">Login with classLink</Link>

                        {/* this Text will be display only on Tablet and Mobile screen */}
                        {/* <Link to="/resetpassword" className='forgot-pwd-txt2'>Forgot Password?</Link> */}
                    </div>
                </main>

                {/* Footer Container */}
                <div className="bottom-container flex justify-between items-end">
                    <a href='https://heroesleaguegameday.com/'> <h1 className="learn-more-heading uppercase">Learn More</h1> </a>
                    <div className="flex flex-col items-center">
                        <p className='dont-have-account uppercase'>Don't have an account?</p>
                        <Link to="/signupcomingsoon"><h1 className="signup-text uppercase">Sign Up</h1></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login