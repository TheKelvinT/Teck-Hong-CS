import React, { useState, Fragment } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { IconButton, Badge, ariaHidden } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import { Menu, Disclosure, Transition, Tab } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux'
import { setIsCartOpen } from "../../state/cartReducer";
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../components/Logo';
import NavigationPage from '../../components/NavigationPage';
import InstagramLink from '../../components/SocialLinks/InstagramLink';
import FacebookLink from '../../components/SocialLinks/FacebookLink';


const Navbar = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const cart = useSelector((state) => state.cart.cart);
    
    
const navigation = 
      [ 
        { name: 'Our Shop', href: '/' },
        { name: 'Our Story', href: '/about-us'  },
        { name: 'Contact Us', href: '/contact-us' },
      ]
      
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
    
  return (
    <>
    <Disclosure as="nav" className="bg-secondary-300">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-24 items-center justify-between">
              
              <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                <Logo/>
                <div className="hidden sm:ml-6 sm:flex items-center ">
                  <NavigationPage/>
                </div>
    
            </div>
          
          {/* Socials */}  
            <div className='hidden sm:flex gap-8 text-blue-900'>
              <div className="flex items-center gap-2 cursor-pointer">
                <div className='text-[#075E54] '>
                    <WhatsAppIcon sx={{ fontSize: 28 }}/>
                </div>
                <div className='flex-col flex'>
                    <span className='text-md hover:font-bold text-blue-900 '>
                      <a 
                        target="_blank"
                        href='https://api.whatsapp.com/send?phone=60198390383&text=Hello%20Teck%20Hong%20Coldstorage%2C%20I%20want%20more%20info%20about%20your%20products!%0A'> 
                        019-839-0383
                      </a>
                    </span>
                    <span className='text-xs text-right text-gray-400'>
                      Customer Support
                    </span>
                </div>
              </div>
    
              <div className='flex items-center gap-4'>
                <FacebookLink />
                <InstagramLink/>
                
                
              </div>

              {location.pathname== '/checkout' || location.pathname=== '/checkout/success'  ? null : (
              <div className="cart-logo flex items-center relative cursor-pointer">
                <button onClick={() => dispatch(setIsCartOpen({}))}>
                    <ShoppingCartOutlinedIcon sx={{ fontSize: 28 }}/>
                    <span className="absolute left-4 bottom-6 top right bg-orange-600 rounded-full  w-[20px] h-[20px] text-sm text-center text-white" >{cart.length}</span>
                </button>
              </div>)}

              </div>



              <div className="absolute inset-y-0 right-0 flex items-center gap-4 text-blue-900 sm:hidden">
                <div className="cart-logo flex items-center relative cursor-pointer">
                {location.pathname==='/checkout' || location.pathname=== '/checkout/success'  ? null : (
                    
                  <button onClick={() => dispatch(setIsCartOpen({}))}>
                    <ShoppingCartOutlinedIcon sx={{ fontSize: 28 }}/>
                    <span className="absolute left-4 bottom-6 top right bg-orange-600 rounded-full  w-[20px] h-[20px] text-sm text-center text-white" >{cart.length}</span>
                  </button>
                )}
              </div>

                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-blue-900 hover:bg-gray-700 hover:text-white focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <ClearOutlinedIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuOutlinedIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
                
              </div>
            
            </div>
          </div>   

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-4 pb-3 ">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-blue-900/70 text-white ' : 'text-white hover:text-blue-900 font-bold',
                    'block px-3 py-2 rounded-md text-base font-bold'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}

    
        
                <div className='px-2 py-4 text-blue-900 flex items-center '>
                  <div className="flex items-center gap-2 cursor-pointer">
                  <div className='text-[#075E54] '>
                    <WhatsAppIcon sx={{ fontSize: 28 }}/>
                  </div>
                  <div className='flex-col flex'>
                    <span className='text-md hover:font-bold text-blue-900 '><a href='https://api.whatsapp.com/send?phone=60198390383&text=Hello%20Teck%20Hong%20Coldstorage%2C%20I%20want%20more%20info%20about%20your%20products!%0A'> 019-839-0383</a></span>
                    <span className='text-xs text-right text-gray-100'>Customer Support</span>
                  </div>
                </div>
                <div className='flex items-center px-8 gap-4'>
                <FacebookLink />
                <InstagramLink />
                
                  
                  
                
               
                </div>
            </div>
          </div>
        </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </>
  )
}

export default Navbar
