import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Logo = () => {
  return (
    <div className="flex flex-shrink-0 items-center">
      <Link to="/">
                  <img
                    className="block h-16 w-auto lg:hidden"
                    src={logo}
                    alt="Your Company"
                  />
          </Link>
                </div>
  )
}

export default Logo
