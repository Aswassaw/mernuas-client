import React from "react";
import PropTypes from "prop-types";

function FloatingInput({ label, name, error = null, ...rest }) {
  return (
    <div className='form-floating mb-3'>
      <input
        className='form-control'
        name={name}
        id={name}
        placeholder={label}
        {...rest}
      />
      <label htmlFor={name}>{label}</label>
      {error && <small className='text-danger'>{error}</small>}
    </div>
  );
}

FloatingInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FloatingInput;
