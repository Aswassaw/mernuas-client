import React from "react";
import { Link } from "react-router-dom";
import FloatingInput from "../../components/atoms/FloatingInput";
import AuthBanner from "../../components/molecules/AuthBanner";
import registerBg from "./register.webp";

export default function Register() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <AuthBanner
          title='Saya ingin masuk ke akun saya.'
          textLink='Login'
          href='/login'
          bannerBg={registerBg}
        />
        <div className='col my-4'>
          <div className='d-flex align-items-center'>
            <Link to='/' className='me-auto text-decoration-none fs-4'>
              Mernuas
            </Link>
            <Link
              to='/login'
              className='btn btn-outline-primary super-mini-hide'
            >
              Login
            </Link>
          </div>
          <div className='card mt-5 mx-auto' style={{ maxWidth: "450px" }}>
            <div className='card-body'>
              <h1 className='fs-3'>
                <span className='mini-show d-none'>Register</span>
                <span className='mini-hide'>Create new account</span>
              </h1>
              <hr />
              <form className='mt-4'>
                <FloatingInput label='Username' type='text' name='username' />
                <FloatingInput label='Email' type='text' name='email' />
                <FloatingInput
                  label='Password'
                  type='password'
                  name='password'
                />
                <FloatingInput
                  label='Repeat Password'
                  type='passwordConfirm'
                  name='passwordConfirm'
                />
                <button className='btn btn-primary'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
