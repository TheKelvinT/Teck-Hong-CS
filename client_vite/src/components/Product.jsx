import {useState} from 'react'
import { useDispatch } from 'react-redux'
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import {addToCart} from "../state/cartReducer"
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Product = ({product, width}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [count, setCount] = useState(1)
    const { categories, price, name, image} = product?.attributes;
    const {
        data: {
          attributes: {
            formats: {
              thumbnail: {url},
            },
          },
        },
      } = image;

    
      const notify = () => toast("Product added to cart! "); 

  return (
    
    <div className=''>
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 rounded-t-lg ">
                <img className="object-cover h-48 w-full" src={`http://localhost:1337${ url }`} alt={product.name} />
                
                <div className='py-4 font-bold text-gray-800 text-md  '>
                <h3> {product?.attributes?.brand} {product?.attributes?.name}</h3>
                
                </div>
                <div className=' text-gray-500 text-md' >
                    <p>RM {product?.attributes?.price} / {product?.attributes?.unit}</p>
                </div>
                <div className='py-4 text-gray-500 font-bold'>
                    <button className='border px-2 py-1 text-center' onClick={() =>
                  setCount((prev) => (prev === 1 ? 1 : prev - 1))
                }>
                        <RemoveIcon fontSize='8px'/>
                    </button>
                    
                    <button className='py-1 px-4 border cursor-auto' >{count}</button>
                    <button className='border px-2 py-1 text-center' onClick={() => setCount((prev) => prev + 1)}>
                        <AddIcon fontSize='8px'/>
                    </button>

                    
                </div>
                <div>
                <button
               onClick={() => {
                dispatch(addToCart({ product: { ...product, count } }));

              }}
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-900 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none "
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <ShoppingCartOutlinedIcon sx={{ fontSize: 20 }} className="h-5 w-5 text-white group-hover:text-gray-50" aria-hidden="true" />
                  
                </span>
                Add to Cart
              </button>
              
                </div>
                
            </div>
           
        </div>
    
    </div>
  )
}

export default Product