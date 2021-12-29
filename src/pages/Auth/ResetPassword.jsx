import React, { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";

// components & other assets
import Logo from "../../components/atoms/Logo";
import PasswordInput from "../../components/atoms/PasswordInput";
import useReset from "../../hooks/auth/useReset";

export default function ResetPassword() {
  const { reset, errors, isPending, finished } = useReset();
  const { token } = useParams();
  const [formData, setFormData] = useState({
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    reset({token, password: formData.password});
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // jika reset password berhasil, arahkan ke login
  if (finished) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col my-4">
          <div className="d-flex align-items-center">
            <Link to="/" className="me-auto text-decoration-none fs-5">
              <Logo color="#4285F4" />
              <span className="ms-2">Mernuas</span>
            </Link>
            <Link
              to="/login"
              className="btn btn-outline-primary super-mini-hide me-2"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn btn-outline-primary screen-425-hide"
            >
              Create Account
            </Link>
          </div>
          <div className="card mt-5 mx-auto" style={{ maxWidth: "550px" }}>
            <div className="card-body">
              <h1 className="fs-3">Input new password</h1>
              <hr />
              <form onSubmit={handleSubmit}>
                {errors && (
                  <>
                    {errors.other && (
                      <div className="alert alert-danger">{errors.other}</div>
                    )}
                  </>
                )}
                <PasswordInput
                  label="Password"
                  name="password"
                  error={errors && errors.password}
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <div>
                  {!isPending && (
                    <button className="btn btn-primary">Submit</button>
                  )}
                  {isPending && (
                    <button className="btn btn-primary" type="button" disabled>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>{" "}
                      Loading...
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
