import React, { useState } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logo from '../../assets/logo.png'
import { IconButton, Badge } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import { Menu } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux'
import { setIsCartOpen } from "../../state/cartReducer";


const Navbar = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.cart);
    const [navbar, setNavbar] = useState(false);
  return (
    <div className='navbar bg-secondary-300  text-blue-900 font-bold w-full drop-shadow-xl text-'>
        {/* Wrapper */}
     <div className="flex px-8 py-4 items-center justify-between ">
        {/* Left */}
        <div className="left ">
            <div className="brand flex">
            <div className="logo flex items-center cursor-pointer ">
                <img src={logo} alt="logo" className='h-[70px] w-[70px]' />
            </div>
            <div className="brand-name w-32 flex-col justify-center ml-4 hidden xs:flex text-lg">
                {/* <span>Teck Hong ColdStorage</span> */}
            </div>
            </div>
        </div>
         {/* Right */}
        <div className="md:hidden flex justify-end items-center gap-8">
                <div className="cart-logo flex items-center relative">
                        <ShoppingCartOutlinedIcon sx={{ fontSize: 28 }}/>
                        <span className="absolute left-4 bottom-4 top right bg-orange-600 rounded-full  w-[20px] h-[20px] text-sm text-center text-white" >5</span>
                </div>
             <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
                >
                {navbar ? (
                    <ClearOutlinedIcon sx={{ fontSize: 28 }}/>
                            
                 ) : (
                     <MenuOutlinedIcon sx={{ fontSize: 28 }}/>
                 )}
            </button>
        </div>
       
        
        {/* Navigation  */}
         <div
             className={`justify-center items-center md:flex ${
                navbar ? "flex" : "hidden"
            }`}
                >
            
                <ul className=" flex items-center justify-center space-y-12 md:space-x-8 md:space-y-0">
                    <li> 
                        <button className='rounded-xl bg-orange-400 text-white px-8 py-2 text-md  hover:bg-orange-600 cursor-pointer hover:shadow-md shadow-gray-400 flex justify-center gap-2' ><StorefrontOutlinedIcon sx={{ fontSize: 28 }}/> <span>Shop</span></button>
                    </li>
                    <li >
                    
                    <Menu as="div" className="relative inline-block text-left">
                    
                        <Menu.Button className="inline-flex w-full justify-center px-4 py-2 text-md font-medium text-blue-900 relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-blue-900
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-500">
                        About Us
                        </Menu.Button>
                
                    </Menu>
                    </li>
                    <li >
                    <Menu as="div" className="relative inline-block text-left">
                    
                        <Menu.Button className="inline-flex w-full justify-center px-4 py-2 text-md font-medium text-blue-900 relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-blue-900
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-500">
                        Contact Us
                        </Menu.Button>
                
                    </Menu>
                    </li>
                   
                </ul>
            
         </div>   
            
        {/* Socials */}  
            <div className={`justify-center items-center gap-8 md:flex ${
                navbar ? "flex" : "hidden"
            }`}>
            
            <div className="flex items-center gap-2 cursor-pointer">
                <div className='text-[#25D366] '>
                    <WhatsAppIcon sx={{ fontSize: 32 }}/>
                </div>
                <div className='flex-col flex'>
                    <span className='text-md hover:font-bold '>012-3456 789</span>
                    <span className='text-xs text-right text-gray-400'>Customer Support</span>
                </div>
                
            </div>
                <div className='flex items-center gap-4'>
                    <div className='social-logo cursor-pointer'>
                        <InstagramIcon sx={{ fontSize: 28 }}/>
                    </div>
                     <div className='social-logo cursor-pointer'>
                        <FacebookOutlinedIcon sx={{ fontSize: 28 }}/>
                    </div>
                </div>
                <div className="cart-logo flex items-center relative cursor-pointer">
                    <button onClick={() => dispatch(setIsCartOpen({}))}>
                        <ShoppingCartOutlinedIcon sx={{ fontSize: 28 }}/>
                        <span className="absolute left-4 bottom-4 top right bg-orange-600 rounded-full  w-[20px] h-[20px] text-sm text-center text-white" >{cart.length}</span>
                    </button>
                </div>
            </div>
           
        
    </div>  
    </div>
  )
}

export default Navbar
