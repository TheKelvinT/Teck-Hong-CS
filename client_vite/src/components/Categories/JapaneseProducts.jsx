import React from 'react'
import { useSelector } from 'react-redux'
import Pagination from '../Pagination'
import Product from '../Product'
const JapaneseProducts = ({cardStyles,currentPage,setCurrentPage, productsPerPage}) => {
  const products = useSelector((state => state.cart.products))
  let japaneseProducts = products.filter(
    (product) => product.attributes.category === "japanese"
  );
  japaneseProducts = japaneseProducts.slice().sort((a, b) => a?.attributes?.name.localeCompare(b?.attributes?.name))
  const lastProductIndex = currentPage *productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage
  const currentProducts = japaneseProducts?.slice(firstProductIndex, lastProductIndex)
  const totalPage = Math.ceil(japaneseProducts?.length/productsPerPage)
return (
   <>
    <div className={cardStyles}>
    {
          currentProducts?.map((currentProducts) => (
            <Product product={currentProducts} key={`${currentProducts.name}-${currentProducts.id}`} />
          ))}

  </div>
  <Pagination 
      totalProducts={japaneseProducts?.length} 
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

export default JapaneseProducts
