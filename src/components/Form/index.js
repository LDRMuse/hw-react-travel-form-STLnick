import React, { Component } from "react"

import { Checkbox, Input, Radio } from "./Inputs"
import { Select } from "./Select"

export class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "India",
    isVegan: false,
    isLactose: false,
    location: "",
  }

  destinations = {
    name: "destination",
    options: ["India", "America", "Australia", "Germany"],
  }

  dietaryRestrictions = [
    {
      name: "isVegan",
      type: "checkbox",
      value: "isVegan",
    },
    {
      name: "isLactoseFree",
      type: "checkbox",
      value: "isLactoseFree",
    },
  ]

  genderInputs = [
    {
      name: "gender",
      type: "radio",
      value: "M",
    },
    {
      name: "gender",
      type: "radio",
      value: "F",
    },
  ]

  textInputs = [
    {
      name: "fname",
      placeholder: "First Name",
    },
    {
      name: "lname",
      placeholder: "Last Name",
    },
    {
      name: "age",
      placeholder: "Age",
    },
  ]

  handleChange = ({ target }) => {
    const { name, value, type, checked } = target

    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        })
  }

  render() {
    return (
      <form>
        {this.textInputs.map(({ name, placeholder }, i) => (
          <Input
            name={name}
            placeholder={placeholder}
            inputHandler={this.handleChange}
            key={i}
          />
        ))}

        {this.genderInputs.map(({ name, value }, i) => (
          <Radio
            checked={this.state.gender === value}
            name={name}
            value={value}
            handler={this.handleChange}
            key={i}
          />
        ))}

        <Select
          selections={this.destinations}
          selectionsHandler={this.handleChange}
        />

        {this.dietaryRestrictions.map(({ name, value = name }, i) => (
          <Checkbox
            name={name}
            value={value}
            handler={this.handleChange}
            checked={this.state[name]}
            key={i}
          />
        ))}

        <button>Submit</button>
      </form>
    )
  }
}
