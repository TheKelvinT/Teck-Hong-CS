import React from 'react'
import { useSelector } from 'react-redux'
import Pagination from '../Pagination'
import Product from '../Product'

const SeafoodProducts =({cardStyles,currentPage,setCurrentPage, productsPerPage}) => {
    const products = useSelector((state => state.cart.products))
    const seafoodProducts = products.filter(
        (product) => product.attributes.category === "seafood"
      );
    const lastProductIndex = currentPage *productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage
    const currentProducts = seafoodProducts.slice(firstProductIndex, lastProductIndex)
    const totalPage = Math.ceil(seafoodProducts.length/productsPerPage)
  return (
     <>
      <div className={cardStyles}>
      {
          currentProducts.map((currentProducts) => (
            <Product product={currentProducts} key={`${currentProducts.name}-${currentProducts.id}`} />
          ))}

    </div>
    <Pagination 
        totalProducts={seafoodProducts.length} 
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

export default SeafoodProducts