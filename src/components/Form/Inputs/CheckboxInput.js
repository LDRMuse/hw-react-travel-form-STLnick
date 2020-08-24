import PropTypes from "prop-types"
import React from "react"

export const CheckboxInput = ({ checked, handler, name }) => {

  const handleChange = (event) => {
    handler(event)
  }

  return (
    <div className="field">
      <div className="control">
        <label className="px-4">
          {name}
          <input
            className="ml-2"
            type="checkbox"
            name={name}
            checked={checked}
            onChange={handleChange}
            value={name}
          />
        </label>
      </div>
    </div>
  )
}

CheckboxInput.propTypes = {
  handler: PropTypes.func,
  checked: PropTypes.bool,
  name: PropTypes.string.isRequired,
}

CheckboxInput.defaultProps = {
  checked: false,
}
