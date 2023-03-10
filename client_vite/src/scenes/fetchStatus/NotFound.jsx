import React from 'react'
import { Link } from 'react-router-dom'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0 bg-primary-100 bg-opacity-60">
    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center ">
        <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-gray-300">404</p>
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mt-2">Page Not Found</p>
        
        <p className="text-lg md:text-xl lg:text-2xl text-gray-500 my-12">Sorry about that! Please visit our homepage to get to where you need to go.</p>
        <Link className="rounded-full border border-transparent bg-blue-900 py-2 px-4 text-lg font-medium shadow-lg text-white hover:bg-blue-700 focus:outline-none flex  gap-3" to='/'><span><KeyboardBackspaceOutlinedIcon/></span>Return Home</Link>
    </div>
   
</div>
  )
}

export default NotFound
