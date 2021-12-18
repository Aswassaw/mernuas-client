import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { HashLoader } from "react-spinners";
import { authUser } from "./redux/actions/auth";

// pages & components
import Auth from "./middlewares/Auth"; // middleware component
import Navbar from "./components/organisms/Navbar";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import NotFound from "./pages/NotFound";

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
          <ToastContainer />
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
            <Route
              path='/posts'
              element={
                <Auth isAuthenticated={isAuthenticated} protect>
                  <Navbar />
                  <Posts />
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
