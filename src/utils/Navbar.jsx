import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navbar } from "../data/Main";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <>
      <nav className={`w-full bg-white sticky top-0 z-10 transition-all`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:w-full lg:px-8 flex justify-between">
          <div className="">
            <img src={navbar.logo} alt="Company Logo" className="h-[70px]" />
            {/* <div>
                <h1 className="text-xl font-bold">{navbar.text}</h1>
                <p className="text-sm"> {navbar.smText}</p>
              </div> */}
          </div>
          {/* <div className="flex items-center justify-between h-16"> */}
          <div className="hidden md:flex items-center gap-8">
            {navbar.navLink.map((nav) => (
              <Link
                to={nav.path}
                key={Math.random()}
                className={`font-semibold relative hover:text-cyan-500 transition-colors`}
              >
                {nav.text}
              </Link>
            ))}
            <Link
              to={"/contactUs"}
              className="text-white px-4 py-2 rounded-md bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"
            >
              Let's talk
            </Link>
          </div>
          <div className="md:hidden flex justify-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
        {/* </div> */}
        {isOpen && (
          <div className="md:hidden slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navbar.navLink.map((nav) => (
                <Link
                  to={nav.path}
                  className={`font-semibold hover:text-orange-500 transition-colors block ${
                    location.pathname === nav.path
                      ? "text-orange-400"
                      : "text-gray-500"
                  }`}
                >
                  {nav.text}
                </Link>
              ))}
              <Link
                to={"/contactUs"}
                className="w-full text-white px-4 py-2 mt-5 rounded-md block text-center bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"
              >
                Let's talk
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
