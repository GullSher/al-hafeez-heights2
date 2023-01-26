import React from "react";
// import Glyphicon from 'react-bootstrap/lib/Glyphicon';


const Navbar1 = () => {
    return (
        <>
            <section id="navbar1" className="col-10 mx-auto" >
                {/* <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary"> */}
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-success">
                    {/* <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary"> */}
                    <div className="container-fluid">

                        <a className="navbar-brand" href="/">Navbar1</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="/services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                            </ul>
                            <ul class="nav navbar-nav navbar-right">
                                {/* <li><a href="/" style={{color: 'white'}}><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>&nbsp;&nbsp;&nbsp; */}

                                <li><a href="/" style={{ color: 'white' }}>

                                    <i className="fa fa-user-circle-o" style={{ fontSize: '20px', color: 'red' }}  ></i>

                                    {/* <span className="glyphicon glyphicon-user"></span> */}

                                    Sign Up</a></li>&nbsp;&nbsp;&nbsp;


                                <li><a href="/" style={{ color: 'white' }}>
                                    {/* <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span> */}
                                    <i className="fa fa-sign-in" style={{ fontSize: '20px' }}></i> &nbsp;
                                    Login</a></li>&nbsp;&nbsp;&nbsp;

                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-primary" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
};

export default Navbar1;