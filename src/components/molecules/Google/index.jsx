import React from "react";
import axios from "axios";
import GoogleLogin from "react-google-login";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useAuthStore from "../../../hooks/auth/useAuthStore";
import { API_URL } from "../../../utils/constant";
import { authUser } from "../../../redux/actions/auth";
import { createToast } from "../../../utils/createToast";
import { LOGIN_SUCCESS } from "../../../redux/actions/types";
import { normalizeError } from "../../../utils/normalizeError";

export default function Google() {
  const { isAuthenticated } = useAuthStore();
  const dispatch = useDispatch();

  const responseSuccessGoogle = async (response) => {
    // set request config
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // set request body
    const body = JSON.stringify({ tokenId: response.tokenId });

    try {
      const res = await axios.post(
        API_URL + "/api/auth/login-with-google",
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

  const responseFailureGoogle = async (response) => {
    createToast("Login with google failure", "error");
  };

  // jika berhasil terauthentikasi, arahkan ke home
  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Login With Google"
      onSuccess={responseSuccessGoogle}
      onFailure={responseFailureGoogle}
      cookiePolicy={`single_host_origin`}
    />
  );
}
