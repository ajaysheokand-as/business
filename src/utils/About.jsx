import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { aboutData } from "../data/Main";import Scrolldown from './Scrolldown'

function About() {
  const {sectionFirst,sectionSecond , sectionFourth , sectionThird }= aboutData
  return (
    <>
    <Navbar/>
      <div className="relative w-full h-[400px] sm:h-[300px] md:h-[500px]">
        <img src="images/fire.jpg" alt="A cat" className="w-screen h-full object-cover" />
        <div className="absolute inset-0 flex items-center  text-white bg-black bg-opacity-50">
          <h2 className="text-xl sm:text-2xl ml-12 md:text-6xl font-bold mt-12">
            <span className='text-2xl mb-6 absolute ml-3 font-semibold'>About us</span> <br />
            {/* Shaping the Future: Leaders in <br /> Infrastructure Development */}

            Comprehensive Fire Safety  <br />Solutions
          </h2>
           </div>
        </div>
      </div>
      {/* 2 */}



   
<div className="relative w-full sm:h-[500px] md:h-[700px] lg:h-[900px]">
  <img 
    src="images/fire22.jpg" 
    alt="A" 
    className="w-full h-full object-cover " 
  />

  <div className="absolute inset-0 flex items-center justify-center text-white px-4 sm:px-6 md:px-12">
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold absolute top-12 sm:top-16 md:top-24 left-4 sm:left-8 md:left-16">
      Embarking on <br /> a Journey
    </h2>

    <h2 className="text-xs sm:text-sm md:text-xl lg:text-2xl pb-[400px] sm:pb-[500px] md:pb-[600px] lg:pb-[700px] absolute top-[150px] sm:top-[200px] md:top-[250px] lg:top-[200px] left-[10%] sm:left-[15%] md:left-[20%] lg:left-[25%] font-bold w-[80%] sm:w-[75%] md:w-[70%] lg:w-[60%]">
      At JFST Solutions, we are committed to providing top-tier fire safety solutions that ensure the safety and security of your premises. With a comprehensive range of services, we specialize in the installation, supply, and maintenance of fire safety systems, including smoke detectors, fire hydrants, fire extinguishers, gas suppression systems, and more. We work with industry-leading brands such as Morley, Honeywell, Siemens, and Bosch to offer state-of-the-art solutions.
    </h2>



  </div>
</div>






{/* 3 */}
<div className="mt-[20%] pl-[100px] flex flex-col sm:flex-row sm:justify-center md:justify-between gap-8 sm:ml-0 md:ml-16 relative bottom-12 sm:bottom-24 md:bottom-32">
  
  
  <div className=" w-[400px] sm:text-center md:text-left">
    <h2 className="font-extrabold text-xl sm:text-4xl md:text-3xl lg:text-4xl sm:ml-0 md:ml-32">
      Acknowledged <br />
      <span className="ml-0 sm:ml-0 md:ml-20">Distinction</span>
    </h2>
   

<img 
  src="images/team1.jpg" 
  alt="Acknowledged Distinction" 
  className="sm:w-full h-[440px] object-cover rounded-lg"
/>

  </div>

  
  <div className="w-[350px] sm:w-[400px] md:w-auto">
    {/* <img 
      src="images/firesaftey.webp" 
      alt="Industry Standing" 
      className=" bg-red-400 sm:w-full md:w-auto"
    /> */}
    <img 
  src="images/firesaftey.webp" 
  alt="Industry Standing" 
  className="bg-red-400 sm:w-[80%] md:w-[440px] sm:h-[400px] md:h-[400px] rounded-lg"
/>



    <p className="sm:text-lg md:text-xl lg:text-2xl text-gray-400 sm:px-4 md:px-0 mt-4 sm:w-full md:w-auto">
      {/* Our industry standing is affirmed by our “AA/Stable” rating from CRISIL, highlighting our financial strength and track record of swift project execution. Additionally, our subsidiaries, comprising seven HAM companies, hold a “AAA/Stable” rating from CRISIL/ICRA, showcasing our dedication to excellence. */}

      At JFST Solutions, we would like to express our sincere gratitude to our valued clients, partners, and dedicated team for their trust and continuous support. Our success is made possible by the confidence our clients place in us, and the hard work and commitment of our team. We take pride in our ability to deliver top-quality fire safety solutions, and we remain committed to exceeding expectations with every project.


    </p>
  </div>

</div>

      
{/* 4 */}

 <div className="relative w-full h-[400px] sm:h-[300px] md:h-[500px]">
  <img 
    src="images/fire1.jpg" 
    alt="A cat" 
    className="w-full h-full object-cover" 
  />
  
  <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
    <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mt-12 sm:mt-16 md:mt-12 ml-4 sm:ml-8 md:ml-1">
      <span className='text-3xl sm:text-5xl font-semibold'>
        {/* Pioneering Excellence */}

        Setting New Standards in Fire Safety Solutions
      </span> 
      <br />
      {/* Gawar Construction is renowned for its commitment to steadfast 
      <br />
      project execution, evident in 12 projects receiving early completion 
      <br />
      bonus over the past five years, and a strong order book reflects the trust 
      <br />
      our clients place in us. */}

      We take pride in our successful project deliveries for notable clients,<br />
       including prestigious institutions like IISc Bangalore, IIT Jammu, BHEL, and Gail. <br />
        Our projects reflect our dedication to excellence, reliability, and compliance  <br />
        with the highest safety standards.
    </h2>
  </div>
</div>
<Scrolldown/>

      <Footer />
    </>
  );
}

export default About;
