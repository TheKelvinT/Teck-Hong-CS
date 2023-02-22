import React from 'react'
import DuitnowIcon from '../../assets/duitnow.png'
import SpayIcon from '../../assets/spaylogo.png'
import CashIcon from '../../assets/cash.png'
import Logo from '../../components/Logo'
import { Link, useNavigate } from 'react-router-dom'
import FacebookLink from '../../components/SocialLinks/FacebookLink';
import InstagramLink from '../../components/SocialLinks/InstagramLink'

const Footer = () => {

  return (
    <footer className='mt-auto'>
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
             <Link to='/policy' className='text-sm font-bold mb-4'>
                Policies
            </Link>
            <div className=' flex flex-col text-xs space-y-2 mt-3.5'>
        
            <Link to='/policy'>Refund Policy</Link> 
            <Link to='/policy'>Exchange Policy</Link> 
            <Link to='/policy'>Shipping Policy</Link> 

            </div>
            
        </div>
        {/* Contact Us */}
        <div className='mb-8'>
            <Link to="/contact-us" className='text-sm font-bold '>
                Contact Us
            </Link >
            <div className='text-xs space-y-2 mt-4'>
            <p >teckhongcs@outlook.com</p>
            <p> 
              <a href="tel:083326899">
                083-326899 (Landline)
              </a>
            </p>
            <p> 
              <a href='https://api.whatsapp.com/send?phone=60198390383&text=Hello%20Teck%20Hong%20Coldstorage%2C%20I%20want%20more%20info%20about%20your%20products!%0A'>
                 019-839-0383 (Whatsapp)
              </a>
            </p>
           
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
                <div className='flex gap-4 mt-3 items-center'>
                    <img src={DuitnowIcon} alt="duitnow" className='h-7 w-7' />
                    <img src={SpayIcon} alt="spay" className='h-7 w-7' />
                    <img src={CashIcon} alt="cash" className='h-7 w-7 ml-1' />
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
                       <FacebookLink />
                  <InstagramLink/>
                </div>
            </div>
        </div>

        <div className='mb-8'>
              <div className='text-sm font-bold'>
                <h3>We Accept </h3>
                <div className='flex gap-4 mt-3 items-center'>
                    <img src={DuitnowIcon} alt="duitnow" className='h-7 w-7' />
                    <img src={SpayIcon} alt="spay" className='h-7 w-7' />
                    <img src={CashIcon} alt="cash" className='h-7 w-7 ml-1' />
                </div>
            </div>
        </div>
        </div>
        </div>
        <div className=' w-full bg-gray-400 overflow-auto flex justify-center py-2 text-gray-50 text-xs'> <span> © 2023 Teck Hong ColdStorage Sdn. Bhd. (1439773-P) </span>
       <span className="hidden sm:inline">&nbsp; All Rights Reserved</span>
        </div>
         
    </footer>
   
  )
}

export default Footer
