import dotenv from "dotenv";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

dotenv.config();

const initialState = {};
const middleWare = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(...middleWare))
    : applyMiddleware(...middleWare)
);

export default store;
