import React from 'react'

const Policy = () => {
  const paragraphStyle= "mb-4 text-sm text-gray-700 "
  return (
    <div className="bg-primary-100 bg-opacity-60 h-full w-full">
    <div className="w-11/12 sm:w-4/5 mx-auto max-w-2xl py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8  ">

    <div className="flex flex-col   bg-white border border-gray-200 rounded-2xl shadow-lg md:flex-row md:max-w-xl">
      <div className="flex flex-col p-4 px-8 leading-normal">
      <h2 className="text-4xl uppercase my-4 text-blue-900">OUR POLICIES</h2>
        <h5 className="mb-4 text-sm font-bold tracking-tight italic text-blue-900 opacity-80 ">At TECK HONG COLDSTORAGE, we want our customers to be completely satisfied with their purchases. If you are not satisfied with a product you have purchased through our app, we are here to help.
</h5>
        <h6 className='text-blue-900 font-bold text-md'>Eligibility for Refunds</h6>
        <p className={paragraphStyle}>Refunds are only eligible for products that are defective, damaged, or significantly different from their description.
        Refunds are not available for products that have been opened and used, unless the product is defective.</p>
        <h6 className='text-blue-900 font-bold text-md'>Refund Process</h6>
        <p className={paragraphStyle}>To initiate a refund, please contact our customer support team within [3] days of receiving your product.
          Our customer support team will review your request and may ask you to provide additional information, such as photos of the defective product.  </p>
         <p className={paragraphStyle}> If your refund request is approved, we will process the refund and the funds will be credited back to your original payment method within [7] business days.
          
          </p>
        <h6 className='text-blue-900 font-bold text-md'>Exchange Policy</h6>
          <p className={paragraphStyle}>If you would like to exchange a product, please contact our customer support team within [3] days of receiving your product.
Our customer support team will assist you in the exchange process and help you find a product that better meets your needs.</p>
        <h6 className='text-blue-900 font-bold text-md'>Return Shipping</h6>
        <p className={paragraphStyle}>The customer is responsible for return shipping costs unless the product is defective, damaged, or significantly different from its description.
        </p>
        <p className={paragraphStyle}>If the product is defective, damaged, or significantly different from its description, TECK HONG COLDSTORAGE will cover return shipping costs.
      </p>
      <h6 className='text-blue-900 font-bold text-md'>Further Clarifications?</h6>
        <p className={paragraphStyle}>If you have any questions or concerns about our Refund Policy or any other matters, please contact us at teckhongcs@outlook.com OR +6083-327117.
This Refund Policy is subject to change at any time without notice.
        </p>
      </div>
    </div>
    
   
    
    </div>
  </div>
  )
}

export default Policy
