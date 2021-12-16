import './Login.css';
import React from "react";
import { Link } from "react-router-dom";
import FloatingInput from "../../components/atoms/FloatingInput";
import AuthBanner from "../../components/molecules/AuthBanner";

export default function Login() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <AuthBanner
          title='Bergabunglah Dengan Kami'
          textLink='Create Account'
          href='/register'
        />
        <div className='col my-4'>
          <div className='d-flex align-items-center'>
            <Link to='/' className='me-auto text-decoration-none fs-4'>
              Mernuas
            </Link>
            <Link to='/register' className='btn btn-outline-primary super-mini-hide'>
              Create Account
            </Link>
          </div>
          <div className='card mt-5 mx-auto' style={{maxWidth: "450px"}}>
            <div className='card-body'>
              <h1 className='fs-3'>Login <span className="mini-hide">to your account</span></h1>
              <hr />
              <form className='mt-4'>
                <FloatingInput label='Email' type='text' name='email' />
                <FloatingInput
                  label='Password'
                  type='password'
                  name='password'
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
