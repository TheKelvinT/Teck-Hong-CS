import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AboutUs from "./scenes/about-us/AboutUs";
import ContactUs from "./scenes/contact-us/ContactUs";
import CartMenu from "./scenes/global/CartMenu";
import Footer from "./scenes/global/Footer";
import Navbar from "./scenes/global/Navbar";
import CatNav from "./scenes/home/CatBar";
import Home from "./scenes/home/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Toaster />
      <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about-us" element={<AboutUs />}/>
    <Route path="/contact-us" element={<ContactUs />} />
  {/* <Route path="checkout/success" element={<Confirmation />} />  */}
</Routes>
    <CartMenu/>
    <Footer/>
</BrowserRouter>
    </div>  
  );
}

export default App;




