import React from 'react'
import { useSelector } from 'react-redux'
import Pagination from '../Pagination'
import Product from '../Product'

const OtherProducts = ({cardStyles,currentPage,setCurrentPage, productsPerPage}) => {
    const products = useSelector((state => state.cart.products))
    const otherProducts = products.filter(
        (product) => product.attributes.category === "others"
      );
      console.log(otherProducts)
    const lastProductIndex = currentPage *productsPerPage;
    console.log(lastProductIndex)
    const firstProductIndex = lastProductIndex - productsPerPage
    console.log(firstProductIndex)
    const currentProducts = otherProducts.slice(firstProductIndex, lastProductIndex)
    console.log(currentProducts)
   
    const totalPage = Math.ceil(otherProducts.length/productsPerPage)

  return (
     <>
      <div className={cardStyles}>
      {
          currentProducts.map((currentProducts) => (
            <Product product={currentProducts} key={`${currentProducts.name}-${currentProducts.id}`} />
          ))}

    </div>
    <Pagination 
        totalProducts={otherProducts.length} 
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
export default OtherProducts
