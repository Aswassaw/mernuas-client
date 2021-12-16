import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

// pages & components
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Navbar from "./components/organisms/Navbar";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {/* public routes */}
            <Route
              path='/'
              element={
                <>
                  <Navbar />
                  <Landing />
                </>
              }
            />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

            {/* private routes */}
            <Route
              path='/home'
              element={
                <>
                  <Navbar />
                  <Home />
                </>
              }
            />

            {/* 404 routes */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
