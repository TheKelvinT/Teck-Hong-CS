import React from 'react'
import { useSelector } from 'react-redux'
import Pagination from '../Pagination'
import Product from '../Product'

const AllProducts = ({cardStyles,currentPage,productsPerPage,setCurrentPage}) => {
    
    const products = useSelector((state => state.cart.products))
    const lastProductIndex = currentPage *productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage
    const currentProducts = products.slice(firstProductIndex, lastProductIndex)
    const totalPage = Math.ceil(products.length/productsPerPage)
  return (
    <>
    <div className={cardStyles}>
      {
          currentProducts.map((currentProducts) => (
            <Product product={currentProducts} key={`${currentProducts.name}-${currentProducts.id}`} />
          ))}
      </div>
      <Pagination 
        totalProducts={products.length} 
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