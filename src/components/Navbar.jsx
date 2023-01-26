// import React from "react";
// import { NavLink } from "react-dom"
// import { NavLink, Route } from 'react-router-dom';
// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <>
      <section id="navbar" className="col-10 mx-auto" >
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light"> */}
        <nav className="navbar fixed-bottom navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
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
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  )
};
export default Navbar;