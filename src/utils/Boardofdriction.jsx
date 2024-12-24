import {BoardOfDirectors} from '../data/Main'

import React from 'react';
import { BoardOfDirectors2 } from '../data/Main';
function Boardofdriction() {

     
    return (
        <>
<div className="w-full lg:w-[86%] ml-0 sm:ml-[110px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-8">
  {BoardOfDirectors.map((image, index) => (
    <div
      key={index}
      className="relative group w-full h-[250px] sm:h-[450px] lg:h-[400px] cursor-pointer overflow-hidden rounded-lg transition-all duration-500"
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
{/* 2 */}

 <h1 className="ml-[20px] sm:ml-[40px] md:ml-[146px] text-3xl md:text-5xl lg:text-7xl m-8 font-extrabold">
            Key Management
</h1>
<div className="w-full lg:w-[86%] ml-0 sm:ml-[110px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-8">
  {BoardOfDirectors2.map((image, index) => (
    <div
      key={index}
      className="relative group w-full h-[250px] sm:h-[450px] lg:h-[400px] cursor-pointer overflow-hidden rounded-lg transition-all duration-500"
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
