import React from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useSelector, useDispatch } from "react-redux"
import { decreaseCount,increaseCount, removeFromCart} from "../state/cartReducer";
import CartRemove from './CartRemove';


const CartList = ({cart}) => {
    const dispatch = useDispatch()
    const handleCartRemove = (product)=>{
        dispatch(removeFromCart(product.id))
      }
  return (
    <div className="mt-8">
    <div className="flow-root">
      <ul role="list"   className="-my-6 divide-y divide-gray-200">
      {cart.map((product, index) => (
          <li   key={product?.id || index} className="flex py-6">
            <div  key={product?.id} className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md ">
              <img
                key={product.id}
                src={`http://localhost:1337${product?.attributes?.image?.data?.attributes?.formats?.thumbnail?.url}`}
                alt={product?.name}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-md  text-gray-900">
                  <h3 key={product?.id}>
                    {product?.attributes?.name}
                  </h3>
                  <p className="ml-4" key={product?.id}>{new Intl.NumberFormat("en-MY", {
                  style: "currency",
                  currency: "MYR",
                   }).format(product?.attributes?.price*product?.count)} </p>
                </div>
                <p className="mt-1 text-sm text-gray-600 capitalize" key={product?.id}>
                  {product?.attributes?.category}
                </p>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                 <div className='py-4 text-gray-600 font-bold'>
            <button className='border px-2 py-1 text-center' onClick={() =>
        dispatch(decreaseCount({ id: product.id }))
      }>
    <RemoveIcon fontSize='8px'/>
</button>

<button className='py-1 px-4 border cursor-auto' key={product?.id} >{product.count}</button>
<button className='border px-2 py-1 text-center' onClick={() =>
        dispatch(increaseCount({ id: product.id }))
      }>
    <AddIcon fontSize='8px'/>
</button>


</div>
                <div className="flex">
                  <CartRemove product={product} id={product.id}/>
                </div>
              </div>
            </div>
          </li>
       ))}
      </ul>
    </div>
  </div>
  )
}

export default CartList