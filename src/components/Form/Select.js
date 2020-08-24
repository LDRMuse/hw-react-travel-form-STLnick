import PropTypes from "prop-types";
import React from "react";

export const Select = ({selections, selectionsHandler}) => (
  <select name={selections.name} onBlur={selectionsHandler} onChange={selectionsHandler}>
    {selections.options.map((option, i) => (
      <option value={option.toLowerCase()} key={i}>{option}</option>
    ))}
  </select>
);
Select.propTypes = {
  selections: PropTypes.object.isRequired,
  selectionsHandler: PropTypes.func
};
