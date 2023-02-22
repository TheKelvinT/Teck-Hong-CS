import React from 'react'
import { useSelector } from 'react-redux'
import Pagination from '../Pagination'
import Product from '../Product'

const ChickenProducts = ({cardStyles,currentPage,setCurrentPage, productsPerPage}) => {
    const products = useSelector((state => state.cart.products))
    let chickenProducts = products.filter(
        (product) => product.attributes.category == "chicken"
      );
      chickenProducts = chickenProducts.slice().sort((a, b) => a?.attributes?.name.localeCompare(b?.attributes?.name))
    const lastProductIndex = currentPage *productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage
    const currentProducts = chickenProducts?.slice(firstProductIndex, lastProductIndex)
    const totalPage = Math.ceil(chickenProducts?.length/productsPerPage)


    return (
    <>
      <div className={cardStyles}>
      {
          currentProducts?.map((currentProducts) => (
            <Product product={currentProducts} key={`${currentProducts.name}-${currentProducts.id}`} />
          ))}

    </div>
    <Pagination 
        totalProducts={chickenProducts?.length} 
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

export default ChickenProducts