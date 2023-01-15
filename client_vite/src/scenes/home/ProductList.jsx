import React,{useEffect, useState} from 'react'
import Product from '../../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../../state/cartReducer'


import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
const ProductList = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("all")
    const products = useSelector((state => state.cart.products))
    console.log("products", products)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
  
async function getProducts(){
    const products = await fetch("http://localhost:1337/api/products?populate=*", {method:"GET"});
    const productsJson = await products.json();
    dispatch(setProducts(productsJson.data))
}

useEffect(()=>{
    getProducts()
},[])

const beefProducts = products.filter(
    (product) => product.attributes.category === "beef"
  );
  const chickenProducts = products.filter(
    (product) => product.attributes.category == "chicken"
  );
  const lambProducts = products.filter(
    (product) => product.attributes.category === "lamb"
  );
  const porkProducts = products.filter(
    (product) => product.attributes.category === "pork"
  );
  
  const othersProducts = products.filter(
    (product) => product.attributes.category === "others"
  );
  const seafoodProducts = products.filter(
    (product) => product.attributes.category === "seafood"
  );

  const japaneseProducts = products.filter(
    (product) => product.attributes.category === "japanese"
  );




  return (
    <>
    <div className="bg-primary-100 bg-opacity-60 h-full w-full">
      <div className=" w-4/5 mx-auto max-w-2xl py-12 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <h3 className='text-center font-bold text-2xl text-blue-900 mb-8' >Our Products</h3>
        <Tab.Group>
<Tab.List  className="grid grid-cols-2 space-x-1  sm:grid-cols-4 md:grid-cols-8 font-bold rounded-xl bg-secondary-300 py-2.5 px-4 outline-none" >
<Tab className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 outline-none  text-md  text-gray-50',
                  '',
                  selected
                    ? 'bg-white/[0.22] font-bold'
                    : ' hover:bg-white/[0.22] hover:text-gray-50'
                )
              }>All Products</Tab>
<Tab className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5  outline-none text-md  text-gray-50',
                  '',
                  selected
                    ? 'bg-white/[0.22] font-bold'
                    : ' hover:bg-white/[0.22] hover:text-gray-50'
                )
              }>Chicken</Tab>

<Tab className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 outline-none  text-md  text-gray-50',
                  '',
                  selected
                    ? 'bg-white/[0.22] font-bold'
                    : ' hover:bg-white/[0.22] hover:text-gray-50'
                )
              }>Beef</Tab>
<Tab className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 outline-none  text-md  text-gray-50',
                  '',
                  selected
                    ? 'bg-white/[0.22] font-bold'
                    : ' hover:bg-white/[0.22] hover:text-gray-50'
                )
              }>Lamb</Tab>

<Tab className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-md  outline-none  text-md  text-gray-50',
                  '',
                  selected
                    ? 'bg-white/[0.22] font-bold'
                    : ' hover:bg-white/[0.22] hover:text-gray-50'
                )
              }>Seafood</Tab>
<Tab className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-md  outline-none  text-md  text-gray-50',
                  '',
                  selected
                    ? 'bg-white/[0.22] font-bold'
                    : ' hover:bg-white/[0.22] hover:text-gray-50'
                )
              }>Japanese</Tab>
<Tab className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-md outline-none  text-md  text-gray-50',
                  '',
                  selected
                    ? 'bg-white/[0.22] '
                    : ' hover:bg-white/[0.22] hover:text-gray-50'
                )
              }>Others</Tab>

</Tab.List>
<Tab.Panels className="mt-8 ">
    <Tab.Panel className="grid grid-cols-1 gap-y-10 gap-x-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-x-8">{value === "all" &&
          products.map((product) => (
            <Product product={product} key={`${product.name}-${product.id}`} />
          ))}
    </Tab.Panel>
    <Tab.Panel className="grid grid-cols-1 gap-y-10 gap-x-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-x-8">{
          chickenProducts.map((product) => (
            <Product product={product} key={`${product.name}-${product.id}`} />
          ))}
    </Tab.Panel>

    <Tab.Panel className="grid grid-cols-1 gap-y-10 gap-x-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-x-8"> {
          beefProducts.map((product) => (
            <Product product={product} key={`${product.name}-${product.id}`} />
          ))}
    </Tab.Panel>
    <Tab.Panel className="grid grid-cols-1 gap-y-10 gap-x-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-x-8"> {
          lambProducts.map((product) => (
            <Product product={product} key={`${product.name}-${product.id}`} />
          ))}
    </Tab.Panel>
    <Tab.Panel className="grid grid-cols-1 gap-y-10 gap-x-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-x-8"> {
          seafoodProducts.map((product) => (
            <Product product={product} key={`${product.name}-${product.id}`} />
          ))}
    </Tab.Panel>
    <Tab.Panel className="grid grid-cols-1 gap-y-10 gap-x-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-x-8"> {
          japaneseProducts.map((product) => (
            <Product product={product} key={`${product.name}-${product.id}`} />
          ))}
    </Tab.Panel>
    <Tab.Panel className="grid grid-cols-1 gap-y-10 gap-x-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-x-8"> {
          othersProducts.map((product) => (
            <Product product={product} key={`${product.name}-${product.id}`} />
          ))}
    </Tab.Panel>
    </Tab.Panels>
    
</Tab.Group>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          
        </div>
      </div>
    </div>




  
  </>
  )
}

export default ProductList
