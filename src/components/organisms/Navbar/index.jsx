import React from "react";
import { Link } from "react-router-dom";
import ToggleMenu from "./ToggleMenu";
import Menu from "./Menu";
import ProfileMenu from "./ProfileMenu";

export default function Navbar() {
  const isAuthenticate = false;

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-lg'>
        <Link className='navbar-brand' to='/'>
          Mernuas
        </Link>
        <ToggleMenu />
        <div className='collapse navbar-collapse' id='navbarNav'>
          {/* if authenticated */}
          {isAuthenticate && (
            <>
              <ul className='navbar-nav'>
                <Menu title='Home' href='/home' isActive />
                <Menu title='Post' href='/post' />
              </ul>
              <ul className='navbar-nav ms-auto'>
                <ProfileMenu userName='andry_pebrianto' />
              </ul>
            </>
          )}

          {/* if not authenticated */}
          {!isAuthenticate && (
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
