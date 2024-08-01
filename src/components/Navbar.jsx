import { Link, NavLink } from "react-router-dom"
import { logo } from "../assets";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Best Places",
    link: "/best-places",
  },
];

const DropdownLinks = [
  {
    name: "Our Services",
    link: "/#services",
  },
  {
    name: "Top Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/#location",
  },
];


const Navbar = ({ handleOrderPopup }) => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = ()=>{
    setShowMenu(!showMenu)
  }
  
  return (
    <>
    <div className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md">
      <div className="bg-gradient-to-r from-primary
      to-secondary text-white">
        <div className="container py-[2px] sm:block hidden">
          <div className="flex justify-between items-center">
            <p className="text-sm">20% off on next booking</p>
            <p>Mobile No, 0712345678</p>
          </div>

        </div>
      </div>

      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <div className="flex items-center gap-4  font-bold text-2">
            <Link to="/" onClick={()=> window.scrollTo(0, 0)}>
              <img src={logo} alt="" className="h-16" />
            </Link>
          </div>

          {/*Desktop Navlinks section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              <li className="py-4">
                <NavLink activeClassName = "active"
                 to="/" onClick={()=> window.scrollTo(0, 0)}>
                  Home
                </NavLink>
              </li>

              <li className="py-4">
                <NavLink activeClassName = "active" 
                to="/blogs">
                  Blogs
                </NavLink>
              </li>

              <li className="py-4">
                <NavLink activeClassName = "active"
                 to="/places">
                  Best Places
                </NavLink>
              </li>

              <li className="py-4">
                <NavLink activeClassName = "active"
                to="/about">
                  About
                </NavLink>
              </li>

              {/* Dropdown section */}
              <li className="relative group cursor-pointer">
                  <a
                    href="/#home"
                    className="flex h-[72px] items-center gap-[2px]">
                    Quick Links{" "}
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
          
                <div className="absolute -left-9 z-[9999]
                hidden group-hover:block shadow-md text-black
                w-[150px] bg-white p-2 rounded-md">
                  <ul className="space-y-3">
                    {DropdownLinks.map((data)=> {
                      return (
                        <li key={data.name}>
                        <a href={data.link} className="inline-block
                        w-full rounded-md p-2 hover:bg-primary/20">{data.name}</a>
                        </li>
                      );
                    })}
                  </ul>

                </div>
              </li>
            </ul>
          </div>

          {/* Book now button */}
          <div className="flex items-center gap-4">
            <button onClick={() => handleOrderPopup()}
            className="bg-gradient-to-r from-primary
          to-secondary hover:bg-bg-gradient-to-r  hover:from-secondary hover:to-primary
           transition-all duration-600 text-white px-3 py-1 rounded-full">Book Now</button>

       {/* Mobile Hamburger menu */}
       <div className="md:hidden block">
        {showMenu ? (
          <HiMenuAlt1 onClick={toggleMenu}
           className="cursor-pointer transition-all"
           size={30}/>
        ) : (

          <HiMenuAlt3 onClick={toggleMenu}
          className="cursor-pointer transition-all"
           size={30}/>

        )}
       </div>
          </div>

        </div>
      </div>

      <ResponsiveMenu setShowMenu={setShowMenu}
      showMenu={showMenu}/>
    </div>
    </>
  )
}

export default Navbar