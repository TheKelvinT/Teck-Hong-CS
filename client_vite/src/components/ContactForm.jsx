import React, {useRef,useState} from 'react'
import { useNavigate } from 'react-router-dom'

const ContactForm = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = '/contact-us/success'; 
      navigate(path);
    }

    const labelStyle = "text-xs font-semibold text-gray-500"
    const inputStyle = "mt-1 block w-full rounded border-gray-300 bg-gray-50 py-2 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-blue-800"

    const inputValue = "Dear Valued Customer, Thank you for your email. We will respond to your concerns within 2 business days. "
  return (
    <div className="order-3 md:order-2 col-span-full md:col-span-1 py-5 md:py-8 px-6 text-sm ">
          {/* ::Title Contact Us */}
          <h2 className="text-4xl uppercase mb-4 text-blue-900">Contact us</h2>
          <form method="POST" action='https://formsubmit.co/55390f05cc3834e3648dcb8e405b7aea' className="mt-4 flex flex-col space-y-4">
                         <div>
                            <label htmlFor="name" className={labelStyle}>Name</label>
                            <input type="text" id="name" name="name" placeholder="John Doe" required className={inputStyle} />
                        </div>
                        <div>
                            <label htmlFor="email" className={labelStyle}>Email Address</label>
                            <input type="email" id="email" name="email" required placeholder="Email Address" className={inputStyle} />
                            <input type="hidden" name="_autoresponse" value={inputValue}/>
                        </div>
                        <div>
                            <label htmlFor="phone" className={labelStyle}>Phone Number</label>
                            <input type="number" id="phone" name="phone" required onInput={(e) => e.target.value = e.target.value.slice(0, 12)}  placeholder="012 345 6789" className={inputStyle} />
                        </div>
                        
                         
                        
                         <div>
                             <label htmlFor="note" className={labelStyle}>Message</label>
                             
                            <textarea type="text" id="note" name="note" required placeholder="What do you want to inform us?" cols="30" rows="4" className={inputStyle} />
                        </div>

                        <div>
                            <button type="submit" onClick={routeChange()} className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent shadow-md  text-base font-medium text-white  bg-blue-900 py-2 px-4 tracking-wide  outline-none ring-offset-2 transition  focus:ring-2  font-md hover:bg-blue-700">Send Message</button>
                        </div>
                        <div>
                            <input type="hidden" name="_subject" value="TECK HONG COLDSTORAGE - CONTACT US!  "/>
                            <input type="hidden" name="_captcha" value="false"></input>
                            <input type="hidden" name="_template" value="table"/>
                        </div>
                    </form>
        </div>
  )
}

export default ContactForm