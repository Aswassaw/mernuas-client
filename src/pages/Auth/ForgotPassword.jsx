import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../utils/constant";
import { createToast } from "../../utils/createToast";
import { normalizeError } from "../../utils/normalizeError";

// components & other assets
import Logo from "../../components/atoms/Logo";
import FloatingInput from "../../components/atoms/FloatingInput";

export default function ForgotPassword() {
  const [isPending, setIsPending] = useState(false);
  const { token } = useParams();
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsPending(true);

    // set request config
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // set request body
    const body = JSON.stringify({ token, email: formData.email });

    try {
      const res = await axios.post(
        API_URL + "/api/auth/forgot-password",
        body,
        config
      );

      createToast(res.data.msg, "success");
      setIsPending(false);
    } catch (error) {
      console.error(error);

      if (error.response) {
        createToast(normalizeError(error.response.data).other, "error");
      } else {
        createToast(error.message, "error");
      }
      setIsPending(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              <h1 className="fs-3">Enter your email</h1>
              <hr />
              <form onSubmit={handleSubmit}>
                <FloatingInput
                  label="Email"
                  type="text"
                  name="email"
                  value={formData.email}
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