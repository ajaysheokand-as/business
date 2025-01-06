import React from "react";
import Navbar from "./Navbar";
import { aboutData } from "../data/Main";
function About() {
  const { sectionFirst, sectionSecond, sectionFourth, sectionThird } =
    aboutData;
  return (
    <>
      <Navbar />
      <div className="relative w-full md:h-[500px]">
        <img
          src={sectionFirst.img}
          alt="A cat"
          className="w-screen h-full object-cover bg-fixed bg-cover bg-center"
        />
        <div className="absolute inset-0 flex align-center flex-col  text-white bg-black bg-opacity-70">
          <div className="top-1/4 mt-16 md:mt-0 md:top-1/3 absolute px-6 md:px-11">
            <h1 className="text-2xl sm:text-8xl font-black md-3 md:mb-4 md:mt-20">
              {sectionFirst.title}
            </h1>
            <h2 className="text-xl sm:text-xl md:text-2xl font-bold">
              {sectionFirst.hading}
            </h2>
          </div>
        </div>
      </div>
      {/* 2 */}

      <div className="w-full h-auto lg:h-[80vh] md:py-8">
        <div className="w-full h-full md:flex md:justify-center md:items-center">
          <div className="w-full sm:w-[40%] h-full flex justify-center items-center">
            <div className="w-full overflow-hidden">
              <img
                src={sectionSecond.img}
                className="w-full duration-700 shadow-md cursor-pointer hover:scale-105"
                alt="#"
              />
            </div>
          </div>
          <div className="w-full text-center p-4 sm:w-[60%] h-full flex justify-center items-center flex-col sm:p-20 gap-8 sm:text-left border-2 border-black">
            <h1 className="font-bold text-2xl sm:text-4xl">
              {sectionSecond.hading}
            </h1>
            <p className="text-sm sm:text-base">{sectionSecond.title}</p>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="w-full h-auto sm:h-[70vh] bg-gray-200 border-2 border-black">
        <div className="w-full h-[20%] flex justify-center items-center">
          <h1 className="text-3xl mt-8 sm:mt-0 sm:text-6xl font-bold">
            Our Employee
          </h1>
        </div>
        <div className="w-full h-[80%] p-8 flex justify-center flex-wrap items-center gap-8">
          {/* card */}
          {sectionThird?.map((item) => {
            return (
              <div className="relative grid w-64 h-80 flex-col items-end justify-center overflow-hidden rounded-lg cursor-pointer hover:border-2 hover:border-cyan-500">
                <div
                  style={{
                    backgroundImage: `url(${item.img})`,
                  }}
                  className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-center"
                >
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative text-center p-6 px-6 py-14 md:px-12">
                  <h2 className="mb-4 text-sm font-medium text-white line-clamp-3">
                    {item.desc}
                  </h2>
                  <h5 className="mb-4 text-xl font-semibold text-slate-300">
                    {item.title}
                  </h5>
                  <img
                    alt="Lewis Daniel"
                    src={item.img}
                    className="relative inline-block h-24 w-24 rounded-full border border-white"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* 4 */}

      <div className="w-full h-auto sm:h-[50vh] mt-4 py-4 bg-center bg-cover bg-fixed">
        <div
          // style={{
          //   backgroundImage: `url(${sectionFourth.img})`,
          // }}
          className="w-full h-full overflow-hidden relative justify-center items-center text-white"
        >
          <img src={sectionFourth.img} alt="" />
          <div className="w-full h-full bg-black absolute opacity-40 top-0 left-0"></div>
          <div className="w-full sm:w-2/3 text-white flex flex-col text-center gap-4 absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className=" font-extrabold text-xl sm:text-5xl">
              {sectionFourth.title}
            </h1>
            <p className="line-clamp-3 text-xs sm:text-base sm:line-clamp-none">
              {sectionFourth.hading}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
