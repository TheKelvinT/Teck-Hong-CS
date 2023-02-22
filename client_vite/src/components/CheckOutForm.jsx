import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { resetCart } from '../state/cartReducer';
import { useDispatch, useSelector } from 'react-redux'

const CheckOutForm = ({ totalPrice}) => {
  
  // Style Summart
  const labelStyle = 'text-xs font-semibold text-gray-500'
  const inputStyle='mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-blue-700'
  const paraStyle = 'mt-10 text-center text-sm font-semibold text-gray-500'

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/checkout/success'; 
    navigate(path);
  }
  const handleResetCart = ()=>{
    dispatch(resetCart())
    }

  const notify =() => toast.error("Invalid or Incomplete Form Input")
  const [error, setError] = useState("");
  const cart = useSelector((state)=>state.cart.cart)
  const dispatch =useDispatch()
  const [data, setData] = useState({
    name:"",
    email:"",
    phone:null,
    address:"",
    town:"",
    postcode:null,
    state:"",
    note:"",

})
  function onChange(e) {
    // set the key = to the name property equal to the value typed
    const updateItem = (data[e.target.name] = e.target.value);
    // update the state data object
    setData({ ...data, updateItem });
  }

  async function submitOrder(event) {
    event.preventDefault()
    const orderCart = cart.map(cart => ({
        name: cart.attributes.name,
        quantity: cart.count,
        unit: cart.attributes.unit,
        price: cart.attributes.price,
        category: cart.attributes.category,
        image: cart.attributes.image.data.attributes.formats.thumbnail.url
      }));
     
try {
  const response = await fetch("https://teckhongcoldstorage.up.railway.app/api/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json",
    
    Authorization :'Bearer e52e422482c1a1b88c59729acb698d513de14e995ae368df3aa941524b069aa320967f1c7e7f61a9d13fa9af62ea7949b9ddb1d67bb9804e4e7ed068237fa061e2c5a7c965693e3526929c146d93d5dba2124099a5e0b23bc25a352ddd907be7ecd81127dce415f0c94901761232c58affa84cc5eb0200ef8af57d50624cf750'},
    body: JSON.stringify({
    data:{
      name: data.name,
      email: data.email,
      phone:data.phone,
      address: data.address,
      town: data.town,
      postcode: data.postcode,
      state: data.state,
      note: data.note,
      amount: totalPrice,
      ordercart: orderCart
    }
    

    })
  });

  if (!response.ok) {
    notify()
    
    setError(response.statusText);
  } else {
    handleResetCart()
    routeChange()
    
    
  }
} catch (error) {

}

  
}

  return (
    <div className=" py-6 px-6 sm:py-8 lg:col-span-6 basis-1/2 ">
    <div className="mx-auto w-full max-w-lg">
        <h1 className="relative text-lg uppercase text-gray-700 ">Contact Information<span className="mt-2 block h-1 w-10 bg-blue-900 sm:w-20"></span></h1>
      
        <form method="POST"  className="mt-8 flex flex-col space-y-6" >
             <div>
             <label htmlFor="name" className={labelStyle}>Name</label>
             <input type="text" id="name" name="name" placeholder="John Doe" required onChange={onChange} className={inputStyle} />
            </div>
            <div>
                <label htmlFor="email" className={labelStyle}>Email</label>
                <input type="email" id="email" name="email"  placeholder="john.capler@fang.com" onChange={onChange} className={inputStyle} />
            </div>
            <div>
                <label htmlFor="phone" className={labelStyle}>Phone Number</label>
                <input type="number" id="phone" name="phone" required onChange={onChange} onInput={(e) => e.target.value = e.target.value.slice(0, 12)}  placeholder="012 345 6789" className={inputStyle} />
            </div>
            {/* <div>
                <label htmlFor="address" className={labelStyle}>Delivery Address</label>
                <input type="text" id="address" name="address" required onChange={onChange} placeholder="Address" className={inputStyle} />
            </div>
             <div className='flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8'>
             <div>
                <label htmlFor="town" className={labelStyle}>Town</label>
                <input type="text" id="town" name="town" required onChange={onChange} placeholder="Sri Aman" className={inputStyle} />
            </div>
            <div>
                <label htmlFor="postcode" className={labelStyle}>Post Code</label>
                <input type="number" id="postcode" name="postcode" required onChange={onChange} onInput={(e) => e.target.value = e.target.value.slice(0, 5)}  placeholder="47800" className={inputStyle} />
            </div>
            <div>
                <label htmlFor="state" className={labelStyle}>State</label>
                <input type="text" id="state" name="state" placeholder="State" onChange={onChange} required className={inputStyle} />
            </div>
             </div> */}
            
             <div>
             <label htmlFor="state" className={labelStyle}>Additional Note</label>
                <textarea type="note" id="note" name="note" placeholder="Description" onChange={onChange} cols="30" rows="4" className={inputStyle} />
            </div>
            
            <div>
           
            {cart?.length < 1 && (
            <div>
                <p className={paraStyle}>Your order summary is empty. Click below to shop now!</p>
            <Link to="/">
            <button type="submit" className="mt-4 inline-flex w-full items-center justify-center rounded bg-blue-900 hover:bg-blue-700 py-2 px-4 tracking-wide text-white outline-none ring-offset-2 transition focus:ring-2 focus:ring-teal-500 sm:text-lg shadow-md">Shop Now!</button>
            </Link>
            </div>)}
            {cart?.length >= 1 && (
                <div>
                 {/* <p className={paraStyle}>By placing this order you agree to the <Link to="/policy" className="whitespace-nowrap text-blue-700 underline hover:text-blue-900">Terms and Conditions</Link></p> */}
            <button type="submit"  onClick={submitOrder} className="mt-4 inline-flex w-full items-center justify-center rounded bg-blue-900 hover:bg-blue-700 py-2 px-4 tracking-wide text-white outline-none ring-offset-2 transition focus:ring-2 focus:ring-teal-500 sm:text-lg shadow-md">Place Order</button>
           
            </div>)}
            </div>
        </form>
        <Toaster
        className="text-xs"
  position="top-center"
  reverseOrder={false}
/>
    </div>
</div>
  )
}

export default CheckOutForm
