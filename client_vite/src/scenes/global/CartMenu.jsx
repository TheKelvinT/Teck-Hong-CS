import { useSelector, useDispatch } from "react-redux"
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { decreaseCount,increaseCount, removeFromCart, setIsCartOpen } from "../../state/cartReducer";
import { useNavigate } from "react-router-dom";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const CartMenu = () => {
    const navigate =useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector((state)=>state.cart.cart)
    
    console.log("cart", cart)
    const isCartOpen = useSelector((state)=> state.cart.isCartOpen)
    const totalPrice = cart.reduce((total, item) => {
      return total + item.count * item.attributes.price;
    }, 0);

      
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
            <div className="pointer-events-none fixed inset-y-0 right-0 flex sm:max-w-2/3 md:max-w-4/12 pl-10">
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
                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
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

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                          {cart.map((product) => (
                              <li key={product?.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={`http://localhost:1337${product?.attributes?.image?.data?.attributes?.formats?.thumbnail?.url}`}
                                    alt={product?.name}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        {product?.attributes?.name}
                                      </h3>
                                      <p className="ml-4">RM {product?.attributes?.price*product?.count} </p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500 capitalize">
                                      {product?.attributes?.category}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    {/* <p className="text-gray-500">Qty: {product?.count}</p> */}
                                     <div className='py-4 text-gray-500 font-bold'>
                    <button className='border px-2 py-1 text-center' onClick={() =>
                            dispatch(decreaseCount({ id: product.id }))
                          }>
                        <RemoveIcon fontSize='8px'/>
                    </button>
                    
                    <button className='py-1 px-4 border cursor-auto' >{product.count}</button>
                    <button className='border px-2 py-1 text-center' onClick={() =>
                            dispatch(increaseCount({ id: product.id }))
                          }>
                        <AddIcon fontSize='8px'/>
                    </button>

                    
                </div>
                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-blue-900 hover:text-blue-700"
                                      
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                           ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>RM {totalPrice}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-blue-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                        >
                          Checkout
                        </a>
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
    




    // <div className={`bg-black/40 fixed z-10 w-full h-full left-0 top-0 overflow-auto ${isCartOpen ? "block"  : "hidden"} `}>
    //     <div className="fixed right-0 bottom-0 min-w-1/4 h-full bg-gray-50/100">
    //         <div className="p-8 overflow-auto h-full">
    //              {/* HEADER */}
    //             <div className="px-4 justify-between flex items-center gap-20 text-blue-900 ">
    //                 <h2 className="text-xl font-bold ">SHOPPING CART ({cart.length})</h2>
    //                 <button onClick={()=> dispatch(setIsCartOpen({}))}>
    //                     <CloseIcon/>
    //                 </button>
    //             </div>
    //             <hr className="h-1 my-4 bg-blue-900/40"/>
    //              {/* CART LIST */}
    //             {cart.map((item)=> (
    //                 <div 
    //                 key={`${product.?.name}-${product.id}`}>
    //                     <div className="px-2 flex justify-between">
    //                         <div className="basis-2/5 w-[123px] h-[164px]">
    //                             <img src={`http://localhost:1337${product?.attributes?.image?.data?.attributes?.formats?.medium?.url}`} alt={product?.name} />
    //                         </div>
    //                         <div className="basis 3/5">
    //                             <div className="mb-2">
    //                                 <h3 className="font-bold text-md">{product?.attribute?.name}</h3>
    //                                 <button onClick={() =>
    //                                                     dispatch(removeFromCart({ id: item.id }))} className="text-red">
    //                                     <DeleteOutlineIcon/>
    //                                 </button>
    //                             </div>
    //                             {/* Quantity */}
    //                             <div className="mx-2">
    //                                   <div className="flex items-center border-solid border-2 border-gray-600">
    //                                     <button onClick={() => dispatch(decreaseCount({ id: item.id }))}>            
    //                                         <RemoveIcon/>
    //                                     </button>
    //                                     <span>{item.count}</span>
    //                                     <button onClick={() => dispatch(increaseCount({ id: item.id }))}>            
    //                                         <AddIcon/>
    //                                     </button>
    //                                     </div>  
    //                                     <div>
    //                                         <p className="font-bold">RM {item.attributes.price}</p>
    //                                     </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <hr className="h-1 my-4 bg-blue-900/40"/>
    //                 </div>
    //             ))}
             
    //          <div className="px-4">
    //             <div className="py-4 flex justify-between">
    //                 <p className="font-bold">SUBTOTAL</p>
    //                 <p className="font-bold">RM {totalPrice}</p>
    //             </div>
    //             <button className="bg-orange-400 w-full text-gray-50 px-4 py-2 font-bold"
    //                     onClick={() => {
    //                         navigate("/checkout");
    //                         dispatch(setIsCartOpen({}));
    //                       }}>CHECKOUT</button>
    //         </div>    
    //         </div>
            
    //         {/* ACTIONS */}
           
    //     </div>

    // </div>
  )
}

export default CartMenu
