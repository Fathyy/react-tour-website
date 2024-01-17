import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { footer, logo } from "../assets";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Best Places",
    link: "/best-places",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

const Footer = () => {
  return (
    <div className="py-10 relative overflow-hidden">
      <video autoPlay loop muted className="absolute
      right-0 top-0 h-full overflow-hidden w-full object-cover
      z-[-1]">
        <source src={footer} type="video/mp4" />
      </video>

      <div className="container">
        <div className="grid md:grid-cols-3
        py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
          <div>
            <h1 className="flex items-center gap-3 text-xl sm:text-3xl
            font-bold text-justify sm:text-left">
              <img src={logo} alt="" className="max-h-[60px]"/>
            </h1>
            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quidem sapiente molestias. Magni similique sunt quas autem adipisci vitae minus quis ducimus eveniet est, earum, maxime maiores recusandae modi voluptas?</p>
            <br />

            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt/>
              <p>9763353553</p>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <FaLocationArrow/>
              <p>Nairobi, Kenya</p>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt/>
              <p>9763353553</p>
            </div>

            {/* social media */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl"/>
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl"/>
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl"/>
                </a>
              </div>
            </div>
          </div>

          {/* links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            {/* first col link */}
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold text-justify sm:text-left mb-3">Important links</h1>
                <ul>
                  {FooterLinks.map(({ title, link}) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-700">
                      <Link
                      to={link}
                      onClick={()=> {
                        window.scrollTo(0, 0)
                      }}>
                        <span>&#11162;</span>
                        <span>{title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* second col link */}
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold text-justify sm:text-left mb-3">Important links</h1>
                <ul>
                  {FooterLinks.map(({ title, link}) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-700">
                      <Link
                      to={link}
                      onClick={()=> {
                        window.scrollTo(0, 0)
                      }}>
                        <span>&#11162;</span>
                        <span>{title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* third col link */}
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold text-justify sm:text-left mb-3">Important links</h1>
                <ul>
                  {FooterLinks.map(({ title, link}) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-700">
                      <Link
                      to={link}
                      onClick={()=> {
                        window.scrollTo(0, 0)
                      }}>
                        <span>&#11162;</span>
                        <span>{title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* footer copyright section */}
        <div>
          <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white">@copyright 2024 All rights reserved</div>
        </div>
      </div>
    </div>
  )
}

export default Footer