import React from 'react'

function Boardofdriction() {
    const img=[
        
        { src: '/phoolvati.jpg', text: 'Project 1', alt: ' She is 81 years old and Non-Executive Director of the Company. She is a social worker and advocates for the marginalized sections of society and animal welfare.' },
        { src: '/rakesh.jpg', text: 'Project 2', alt: ' Mr. Rakesh Kumar, as Founder and Executive Director, has propelled Gawar to new heights with innovative ideas and a strong grasp of technology. His experience of over 25 years in civil construction and attention to detail, deep knowledge, and openness to innovation have boosted functional efficiencies, making Gawar among the top national infrastructure companies in India. He emphasises trust, transparency, and problem-solving, transforming Gawar into a process-driven and system-oriented organisation' },
        { src: '/ramkishan.png', text: 'Project 3', alt: ' Mr. Ravinder Kumar, Founder and Executive Director, holds a Bachelor’s degree in Humanities and brings over 25 years of experience in civil construction. He plays a vital role in strategic planning, technical aspects, and project execution, setting new standards for Gawar by consistently completing projects ahead of schedule. His expertise lies in resource management and maximising productivity, driving early project completion and securing early completion bonuses' },
        { src: '/ravinder.png', text: 'Project 4', alt: ' Mr. Singla, Executive Director-Technical at Gawar since October 2019, holds a Ph.D. in Civil Engineering from Manav Rachna International Institute of Research and Studies. With 38 years of experience in public and private sectors, including roles at NHAI and Haryana State Roads and Bridges Development Corporation, he has been involved in record-breaking projects. He has authored technical publications featured in NASA and Harvard libraries, published the book “Expressways in 500 Days,” and received accolades like The Expressway Man of the Year (2019), Lifetime Achievement Award (2019), and Desh Ratna Conclave Award (2021). Recently, he was honoured with the Lifetime Achievement Award (Infrastructure) in 2023' },
        { src: '/img5.webp', text: 'Project 5', alt: ' Mr. Ram Kishan, Whole time Director – Project, joined the Company’s Board in 2017. He holds a B.A. from S.M.R.J. Government College, Siwani, and brings over 15 years of experience in road project execution. His expertise lies in consistently completing projects well ahead of schedule, directly contributing to the Company’s profitability' },
        { src: '/img6.webp', text: 'Project 6', alt: 'Mr. Bhupinder Singh, a retired IAS officer with a distinguished career spanning over several decades, joined the Haryana Civil Services (HCS) in 1992 and was inducted into the Indian Administrative Service (IAS) in 2005. Throughout his tenure, he held key positions in the Haryana government, including City Magistrate of Hisar, Sub Divisional Magistrate in various districts, and Joint Secretary in multiple departments such as Home, Vigilance, Personnel, and Finance. With extensive experience in managing financial matters and overseeing the allocation of funds for developmental projects, Mr. Singh brings invaluable expertise and mentorship to our team' },
        { src: '/img7.png', text: 'Project 7', alt: ' Ms. Sumedha Kataria, a retired IAS officer from the 2005 Batch of the Haryana Cadre, served as the Chief Administrator at HSAMB, Panchkula, and held various senior-level positions in the Haryana government. She has received accolades such as the Bharat Vikas Award for development work in Kurukshetra and the Dr. Praloy O. Basu Lifetime Achievement Award. Her educational background includes an MBA from G.J.U. Hisar, MA degrees from Punjab University and Kurukshetra University, and an MA in Community Education from De Montfort University, Leicester (U.K.)' },
    ]
  return (
   <>
   <h1 className='text-7xl ml-8 font-extrabold'>Board of directors</h1>
   

            
            {/* Grid Layout for Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
                {img.map((image, index) => (
                    <div
                        key={index}
                        className="relative group w-full h-[300px] sm:h-[400px] cursor-pointer overflow-hidden rounded-lg transition-all duration-500"
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-all duration-500"
                        />
                        <h1>nnnmn</h1>
                        
                       
                        
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-70 text-black h-60 transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
                            <p className="text-sm">{image.alt}</p>
                        </div>
                    </div>
                    
                ))}
            </div>
            
   
   
   </>
  )
}

export default Boardofdriction


