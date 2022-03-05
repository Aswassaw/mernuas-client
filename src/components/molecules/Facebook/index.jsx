import React from "react";
import axios from "axios";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useAuthStore from "../../../hooks/auth/useAuthStore";
import { API_URL } from "../../../utils/constant";
import { authUser } from "../../../redux/actions/auth";
import { createToast } from "../../../utils/createToast";
import { LOGIN_SUCCESS } from "../../../redux/actions/types";
import { normalizeError } from "../../../utils/normalizeError";
import { FaFacebook } from "react-icons/fa";

export default function Facebook() {
  const { isAuthenticated } = useAuthStore();
  const dispatch = useDispatch();

  const responseSuccessFacebook = async (response) => {
    // set request config
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // set request body
    const body = JSON.stringify({ accessToken: response.accessToken, userID: response.userID });

    try {
      const res = await axios.post(
        API_URL + "/api/auth/login-with-facebook",
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

  // jika berhasil terauthentikasi, arahkan ke home
  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="btn-social-login">
      <FaFacebook />
      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
        callback={responseSuccessFacebook}
        disableMobileRedirect={true}
        render={(renderProps) => (
          <button className="btn-login-reset" onClick={renderProps.onClick}>
            Login With Facebook
          </button>
        )}
      />
    </div>
  );
}
