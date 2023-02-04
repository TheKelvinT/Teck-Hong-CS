import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
const ContactInfo = () => {
  
  // Style Summary
  const paraStyle = "text-sm mb-3 text-gray-500"

  return (
    <div className="order-2 md:order-3 col-span-full md:col-span-1 py-5 md:py-8 px-6">
          <div className="mx-auto max-w-xl flex flex-col space-y-5">
            {/* ::Text */}
            <p className={paraStyle}>At Teck Hong ColdStorage, customer satisfaction is our top priority. If you have any questions, concerns, or feedback, we would love to hear from you. Our team is available to assist you during business hours and we will make every effort to respond to your inquiries in a timely and efficient manner.</p>
            <p className={paraStyle}>You can reach us by phone, email, or by filling out the contact Info on our website. We appreciate the opportunity to serve you and look forward to hearing from you soon.</p>
            <p className={paraStyle}>Thank you for choosing Teck Hong ColdStorage for your grocery needs.</p>
            {/* ::Email contact */}
            <a href="#mail" className="inline-flex items-center text-sm text-blue-900 font-semibold hover:text-blue-700">
              <EmailOutlinedIcon className="mr-2 w-5" />
              teckhongcs@outlook.com
            </a>
            {/* ::Address */}
            <p className= "text-sm mb-3 text-gray-500 leading-6" >699, Jln Hospital, Pekan Sri Aman, <br /> 95000 Sri Aman, <br /> Sarawak</p>
            {/* ::Socials */}
            <div className="flex items-center">
            
         
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
  )
}

export default ContactInfo