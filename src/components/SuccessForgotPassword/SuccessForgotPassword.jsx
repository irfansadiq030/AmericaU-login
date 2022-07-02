import React from 'react'
import { Link } from 'react-router-dom'

const SuccessForgotPassword = () => {
  return (
    <>
      <div className="success-forgot-password-container mx-auto flex justify-center flex-col items-center">
        <Link to="/" className="back-button">
          <img src="images/icon-back.png" alt="" srcset="" />
        </Link>

        {/* Form */}
        <h1 className='reset-form-heading uppercase'>Reset Password</h1>
        <div className="message-container">
          <h1>You have successfully changed your password!</h1>
          <Link path="/login">Return to Login</Link>
        </div>
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

export default SuccessForgotPassword