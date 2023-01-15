import React, { useState } from 'react'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'


const CatNav = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
      
    const [catbar, setCatbar] = useState(false);
  return (

    <div className="bg-secondary-300 w-full flex justify-center drop-shadow-xl text-gray-50">
        <div className=" py-2 flex align-center justify-between gap-16">
            {/* Navigation */}
           
                <ul 
                className={`align-middle  justify-start items-center space-x-8 gap-2 text-white py-2 hidden sm:flex ${
                    catbar ? "flex" : "hidden"
                }`}
                >
                    <li className='cursor-pointer hover:font-bold'>
                    <Menu as="div" className="relative inline-block text-left transition delay-1000">
                    
                    <Menu.Button className="inline-flex w-full justify-center px-4 py-2 text-md font-medium text-gray-50  relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
                        before:bottom-0 before:left-0 before:bg-gray-50 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-500">
                    All Products
                    </Menu.Button>
                </Menu>
                    
                    </li>
                    <li className='cursor-pointer '>
                    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center px-4 py-2 text-md font-medium text-gray-50 relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-gray-50
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-500">
          Poultry
          <ExpandMoreOutlinedIcon className="-mr-1 ml-2 h-5 w-5" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-primary-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-secondary-400 text-gray-50' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Chicken
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-secondary-400 text-gray-50' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Pork
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-secondary-400 text-gray-50' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Beef
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-secondary-400 text-gray-50' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Lamb
                </a>
              )}
            </Menu.Item>
          </div>
          

        </Menu.Items>
      </Transition>
                    </Menu>
                    </li>
                    <li className='cursor-pointer '>
                    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center px-4 py-2 text-md font-medium text-gray-50 relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-gray-50
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-500">
          Seafood
          <ExpandMoreOutlinedIcon className="-mr-1 ml-2 h-5 w-5" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-primary-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-secondary-400 text-gray-50' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Fish
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-secondary-400 text-gray-50' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Prawns
                </a>
              )}
            </Menu.Item>
          </div>
          

        </Menu.Items>
      </Transition>
                    </Menu>
                    </li>
                    <li className='cursor-pointer hover:font-bold'>
                    <Menu as="div" className="relative inline-block text-left">
                    
                        <Menu.Button className="inline-flex w-full justify-center px-4 py-2 text-md font-medium text-gray-50 relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-gray-50
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-500">
                        Japanese
                        </Menu.Button>
                
                    </Menu>
                    </li>
                    <li className='cursor-pointer hover:font-bold'>
                    <Menu as="div" className="relative inline-block text-left">
                    
                    <Menu.Button className="inline-flex w-full justify-center px-4 py-2 text-md font-medium text-gray-50 relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-gray-50
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-500">
                    Others
                    </Menu.Button>
            
                </Menu>
                    </li>
                </ul>

            {/*SMALL SCREEN  */}
            <div className="sm:hidden flex justify-end items-center gap-2">
               
             <button
                className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border "
                onClick={() => setCatbar(!catbar)}
                >
                {catbar ? (
                    <ClearOutlinedIcon sx={{ fontSize: 28 }}/>
                            
                 ) : (
                    <>
                    <span className='px-2 hover:font-bold'>Categories</span><MenuOutlinedIcon sx={{ fontSize: 28 }}/>
                    </>
                    
                 )}
                 
            </button>
        </div>
            {/* Search Bar */}
            <div className={`justify-center items-center w-1/4 md:flex ${
                catbar ? "flex" : "hidden"
            }`}
            >
                     <div className="input-group relative md:flex items-stretch hidden w-full rounded">
                         <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-4 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                        <span className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded cursor-pointer" id="basic-addon2">
                        <SearchOutlinedIcon />
                        </span>
                     </div>
                
             </div>

        </div>
    </div>
  )
}

export default CatNav