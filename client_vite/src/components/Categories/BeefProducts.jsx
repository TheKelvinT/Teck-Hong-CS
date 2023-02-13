import React from 'react'
import { useSelector } from 'react-redux'
import Pagination from '../Pagination'
import Product from '../Product'

const BeefProducts = ({cardStyles,currentPage,setCurrentPage, productsPerPage}) => {
    const products = useSelector((state => state.cart.products))
    const beefProducts = products.filter(
        (product) => product.attributes.category === "beef"
      );
    const lastProductIndex = currentPage *productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage
    const currentProducts = beefProducts.slice(firstProductIndex, lastProductIndex)
    const totalPage = Math.ceil(beefProducts.length/productsPerPage)
  return (
     <>
      <div className={cardStyles}>
      {
          currentProducts.map((currentProducts) => (
            <Product product={currentProducts} key={`${currentProducts.name}-${currentProducts.id}`} />
          ))}

    </div>
    <Pagination 
        totalProducts={beefProducts.length} 
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

export default BeefProducts