import "./Login.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-7 p-0'>
          <div className='banner'>
            <div className='d-flex flex-column w-100 h-100 justify-content-center align-items-center'>
              <h1 className='text-center fw-bold title'>
                Bergabunglah Bersama Kami
              </h1>
              <Link className='btn btn-lg text-light px-4 mt-1' to='/register'>
                Create Account
              </Link>
            </div>
          </div>
        </div>
        <div className='col my-4'>
          <div className='card'>
            <div className='card-body'>
              <h1>Login</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
