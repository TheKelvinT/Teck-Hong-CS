import React from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Pagination = ({ currentPage,totalPage, totalProducts, productsPerPage, setCurrentPage,firstProductIndex, lastProductIndex}) => {
  let pages = []
  for(let i =1; i<= Math.ceil(totalPage); i++){
    pages.push(i)
  }

  const handlePrevPage = () => {
    console.log(currentPage)
    if(currentPage <= 1){
      setCurrentPage(1);
    }else{
      setCurrentPage(currentPage-1)
    }
  }
  
  const handleNextPage = () => {
    if(currentPage >= totalPage){
      setCurrentPage(totalPage);
    }else {
      setCurrentPage(currentPage+1)
    }
    }
  return (
    <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
      
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
            currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
          }`}
          
          
          
        > 
          Previous
        </a>
        <a
         onClick={handleNextPage}
         disabled={currentPage === totalPage}
         className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
          currentPage === totalPage ? "cursor-not-allowed opacity-50" : ""
        }`}
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <p className='text-sm'>Showing <span>{firstProductIndex+1}</span> to
        {(lastProductIndex > totalProducts)? <span> {totalProducts} of</span> : <span> {lastProductIndex} of </span>   } <span><strong>{totalProducts}</strong></span>  results </p>
      <div>
          <nav 
          
          className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
          <a
            onClick={handlePrevPage}
            className={`relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 cursor-pointer hover:bg-gray-50 focus:z-20 ${
              currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={currentPage === 1}
          >
            <span className="sr-only">Next</span>
            <ChevronLeftIcon className="h-5 w-5"/>
          </a>
   {pages.map((page,index) => {
    return <a
    key={index}
    className={`relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500  focus:z-10 ${
      currentPage === page
        ? "bg-secondary-400 opacity-70 text-white"
        : "hover:bg-gray-50 focus:z-20 cursor-pointer"
    }`} 
    onClick={() => {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior:'smooth' });
    }}>{page}
    </a>
   })}
      <a
            onClick={handleNextPage}
           
            className={`relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 cursor-pointer hover:bg-gray-50 focus:z-20 ${
              currentPage === totalPage ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={currentPage === totalPage}
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="h-5 w-5"/>
          </a>
   
      </nav>
    </div>
  </div>
  </div>
  )
}

export default Pagination