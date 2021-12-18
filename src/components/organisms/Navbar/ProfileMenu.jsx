import "./Navbar.css";
import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { logout } from "../../../redux/actions/auth";
import { manipulateName } from "../../../utils/manipulateName";

function ProfileMenu({ isActive, user, dispatch }) {
  const classNavLink = cx({
    "nav-link dropdown-toggle d-flex align-items-center": true,
    active: isActive,
  });

  return (
    <li className='nav-item dropdown'>
      <Link
        className={classNavLink}
        to='/'
        id='navbarDropdown'
        role='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        <div>
          <img
            src={user.avatar}
            className='rounded-circle'
            alt='User Avatar'
            height='30px'
            width='30px'
          />
        </div>
        <div>
          <p className='d-inline mx-1'>{manipulateName(user.name, 15)}</p>
        </div>
      </Link>
      <ul
        className='dropdown-menu dropdown-menu-end'
        aria-labelledby='navbarDropdown'
      >
        <li>
          <Link className='dropdown-item' to='/profile'>
            <img
              src={user.avatar}
              className='rounded-circle'
              alt='User Avatar'
              height='30px'
              width='30px'
            />
            <p className='d-inline ms-1'>{user.name}</p>
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
  isActive: PropTypes.bool,
};

export default ProfileMenu;
