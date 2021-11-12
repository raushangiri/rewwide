import React from 'react'
import './password.css';
import logo from '../Images/logo.png'
import Frontimage from '../Images/image53.webp'



function Forgotpassword() {
    return (
        <>
            <section className="login py-5 bg-light">
                <div className="container">
                    <div className="row g-0" id="row1">
                        <div className="img col-lg-6">
                            <img src={Frontimage} className="img-fluid img" alt="..." />
                        </div>
                        <div className="col-lg-6">
                            <img src={logo} className="img2 img-fluid mb-2" alt="..." />

                            <h4 className="mb-0 my-3 mx-5 text-secondary">Enter email to receive password reset instructions</h4>
                            <h3 className="mb-0 mx-5 mt-2">Forgot Password</h3>
                            <form>
                                <div className="form-row py-3 pt-4">
                                    <div className="offset-1 col-lg-10">
                                        <label for="email">Your Email</label>
                                        <br />
                                        <input type="email" placeholder="Enter email address" name="email" required />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="offset-1 col-lg-10">
                                        <button className="btn1 mt-4 px-3">Reset Password</button>
                                    </div>
                                </div>
                                <div className="form-row mx-4">
                                    <div className="offset-1 col-lg-10">
                                        <p> Remember it? <a href="#">Sign in</a></p>
                                    </div>
                                </div>
                            </form>

                        </div>


                    </div>
                </div>
            </section>


        </>
    )
}

export default Forgotpassword
