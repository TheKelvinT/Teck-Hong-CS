import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

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
  const notify =() => toast.error("Invalid or Incomplete Form Input")
  const [error, setError] = useState("");
  const cart = useSelector((state)=>state.cart.cart)
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
  const response = await fetch("http://localhost:1337/api/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json",
    Authorization :'Bearer f49213764c1b6721e8d1ea4de76a998221a1453262a8242e43dd2fc6803ef10818f6d291775aa0ba80c109eee9453645f524ae1e8c9017ead6b5dc6bc8b071351d4d7b6508472c7d5fd1dc939303347ce0ded776d75a72278ca92a406c00ef529721649d820ab394204ae7c74ffd437a70dfe9ce7bf9b152d891c1cdc92cd0a5'},
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
    routeChange()
  }
} catch (error) {
  console.log(error)
}

  
}
  return (
    <div className=" py-6 px-6 sm:py-8 lg:col-span-6 basis-1/2 ">
    <div className="mx-auto w-full max-w-lg">
        <h1 className="relative text-lg uppercase text-gray-700 ">Contact Information<span className="mt-2 block h-1 w-10 bg-blue-900 sm:w-20"></span></h1>
      
        <form method="POST"  className="mt-8 flex flex-col space-y-4" >
             <div>
             <label htmlFor="name" className={labelStyle}>Name</label>
             <input type="text" id="name" name="name" placeholder="John Doe" required onChange={onChange} className={inputStyle} />
            </div>
            <div>
                <label htmlFor="email" className={labelStyle}>Email</label>
                <input type="email" id="email" name="email"  placeholder="john.capler@fang.com" onChange={onChange} className={inputStyle} required />
            </div>
            <div>
                <label htmlFor="phone" className={labelStyle}>Phone Number</label>
                <input type="number" id="phone" name="phone" required onChange={onChange} onInput={(e) => e.target.value = e.target.value.slice(0, 12)}  placeholder="012 345 6789" className={inputStyle} />
            </div>
            <div>
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
             </div>
            
             <div>
             <label htmlFor="state" className={labelStyle}>Additional Note</label>
                <textarea type="note" id="note" name="note" placeholder="Description" onChange={onChange} cols="30" rows="4" className={inputStyle} />
            </div>
            
            <div>
           
            {cart.length < 1 && (
            <div>
                <p className={paraStyle}>Your order summary is empty. Click below to shop now!</p>
            <Link to="/">
            <button type="submit" className="mt-4 inline-flex w-full items-center justify-center rounded bg-blue-900 hover:bg-blue-700 py-2 px-4 tracking-wide text-white outline-none ring-offset-2 transition focus:ring-2 focus:ring-teal-500 sm:text-lg shadow-md">Shop Now!</button>
            </Link>
            </div>)}
            {cart.length >= 1 && (
                <div>
                 <p className={paraStyle}>By placing this order you agree to the <a href="#" className="whitespace-nowrap text-blue-700 underline hover:text-blue-900">Terms and Conditions</a></p>
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
