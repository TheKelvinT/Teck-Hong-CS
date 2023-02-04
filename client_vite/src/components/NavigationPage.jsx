import React from 'react'
import { NavLink } from 'react-router-dom';


const NavigationPage = () => {
    const links = [
        { label: "Our Shop", path: "/" },
        { label: "Our Story", path: "/about-us" },
        { label: "Contact Us", path: "/contact-us" },
      ];
    
      const renderedLinks = links.map((link) => {

        
          let activeClassName = "text-blue-900 font-bold px-3 py-2 rounded-md text-md ";

          let selectedClassName = "px-3 py-2 rounded-md text-md  font-bold hover:text-gray-200 transition-all ease-in-out duration-300"
        return (
       
          <NavLink
            key={link.label}
            to={link.path}
            className={({ isActive }) =>
            isActive ? activeClassName : selectedClassName
          }

            
          >
            {link.label}
          </NavLink>
        );
      });
    
      return (
        <div className="sticky top-0 overflow-hidden flex flex-row items-start bg-secondary-300 text-white md:space-x-2  font-bold">
          {renderedLinks}
             
        </div>
      );
    };



export default NavigationPage
