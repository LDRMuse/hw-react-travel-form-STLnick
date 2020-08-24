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

    if (type === 'checkbox') {
      name === 'isVegan'
        ? setIsVegan(checked)
        : setIsLactose(checked)
    } else {
      switch (name) {
        case 'age':
          setAge(value)
          break;
        case 'destination':
          setDestination(value)
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
    <form>
      {textInputs.map(({ name, placeholder }, i) => (
        <Input
          name={name}
          placeholder={placeholder}
          inputHandler={handleChange}
          key={i}
        />
      ))}

      {genderInputs.map(({ name, value }, i) => (
        <Radio
          checked={gender === value}
          name={name}
          value={value}
          handler={handleChange}
          key={i}
        />
      ))}

      <Select
        selections={destinations}
        selectionsHandler={handleChange}
      />

      {dietaryRestrictions.map(({ name, value = name }, i) => (
        <Checkbox
          name={name}
          value={value}
          handler={handleChange}
          checked={name === 'isVegan' ? isVegan : isLactose}
          key={i}
        />
      ))}

      <button>Submit</button>
    </form>
  )
}
