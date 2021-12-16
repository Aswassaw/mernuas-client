import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  AUTH_SUCCESS,
  AUTH_FAILED,
  LOGOUT,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  errors: null,
  isAuthenticate: false,
  authIsReady: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload);
      return {
        ...state,
        token: payload,
        isAuthenticate: false,
      };
    case LOGIN_FAILED:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticate: false,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        authIsReady: true,
      };
    case AUTH_FAILED:
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        authIsReady: true,
      };
    case LOGOUT:
      return {
        token: localStorage.getItem("token"),
        user: null,
        errors: null,
        isAuthenticate: false,
        authIsReady: false,
      };
    default:
      return state;
  }
};

export default authReducer;
