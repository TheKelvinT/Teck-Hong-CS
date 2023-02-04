import React from 'react'
import AboutUsImg from '../../assets/about-us.jpg'

const AboutUs = () => {
  const paragraphStyle= "mb-4 text-sm text-gray-700 dark:text-gray-400"
  return (
    <div className="bg-primary-100 bg-opacity-60 h-full w-full">
      <div className="w-11/12 sm:w-4/5 mx-auto max-w-2xl py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8  ">

      <div className="flex flex-col   bg-white border border-gray-200 rounded-2xl shadow-lg md:flex-row md:max-w-xl">
        <img className="object-cover w-full rounded-t-lg h-80 md:h-auto md:w-80 md:rounded-none md:rounded-l-lg" src={AboutUsImg} alt=""/>
        <div className="flex flex-col p-4 px-8 leading-normal">
        <h2 className="text-4xl uppercase my-4 text-blue-900">OUR STORY</h2>
          <h5 className="mb-4 text-md font-bold tracking-tight italic text-blue-900 opacity-80 dark:text-white">Teck Hong ColdStorage story is one of healthy evolution and commitment to quality.</h5>
          <p className={paragraphStyle}>Teck Hong ColdStorage is a family-owned and operated grocery store located in Sri Aman, Sarawak, Malaysia. Since our doors first opened, we have been committed to providing our customers with a unique and personalized shopping experience.</p>
          <p className={paragraphStyle}>Our store offers a wide range of products, from fresh produce to household essentials, all at competitive prices. Our team of friendly and knowledgeable staff is dedicated to helping our customers find what they need and making their shopping experience as smooth and enjoyable as possible.</p>
          <p className={paragraphStyle}>At Teck Hong ColdStorage, we believe in supporting local businesses and communities. That's why we source many of our products from local farmers and producers, giving our customers access to the freshest and highest quality goods. We are also active members of the local community, regularly participating in events and charitable initiatives.</p>
          <p className={paragraphStyle}>We are proud to serve the people of Sri Aman and the surrounding area and are committed to providing the best possible shopping experience. Thank you for choosing Teck Hong Grocery Shop for your grocery needs. We look forward to serving you soon.</p>
        </div>
      </div>
      
     
      
      </div>
    </div>
  )
}

export default AboutUs
