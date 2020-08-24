import PropTypes from "prop-types";
import React from "react";

export const RadioInput = ({ checked, handler, name, value }) => {

  const handleChange = (event) => {
    handler(event)
  }

  return (
    <label className="px-4">
      {value}
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
      />
    </label>
  );
}

RadioInput.propTypes = {
  checked: PropTypes.bool,
  handler: PropTypes.func,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
