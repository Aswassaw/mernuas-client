import React from "react";
import PropTypes from "prop-types";

function FloatingInput({ label, type, name, ...rest }) {
  return (
    <div className='form-floating mb-3'>
      <input type={type} className='form-control' name={name} id={name} placeholder={label} {...rest} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

FloatingInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FloatingInput;
