import React from 'react'
import { Link } from 'react-router-dom'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

const CheckoutSuccess = () => {
  return (
    <div className="bg-primary-100 bg-opacity-60 h-full w-full">
    <div className="w-11/12 sm:w-4/5 mx-auto max-w-2xl py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8  ">

    <div className="flex flex-col   bg-white border border-gray-200 rounded-2xl shadow-lg md:flex-row md:max-w-xl">
    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center py-8 px-6 md:p-12 md:px-16">
    <svg xmlns="http://www.w3.org/2000/svg" class="text-green-600 w-36 h-36" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        <p className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider  text-gray-300 mt-2">Thank You!</p>
        <p className="text-sm md:text-lg lg:text-xl text-gray-500 my-8">Your order has been successfully placed! We will contact you to confirm your order soon!</p>
        <Link className="rounded-full border border-transparent bg-blue-900 py-2 px-4 text-lg font-medium shadow-lg text-white hover:bg-blue-700 focus:outline-none flex  gap-3" to='/about-us'><span><KeyboardBackspaceOutlinedIcon/></span>Return Home</Link>
    </div>
 
    </div>
    
   
    
    </div>
  </div>
  )
}

export default CheckoutSuccess
