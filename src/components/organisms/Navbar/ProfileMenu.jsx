import "./Navbar.css";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProfileMenu({ userName }) {
  const manipulateUserName = (userName) => {
    if (userName.length > 15) {
      return (userName = userName.slice(0, 15) + "...");
    }

    return userName;
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
          <p className='d-inline mx-1'>{manipulateUserName(userName)}</p>
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
              class='rounded-circle'
              alt='User Avatar'
              height='30px'
              width='30px'
            />
            <p className='d-inline ms-1'>{userName}</p>
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
          <Link className='dropdown-item' to='/logout'>
            Logout
          </Link>
        </li>
      </ul>
    </li>
  );
}

ProfileMenu.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default ProfileMenu;
