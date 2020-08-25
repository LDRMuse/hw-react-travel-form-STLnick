import React, { useState } from 'react'
import utils from 'utils'

import { Input } from '../Form/Inputs/Input'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const handleChange = ({ target: { value } }) => {
    if (!utils.validateInput(value, utils.emailRegex)) {
      setEmailError('Enter a valid email address')
    } else {
      setEmail(value)
      setEmailError('')
    }
  }

  const handleSubmit = () => {
    // TODO: Send request to MongoDB for findMany() where email: {email}
  }

  return (
    <div className="box has-background-light">
      <form className="login-form has-text-centered py-3" onSubmit={handleSubmit}>
        <Input
          error={emailError}
          name='email'
          placeholder='Email to login'
          inputHandler={handleChange}
          type='email'
        />
        <button
          className="button is-link has-text-weight-bold is-uppercase">
          Login
        </button>
      </form>
    </div>
  )
}
