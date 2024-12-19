import React from 'react'
import {BoardOfDirectors} from '../data/Main'
function Boardofdriction() {
    return (
        <>
            <h1 className=' md:text-7xl text-3xl m-8 font-extrabold '>Board of directors</h1>
            {/* Grid Layout for Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
                {BoardOfDirectors.map((image, index) => (
                    <div
                        key={index}
                        className="relative group w-full h-[300px] sm:h-[400px] cursor-pointer overflow-hidden rounded-lg transition-all duration-500"
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-all duration-500"
                        />
                        <h1>nnnmn</h1>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-70 text-black h-60 transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
                            <p className="text-sm">{image.alt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Boardofdriction


