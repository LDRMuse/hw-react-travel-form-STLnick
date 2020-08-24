import PropTypes from "prop-types";
import React from "react";

export class Input extends React.Component {
  static defaultProps = {
    placeholder: ""
  }

  static propTypes = {
    inputHandler: PropTypes.func,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
  };

  handleChange = (event) => {
    this.props.inputHandler(event)
  }

  render() {
    return <input
      className="input mb-4 is-success"
      type="text"
      name={this.props.name}
      placeholder={this.props.placeholder}
      onChange={this.handleChange} />;
  }
}
