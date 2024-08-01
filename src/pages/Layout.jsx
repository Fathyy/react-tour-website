import { Outlet } from "react-router-dom"
import { Footer, Navbar } from "../components"
import { useState } from "react";
import Popup from "../components/Popup/Popup";

const Layout = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () =>{
    setOrderPopup(!orderPopup);
  }

  return (
    <div className="">
      <Navbar handleOrderPopup={handleOrderPopup}/>
      {/* Outlet is used to render child routes in a page */}
      <Outlet />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </div>
  )
}

export default Layout