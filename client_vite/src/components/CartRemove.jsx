import React from 'react'
import { useDispatch } from 'react-redux'
import {removeFromCart} from "../state/cartReducer";


const CartRemove = ({ cart, product, id }) => {
   
    const dispatch = useDispatch()
    const handleCartRemove = (product)=>{
        dispatch(removeFromCart(product.id))
      }
  return (
 <button
        onClick={()=>dispatch(handleCartRemove(product))}
        type="button"
        className="font-medium text-blue-900 hover:text-blue-700"
     >
        Remove
    </button>
    
  )
}

export default CartRemove