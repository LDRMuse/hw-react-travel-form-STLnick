import React, { useState } from 'react'
import api from 'api'
import utils from 'utils'

import { Input } from '../Form/Inputs/Input'

const travelsRepo = api()

export const Login = () => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [travels, setTravels] = useState([])

  const handleChange = ({ target: { value } }) => {
    if (!utils.validateInput(value, utils.emailRegex)) {
      setEmailError('Enter a valid email address')
    } else {
      setEmail(value)
      setEmailError('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // TODO: Send request to MongoDB for findMany() where email: {email}
    const findRes = await travelsRepo.getTravels({ 'email': email })
    console.log('GET TRAVELS RES: ', findRes)
    setTravels(findRes)
  }

  return (
    <div className="box has-background-light">
      {travels.length
        ? <table>
          <caption>Travels for {email}</caption>
          <thead>
            <tr>
              <th>Destination</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRows()}
          </tbody>
        </table>
        : <form className="login-form has-text-centered py-3" onSubmit={handleSubmit}>
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
      }
    </div>
  )
}
