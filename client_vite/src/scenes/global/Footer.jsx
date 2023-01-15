import React from 'react'
import logo from '../../assets/logo.png'
import facebookicon from '../../assets/facebook.svg.png'
import instagramicon from '../../assets/instagram.svg.png'
import youtubeicon from '../../assets/youtube.svg.png'
import visaicon from '../../assets/visa-logo.svg.png'
import mastericon from '../../assets/master-card-logo.svg.png'
import tngicon from '../../assets/touch-logo.svg.png'

const Footer = () => {
  return (
    <footer className=''>
        <div className=' w-full bg-secondary-300 overflow-auto xs:flex sm:justify-center px-8 pt-8 pb-4 text-gray-50'>
        <div className='md:justify-between gap-8 md:gap-16 sm:flex ' >
        <div>
            <div className="brand flex mb-8">
            <div className="logo flex items-center cursor-pointer ">
                <img src={logo} alt="logo" className='h-[70px] w-[70px]' />
            </div>
            <div className="brand-name w-32 flex-col justify-center ml-4 flex text-lg text-blue-900">
                <span>Teck Hong ColdStorage</span>
            </div>
            </div>
            
        </div>
        {/* About Us */}
        <div className='mb-8'>
            <h3 className='text-sm font-bold mb-4 overflow-hidden'>
                About Us
            </h3>
            <div className='text-xs space-y-2'>
            <p >Our Story</p>
            </div>
            
        </div>
        {/* Policies */}
        <div className='mb-8'>
             <h3 className='text-sm font-bold mb-4'>
                Policies
            </h3>
            <div className='text-xs space-y-2'>
            <p>Privacy Notice</p> 
            <p>Refund Policy</p> 
            <p>Shipping Policy</p> 
            <p>Terms of Service</p> 
            </div>
            
        </div>
        {/* Contact Us */}
        <div className='mb-8'>
            <h3 className='text-sm font-bold mb-4'>
                Contact Us
            </h3>
            <div className='text-xs space-y-2'>
            <p >teckhong@gmail.com</p>
            <p> 016-403 0532</p>
            </div>     
         </div>

         <div className='sm:flex sm:flex-col sm:pt-0 hidden'>
        <div className='mb-8 pt-10 sm:pt-0'>
             <div className='text-sm font-bold'>
                <h3>Follow Us</h3>
                <div className='flex gap-4 mt-3'>
                    <img src={facebookicon} alt="fb"  />
                    <img src={instagramicon} alt="ig" />
                    <img src={youtubeicon} alt="yt" />
                </div>
            </div>
        </div>

        <div className=''>
              <div className='text-sm font-bold'>
                <h3>We Accept </h3>
                <div className='flex gap-2.5 mt-3'>
                    <img src={visaicon} alt="fb" />
                    <img src={mastericon} alt="ig" />
                    <img src={tngicon} alt="yt" />
                </div>
            </div>
        </div>
        </div>

         {/* Logos */}
        

        </div>
        <div className=' xs:mx-8 xs:pt-16 sm:pt-0 sm:hidden'>
        <div className='mb-8 pt-10 sm:pt-0'>
             <div className='text-sm font-bold'>
                <h3>Follow Us</h3>
                <div className='flex gap-4 mt-3'>
                    <img src={facebookicon} alt="fb"  />
                    <img src={instagramicon} alt="ig" />
                    <img src={youtubeicon} alt="yt" />
                </div>
            </div>
        </div>

        <div className='mb-8'>
              <div className='text-sm font-bold'>
                <h3>We Accept </h3>
                <div className='flex gap-4 mt-3'>
                    <img src={visaicon} alt="fb" />
                    <img src={mastericon} alt="ig" />
                    <img src={tngicon} alt="yt" />
                </div>
            </div>
        </div>
        </div>
        </div>
        <div className=' w-full bg-gray-400 overflow-auto flex justify-center py-2 text-gray-50 text-xs'> 
        © 2023 Teck Hong ColdStorage <span className="hidden sm:inline">&nbsp; All Rights Reserved</span>
        </div>
         
    </footer>
   
  )
}

export default Footer
