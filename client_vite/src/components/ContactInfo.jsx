import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookLink from './SocialLinks/FacebookLink';
import InstagramLink from './SocialLinks/InstagramLink';
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
              <FacebookLink/>
              {/* :Instagram */}
              <InstagramLink/>
            </div>
          </div>
        </div>
  )
}

export default ContactInfo