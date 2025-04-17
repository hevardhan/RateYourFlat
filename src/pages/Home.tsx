// import React from 'react'
import Spline from '@splinetool/react-spline';
import './css/spline.css'
import { useNavigate } from 'react-router-dom';




const HomeSpline = () => {
  const navigate = useNavigate();
  return (
    <div className="spline-container">
    <nav className="navbar navbar-expand-md navbar-dark px-10">
      <div className="container-fluid">
        <a className="navbar-brand fs-1" href="#">CareerAlly</a>

        {/* Offcanvas Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Offcanvas Menu */}
        <div
          className="offcanvas offcanvas-end bg-dark"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">
              CareerAlly
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body ms-md-auto">
            <div className="navbar-nav gap-md-5">
              <a className="nav-link active text-white" href="/">Home</a>
              <a className="nav-link text-white" href="/about">About</a>
              <a className="nav-link text-white" href="/download">Download</a>
              <a className="nav-link text-white" href="/contact">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </nav>

      <Spline scene="https://prod.spline.design/ZLVq4hZEXvP-KpnU/scene.splinecode" />

      <div className="centered-text ps-4 ps-md-5">
        <p className='display-1 text-white'>
          Your Pathway <br></br> To Success
        </p>
        <div className='text-white d-flex gap-4'>
          <div className='spline-button text-center' onClick={() => navigate('/login')}>
            Get Started 👉
          </div>
          <div className='spline-button text-center' onClick={() => window.location.href = 'https://zennai99.b2clogin.com/zennai99.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_B2C_login&client_id=f5ced012-f62b-4328-8d73-94b24f706c35&nonce=defaultNonce&redirect_uri=https%3A%2F%2Frate-your-flat-rose.vercel.app%2F&scope=openid&response_type=code&prompt=login'}>
          {/* <div className='spline-button text-center' onClick={() => navigate('/login')}> */}
            Login
          </div>
        </div>
      </div>
    </div>
  );
};


export default HomeSpline