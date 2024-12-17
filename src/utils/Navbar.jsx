import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img
                src="https://placehold.co/50x50"
                alt="Company Logo"
                className="h-10 w-10 mr-2"
              />
              <div>
                <h1 className="text-xl font-bold">GAWAR</h1>
                <p className="text-sm">Construction Limited</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to={"/"} className={`font-semibold ${location.pathname == '/' ?'text-red-500': 'text-gray-500' }`} >
                Home
              </Link>
              <Link to={"/about"} className={`font-semibold ${location.pathname == '/about' ?'text-red-500': 'text-gray-500' }`}>
                About Us
              </Link>
              <Link to={"/project"} className={`font-semibold ${location.pathname == '/project' ?'text-red-500': 'text-gray-500' }`}>
                Projects
              </Link>
              <Link to={"/BoardOfDirectors"} className={`font-semibold ${location.pathname == '/BoardOfDirectors' ?'text-red-500': 'text-gray-500' }`}>
                Board of Directors
              </Link>
              <Link to={'/contactUs'} className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-full">
                Let's talk
              </Link>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-500 focus:outline-none"
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to={"/"} className={`block font-semibold ${location.pathname == '/' ?'text-red-500': 'text-gray-500' }`} >
                Home
              </Link>
              <Link to={"/about"} className={`block font-semibold ${location.pathname == '/about' ?'text-red-500': 'text-gray-500' }`}>
                About Us
              </Link>
              <Link to={"/project"} className={`block font-semibold ${location.pathname == '/project' ?'text-red-500': 'text-gray-500' }`}>
                Projects
              </Link>
              <Link to={"/BoardOfDirectors"} className={`block font-semibold ${location.pathname == '/BoardOfDirectors' ?'text-red-500': 'text-gray-500' }`}>
                Board of Directors
              </Link>
              <Link to={'/contactUs'} className="w-full bg-green-700 hover:bg-green-600 text-white px-4 py-2 mt-2 rounded-full">
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
