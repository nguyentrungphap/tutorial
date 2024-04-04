import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    const resizeListener = window.addEventListener("resize", showButton);
    return () => window.removeEventListener("resize", resizeListener);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-custom-dark to-custom-darker h-20 flex justify-center items-center text-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <Link
          to="/Home"
          className="flex items-center text-white no-underline text-2xl"
          onClick={closeMobileMenu}
        >
          TRVL <i className="fab fa-typo3 ml-2 text-2xl" />
        </Link>
        <div className="lg:hidden" onClick={handleClick}>
          {click ? (
            <CloseIcon className="text-white text-2xl" />
          ) : (
            <MenuIcon className="text-white text-2xl" />
          )}
        </div>
        <ul
          className={`${
            click ? "flex" : "hidden"
          } absolute flex-col top-full left-0 w-full bg-gray-800 py-8 lg:static lg:bg-transparent lg:flex lg:flex-row lg:space-x-4 lg:py-0`}
        >
          <li className="nav-item">
            <Link
              to="/Home"
              className="nav-links text-white px-3 py-2 hover:bg-white hover:text-gray-800 transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Products"
              className="nav-links text-white px-3 py-2 hover:bg-white hover:text-gray-800 transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Services"
              className="nav-links text-white px-3 py-2 hover:bg-white hover:text-gray-800 transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li className="nav-item"></li>
          {/* ... other nav items */}
        </ul>
        {button && (
          <Link
            to="/SignUp"
            className="inline-block px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:hidden lg:block"
          >
            Sign Up
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
