import {
  AUTH_SUCCESS,
  AUTH_FAILED,
  SET_LOADING,
  CLEAN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
} from "../actions/types";

const normalizeError = (payload) => {
  let errors = {};

  payload.errors.forEach((error) => {
    // jika error berasal dari body
    if (error.param) {
      errors[error.param] = error.msg;
    }

    // jika error berasal dari hal lain
    else {
      errors["other"] = error.msg;
    }
  });

  return errors;
};

const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  errors: null,
  isAuthenticated: false,
  authIsReady: false,
  loading: false,
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
        isAuthenticated: false,
        authIsReady: true,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAN_ERROR:
      return {
        ...state,
        errors: null,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload);
      return {
        ...state,
        token: payload,
        loading: false,
      };
    case LOGIN_FAILED:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        errors: normalizeError(payload),
        loading: false,
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
