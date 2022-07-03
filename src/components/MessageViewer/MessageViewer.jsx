import React from 'react'
import './MessageViewer.css'
import { Link } from 'react-router-dom'

const ForgotPassword = (props) => {
    console.log(props.message)
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
                <main className='main flex-col flex items-center justify-center'>
                    <h1 className='message'>{props.message}</h1>
                    {
                        props.is_link && props.is_link === true ? 
                        <Link className='return-link uppercase' to="/">Return to Login</Link>
                        :
                        ''
                    }
                    
                </main>

                {/* Footer Container */}
                <div className="bottom-container flex justify-between items-end">
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