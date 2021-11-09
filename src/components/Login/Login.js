import React from 'react'
import './Login.css';
import Frontimage from '../Images/image53.webp'
import logo from '../Images/logo.png'
import Registration from '../Registration/Registration';
function Login() {
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

                            <h4 className="mb-0 my-3 mx-5 text-secondary">Welcome Back</h4>
                            <h3 className="mb-0 mx-5 mt-2">Sign In to your account</h3>
                            <form>
                                <div className="form-row py-3 pt-4">
                                    <div className="offset-1 col-lg-10">
                                        <input className="inp mb-2 px-3" type="text" name="email" placeholder="Enter Your user name" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="offset-1 col-lg-10">
                                        <input type="password" className="inp px-3" name="password" placeholder="Enter your password" />
                                    </div>
                                </div>
                                <div className="row mx-5 my-2">
                                    <div className="col-5"><input id="chk1" type="checkbox" name="chk" className="custom-control-input" />
                                        <label for="chk1" className="custom-control-label text-sm">Remember me</label>
                                    </div>
                                    <div className="font-weight-bold col-5 mr-2">
                                        <a href="#" className="mb-0 mx-0 text-sm font-weight-bold ">Forgot Password?</a>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="offset-1 col-lg-10">
                                        <button className="btn1 mt-4 px-3">Login</button>
                                    </div>
                                </div>
                                <div className="form-row mx-4">
                                    <div className="offset-1 col-lg-10">
                                        <p> Don’t have an account? <a href="#">Register Now!</a></p>
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

export default Login
