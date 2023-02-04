import React,{useRef} from 'react'
import ContactForm from '../../components/ContactForm';

import ContactInfo from '../../components/ContactInfo';
import ContactMap from '../../components/ContactMap';

const ContactUs = () => {
  

  return (
    <div className="bg-primary-100 bg-opacity-60 h-full w-full">
      <div className="w-11/12 sm:w-4/5 mx-auto max-w-2xl py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8   "> 
        <div className="flex flex-col bg-white border rounded-2xl border-gray-200 shadow-xl md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div className="relative mx-auto w-full max-w-7xl text-gray-700">
            <div className="grid grid-cols-2">

              {/* :MAP CONTAINER */}
               <ContactMap/>
              {/* :CONTACT FORM CONTAINER */}
              <ContactForm/>
              {/* :CONTACT INFOS CONTAINER */}
              <ContactInfo/>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
