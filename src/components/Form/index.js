import React, { useState } from "react"
import api from 'api'

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

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  const lettersRegex = /^[a-zA-Z]+$/g

  const validateInput = (value, pattern = lettersRegex) => value && value.match(pattern)

  const handleChange = ({ target }) => {
    const { name, value, checked } = target

    switch (name) {
      case 'destination':
        setDestination(value)
        break;
      case 'email':
        if (!validateInput(value, emailRegex)) {
          setEmailError('Enter a valid email address')
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
        if (!validateInput(value)) {
          setFirstNameError('Names must not be empty and letters only')
        } else {
          setFirstName(value)
          setFirstNameError('')
        }
        break;
      case 'lname':
        if (!validateInput(value)) {
          setLastNameError('Names must not be empty and letters only')
        } else {
          setLastName(value)
          setLastNameError('')
        }
        break;
      default:
        console.log('Error with input value...')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!emailError && !firstNameError && !lastNameError) {
      const newTravel = {
        firstName,
        lastName,
        email,
        destination,
        gender,
        dietaryRestrictions: { isLactose, isVegan }
      }

      // Submit new travel form to request
      api.addTravel(newTravel)
    }
  }

  return (
    <div className="box has-background-light">
      <form className="has-text-centered py-3" onSubmit={handleSubmit}>
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
