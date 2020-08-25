import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Header = () => {
  const location = useLocation()

  return (
    <div className="box has-background-link">
      <h1
        className="title has-text-white is-size-1">
        Travel Form
    </h1>
      {location.pathname === '/'
        ? <Link className='button' to='/login'>Login</Link>
        : <Link className='button' to='/'>Home</Link>
      }
    </div>
  )
}
