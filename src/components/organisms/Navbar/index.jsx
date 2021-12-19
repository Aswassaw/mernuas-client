import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import useAuthStore from "../../../hooks/auth/useAuthStore";

// components & other assets
import ToggleMenu from "./ToggleMenu";
import Menu from "./Menu";
import ProfileMenu from "./ProfileMenu";

export default function Navbar() {
  const { user, isAuthenticated } = useAuthStore();
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <nav
      className='navbar navbar-expand-lg navbar-dark'
      style={{ backgroundColor: "#371691" }}
    >
      <div className='container-md'>
        <Link className='navbar-brand' to='/'>
          Mernuas
        </Link>
        <ToggleMenu />
        <div className='collapse navbar-collapse' id='navbarNav'>
          {/* if authenticated */}
          {isAuthenticated && (
            <>
              <ul className='navbar-nav'>
                <Menu title='Home' href='/home' isActive={location.pathname === "/home"} />
                <Menu title='Posts' href='/posts' isActive={location.pathname === "/posts"} />
              </ul>
              <ul className='navbar-nav ms-auto'>
                <ProfileMenu user={user} dispatch={dispatch} />
              </ul>
            </>
          )}

          {/* if not authenticated */}
          {!isAuthenticated && (
            <>
              <ul className='navbar-nav ms-auto'>
                <Menu title='Login' href='/login' />
                <Menu title='Create Account' href='/register' />
              </ul>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
