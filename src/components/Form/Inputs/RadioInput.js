import PropTypes from "prop-types";
import React from "react";

export const RadioInput = ({ checked, handler, name, value }) => {

  const handleChange = (event) => {
    handler(event)
  }

  return (
    <div className="field">
      <div className="control">
        <label className="label px-4">
          {value}
          <input
            className="ml-2"
            type="radio"
            name={name}
            value={value}
            checked={checked}
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
}

RadioInput.propTypes = {
  checked: PropTypes.bool,
  handler: PropTypes.func,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
