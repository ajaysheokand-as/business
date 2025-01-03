import React from "react";
import { footerData, navbar } from "../data/Main";
import { Link, useLocation } from "react-router-dom";
function Footer() {
  const location = useLocation();
  return (
    <div className="flex flex-col px-10 bg-gray-200">
      <header className="w-full flex flex-col md:flex-row  md:justify-between justify-start items-center py-4">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <i className="fas fa-shield-alt text-black"></i>
          <span className="text-black font-bold">{footerData.company}</span>
        </div>
        <div className="flex justify-center items-center flex-wrap space-x-2">
          <span className="text-black ml-2">{footerData.subscribe}</span>
          <div>
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent border-b border-gray-500 text-black py-1 focus:outline-none"
            />
            <i className="fas fa-arrow-right text-black ml-4"></i>
          </div>
        </div>
      </header>
      <main className="flex flex-col text-center mt-4 md:text-left md:mt-16">
        <h1 className="text-xl md:text-6xl font-bold leading-tight text-gray-900">
          {footerData.paragraph}
        </h1>
      </main>
      <footer className="w-full mt-16">
        <div className="border-t border-gray-700 p-4 flex justify-between items-center flex-col">
          <nav className="w-full flex justify-center items-center gap-5 mb-4 md:justify-start">
            {navbar.navLink.map((nav) => (
              <Link
                to={nav.path}
                className={`font-semibold hover:text-cyan-500 transition-colors text-xs md:text-base`}
              >
                {nav.text}
              </Link>
            ))}
          </nav>
          <div className="flex space-x-4 mb-2 md:mb-4">
            {footerData.icon.map((val) => (
              <Link to={"#"}>
                <i className={`${val} text-black`}></i>
              </Link>
            ))}
          </div>
        </div>
        <div className="text-black text-sm md:text-lg text-center mb-5">
          {footerData.footer}
        </div>
      </footer>
    </div>
  );
}

export default Footer;
