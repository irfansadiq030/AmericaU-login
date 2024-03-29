import React, { useRef } from 'react'
import './SignUpComingSoon.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const SignUpComingSoon = () => {
    const emailField = useRef(null);
    const navigate = useNavigate()

    const handleSubmit = async () => {

        const value = emailField.current?.value?.trim()

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {

            const formData = new FormData();
            formData.append('cmd', 'acl_User.setSignUpEmail');
            formData.append('email', value);

            try {
                const { data } = await axios.post("./woogi/0.1/actor/cgi.php", formData);
                if (data == 200) {
                    navigate("/thankyou");
                } else
                    navigate("/messageviewer", { msg: "We are sorry, there is some problem" })

            } catch (error) {
                window.alert(error.message)
            }
        } else {
            window.alert("Please enter valid email address")
        }
    }
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
                    <div className='w-full login-form flex justify-between flex-col'>
                        <div>
                            <h1 className="info-text">
                                Enter your Email to be notified when sign ups are open to be public
                            </h1>
                        </div>
                        <div className="">
                            <input ref={emailField} name="email" type="text" placeholder="Email Address" className="w-full input-field mb-2" />
                        </div>

                        <div className="">
                            <button onClick={handleSubmit} className='btn-americau green-btn w-full uppercase'>Confirm</button>
                        </div>
                    </div>

                </main>
            </div>
        </>
    )
}

export default SignUpComingSoon