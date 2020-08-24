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
        name={name}
        onChange={handleChange}
        pattern={type === 'email' ? '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$' : '^[a-zA-Z]+$'}
        placeholder={placeholder}
        required
        type={type}
      />
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
