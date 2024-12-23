import {BoardOfDirectors} from '../data/Main'

import React from 'react';
import { BoardOfDirectors2 } from '../data/Main';
function Boardofdriction() {

     
    return (
        <>
            <h1 className='md:text-7xl text-3xl m-8 font-extrabold'>Board of Directors</h1>

        
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
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-70 text-black h-80 transform translate-y-full group-hover:translate-y-[-100px]  transition-all duration-500">
                            <p className="text-sm">{image.alt}</p>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-70 text-black text-center text-xl">
                            <h2 className="font-bold text-2xl">{image.text}</h2>
                            <h4>{image.subtext}</h4>
                        </div>
                    </div>
                ))}
            </div>



            <h1 className='md:text-7xl text-3xl m-8 font-extrabold'> Key Management</h1>

        
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
    {BoardOfDirectors2.map((image, index) => (
        <div
            key={index}
            className="relative group w-full h-[300px] sm:h-[400px] cursor-pointer overflow-hidden rounded-lg transition-all duration-500"
        >
            <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-70 text-black h-80 transform translate-y-full group-hover:translate-y-[-100px] transition-all duration-500">
                <p className="text-sm">{image.alt}</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-70 text-black text-center text-xl">
                <h2 className="font-bold text-2xl">{image.text}</h2>
                <h4>{image.subtext}</h4>
            </div>
        </div>
    ))}
</div>


        </>
    )
}

export default Boardofdriction;
