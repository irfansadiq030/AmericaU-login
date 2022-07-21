import React, { Fragment } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../Shared/Spinner/Spinner'
import { Field, Formik, ErrorMessage } from 'formik'
import * as yup from "yup"

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = async ({ username, password }, actions) => {
        try {

            console.log("yes")

            const formData = new FormData();
            formData.append('cmd', 'WoogiOAuth.signInMod');
            formData.append('name', username.trim());
            formData.append('password', password.trim());

            let result = await axios.post(
                "https://portal.americau.com/woogi/0.1/actor/cgi.php",
                formData
            );

            if (result.data.code == 200) {
                return window.location.href = "https://portal.americau.com/index"
            }

            if (result.data.code !== 200) {
                // navigate('/messageviewer');
                navigate('/messageviewer', { state: { msg: result.data.msg } });
            }

        } catch (error) {
            window.alert(error.message)
        }
    }

    const init = {
        username: "",
        password: ""
    }

    const validation = yup.object({
        username: yup.string().required().label("Username"),
        password: yup.string().min(6).required().label("Password")
    })

    return (
        <>
            <div className="forgot-password-container mx-auto flex flex-col">

                {/* Heading */}
                <div className="heading-container flex justify-center items-center">
                    <h1 className='reset-form-heading uppercase'>Sign In</h1>
                </div>

                {/* Box Content Container */}
                <main className='login-main flex-col flex items-center justify-center'>
                    <Formik validationSchema={validation} initialValues={init} onSubmit={handleSubmit} >
                        {({ errors, isSubmitting, handleSubmit }) => {
                            return <div className='w-full login-form'>
                                <div className='mb-2'>
                                    <Field name="username" type="text" placeholder="Username" className="w-full input-field" />
                                    {errors.username && <p className='text-red-600 '>{errors.username}</p>}
                                </div>

                                <div className='mb-2'>
                                    <Field name="password" type='password' placeholder="Password" className="w-full input-field" />
                                    {errors.password && <p className='text-red-600 '>{errors.password}</p>}
                                </div>

                                <div className="mb-2">
                                    <button onClick={handleSubmit} className='btn-americau green-btn w-full uppercase' disabled={isSubmitting}>{isSubmitting ? <Spinner /> : "Login"}</button>
                                </div>
                            </div>
                        }}
                    </Formik>

                    {/*  <div className="forgot-pwd-container uppercase flex justify-end w-full">
                    <Link to="/resetpassword" className='forgot-pwd-txt'>Forgot Password?</Link> 
                    </div>*/}
                    <div className='flex flex-col items-center'>
                        <p className='or-text' >OR</p>
                        <a href='https://api.americau.com/login/classlink' className="uppercase login-class-btn">Login with classLink</a>

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