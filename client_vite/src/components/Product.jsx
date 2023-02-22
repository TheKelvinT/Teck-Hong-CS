import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveIcon from '@mui/icons-material/Remove';
import {addToCart,increaseCount,decreaseCount} from "../state/cartReducer"
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


const Product = ({product, width}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [count, setCount] = useState(1)
    const notify =() =>     toast.success(`${count} ${product?.attributes?.unit} of ${product?.attributes?.name} added to cart`,{
      position:"top-center"
  })
    
    // const notify = () => toast.custom((t) => (
    //   <div
    //     className={`bg-gray-100 px-6 py-3 border border-gray-200 rounded-2xl shadow-sm flex text-black  items-center gap-3 ${
    //       t.visible ? 'animate-enter' : 'animate-leave'
    //     }`}
    //   >
    //     <CheckCircleIcon className='text-emerald-400' />  Added {count} {product?.attributes?.unit} of {product?.attributes?.name}  To Cart!
    //   </div>
    // ));


    
    const { categories, price, name, image, id} = product?.attributes;
    // const {
    //     data: {
    //       attributes: {
    //         formats: {
    //           thumbnail: {url},
    //         },
    //       },
    //     },
    //   } = image;

      const increaseCount = () => {
        setCount((prevCount) => {
          let newCount = prevCount + 1;
          return newCount;
        })
      }
   
      const decreaseCount = () => {
        setCount((prevCount) => {
          let newCount = prevCount - 1;
          if(newCount < 1){
            newCount = 1;
          }
          return newCount;
        })
      }

      const addToCartHandler = () => {
        dispatch(addToCart({ product: { ...product, count } }));
      
      }

      const handleMultipleClicks = () =>{
        addToCartHandler(),
        notify()
      }
     

  return (
    
    <div className=''>
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md  flex flex-col h-full">
            <div className="p-4 rounded-t-lg flex flex-col flex-auto ">
              <div className="justify-center flex">
                <img className="object-fit h-48 w-48 " src={product?.attributes?.image?.data?.attributes?.formats?.thumbnail?.url} alt={product.name} />
                </div>
                <div className=' flex flex-col flex-auto'>
                <div className='pt-4 pb-2 font-bold text-gray-800 text-md flex flex-col flex-auto'>
                <h3>{product?.attributes?.name}</h3>
                <h3>{product?.attributes?.brand}</h3>
                </div>
                <div className=' pb-4 text-gray-500 text-md flex flex-col flex-auto'>
                <p>{product?.attributes?.desc}</p>
                
                </div>
                <div className=' text-gray-500 text-md font-bold mb-4 ' >
                  <p>{new Intl.NumberFormat("en-MY", {
                     style: "currency",
                      currency: "MYR",
                      }).format(product?.attributes?.price)} / {product?.attributes?.unit} {product?.attributes?.unit === "nos"  && <span> *est</span> }</p>
                 
                </div>
                <div className='py-6 text-gray-500 font-bold '>
                    <button className='border px-2 py-1 text-center' onClick={() => decreaseCount()
                }>
                        <RemoveIcon fontSize='8px'/>
                    </button>
                    
                    <button className='py-1 px-4 border cursor-auto' >{count}</button>
                    <button className='border px-2 py-1 text-center' onClick={() =>{ increaseCount()}}>
                      
                   
                        <AddIcon fontSize='8px'/>
                    </button>

                    
                </div>
                <div>
                <button 
               onClick={handleMultipleClicks}
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-900 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none "
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <ShoppingCartOutlinedIcon sx={{ fontSize: 20 }} className="h-5 w-5 text-white group-hover:text-gray-50" aria-hidden="true" />
                  
                </span>
                Add To Cart
              </button>
            
            
             
              
                </div>
                </div>
                
            </div>
           
        </div>
        <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={20}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 1000,
  }}
/>
    </div>
  )
}

export default Product