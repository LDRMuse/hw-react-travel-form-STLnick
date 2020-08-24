import PropTypes from "prop-types";
import React from "react";

import { CheckboxInput } from "./CheckboxInput"

export class RadioInput extends CheckboxInput {
  static propTypes = {
    value: PropTypes.string.isRequired,
  };

  render() {
    return (
      <input
        type="radio"
        name={this.props.name}
        value={this.props.value}
        checked={this.props.checked}
        onChange={this.handleChange}
      />
    );
  }
}
