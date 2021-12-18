import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "./redux/actions/auth";
import { HashLoader } from "react-spinners";

// pages & components
import Auth from "./middlewares/Auth"; // middleware component
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Navbar from "./components/organisms/Navbar";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  const { isAuthenticated, authIsReady } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authUser());
  }, [dispatch]);

  return (
    <>
      {/* jika proses authentikasi belum selesai */}
      {!authIsReady && (
        <div className="loading">
          <HashLoader color='#371691' size={100} loading={!authIsReady} />
        </div>
      )}

      {/* jika proses authentication telah selesai */}
      {authIsReady && (
        <BrowserRouter>
          <Routes>
            {/* public routes */}
            <Route
              path='/'
              element={
                <Auth isAuthenticated={isAuthenticated}>
                  <Navbar />
                  <Landing />
                </Auth>
              }
            />
            <Route
              path='/login'
              element={
                <Auth isAuthenticated={isAuthenticated}>
                  <Login />
                </Auth>
              }
            />
            <Route
              path='/register'
              element={
                <Auth isAuthenticated={isAuthenticated}>
                  <Register />
                </Auth>
              }
            />

            {/* private routes */}
            <Route
              path='/home'
              element={
                <Auth isAuthenticated={isAuthenticated} protect>
                  <Navbar />
                  <Home />
                </Auth>
              }
            />

            {/* 404 routes */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}
