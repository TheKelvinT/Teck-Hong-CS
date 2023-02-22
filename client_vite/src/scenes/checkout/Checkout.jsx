import './checkout.css'
import React, { useState } from 'react'
import CartList from '../../components/CartList'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CheckOutForm from '../../components/CheckOutForm'
const Checkout = () => {
    const [data, setData] = useState({
        name:"",
        email:"",
        phone:null,
        address:"",
        town:"",
        postcode:null,
        state:"",
        note:"",

    })
    
   

    const dispatch = useDispatch()
    const cart = useSelector((state)=>state.cart.cart)
    const totalPrice = cart.reduce((total, item) => {
        return total + item.count * item?.attributes?.price;
      }, 0);
    
    
    

  
  return (
    <div className="bg-primary-100 bg-opacity-60 w-full min-h-screen flex flex-col flex-nowrap">
    <div className="sm:w-4/5 mx-auto max-w-2xl py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8  "> 
      <div className="flex flex-col-reverse md:flex-row bg-white  rounded-2xl shadow-xl  ">
            <CheckOutForm totalPrice={totalPrice} />
     
         <div className=" flex flex-col pl-4 sm:px-6 py-6 sm:py-8 lg:col-span-4 basis-1/2 bg-gray-50 rounded-b-2xl md:rounded-none md:rounded-r-xl  ">
         <h1 className="relative text-lg uppercase text-gray-700 ">ORDER SUMMARY<span className="my-2 block h-1 w-10 bg-blue-900 sm:w-20"></span></h1>
            <div className=" max-h-[330px] overflow-auto scrollbar-thin  scrollbar-thumb-blue-900 scrollbar-track-blue-200  ">
                <div className='mr-4 pt-4'><CartList cart={cart}/></div>
                

            
            </div>
            <div className="my-5 h-0.5 w-full  bg-opacity-30"></div>
                <div className="space-y-2">
                    <hr />
                    <p className="flex justify-between text-lg font-bold text-gray-900 pr-4"><span>Total Estimated Price:</span><span>{new Intl.NumberFormat("en-MY", {
                     style: "currency",
                      currency: "MYR",
                      }).format(totalPrice)}</span></p>
                     
                </div>
<div className="relative mt-10 text-gray-900">
  <h3 className="mb-5 text-lg font-bold">Support</h3>
  <p className="text-sm font-semibold">019-839-0383  <span className="font-light text-xs">Customer Service</span></p>
  <p className="mt-1 text-sm font-semibold">teckhongcs@outlook.com <span className="font-light text-xs">Email</span></p>
  <p className="mt-2 text-xs font-medium">Call us now for order related issues</p>
</div>

      </div>
 
  </div>
      </div>
    </div>

    
   
  ) 

}

export default Checkout