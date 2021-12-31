import React from "react";
import axios from "axios";
import GoogleLogin from "react-google-login";
import useAuthStore from "../../../hooks/auth/useAuthStore";
import { API_URL } from "../../../utils/constant";
import { createToast } from "../../../utils/createToast";

export default function Google() {
  const responseGoogle = async (response) => {
    console.log(response);
    // // set request config
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    // // set request body
    // const body = JSON.stringify({ tokenId: Response.tokenId });

    // try {
    //   const res = await axios.post(
    //     API_URL + "/api/auth/login-with-google",
    //     body,
    //     config
    //   );

    //   createToast(res.data.msg, "success");
    // } catch (error) {
    //   console.error(error);

    //   if (error.response) {
    //     createToast("Something error, please use another way to login.");
    //   }
    // }
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
