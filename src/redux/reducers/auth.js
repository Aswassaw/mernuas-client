import {
  AUTH_SUCCESS,
  AUTH_FAILED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  isAuthenticated: false,
  authIsReady: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload = null } = action;

  switch (type) {
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
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload);
      return {
        ...state,
        token: payload,
        authIsReady: false,
      };
    case LOGIN_FAILED:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        authIsReady: false,
      };
    // case LOGOUT:
    //   localStorage.removeItem("token");
    //   return {
    //     token: null,
    //     user: null,
    //     errors: null,
    //     isAuthenticate: false,
    //   };
    default:
      return state;
  }
};

export default authReducer;
