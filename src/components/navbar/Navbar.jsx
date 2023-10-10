import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose, MdLogout } from "react-icons/md";
// import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
// import {logo} from "../../assets/index"
import { navLinksdata } from "../../constants";
import { useAuth } from "../../lib/AuthContext";
import Login from "../user/Login";
import Register from "../user/Register";

const Navbar = () => {
  const { user, logoutUser } = useAuth();

  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="nav w-full h-[7rem] sticky top-0 z-[999] bg-bodyColor mx-auto flex gap-[8rem] justify-center items-center font-titleFont">
      <div className="logo1">
        <h3 className="text tracking-[.5rem] sm:text-[16px]">
          LANGENI <span className="text-[#fa9db7]">FARMING</span>
        </h3>
      </div>
      <div>
        <ul className=" mdl:inline-flex items-center gap-6 lg:gap-10 navLinks">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base  text-gray-700 text-[20px] tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                className="py-[5px] px-[10px] font-bold"
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-99}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
       <div className="flex  px-5 gap-8 navbarSml">
       <h5 className="text1 tracking-[.5rem] logo sm:text-[16px]">
          LANGENI <span className="text-[#fa9db7]">FARMING</span>
        </h5>
       <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-gray-800 text-white w-10 h-10 inline-flex items-center justify-center rounded-full cursor-pointer"
        >
          <FiMenu />
        </span>
       </div>
        {showMenu && (
          <div className="w-[75%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <h3 className="text-[24px] font-[800] text-[#12265a] tracking-[.5rem]">
                  LANGENI <span className="text-green-600">FARMING</span>
                </h3>
    
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base text-[34px] text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      className="py-[5px] px-[10px] font-bold"
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4"></div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
            {user ? (
        <div className="flex items-center gap-2 ">
        <button className="bg-[#141518] py-1 px-4 rounded-md flex items-center hover:bg-[#1a1b20] text-[#9ca3af] text-[18px]" onClick={logoutUser}><MdLogout/><span> Logout</span></button>
        <div className="circle-wrapper ml-[40px]">
          <div className="success circle"></div>
          <div className="icon">
            <h1 className="text-white">{user.name.charAt(0)}</h1>
          </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Login /> <span className="font-[800]">OR</span>
          <Register/>
        </div>
      )}
          </div>
          
        )}
      </div>
      {user ? (
        <div className="flex items-center gap-2 navRight ">
        <button className="bg-[#141518] py-1 px-4 rounded-md flex items-center hover:bg-[#1a1b20] text-[#9ca3af] text-[18px]" onClick={logoutUser}><MdLogout/><span> Logout</span></button>
        <div className="circle-wrapper ml-[40px]">
          <div className="success circle"></div>
          <div className="icon">
            <h1 className="text-white">{user.name.charAt(0)}</h1>
          </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-4 navRight ">
          <Login /> <span className="font-[800]">OR</span>
          <Register/>
        </div>
      )}
    </div>
  );
};

export default Navbar;

// {user.name.charAt(0)}
