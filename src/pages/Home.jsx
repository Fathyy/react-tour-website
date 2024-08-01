import { useState } from "react";
import { coverWomen, main, travelCover } from "../assets"
import { Banner, BannerImg, BlogsComp, Hero, Places, Testimonials } from "../components";
import Popup from "../components/Popup/Popup";

const Home = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () =>{
    setOrderPopup(!orderPopup);
  }

  return (
    <>
    <div>
      <div className="relative h-[700px]">
        <video autoPlay loop muted className="absolute
        right-0 top-0 h-[700px] w-full object-cover z-[-1]">
          <source src={main} type="video/mp4"/>
        </video>
        <Hero/>
      </div>
      <Places handleOrderPopup={handleOrderPopup}/>
      <BannerImg img ={coverWomen}/>
      <BlogsComp/>
      <Banner/>
      <BannerImg img ={travelCover}/>
      <Testimonials/>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
  
    </div>
    </>
  )
}

export default Home