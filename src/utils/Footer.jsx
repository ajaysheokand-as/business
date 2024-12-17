import React from 'react'
import { Link ,useLocation } from 'react-router-dom'
function Footer() {
   const location =  useLocation()
    return (
        <>
         <footer className=" flex flex-col items-center justify-center bg-gray-100">
                    <nav className="w-full flex justify-center space-x-4 sm:space-x-8 py-4 flex-wrap">
                         <Link to={"/"} className={`font-semibold ${location.pathname == '/' ?'text-red-500': 'text-gray-500' }`} >
                                        Home
                                      </Link>
                                      <Link to={"/about"} className={`font-semibold ${location.pathname === '/about' ?'text-red-500': 'text-gray-500' }`}>
                                        About Us
                                      </Link>
                                      <Link to={"/project"} className={`font-semibold ${location.pathname === '/project' ?'text-red-500': 'text-gray-500' }`}>
                                        Projects
                                      </Link>
                                      <Link to={"/BoardOfDirectors"} className={`font-semibold ${location.pathname === '/BoardOfDirectors' ?'text-red-500': 'text-gray-500' }`}>
                                        Board of Directors
                                      </Link>
                    </nav>
                    <div className="text-center mt-8 px-4">
                        <h1 className="text-2xl sm:text-4xl font-bold text-black">Committed for quality & timely execution</h1>
                    </div>
                    <div className="w-full flex justify-center items-end bg-cover bg-center" style={{ backgroundImage: "url('/images/Isolation_Mode-1.png')" }}>
                        <div className="h-32 sm:h-48 w-full"></div>
                    </div>
                    <div className="mt-8 text-gray-500 text-end">
                        @2024 Copyright
                    </div>
                </footer>
        
        </>
    )
}

export default Footer
