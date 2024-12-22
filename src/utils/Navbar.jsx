import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navbar } from "../data/Main";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img
                src={navbar.logo}
                alt="Company Logo"
                className="h-10 w-10 mr-2"
              />
              <div>
                <h1 className="text-xl font-bold">{navbar.text}</h1>
                <p className="text-sm"> {navbar.smText}</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-16">
              {
                navbar.navLink.map(nav =>
                  <Link to={nav.path} key={Math.random()} className={`font-semibold hover:text-orange-500 transition-colors ${location.pathname === nav.path ?'text-orange-400': 'text-gray-500' }`} >
                {nav.text}
              </Link>
            )
              }
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
