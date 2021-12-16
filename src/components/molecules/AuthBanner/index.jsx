import "./AuthBanner.css";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function AuthBanner({ title, textLink, href, bannerBg }) {
  return (
    <div className='col-md-7 col-lg-8 p-0 d-none d-md-block'>
      <div
        className='banner'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.3)),
    url(${bannerBg})`,
        }}
      >
        <div className='d-flex flex-column w-100 h-100 justify-content-center align-items-center'>
          <h2 className='display-4 text-center fw-bold mx-3 title'>{title}</h2>
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
  bannerBg: PropTypes.string.isRequired,
};

export default AuthBanner;
