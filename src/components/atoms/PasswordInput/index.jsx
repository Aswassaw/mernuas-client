import React, { useState } from "react";
import PropTypes from "prop-types";

function PasswordInput({ label, name, error = null, ...rest }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="mb-3">
        <div class="input-group">
          <div class="form-floating flex-grow-1">
            <input
              type={`${show ? "text" : "password"}`}
              class="form-control"
              name="code1"
              name={name}
              id={name}
              placeholder={label}
              {...rest}
            />
            <label for={name}>{label}</label>
          </div>
          <span
            class="input-group-text"
            onClick={() => setShow(!show)}
            style={{ cursor: "pointer" }}
          >
            {!show && <i class="fas fa-eye"></i>}
            {show && <i class="fas fa-eye-slash"></i>}
          </span>
        </div>
        {error && <small className="text-danger">{error}</small>}
      </div>
    </>
  );
}

PasswordInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default PasswordInput;
