import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
// import '../../fonts/BradBunR.ttf';

const Login = () => {
    return (
        <div className='login-container row mx-auto flex justify-center items-center flex-col'>
            <h1 className='form-heading uppercase'>Sign In</h1>
            <form action="/" className='w-full'>
                <div className="field-container mb-5">
                    <input name="Username" type="text" placeholder="Username" class="w-full input-field" />
                </div>
                <div className="field-container">
                    <input type={'password'} name="password" placeholder="Password" class="w-full input-field" />
                </div>
                <div className="login-btn-au">
                    <a className='' href='/'> <div class="btn-americau green-btn mt-5 w-full uppercase">Login</div></a>
                </div>
            </form>
            <div className="mt-3 uppercase flex justify-end forgot-pwd-container w-full">
                <Link to="/forgotpassword" className='forgot-pwd-txt'>Forgot Password?</Link>
            </div>
            <div className='flex flex-col items-center'>
                <a className='or-text' href='/'>OR</a>
                <a href='btn' className="uppercase login-class-btn">Login with class link</a>

                {/* this Text will be display only on Tablet and Mobile screen */}
                <Link to="/forgotpassword" className='forgot-pwd-txt2'>Forgot Password?</Link>
            </div>
            <div className="links-container flex justify-between w-full items-end">
                <Link to="/successpasswordchanged"> <h1 className="learn-more-heading uppercase">Learn More</h1> </Link>
                <div className="flex flex-col items-center">
                    <p className='dont-have-account uppercase'>Don't have an account?</p>
                    <a href="/"><h1 className="signup-text uppercase">Sign Up</h1></a>
                </div>

            </div>
        </div>
    )
}

export default Login