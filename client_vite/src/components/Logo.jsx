import React from 'react'
import logo from '../assets/logo.png'

const Logo = () => {
  return (
    <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-16 w-auto lg:hidden"
                    src={logo}
                    alt="Your Company"
                  />
          
                </div>
  )
}

export default Logo
