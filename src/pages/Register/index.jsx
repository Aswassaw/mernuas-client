import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/auth";
import { CLEAN_ERROR, SET_LOADING } from "../../redux/actions/types";

// components & other assets
import AuthBanner from "../../components/molecules/AuthBanner";
import FloatingInput from "../../components/atoms/FloatingInput";
import registerBg from "./register.webp";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { errors, isAuthenticated, loading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // clean error when component loaded
    dispatch({
      type: CLEAN_ERROR,
    });
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // setloading
    const { name, email, password } = formData;
    dispatch({
      type: SET_LOADING,
    });
    // clean error
    dispatch({
      type: CLEAN_ERROR,
    });
    // registering new user
    dispatch(register({ name, email, password }));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // jika berhasil terauthentikasi, arahkan ke home
  if (isAuthenticated) {
    return <Navigate to='/home' />;
  }

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
              <form className='mt-4' onSubmit={handleSubmit}>
                <FloatingInput
                  label='Full Name'
                  type='text'
                  name='name'
                  error={errors !== null && errors.name}
                  value={formData.name}
                  onChange={handleChange}
                  maxLength='50'
                  required
                />
                <FloatingInput
                  label='Email'
                  type='email'
                  name='email'
                  error={errors !== null && errors.email}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <FloatingInput
                  label='Password'
                  type='password'
                  name='password'
                  error={errors !== null && errors.password}
                  value={formData.password}
                  onChange={handleChange}
                  minLength='8'
                  maxLength='100'
                  required
                />
                {!loading && (
                  <button className='btn btn-primary'>Submit</button>
                )}
                {loading && (
                  <button class='btn btn-primary' type='button' disabled>
                    <span
                      class='spinner-border spinner-border-sm'
                      role='status'
                      aria-hidden='true'
                    ></span>{" "}
                    Loading...
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
