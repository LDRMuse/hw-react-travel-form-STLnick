import PropTypes from "prop-types";
import React from "react";

export const Input = ({ error, inputHandler, name, placeholder, type }) => {


  const handleChange = (event) => {
    inputHandler(event)
  }

  return <div className="field">
    <label className="label sr-only" htmlFor={name}>{name}</label>
    <div className="control">
      <input
        className="input mb-4 is-link"
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange} />
    </div>
    {error ? <p className="help is-danger">{error}</p> : null}
  </div>
}

Input.defaultProps = {
  placeholder: "",
  type: 'text'
}

Input.propTypes = {
  error: PropTypes.string,
  inputHandler: PropTypes.func,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string
};
