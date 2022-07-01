import React from 'react'
import './ResetPassword.css'
import { Link } from 'react-router-dom'

const ResetPassword = () => {
    return (
        <>

            <div className="reset-password-container mx-auto flex justify-center flex-col items-center">
            <Link to="/" className="back-button">
                <img src="images/icon-back.png" alt="" srcset="" />
            </Link>

                {/* Form */}
                <h1 className='form-heading uppercase'>Reset Password</h1>
                <form action="/" className='w-full'>
                    <div className="field-container mb-5">
                        <input name="Username" placeholder="Username" class="w-full input-field" />
                    </div>
                    <div className="field-container">
                        <input type={'password'} name="password" placeholder="Password" class="w-full input-field" />
                    </div>
                    <a href='/'> <div class="btn-americau green-btn mt-5 w-full uppercase">Submit</div></a>
                </form>
                <div className="flex justify-between w-full my-5 items-end">
                    <a href="/"> <h1 className="learn-more-heading uppercase">Learn More</h1> </a>
                    <div className="flex flex-col items-center">
                        <p className='dont-have-account uppercase'>Don't have an account?</p>
                        <a href="/"><h1 className="signup-text uppercase">Sign Up</h1></a>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ResetPassword