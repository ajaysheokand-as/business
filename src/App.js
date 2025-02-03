import React from "react";
import Boardofdriction from "./utils/Boardofdriction";
import Footer from "./utils/Footer";
import Navbar from "./utils/Navbar";
import { Link } from "react-router-dom";
import OurClients from "./utils/Our-clients";
import Project from "./utils/Project";
import { mainSection, overResult } from "./data/Main";
import TypewriterEffect from "./utils/TypeWriterEffect";
import Carousel from "./utils/Carousel";
import CountUp from "react-countup";
function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-between  md:pl-4 lg:my-12">
        <div className="text-center md:text-left md:w-1/2 gap-4 flex flex-col p-4 md:p-0 ">
          <h1 className=" md:text-6xl text-4xl font-bold leading-tight mb-4">
            {mainSection.hading}
          </h1>
          <p className="text-sm md:text-xl mb-6 text-gray-700">
          {mainSection.paragraph.heading}
           
          </p>
          <h2 className=" md:text-4xl text-4xl font-bold leading-tight mb-4">
          <TypewriterEffect text={mainSection.paragraph.items} />
          </h2>
          <button className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 text-white py-2 px-6 rounded-md md:w-1/3 text-lg">
            <Link to="/about">{mainSection.btnText}</Link>
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:p-8">
          <img
            src={mainSection.image}
            alt="Illustration of construction vehicles working on a road"
            className={`w-full h-fit rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}
          />
        </div>
      </div>
      {/* <section className="md:h-[530px] overflow-hidden">
        <video
          src={mainSection.video}
          width="100%"
          autoPlay
          loop
          muted
          playsInline
          className="h-fit"
        />
      </section> */}
      <Carousel />
      <div className="p-4">
        <h1 className="text-center font-bold md:text-7xl text-xl md:m-10 m-3 ">
          {overResult.MainHading}
        </h1>
        <section className="flex flex-col md:flex-row md:space-x-4 sm:p-10 p-4 ">
          {/* <div className="relative w-full md:w-1/2">
            <img
              src={overResult.image}
              alt="Project Overview"
              className="rounded-lg w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 rounded-lg">
              <h2 className="text-2xl font-bold">{overResult.hading}</h2>
              <p className="text-xl">{overResult.val}</p>
            </div>
          </div> */}

          <div className="grid justify-center grid-cols-1 md:grid-cols-4 gap-4 mt-4 md:mt-0 md:w-[100%]">
            {overResult.statsData.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-100 flex justify-between items-center px-4 py-12 border-2 border-gray-700 rounded-md"
              >
                <div className="flex justify-center items-center flex-col">
                  <span className="text-3xl text-cyan-500">{stat.icon}</span>
                  <span className="font-semibold text-xl text-gray-500 ">
                    {stat.title}
                  </span>
                </div>
                <div>
                  <span>
                    <CountUp
                      className="text-2xl font-black text-cyan-500"
                      start={0}
                      end={stat.value}
                      duration={10}
                    />
                    <span className="text-2xl font-black text-cyan-500">+</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <OurClients />
      <Project />
      <Boardofdriction />
      <Footer />
    </>
  );
}

export default App;
