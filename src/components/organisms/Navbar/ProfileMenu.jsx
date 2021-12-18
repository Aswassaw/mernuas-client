import "./Navbar.css";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { logout } from "../../../redux/actions/auth";

function ProfileMenu({ name, dispatch }) {
  const manipulateName = (name) => {
    if (name.length > 15) {
      return name;
    }

    return name;
  };

  return (
    <li className='nav-item dropdown'>
      <Link
        className='nav-link dropdown-toggle d-flex align-items-center'
        to='/'
        id='navbarDropdown'
        role='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        <div>
          <img
            src='/logo192.png'
            className='rounded-circle'
            alt='User Avatar'
            height='30px'
            width='30px'
          />
        </div>
        <div>
          <p className='d-inline mx-1'>{manipulateName(name)}</p>
        </div>
      </Link>
      <ul
        className='dropdown-menu dropdown-menu-end'
        aria-labelledby='navbarDropdown'
      >
        <li>
          <Link className='dropdown-item' to='/profile'>
            <img
              src='/logo192.png'
              className='rounded-circle'
              alt='User Avatar'
              height='30px'
              width='30px'
            />
            <p className='d-inline ms-1'>{name}</p>
          </Link>
        </li>
        <div className='dropdown-divider'></div>
        <li>
          <Link className='dropdown-item' to='/settings'>
            Settings
          </Link>
        </li>
        <div className='dropdown-divider'></div>
        <li>
          <button className='dropdown-item' to='/logout' onClick={() => dispatch(logout())}>
            Logout
          </button>
        </li>
      </ul>
    </li>
  );
}

ProfileMenu.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProfileMenu;
