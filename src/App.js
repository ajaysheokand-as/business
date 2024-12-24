import Boardofdriction from "./utils/Boardofdriction";
import Footer from "./utils/Footer";
import Navbar from "./utils/Navbar";
import OurClients from "./utils/Our-clients";
import Project from "./utils/Project";
import { mainSection, overResult } from "./data/Main";
import TypewriterEffect from "./utils/TypeWriterEffect";
function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-between px-4">
        <div className="text-center md:text-left md:w-1/2 gap-4 flex flex-col p-4 md:p-0 ">
          <h1 className=" md:text-8xl text-4xl font-bold leading-tight mb-4">
            {mainSection.hading}
          </h1>
          <div className="text-lg md:text-xl mb-6 text-gray-700">
            <TypewriterEffect text={mainSection.paragraph}/>
          </div>
          <button className="bg-green-700 hover:bg-green-600 text-white py-2 px-6 rounded-full md:w-1/3 text-lg">
           {mainSection.btnText}
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={mainSection.image}
            alt="Illustration of construction vehicles working on a road"
            className="w-full h-fit shape"
          />
        </div>
      </div>
      <section className="md:h-[530px] overflow-hidden">
        <video
          src={mainSection.video}
          width="100%"
          autoPlay
          loop
          muted
          playsInline
          className="h-fit"
        />
      </section>

      <div className="p-4">
        <h1 className="text-center font-bold md:text-7xl text-xl md:m-10 m-3 ">
          {overResult.MainHading}
        </h1>
        <section className="flex flex-col md:flex-row md:space-x-4 sm:p-10 p-4 ">
          <div className="relative w-full md:w-1/2">
            <img
              src={overResult.image}
              alt="Project Overview"
              className="rounded-lg w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 rounded-lg">
              <h2 className="text-2xl font-bold">{overResult.hading}</h2>
              <p className="text-xl">{overResult.val}</p>
            </div>
          </div>
          <div className="grid justify-center grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-0 md:w-[50%]">
            {overResult.statsData.map((stat, index) => (
              <div
                key={index}
                className="bg-white flex justify-left pl-8 py-5 md:py-0 border-red-900  w-full align-center rounded-lg shadow-md border-2 hover:bg-gray-200 cursor-pointer  "
              >
                <div className="flex items-left gap-2 md:mt-10 h-fit flex-col">
                  <span className="text-4xl mr-2">{stat.icon}</span>
                  <span className="text-3xl font-black text-gray-500">
                    {stat.value}
                  </span>
                  <span className="font-semibold text-xl text-gray-500 ">
                    {stat.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="mt-5 overflow-hidden">
        <img src="/images/full-img.jpg"alt="hello"className="w-full" />
      </section>
      <OurClients />
      <Project />
      <Boardofdriction />
      <Footer />
    </>
  );
}

export default App;
