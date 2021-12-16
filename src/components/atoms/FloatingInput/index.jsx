import React from "react";
import PropTypes from "prop-types";

function FloatingInput({ label, type, name, ...rest }) {
  return (
    <div class='form-floating mb-3'>
      <input type={type} class='form-control' name={name} id={name} placeholder={label} {...rest} />
      <label for={name}>{label}</label>
    </div>
  );
}

FloatingInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FloatingInput;
