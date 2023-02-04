import React from 'react'

const ContactMap = () => {
  return (
    <div className="order-1 col-span-full">
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.890097288237!2d111.46048701511243!3d1.2359350990985285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31f949aea02906cd%3A0x1498962f25fe94d4!2sTeck%20Hong%20Coldstorage!5e0!3m2!1sen!2smy!4v1675226044495!5m2!1sen!2smy"
                   title="map" scrolling="no" frameBorder="0"
                    width="100%" 
                    className="rounded-t-2xl h-[600px] sm:h-[300px]" 
                    loading="lazy" 
                   />
                 </div>
  )
}

export default ContactMap