import React, { useState } from "react"

import { Checkbox, Input, Radio } from "./Inputs"
import { Select } from "./Select"

export const Form = () => {
  const [age, setAge] = useState('')
  const [destination, setDestination] = useState('India')
  const [firstName, setFirstName] = useState('')
  const [gender, setGender] = useState('')
  const [isLactose, setIsLactose] = useState(false)
  const [isVegan, setIsVegan] = useState(false)
  const [lastName, setLastName] = useState('')
  const [location, setLocation] = useState('')

  const destinations = {
    name: "destination",
    options: ["India", "America", "Australia", "Germany"],
  }

  const dietaryRestrictions = [
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

  const genderInputs = [
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

  const textInputs = [
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

  const handleChange = ({ target }) => {
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
