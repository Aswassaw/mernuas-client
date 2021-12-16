import "./AuthBanner.css";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function AuthBanner({ title, textLink, href }) {
  return (
    <div className='col-7 p-0'>
      <div className='banner'>
        <div className='d-flex flex-column w-100 h-100 justify-content-center align-items-center'>
          <h2 className='display-5 text-center fw-bold title'>
            {title}
          </h2>
          <Link className='btn btn-lg text-light px-4 mt-2' to={href}>
            {textLink}
          </Link>
        </div>
      </div>
    </div>
  );
}

AuthBanner.propTypes = {
  title: PropTypes.string.isRequired,
  textLink: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default AuthBanner;
