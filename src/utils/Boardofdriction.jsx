import React from "react";
import { BoardOfDirectors } from "../data/Main";
function Boardofdriction() {
  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="md:text-7xl text-3xl m-8 font-extrabold">
          Board of Directors
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
        {BoardOfDirectors?.map((image, index) => (
          <div
            key={index}
            className="relative group w-full h-[300px] sm:h-[400px] cursor-pointer overflow-hidden rounded-lg transition-all duration-500"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute w-full h-full bottom-0 left-0 right-0 p-4 bg-white bg-opacity-70 text-black transform translate-y-full group-hover:-translate-y-0 transition-all duration-500">
              <h4 className="text-sm text-center my-auto">{"Designation: " + image.alt}</h4>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-70 text-black my-auto text-center text-xl">
              <h2 className="text-center font-bold">{image.text}</h2>
              <h4>{image.subtext}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Boardofdriction;
