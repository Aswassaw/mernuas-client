import React from "react";
import axios from "axios";
import GitHubLogin from "react-github-login";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useAuthStore from "../../../hooks/auth/useAuthStore";
import { API_URL } from "../../../utils/constant";
import { authUser } from "../../../redux/actions/auth";
import { createToast } from "../../../utils/createToast";
import { LOGIN_SUCCESS } from "../../../redux/actions/types";
import { normalizeError } from "../../../utils/normalizeError";
import { FaGithub } from "react-icons/fa";

export default function Github() {
  const { isAuthenticated } = useAuthStore();
  const dispatch = useDispatch();

  const responseSuccessGithub = async (response) => {
    console.log(response);
  };

  const responseFailureGithub = async (response) => {
    console.log(response);
  };

  // jika berhasil terauthentikasi, arahkan ke home
  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="btn-social-login">
      <FaGithub />
      <GitHubLogin
        clientId="c6bda755860672fc7f6f"
        redirectUri=""
        className="btn-login-reset"
        buttonText="Login With Github"
        onSuccess={responseSuccessGithub}
        onFailure={responseFailureGithub}
      />
    </div>
  );
}
