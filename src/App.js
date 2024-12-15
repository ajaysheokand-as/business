import Boardofdriction from "./utils/Boardofdriction";
import Footer from "./utils/Footer";
import Navbar from "./utils/Navbar";
import OurClients from "./utils/Our-clients";
import Project from "./utils/Project";
import About from "./utils/About";
function App() {
  const statsData = [
    { title: 'Order book', value: '16,000+ Cr', icon: '💰' },
    { title: 'Lane kms in India', value: '12,000+ Km', icon: '🛣️' },
    { title: 'Employee family', value: '2,000+', icon: '👨‍👩‍👧‍👦' },
    { title: 'Fleet size', value: '2,000+', icon: '🚚' },
  ];
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
        <div className="text-center md:text-left md:w-1/2 gap-4 flex flex-col">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Building the infra for tomorrow</h1>
          <p className="text-lg md:text-xl mb-6">Premier player in expressways, bridges & tunnels across India</p>
          <button className="bg-green-700 hover:bg-green-600 text-white py-2 px-6 rounded-full text-lg">Know more</button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="images/1.png" alt="Illustration of construction vehicles working on a road" className="w-full h-fit shape" />
        </div>
      </div>
      <section className="md:h-[530px] overflow-hidden">
        <video
          src='/video/Sequence-01_1.mp4'
          width='100%'
          autoPlay
          muted
          playsInline
          className="h-fit"
        />
      </section>

      <div className="bg-gray-100 p-4">
        <h1 className="text-center font-bold md:text-7xl text-xl md:m-10 m-3 ">Our results in numbers</h1>
        <section className="flex flex-col md:flex-row md:space-x-4 sm:p-10 p-4 ">
          <div className="relative w-full md:w-1/2">
            <img
              src="https://images.pexels.com/photos/811034/pexels-photo-811034.jpeg"
              alt="Project Overview"
              className="rounded-lg w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 rounded-lg">
              <h2 className="text-2xl font-bold">HAM Projects</h2>
              <p className="text-xl">25+</p>
            </div>
          </div>
          <div className="grid justify-center grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-0 md:w-[50%]">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="bg-white  flex justify-center rounded-lg shadow-md border-2 relative hover:bg-gray-200 cursor-pointer  "
              >
                <div className="flex items-center  absolute top-10 flex-col">
                  <span className="text-2xl mr-2">{stat.icon}</span>
                  <span className="text-lg text-muted-foreground">{stat.value}</span>
                  <span className="font-semibold text-lg">{stat.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <OurClients />
      <Project />
      <Boardofdriction/>
    </>
  );
}

export default App;
