import React from 'react'

function About() {
  return (
    <>
<div className="relative w-full h-[400px] sm:h-[300px] md:h-[500px]">
  <img src="img1.jpg" alt="A cat" className="w-screen h-full object-cover" />
  <div className="absolute inset-0 flex items-center  text-white bg-black bg-opacity-50">
    <h2 className="text-xl sm:text-2xl ml-12 md:text-6xl font-bold mt-12">
        <span className='text-2xl mb-6 absolute ml-3 font-semibold'>About us</span> <br />
      Shaping the Future: Leaders in <br /> Infrastructure Development
    </h2>
  </div>
</div>


<div className="relative w-full sm:h-[600px] md:h-[900px] lg:h-[1200px]">
  
  <img src="img2.png" alt="A cat" className="w-full h-[900px] object-cover bg-gray-400 pt-48" />

  <div className="absolute inset-0 flex items-center justify-center text-white">
    
    <h2 className="text-3xl sm:text-5xl md:text-5xl font-extrabold absolute top-[20px]   sm:top-16 md:top-24 left-12 sm:left-16 md:left-28">
      Embarking on <br />a Journey
    </h2>

    
    <h2 className="text-xs sm:text-sm md:text-2xl lg:text-2xl pb-[700px] absolute left-[400px] bottom-14 sm:right-8 md:right-12 lg:right-16 font-bold w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]">
      Gawar Construction Limited (GCL), established in 1997 as a partnership firm and re-constituted as a limited company in 2008. Specialising in infrastructure projects like Expressways, Highways, Tunnels, and Bridges, we collaborate with prestigious government bodies across India, contributing over 12,000 lane kilometres to India’s <br /> infrastructure.
    </h2>
  </div>
</div>


<div className="flex flex-col  relative bottom-24  sm:flex-row sm:justify-center md:justify-between gap-2 sm:ml-0 md:ml-64">
  <div className=" ml-24 w-[400px] sm:text-center md:text-left">
    <h2 className="font-extrabold  text-xl sm:text-4xl md:text-3xl lg:text-4xl sm:ml-0 md:ml-32">
      Acknowledged <br />
      <span className="ml-0 sm:ml-0 md:ml-20">Distinction</span>
    </h2>
    <img src="img3.png" alt="Acknowledged Distinction" className="    sm:w-full  h-[500px]" />
  </div>

   <div className="w-[750px]">
    <img src="img4.png" alt="Industry Standing" className="sm:w-full md:w-auto" />
    <p className="sm:text-lg md:text-xl lg:text-2xl text-gray-400 sm:px-4 md:px-0 mt-4">
      Our industry standing is affirmed by our “AA/Stable” rating from CRISIL, highlighting our financial strength and track record of swift project execution. Additionally, our subsidiaries, comprising seven HAM companies, hold a “AAA/Stable” rating from CRISIL/ICRA, showcasing our dedication to excellence.
    </p>
  </div> 
</div> 


<div className="relative w-full h-[400px] sm:h-[300px] md:h-[500px]">
  <img src="img5.webp" alt="A cat" className="w-screen h-full object-cover" />
  <div className="absolute inset-0 flex items-center  text-white bg-black bg-opacity-50">
    <h2 className="text-xl  sm:text-2xl ml-12 md:text-2xl font-bold mt-12">
        <span className='text-5xl  absolute   ml-3 top-[150px] font-semibold'>Pioneering Excellence</span> <br />
       
      Gawar Construction is renowned for its commitment to steadfast <br /> project execution, evident in 12 projects receiving early completion  <br />bonus over the past five years and strong order book reflects the trust <br /> our clients place in us
    </h2>
  </div>
</div>








  
    
       
</>
      
    
  )
}

export default About



