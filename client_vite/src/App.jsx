import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import AboutUs from "./scenes/about-us/AboutUs";
import ContactUs from "./scenes/contact-us/ContactUs";
import CartMenu from "./scenes/global/CartMenu";
import Footer from "./scenes/global/Footer";
import Navbar from "./scenes/global/Navbar";
import Home from "./scenes/home/Home";
import NotFound from "./scenes/fetchStatus/NotFound";
import Checkout from "./scenes/checkout/Checkout";
import CheckoutSuccess from "./scenes/fetchStatus/CheckoutSuccess";
import FormSuccess from "./scenes/fetchStatus/FormSuccess";

function App() {

  return (
    <div className="app ">
      <BrowserRouter>
      <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about-us" element={<AboutUs />}/>
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/contact-us/success" element={<FormSuccess />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/checkout/success" element={<CheckoutSuccess />} />

  {/* <Route path="checkout/success" element={<Confirmation />} />  */}

      <Route path="*" element={<NotFound/>} />
</Routes>
    <CartMenu/>
    <Footer/>
</BrowserRouter>
    </div>  
  );
}

export default App;




