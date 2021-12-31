import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import GoogleLogin from "react-google-login";
import { API_URL } from "../../../utils/constant";
import { createToast } from "../../../utils/createToast";
import { LOGIN_SUCCESS } from "../../../redux/actions/types";

export default function Google() {
  const dispatch = useDispatch();

  const responseGoogle = async (response) => {
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
    } catch (error) {
      console.error(error);

      if (error.response) {
        createToast(
          "Something error, please use another way to login.",
          "error"
        );
      }
    }
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Login With Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={`single_host_origin`}
    />
  );
}
