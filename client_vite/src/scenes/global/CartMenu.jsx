import { useSelector, useDispatch } from "react-redux"
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { setIsCartOpen } from "../../state/cartReducer";
import { Link, useNavigate } from "react-router-dom";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CartList from "../../components/CartList";
import { useEffect } from "react";

// const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

const CartMenu = () => {
    const navigate =useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector((state)=>state.cart.cart)
    
    console.log("cart", cart)
    const isCartOpen = useSelector((state)=> state.cart.isCartOpen)
    const totalPrice = cart.reduce((total, item) => {
      return total + item.count * item?.attributes?.price;
    }, 0);

  

    // useEffect(() => {
    //   localStorage.setItem('cart',JSON.stringify(cart));
    // }, [cart])
    

      
  return (
    <Transition.Root show={isCartOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={()=> dispatch(setIsCartOpen({}))}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex sm:max-w-2/3 md:max-w-5/12 pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart ({cart.length})</Dialog.Title>
                        
                        <div className="ml-3 flex h-7 items-center">
                          
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={()=> dispatch(setIsCartOpen({}))}
                          >
                            <span className="sr-only">Close panel</span>
                            <CloseIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    
                     <CartList cart={cart}/>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{new Intl.NumberFormat("en-MY", {
                     style: "currency",
                      currency: "MYR",
                      }).format(totalPrice)}</p>

                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6 " >
                      {cart.length < 1 && (
                      <Link to="/" >
                        <button type="" onClick={()=> dispatch(setIsCartOpen({})) } className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent shadow-md  text-base font-medium text-white  bg-blue-900 py-2 px-4 tracking-wide  outline-none ring-offset-2 transition  focus:ring-2  font-md hover:bg-blue-700">
                          Shop Now!
                          </button>
                          </Link>
                          
                      )}
                      {cart.length >= 1 && (
                     <Link to="/checkout">
                       <button type="" onClick={()=> dispatch(setIsCartOpen({})) } className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent shadow-md  text-base font-medium text-white  bg-blue-900 py-2 px-4 tracking-wide  outline-none ring-offset-2 transition  focus:ring-2  font-md hover:bg-blue-700">
                          Checkout
                          </button>
                     </Link>
                          
                      )}
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          
                          <button
                            type="button"
                            className="font-medium text-blue-900 hover:text-blue-700"
                            onClick={()=> dispatch(setIsCartOpen({}))}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    
  )
}

export default CartMenu
