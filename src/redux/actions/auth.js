import axios from "axios";
import {
  AUTH_SUCCESS,
  AUTH_FAILED,
} from "./types";
import { API_URL } from "../../utils/constant";
import setAuthToken from "../../utils/setAuthToken";

// this actions will authenticate user using token on localstorage (if exist)
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