import React from 'react'
import logo from '../Images/logo.png'
import './profile.css';

function Profile(Props) {
    return (
        <>
            <section className="login py-5 bg-light">
                <div className="container">
                    <div className="row g-0" id="row1">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <div class="container-fluid">
                                <img src={logo} className="img3 img-fluid mb-1 mx-4" alt="..." />
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#"></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#"></a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link disabled"></a>
                                        </li>
                                    </ul>

                                    <form class="d-flex">
                                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button class="btn btn-outline-success" type="submit">Search</button>
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Admin
                                                </a>
                                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                                    <li><hr class="dropdown-divider" /></li>
                                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </form>
                                </div>

                            </div>

                        </nav>
                        <div className="row">
                            <div className="col-3 border border-dark bord">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li><a class="dropdown-item" href="#">Dashbord</a></li>
                                    <li><a class="dropdown-item" href="#">Caregory</a></li>
                                    <li><a class="dropdown-item" href="#">Products</a></li>
                                    <li><a class="dropdown-item" href="#">Revenue</a></li>
                                    <li><a class="dropdown-item" href="#">Sales</a></li>
                                    <li><a class="dropdown-item" href="#">Wallet</a></li>
                                    <li><a class="dropdown-item" href="#">Transaction</a></li>
                                    <li><a class="dropdown-item" href="#">Top Clients</a></li>
                                    <li><a class="dropdown-item" href="#">Shopping</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile
