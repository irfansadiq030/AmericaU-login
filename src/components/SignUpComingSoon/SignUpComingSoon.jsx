import React from 'react'
import './SignUpComingSoon.css'
import { Link } from 'react-router-dom'

const SignUpComingSoon = () => {
    return (
        <>
            <div className="forgot-password-container sign-up-comingsoon-container mx-auto flex flex-col">
                {/* Back Button */}
                <Link to="/" className="back-button">
                    <img src="images/icon-back.png" alt="" srcset="" />
                </Link>
                {/* Heading */}
                <div className="sign-up-comingsoon-heading-container mx-auto flex justify-center items-center">
                    <h1 className='text-center reset-form-heading uppercase signup-coming-soon-heading'>Open Sign Ups  Coming soon!</h1>
                </div>

                {/* Box Content Container */}
                <main className='signup-comingsoon-main flex-col flex items-center justify-center'>
                    <form action="/" className='w-full login-form flex justify-between flex-col'>
                        <div>
                            <h1 className="info-text">
                                Enter your Email to be notified when sign ups are open to be public
                            </h1>
                        </div>
                        <div className="">
                            <input name="email" type="text" placeholder="Email Address" class="w-full input-field mb-2" />
                        </div>

                        <div className="">
                            <button className='btn-americau green-btn w-full uppercase'>Confirm</button>
                        </div>
                    </form>

                </main>
            </div>
        </>
    )
}

export default SignUpComingSoon