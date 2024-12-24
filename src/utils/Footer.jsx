import React from "react";
import { navbar } from "../data/Main";
import { Link , useLocation } from "react-router-dom";
function Footer() {
   const location  =  useLocation()
  return (
    <div className="flex flex-col  px-4 bg-gray-200">
      <header className="w-full flex flex-col md:flex-row  md:justify-between justify-start items-center py-4">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <i className="fas fa-shield-alt text-black"></i>
          <span className="text-black font-bold">Wiyasa Corp</span>
        </div>
        <div className="flex items-center flex-wrap space-x-2">
          <span className="text-black ml-2">Subscribe To Our Newsletter:</span>
          <div>
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent border-b border-gray-500 text-black py-1 focus:outline-none"
            />
            <i className="fas fa-arrow-right text-black"></i>
          </div>
        </div>
      </header>
      <main className="flex flex-col text-left mt-16">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight text-gray-900">
          Improving people’s futures through
          <br />
          building infrastructure
        </h1>
      </main>
      <footer className="w-full mt-16">
        <div className="border-t border-gray-700 p-4 flex justify-between items-center">
          <nav className="flex flex-wrap justify-start gap-5 mb-4">
            {navbar.navLink.map((nav) => (
              <Link
                key={Math.random()}
                to={nav.path}
                className={`font-semibold hover:text-orange-500 transition-colors  ${
                  location.pathname === nav.path
                    ? "text-orange-400"
                    : "text-gray-500"
                }`}
              >
                {nav.text}
              </Link>
            ))}
          </nav>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-black">
              <i className="fas fa-globe"></i>
            </a>
            <a href="#" className="text-black">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-black">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-black">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
        <div className="text-black text-sm text-center mb-5">
          Wiyasa | Copyright @ 2022 | All Rights reserved
        </div>
      </footer>
    </div>
  );
}

export default Footer;









