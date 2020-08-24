import PropTypes from "prop-types";
import React from "react";

export const Select = ({ selections, selectionsHandler }) => (
  <div className="field">
    <div className="control">
      <select
        className="select is-size-6 px-3"
        name={selections.name}
        onBlur={selectionsHandler}
        onChange={selectionsHandler}>
        {selections.options.map((option, i) => (
          <option value={option.toLowerCase()} key={i}>{option}</option>
        ))}
      </select>
    </div>
  </div>
);
Select.propTypes = {
  selections: PropTypes.object.isRequired,
  selectionsHandler: PropTypes.func
};
