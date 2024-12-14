import React, { useState } from 'react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <img src="https://placehold.co/50x50" alt="Company Logo" className="h-10 w-10 mr-2" />
                            <div>
                                <h1 className="text-xl font-bold">GAWAR</h1>
                                <p className="text-sm">Construction Limited</p>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#" className="text-gray-500 font-semibold">Home</a>
                            <a href="#" className="text-gray-500">About Us</a>
                            <a href="#" className="text-gray-500">Projects</a>
                            <a href="#" className="text-gray-500">Board of Directors</a>
                            <button className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-full">Let's talk</button>
                        </div>
                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 focus:outline-none">
                                <i className="fas fa-bars"></i>
                            </button>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden slide-down">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#" className="block text-orange-500 font-semibold">Home</a>
                            <a href="#" className="block text-gray-500">About Us</a>
                            <a href="#" className="block text-gray-500">Projects</a>
                            <a href="#" className="block text-gray-500">Board of Directors</a>
                            <button className="w-full bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-full">Let's talk</button>
                        </div>
                    </div>
                )}
            </nav>
        </>

    )
}

export default Navbar
