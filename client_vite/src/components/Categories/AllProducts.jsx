import React from 'react'
import { useSelector } from 'react-redux'
import Pagination from '../Pagination'
import Product from '../Product'

const AllProducts = ({cardStyles,currentPage,productsPerPage,setCurrentPage}) => {
    
    let products = useSelector((state => state.cart.products))
    products = products.slice().sort((a, b) => a?.attributes?.name.localeCompare(b?.attributes?.name))
    const lastProductIndex = currentPage *productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage
    const currentProducts = products?.slice(firstProductIndex, lastProductIndex)
    console.log(currentProducts)
    const totalPage = Math.ceil(products?.length/productsPerPage)
    console.log(totalPage)
  return (
    <>
    <div className={cardStyles}>
      {
          currentProducts?.map((currentProducts) => (
            <Product product={currentProducts} key={`${currentProducts.name}-${currentProducts.id}`} />
          ))}
      </div>
      <Pagination 
        totalProducts={products?.length} 
        totalPage = {totalPage}
        productsPerPage={productsPerPage}
        currentPage = {currentPage}
        setCurrentPage={setCurrentPage}
        firstProductIndex={firstProductIndex}
        lastProductIndex={lastProductIndex}
    />
    </>
        
  )
}

export default AllProducts