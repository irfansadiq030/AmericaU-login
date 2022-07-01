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
                <a href='/'> <div class="btn-americau green-btn mt-5 w-full uppercase">Login</div></a>
            </form>
            <div className="mt-3 uppercase flex justify-end forgot-pwd-container w-full">
                <div className='flex flex-col items-center'>
                    <a className='' href='/'>OR</a>
                    <a href='btn' className="uppercase login-class-btn">Login with class link</a>
                </div>
                <Link to="/resetpassword" className='forgot-pwd-txt'>Forgot Password</Link>
            </div>

            <div className="flex justify-between w-full mb-3 items-end">
                <a href="/"> <h1 className="learn-more-heading uppercase">Learn More</h1> </a>
                <div className="flex flex-col items-center">
                    <p className='dont-have-account uppercase'>Don't have an account?</p>
                    <a href="/"><h1 className="signup-text uppercase">Sign Up</h1></a>
                </div>

            </div>
        </div>
    )
}

export default Login