import React from 'react'

const CartItems = () => {
    
  return (
    <div className="mt-8">
    <div className="flow-root">
      <ul role="list" className="-my-6 divide-y divide-gray-200">
      {cart.map((product) => (
          <li key={product?.id} className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={`http://localhost:1337${product?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
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
                  <p className="ml-4">{product?.attribute?.price}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500"></p>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <p className="text-gray-500">Qty {product?.count}</p>

                <div className="flex">
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
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
  )
}

export default CartItems