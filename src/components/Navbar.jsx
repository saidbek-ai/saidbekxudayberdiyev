import { useState } from "react";
import devData from "../data/devData.js";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { firstName, lastName } = devData;
  const fullName = `${firstName} ${lastName}`;

  const activeStyle = "text-green";
  const navlinkStyle = "text-white hover:text-green";

  const mobileNavLink = "mt-4 py-4 rounded-md text-lg block ";
  const activeMobileNavLink = "rounded-md text-gray text-white bg-green";

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  return (
    <div className="sm:py-6 py-2 bg-black sticky top-0 z-50">
      {/* Desktop nav */}
      <div className=" justify-between items-center max-w-[1440px] px-4 sm:px-8 md:px-12 mx-auto flex ">
        <Link to={"/"} className="text-xl font-bold text-green">
          {fullName}
        </Link>
        <div
          className="text-green hover:text-white text-2xl p-4 sm:hidden"
          onClick={handleNav}
        >
          <GiHamburgerMenu />
        </div>
        <ul className="justify-center items-center text-gray gap-4 sm:flex hidden">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? activeStyle : navlinkStyle
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/projects"}
              className={({ isActive }) =>
                isActive ? activeStyle : navlinkStyle
              }
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/support"}
              className={({ isActive }) =>
                isActive ? activeStyle : navlinkStyle
              }
            >
              Support
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                isActive ? activeStyle : navlinkStyle
              }
            >
              Sign in
            </NavLink>
          </li> */}
        </ul>
      </div>

      {/* Mobile Nav */}
      <div
        className={
          nav
            ? "h-screen px-4 mx-auto sm:hidden bg-white z-20 w-full absolute top-0 text-center flex flex-col"
            : "hidden"
        }
      >
        <div className="heading flex flex-row-reverse justify-between items-center">
          <div
            className="ml-auto text-2xl font-bold text-green p-4 mt-2"
            onClick={handleNav}
          >
            <AiOutlineClose />
          </div>
          <h2 className="text-xl font-bold text-green ">
            Saidbek Xudayberdiyev
          </h2>
        </div>

        <ul className="flex flex-col justify-center items-center text-gray gap-4 mt-12 leading-10">
          <li className="w-full" onClick={handleNav}>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? mobileNavLink + activeMobileNavLink : mobileNavLink
              }
            >
              Home
            </NavLink>
          </li>
          <li className="w-full" onClick={handleNav}>
            <NavLink
              to={"/projects"}
              className={({ isActive }) =>
                isActive ? mobileNavLink + activeMobileNavLink : mobileNavLink
              }
            >
              Projects
            </NavLink>
          </li>

          <li className="w-full" onClick={handleNav}>
            <NavLink
              to={"/support"}
              className={({ isActive }) =>
                isActive ? mobileNavLink + activeMobileNavLink : mobileNavLink
              }
            >
              Support
            </NavLink>
          </li>
          {/* <li className="w-full " onClick={handleNav}>
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                isActive ? mobileNavLink + activeMobileNavLink : mobileNavLink
              }
            >
              Sign in
            </NavLink>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
