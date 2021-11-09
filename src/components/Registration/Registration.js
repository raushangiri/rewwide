import React from 'react'
import './Style.css';
import Frontimage from '../Images/image53.webp'
import logo from '../Images/logo.png'

function Registration() {
    return (
        <>
            <section className="login py-5 bg-light">
                <div className="container">
                    <div className="row g-0" id="row1">
                        <div className="col-lg-12">
                            <img src={logo} className="img2 img-fluid mb-1 mx-4" alt="..." />
                            <h2 className="hed mx-5 mt-2 mb-5">Register with us.</h2>
                            <form>
                                <h5 className="divider">PERSONAL INFORMATION:</h5>
                                <div class="row mx-5 my-2">
                                    <div class="col">
                                        <label>First Name</label>
                                        <br />
                                        <input type="text" placeholder="Enter first name" />
                                    </div>
                                    <div class="col">
                                        <label>Last Name</label>
                                        <br />
                                        <input type="text" placeholder="Enter last name" name="email" required />
                                    </div>
                                    <div class="col">
                                        <label for="email">Email Address</label>
                                        <br />
                                        <input type="email" placeholder="Enter email address" name="email" required />
                                    </div>
                                </div>
                                <div class="row my-2 mx-5">
                                    <div class="col">
                                        <label>password</label>
                                        <br />
                                        <input type="password" placeholder="Enter first name" />
                                    </div>
                                    <div class="col">
                                        <div className="row">
                                            <label for="phone">Enter phone number:</label>
                                            <div class="col-1">
                                                <select>
                                                    <option>+1</option>
                                                    <option>+1</option>
                                                    <option>+1</option>
                                                    <option>+1</option>
                                                </select>
                                            </div>
                                            <div class="col-9 mx-4">
                                                <input type="tel" id="phone" name="phone" placeholder="123-4545-678" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <label>Gender</label>
                                        <br />
                                        <input class="form-check-input " type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                        <label class="form-check-label mx-1" for="inlineRadio1">Male</label>

                                        <input class="form-check-input mx-1" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                        <label class="form-check-label mx-1" for="inlineRadio2">Female</label>

                                        <input class="form-check-input mx-1" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                        <label class="form-check-label mx-1" for="inlineRadio3">other</label>
                                    </div>
                                </div>
                                <h5 className="divider my-3">REGION INFORMATION:</h5>

                                <div class="row my-2 mx-5">
                                    <div class="col">
                                        <label for="email">Country</label>
                                        <br />
                                        <select className="sel">
                                            <p>Country</p>
                                            <option>select</option>
                                            <option>Country2</option>
                                            <option>Country3</option>
                                            <option>Country4</option>
                                        </select>
                                    </div>
                                    <div class="col">
                                        <label for="email">State</label>
                                        <br />
                                        <select className="sel">
                                            <option>select</option>
                                            <option>Country2</option>
                                            <option>Country3</option>
                                            <option>Country4</option>
                                        </select>
                                    </div>
                                    <div class="col">
                                        <label for="email">Zip Code</label>
                                        <br />
                                        <input type="tel" id="phone" name="phone" placeholder="Enter zip code" required />
                                    </div>
                                </div>
                                <h5 className="divider my-3">PRODUCT INFORMATION:</h5>
                                <div class="row my-2 mx-5">
                                    <div class="col">
                                        <label for="email">Category</label>
                                        <br />
                                        <select className="sel">
                                            <option>select</option>
                                            <option>Country2</option>
                                            <option>Country3</option>
                                            <option>Country4</option>
                                        </select>
                                    </div>
                                    <div class="col">
                                        <label for="email">Product</label>
                                        <br />
                                        <select className="sel">
                                            <option>select</option>
                                            <option>Country2</option>
                                            <option>Country3</option>
                                            <option>Country4</option>
                                        </select>
                                    </div>
                                    <div class="col">
                                        <label for="email">Level</label>
                                        <br />
                                        <select className="sel">
                                            <option>select</option>
                                            <option>Country2</option>
                                            <option>Country3</option>
                                            <option>Country4</option>
                                        </select>
                                    </div>
                                </div>
                                <h5 className="divider my-3">DOCUMENTS:</h5>
                                <div class="row mx-5">
                                    <div class="col">
                                        <label>PAN Number</label>
                                        <br />
                                        <input type="text" placeholder="Enter PAN Number" />
                                    </div>
                                    <div class="col">
                                        <label>GST Number</label>
                                        <br />
                                        <input type="text" placeholder="Enter GST Number" name="email" required />
                                    </div>
                                    <div class="col">
                                        <label for="email">Aadhar Number</label>
                                        <br />
                                        <input type="email" placeholder="Enter Aadhar Number" name="email" required />
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <button className="btn1 my-4" type="submit"> Create Account</button>
                                    <p className="alredy">Already have an account?<a href="#" >Login Here</a></p>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Registration
