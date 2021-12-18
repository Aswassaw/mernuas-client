import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import useAuthStore from "../../../hooks/auth/useAuthStore";

// components & other assets
import ToggleMenu from "./ToggleMenu";
import Menu from "./Menu";
import ProfileMenu from "./ProfileMenu";

export default function Navbar() {
  const { isAuthenticated } = useAuthStore();
  const dispatch = useDispatch();

  return (
    <nav
      className='navbar navbar-expand-lg navbar-dark'
      style={{ backgroundColor: "#371691" }}
    >
      <div className='container-lg'>
        <Link className='navbar-brand' to='/'>
          Mernuas
        </Link>
        <ToggleMenu />
        <div className='collapse navbar-collapse' id='navbarNav'>
          {/* if authenticated */}
          {isAuthenticated && (
            <>
              <ul className='navbar-nav'>
                <Menu title='Home' href='/home' isActive />
                <Menu title='Post' href='/post' />
              </ul>
              <ul className='navbar-nav ms-auto'>
                <ProfileMenu name='Andry Pebrianto' dispatch={dispatch} />
              </ul>
            </>
          )}

          {/* if not authenticated */}
          {!isAuthenticated && (
            <>
              <ul className='navbar-nav ms-auto'>
                <Menu title='Login' href='/login' isActive />
                <Menu title='Create Account' href='/register' />
              </ul>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
