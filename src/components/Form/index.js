import React, { useState } from "react"

import { Checkbox, Input, Radio } from "./Inputs"
import { Select } from "./Select"

export const Form = () => {
  const [destination, setDestination] = useState('India')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [gender, setGender] = useState('')
  const [isLactose, setIsLactose] = useState(false)
  const [isVegan, setIsVegan] = useState(false)
  const [lastName, setLastName] = useState('')

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
      name: "email",
      placeholder: "Email",
      type: 'email'
    },
  ]

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target

    if (type === 'checkbox') {
      name === 'isVegan'
        ? setIsVegan(checked)
        : setIsLactose(checked)
    } else {
      switch (name) {
        case 'destination':
          setDestination(value)
          break;
        case 'email':
          setEmail(value)
          break;
        case 'gender':
          setGender(value)
          break;
        case 'fname':
          setFirstName(value)
          break;
        case 'lname':
          setLastName(value)
          break;
        default:
          console.log('Error with input value...')
      }
    }
  }

  return (
    <form className="has-text-centered">
      {textInputs.map(({ name, placeholder, type }, i) => (
        <Input
          name={name}
          placeholder={placeholder}
          inputHandler={handleChange}
          key={i}
          type={type}
        />
      ))}
      <div>
        {genderInputs.map(({ name, value }, i) => (
          <Radio
            checked={gender === value}
            name={name}
            value={value}
            handler={handleChange}
            key={i}
          />
        ))}
      </div>

      <Select
        selections={destinations}
        selectionsHandler={handleChange}
      />
      <div>
        {dietaryRestrictions.map(({ name, value = name }, i) => (
          <Checkbox
            name={name}
            value={value}
            handler={handleChange}
            checked={name === 'isVegan' ? isVegan : isLactose}
            key={i}
          />
        ))}
      </div>

      <button className="button is-success has-text-weight-bold">Submit</button>
    </form>
  )
}
