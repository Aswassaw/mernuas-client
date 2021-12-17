import axios from "axios";
import {
  AUTH_SUCCESS,
  AUTH_FAILED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from "./types";
import { API_URL } from "../../utils/constant";
import setAuthToken from "../../utils/setAuthToken";

// this action will authenticate user using token on localstorage (if exist)
export const authUser = () => async (dispatch) => {
  if (localStorage.getItem("token")) {
    setAuthToken(localStorage.getItem("token"));
  }

  try {
    const res = await axios.get(API_URL + "/api/user/me");

    dispatch({
      type: AUTH_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.error(error.message);

    dispatch({
      type: AUTH_FAILED,
    });
  }
};

// this action will registering new user
export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ name, email, password });

    try {
      const res = await axios.post(
        API_URL + "/api/auth/register",
        body,
        config
      );

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.token,
      });
      dispatch(authUser());
    } catch (error) {
      console.error(error.message);

      dispatch({
        type: LOGIN_FAILED,
        payload: error.response.data,
      });
      dispatch(authUser());
    }
  };
