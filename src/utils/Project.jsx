import React, { useState, useEffect } from "react";
import {projects , projectsDetails} from "../data/Main"
function Project() {
  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="text-center px-4 sm:px-8">
        <h1 className="text-4xl sm:text-6xl font-bold mt-8 tracking-wider">PROJECTS</h1>
        <h3 className="w-full sm:w-[35%] text-lg sm:text-xl text-gray-400 mx-auto mt-6 sm:mt-12">
         {projectsDetails.paragraph}
        </h3>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 px-2 items-center justify-center rounded-full bg-green-200 w-full sm:w-[36%] mx-auto mt-6 sm:mt-5">
          <h3 className="pl-4 sm:pl-6 pt-1 text-lg sm:text-xl">
            {projectsDetails.moreProject}
          </h3>
          <button className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-full">
            {projectsDetails.btn}
          </button>
        </div>
      </div>

      {/* 1 */}

      <div className=" ml-10 mt-7 mr-10 flex flex-col sm:flex-row sm:justify-between gap-6">
        <div className="relative w-full sm:w-[48%] h-[200px] sm:h-[400px] group overflow-hidden rounded-lg hover:shadow-[0_0_20px_4px_rgba(255,0,0,0.6)] transition-all duration-500">
          <img
            src={projects.firstOne.image}
            alt="Project 1"
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 group-hover:scale-105 group-hover:translate-y-[-10px] transition-all duration-500 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-bold">
              {projects.firstOne.text}
            </h2>
          </div>
        </div>

        <div className="relative w-full sm:w-[48%] h-[200px] sm:h-[400px] group overflow-hidden rounded-lg hover:shadow-[0_0_20px_4px_rgba(0,0,0,0.6)] transition-all duration-500">
          <img
            src={projects.firstTwo.image}
            alt="Project 2"
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 group-hover:scale-105 group-hover:translate-y-[-10px] transition-all duration-500 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-bold">
            {projects.firstTwo.text}
            </h2>
          </div>
        </div>
      </div>

      {/* 2 */}

      <div className=" mt-6 ml-10  mr-10 flex flex-col sm:flex-row sm:justify-between gap-4 ">
        <div className="relative w-full sm:w-[20%] h-[400px] group overflow-hidden rounded-lg hover:shadow-[0_0_20px_4px_rgba(255,0,0,0.6)] transition-all duration-500">
          <img
            src={projects.SecondOne.image}
            alt="Project 1"
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 group-hover:scale-105 group-hover:translate-y-[-10px] transition-all duration-500 rounded-lg">
            <h2 className="text-xl pl-6 sm:text-2xl font-bold">
            {projects.SecondOne.text}
            </h2>
          </div>
        </div>

        <div className="relative w-full sm:w-[38%] h-[400px] group overflow-hidden rounded-lg hover:shadow-[0_0_20px_4px_rgba(255,0,0,0.6)] transition-all duration-500">
          <img
            src={projects.SecondTwo.image}
            alt="Project 2"
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 group-hover:scale-105 group-hover:translate-y-[-10px] transition-all duration-500 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-bold">
            {projects.SecondTwo.text}
            </h2>
          </div>
        </div>

        <div className="relative w-full sm:w-[38%] h-[400px] group overflow-hidden rounded-lg hover:shadow-[0_0_20px_4px_rgba(255,0,0,0.6)] transition-all duration-500">
          <img
            src={projects.SecondThree.image}
            alt="Project 3"
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 group-hover:scale-105 group-hover:translate-y-[-10px] transition-all duration-500 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-bold">
              {projects.SecondThree.text}
            </h2>
          </div>
        </div>
      </div>
      {/* 3 */}

      <div className=" ml-10 mr-10 mt-5 flex flex-col sm:flex-row sm:justify-between gap-6">
        <div className="relative w-full sm:w-[48%] h-[200px] sm:h-[400px] group overflow-hidden rounded-lg hover:shadow-[0_0_20px_4px_rgba(255,0,0,0.6)] transition-all duration-500">
          <img
            src={projects.thirdOne.image}
            alt="Project 1"
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 group-hover:scale-105 group-hover:translate-y-[-10px] transition-all duration-500 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-bold">
            {projects.thirdOne.text}
            </h2>
          </div>
        </div>
        <div className="relative w-full sm:w-[48%] h-[200px] sm:h-[400px] group overflow-hidden rounded-lg hover:shadow-[0_0_20px_4px_rgba(255,0,0,0.6)] transition-all duration-500">
          <img
            src={projects.thirdTwo.image}
            alt="Project 2"
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 group-hover:scale-105 group-hover:translate-y-[-10px] transition-all duration-500 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-bold">
            {projects.thirdTwo.text}
            </h2>
          </div>
        </div>
      </div>
      {/* 4 */}

      <div className=" mt-6 ml-10  mr-10 flex flex-col sm:flex-row sm:justify-between gap-4 ">
        <div className="relative w-full sm:w-[20%] h-[400px] group overflow-hidden rounded-lg hover:shadow-[0_0_20px_4px_rgba(255,0,0,0.6)] transition-all duration-500">
          <img
            src={projects.fourthOne.image}
            alt="Project 1"
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 group-hover:scale-105 group-hover:translate-y-[-10px] transition-all duration-500 rounded-lg">
            <h2 className="text-xl pl-6 sm:text-2xl font-bold">
            {projects.fourthOne.text}
            </h2>
          </div>
        </div>

        <div className="relative w-full sm:w-[55%] h-[400px] group overflow-hidden rounded-lg hover:shadow-[0_0_20px_4px_rgba(255,0,0,0.6)] transition-all duration-500">
          <img
            src={projects.fourthTwo.image}
            alt="Project 2"
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 group-hover:scale-105 group-hover:translate-y-[-10px] transition-all duration-500 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-bold">
            {projects.fourthTwo.text}
            </h2>
          </div>
        </div>

        <div className="relative w-full sm:w-[20%] h-[400px] group overflow-hidden rounded-lg hover:shadow-[0_0_20px_4px_rgba(255,0,0,0.6)] transition-all duration-500">
          <img
            src={projects.fourthThree.image}
            alt="Project 3"
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 group-hover:scale-105 group-hover:translate-y-[-10px] transition-all duration-500 rounded-lg">
            <h2 className="text-xl pl-6 sm:text-2xl font-bold">
            {projects.fourthThree.text}
            </h2>
          </div>
        </div>
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-green-800 text-white text-2xl p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default Project;
