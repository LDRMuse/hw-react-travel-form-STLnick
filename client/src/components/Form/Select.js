import PropTypes from "prop-types";
import React from "react";

export const Select = ({ selected, selections, selectionsHandler }) => (
  <div className="field">
    <div className="control">
      <select
        className="select is-size-6 px-3"
        name={selections.name}
        onBlur={selectionsHandler}
        onChange={selectionsHandler}>
        {selections.options.map((option, i) => (
          <option
            value={option.toLowerCase()}
            key={i}
            selected={option.toLowerCase() === selected ? true : false}>
            {option}
          </option>
        ))}
      </select>
    </div>
  </div>
);

Select.propTypes = {
  selected: PropTypes.string,
  selections: PropTypes.object.isRequired,
  selectionsHandler: PropTypes.func
};
