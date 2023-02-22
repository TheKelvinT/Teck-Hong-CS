import React,{useEffect, useState} from 'react'
import Product from '../../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../../state/cartReducer'
import { Tab } from '@headlessui/react'
import ErrorPage from '../fetchStatus/ErrorPage'
import LoadingProducts from '../fetchStatus/LoadingProducts'
import Pagination from '../../components/Pagination'
import AllProducts from '../../components/Categories/AllProducts'
import ChickenProducts from '../../components/Categories/ChickenProducts'
import BeefProducts from '../../components/Categories/BeefProducts'
import LambProducts from '../../components/Categories/LambProducts'
import SeafoodProducts from '../../components/Categories/SeafoodProducts'
import JapaneseProducts from '../../components/Categories/JapaneseProducts'
import OtherProducts from '../../components/Categories/OtherProducts'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
const ProductList = () => {
  
  const products = useSelector((state => state.cart.products))
    const dispatch = useDispatch();

    // Loading & Error
    const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

  //  Pagination
   const [width, setWidth] = useState(window.innerWidth);
   const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage, setProductsPerPage] = useState(20)
   
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    useEffect(() => {
      if (width >= 1100) {
        setProductsPerPage(20);
      } else if (width >= 768 && width < 1210) {
        setProductsPerPage(15);
      } else if (width <768){
        setProductsPerPage(10);
      }
    }, [width]);

    const resetPagination = ()=> {
      setCurrentPage(1)
    }

  const cardStyles=` grid grid-cols-1 gap-y-10 gap-x-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-x-8 col-span-1 `
  const tabStyles= ({ selected }) =>
  classNames(
    'w-full rounded-lg py-2.5 px-4 whitespace-nowrap outline-none text-md  text-gray-50',
    '',
    selected
      ? 'bg-white/[0.22] font-bold'
      : ' hover:bg-white/[0.22] hover:text-gray-50'
  )
   
async function getProducts(){
    setIsLoading(true);
    const pause = (duration) => {
      return new Promise((resolve) => {
        setTimeout(resolve, duration);
      });
    };
    try {
      const res = await fetch( "https://teckhongcoldstorage.up.railway.app/api/products?populate=*" , {method:"GET"});
      // await pause(3000)
      const productsJson = await res.json();
      dispatch(setProducts(productsJson.data))
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }
   
useEffect(()=>{
    getProducts()
},[])

if (error) {
  return <ErrorPage error ={error}/> ;
}

if (isLoading) {
  return <LoadingProducts/>;
}

  return (
    <>
    <div className="bg-primary-100 bg-opacity-60 grow w-full min-h-screen flex flex-col flex-nowrap">
      <div className="sm:w-11/12 md:w-4/5 mx-auto max-w-2xl py-12 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8 ">
      <h3 className='text-center font-bold text-2xl text-blue-900 mb-8' >Our Products</h3>
        <Tab.Group>
          <Tab.List  className="flex font-bold rounded-l-xl sm:rounded-xl gap-x-4 md:gap-x-6 overflow-x-auto bg-secondary-300 py-2.5 px-4 outline-none" >
            <Tab className={tabStyles} onClick={resetPagination} >All Products</Tab>
            <Tab className={tabStyles} onClick={resetPagination}>Chicken</Tab>
            <Tab className={tabStyles} onClick={resetPagination}>Beef</Tab>
            <Tab className={tabStyles} onClick={resetPagination}>Lamb</Tab>
            <Tab className={tabStyles} onClick={resetPagination}>Seafood</Tab>
            <Tab className={tabStyles} onClick={resetPagination}>Japanese</Tab>
            <Tab className={tabStyles} onClick={resetPagination}>Miscellaneous</Tab> 
 
          </Tab.List> 
          <Tab.Panels className="my-4 " > 
              <Tab.Panel className="space-y-4"  > 
                <AllProducts cardStyles ={cardStyles} currentPage={currentPage} setCurrentPage={setCurrentPage} productsPerPage={productsPerPage}/> 

              </Tab.Panel>

              <Tab.Panel className="space-y-4">
                  <ChickenProducts cardStyles ={cardStyles} currentPage={currentPage} setCurrentPage={setCurrentPage} productsPerPage={productsPerPage}/>
              </Tab.Panel>
            
              <Tab.Panel className="space-y-4"> 
                    <BeefProducts cardStyles ={cardStyles} currentPage={currentPage} setCurrentPage={setCurrentPage} productsPerPage={productsPerPage}/>
              </Tab.Panel>

              <Tab.Panel className="space-y-4"> 
                    <LambProducts cardStyles ={cardStyles} currentPage={currentPage} setCurrentPage={setCurrentPage} productsPerPage={productsPerPage}/>
              </Tab.Panel>
              <Tab.Panel className="space-y-4"> 
                    <SeafoodProducts cardStyles ={cardStyles} currentPage={currentPage} setCurrentPage={setCurrentPage} productsPerPage={productsPerPage}/>
              </Tab.Panel>
              <Tab.Panel className="space-y-4"> 
                    <JapaneseProducts cardStyles ={cardStyles} currentPage={currentPage} setCurrentPage={setCurrentPage} productsPerPage={productsPerPage}/>
              </Tab.Panel>
              <Tab.Panel className="space-y-4"> 
                    <OtherProducts cardStyles ={cardStyles} currentPage={currentPage} setCurrentPage={setCurrentPage} productsPerPage={productsPerPage}/>
              </Tab.Panel>
              </Tab.Panels>
        </Tab.Group>
        <div className='italic'>
        <p>*est - Estimated Price only. Final price depends on actual weight.</p>
       </div>
      </div>
      
    </div>

  </>
  )
}
export default ProductList
