import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { aboutData } from "../data/Main";import Scrolldown from './Scrolldown'

function About() {
  const {sectionFirst,sectionSecond , sectionFourth , sectionThird }= aboutData
  return (
    <>
      <Navbar />
      <div className="relative w-full md:h-[500px]">
        <img
          src={sectionFirst.img}
          alt="A cat"
          className="w-screen h-full object-cover"
        />
        <div className="absolute inset-0 flex align-center flex-col  text-white bg-black bg-opacity-50">
           <div className="top-1/4 md:top-1/3 absolute px-6 md:px-11">
           <h1 className="text-2xl md-3 md:mb-6 font-semibold">
              {sectionFirst.title}
            </h1>
          <h2 className="text-xl sm:text-2xl md:text-6xl font-bold ">
           {sectionFirst.hading}
          </h2>
           </div>
        </div>
      </div>
      {/* 2 */}

      <div className="w-full color relative">
      <div className="text-white px-4 sm:px-6 md:px-12">
          <h2 className=" md:text-6xl font-bold pt-20 ">
            { sectionSecond.hading.split(',')[0]}
            <br />
            { sectionSecond.hading.split(',')[1]}
          </h2>
          <p className=" md:font-bold text-[14px] leading-3 md:text-[22px] md:leading-8 p-3 md:w-[60%] absolute w-[80%] right-0 md:left-1/3">
            {sectionSecond.title}
          </p>
        </div>
        <img
          src={sectionSecond.img}
          alt="A cat"
          className="h-auto"
        />
      </div>
    
      {/* 3 */}
       <div className="flex flex-col items-center justify-center min-h-screen p-4">
                    <h1 className=" text-3xl md:text-6xl font-bold text-center my-16">{sectionThird.title}</h1>
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                        <img src={sectionThird.imgFirst} alt="A scenic view of a highway surrounded by greenery and hills" className="rounded-lg shadow-lg w-full md:w-1/2" />
                        <img src={sectionThird.imgSecond} alt="A modern highway with multiple lanes and buildings in the background" className="rounded-lg shadow-lg w-full md:w-1/2" />
                    </div>
                    <p className="text-lg text-gray-700 mt-8 text-center md:text-left max-w-2xl">
                      {sectionThird.hading}
                    </p>
                </div>
      {/* 4 */}

      <div className="relative w-full h-[400px] sm:h-[300px] md:h-[500px]">
        <img
          src={sectionFourth.img}
          alt="A cat"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-12 sm:mt-16 md:mt-12 ml-4 sm:ml-8 md:ml-1">
            <h1 className="text-3xl sm:text-5xl my-3 font-semibold">
              {sectionFourth.title}
            </h1>
           {sectionFourth.hading}
          </h2>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
