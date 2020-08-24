import PropTypes from "prop-types"
import React from "react"

export class CheckboxInput extends React.Component {
  static propTypes = {
    handler: PropTypes.func,
    checked: PropTypes.bool,
    name: PropTypes.string.isRequired,
  }

  static defaultProps = {
    checked: false,
  }

  handleChange = (event) => {
    this.props.handler(event)
  }

  render() {
    return (
      <input
        type="checkbox"
        name={this.props.name}
        checked={this.props.checked}
        onChange={this.handleChange}
      />
    )
  }
}
