import React from 'react'

function Project() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6">
    <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
            A leader in transforming vision into reality
        </h1>
    </div>
    <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
            <img src="https://api.deepai.org/job-view-file/e11de921-d3d4-44aa-9be8-997bed14a6b3/outputs/output.jpg?art-image=true" alt="Aerial view of Gawar Rohna Jhajjar Highway Pvt Ltd" className="rounded-lg shadow-lg w-full h-auto"/>
            <div className="absolute bottom-4 left-4 text-white text-sm font-semibold">
                Gawar Rohna Jhajjar Highway Pvt Ltd
            </div>
        </div>
        <div className="relative">
            <img src="https://api.deepai.org/job-view-file/e155a7d8-e9ac-43fd-9fd3-17bb21aec4de/outputs/output.jpg?art-image=true" alt="Aerial view of Gawar Bangalore Highways Pvt Ltd" className="rounded-lg shadow-lg w-full h-auto"/>
            <div className="absolute bottom-4 left-4 text-white text-sm font-semibold">
                Gawar Bangalore Highways Pvt Ltd
            </div>
        </div>
        <div className="relative">
            <img src="https://api.deepai.org/job-view-file/c5ec144b-5ae6-4893-9d68-0c9e93b625dc/outputs/output.jpg?art-image=true" alt="Aerial view of Gawar Kiratpur Nercho Highway Pvt Ltd" className="rounded-lg shadow-lg w-full h-auto"/>
            <div className="absolute bottom-4 left-4 text-white text-sm font-semibold">
                Gawar Kiratpur Nercho Highway Pvt Ltd
            </div>
        </div>
    </div>
</div>
  )
}

export default Project
