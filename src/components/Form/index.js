import React, { useState } from "react"

import { Checkbox, Input, Radio } from "./Inputs"
import { Select } from "./Select"

export const Form = () => {
  const [destination, setDestination] = useState('India')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [firstName, setFirstName] = useState('')
  const [firstNameError, setFirstNameError] = useState('')
  const [gender, setGender] = useState('')
  const [isLactose, setIsLactose] = useState(false)
  const [isVegan, setIsVegan] = useState(false)
  const [lastName, setLastName] = useState('')
  const [lastNameError, setLastNameError] = useState('')

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
      error: firstNameError,
      name: "fname",
      placeholder: "First Name",
    },
    {
      error: lastNameError,
      name: "lname",
      placeholder: "Last Name",
    },
    {
      error: emailError,
      name: "email",
      placeholder: "Email",
      type: 'email'
    },
  ]

  const validator = {
    validateEmails: (value) => {
      const emailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
      return (value && emailRegex.test(value)) || 'Enter a valid email address'
    },
    validateNames: (value) => {
      const lettersRegex = new RegExp(/^[a-zA-Z]+$/g)
      return (value && lettersRegex.test(value)) || 'Name must be non-empty and letters only'
    }
  }

  const handleChange = ({ target }) => {
    const { name, value, checked } = target

    switch (name) {
      case 'destination':
        setDestination(value)
        break;
      case 'email':
        if (typeof validator.validateEmails(value) === 'string') {
          setEmailError(validator.validateEmails(value))
        } else {
          setEmail(value)
          setEmailError('')
        }
        break;
      case 'gender':
        setGender(value)
        break;
      case 'isVegan':
        setIsVegan(checked)
        break;
      case 'isLactoseFree':
        setIsLactose(checked)
        break;
      case 'fname':
        if (typeof validator.validateNames(value) === 'string') {
          setFirstNameError(validator.validateNames(value))
        } else {
          setFirstName(value)
          setFirstNameError('')
        }
        break;
      case 'lname':
        if (typeof validator.validateNames(value) === 'string') {
          setLastNameError(validator.validateNames(value))
        } else {
          setLastName(value)
          setLastNameError('')
        }
        break;
      default:
        console.log('Error with input value...')
    }
  }

  return (
    <div className="box has-background-light">
      <form className="has-text-centered py-3">
        {textInputs.map(({ error, name, placeholder, type }, i) => (
          <Input
            error={error}
            name={name}
            placeholder={placeholder}
            inputHandler={handleChange}
            key={i}
            type={type}
          />
        ))}
        <div className="is-flex">
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
        <div className="is-flex">
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

        <button className="button is-link has-text-weight-bold">Submit</button>
      </form>
    </div>
  )
}
