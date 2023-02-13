import React from 'react'
import visaicon from '../../assets/visa-logo.svg.png'
import mastericon from '../../assets/master-card-logo.svg.png'
import tngicon from '../../assets/touch-logo.svg.png'
import Logo from '../../components/Logo'
import { Link } from 'react-router-dom'
import FacebookLink from '../../components/SocialLinks/FacebookLink';
import InstagramLink from '../../components/SocialLinks/InstagramLink'

const Footer = () => {
  return (
    <footer className=''>
        <div className=' w-full bg-secondary-300 overflow-auto xs:flex sm:justify-center px-8 pt-8 pb-4 text-gray-50'>
        <div className='md:justify-between gap-8 md:gap-16 sm:flex ' >
        <div>
            <div className="brand flex mb-8">
            <Logo/>
            </div>
            
        </div>
        {/* About Us */}
        <div className='mb-8'>
            <h3 className='text-sm font-bold mb-4 overflow-hidden'>
                About Us
            </h3>
            <div className='text-xs space-y-2'>
            <Link to='/about-us'>Our Story</Link>
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
            <p >teckhongcs@outlook.com</p>
            <p> <a href='https://api.whatsapp.com/send?phone=60198390383&text=Hello%20Teck%20Hong%20Coldstorage%2C%20I%20want%20more%20info%20about%20your%20products!%0A'> 019-839-0383</a></p>
           
            </div>     
         </div>

         <div className='sm:flex sm:flex-col sm:pt-0 hidden'>
        <div className='mb-8 pt-10 sm:pt-0'>
             <div className='text-sm font-bold'>
                <h3>Follow Us</h3>
                <div className='flex gap-2 mt-3'>
                  <FacebookLink />
                  <InstagramLink/>
                </div>
            </div>
        </div>

        <div className=''>
              <div className='text-sm font-bold'>
                <h3>We Accept </h3>
                <div className='flex gap-2 mt-3'>
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
                <div className='flex gap-2 mt-3'>
                       {/* :FACEBOOK */}
              <a href="#facebook" className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-[#4267B2] text-white filter hover:brightness-125" style={{ backgroundColor: "#4267B2" }}>
                {/* ::facebook svg */}
                <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z"/>
                </svg>
              </a>
              {/* :Instagram */}
              <a href="#instagrap" className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white filter hover:brightness-125">
                {/* ::instagram svg */}
                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
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
