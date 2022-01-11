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
    // set request config
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // set request body
    const body = JSON.stringify({ tokenId: response.code });

    try {
      const res = await axios.post(
        API_URL + "/api/auth/login-with-github",
        body,
        config
      );

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.token,
      });
      dispatch(authUser());
    } catch (error) {
      console.error(error);

      if (error.response) {
        createToast(normalizeError(error.response.data).other, "error");
      } else {
        createToast(error.message, "error");
      }
    }
  };

  const responseFailureGithub = async (response) => {
    createToast("Login with github failure", "error");
  };

  // jika berhasil terauthentikasi, arahkan ke home
  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="btn-social-login">
      <FaGithub />
      <GitHubLogin
        clientId={process.env.REACT_APP_GITHUB_CLIENT_ID}
        redirectUri=""
        className="btn-login-reset"
        buttonText="Login With Github"
        onSuccess={responseSuccessGithub}
        onFailure={responseFailureGithub}
      />
    </div>
  );
}
