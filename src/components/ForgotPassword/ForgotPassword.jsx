import React from 'react'
import './ForgotPassword.css'
import { Link,useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
    return (
        <>

            <div className="forgot-password-container mx-auto flex justify-center flex-col items-center">
                <Link to="/" className="back-button">
                    <img src="images/icon-back.png" alt="" srcset="" />
                </Link>

                {/* Form */}
                <h1 className='reset-form-heading uppercase'>Reset Password</h1>
                <form action="/" className='w-full'>
                    <div className="field-container mb-5">
                        <input type="text" autocomplete="off" name="Username" placeholder="Username" class="w-full input-field" />
                    </div>
                    <a href='/'> <div class="btn-americau green-btn mt-5 w-full uppercase">Reset</div></a>
                </form>
                <div className="forgot-links-container links-container flex justify-between w-full mb-3 items-end">
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

export default ForgotPassword