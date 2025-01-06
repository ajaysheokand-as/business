import React from "react";
import Navbar from "./Navbar";
import { projectsDetails } from "../data/Main";

function ProjectDetailPage() {
  return (
    <>
      <Navbar />
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {projectsDetails.title}
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Location:</strong> {projectsDetails.location}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Client:</strong> {projectsDetails.client}
          </p>
          <p className="text-lg text-gray-600 mb-6">
            <strong>Completion Date:</strong> {projectsDetails.completionDate}
          </p>
          <div className="mb-8">
            <img
              src={projectsDetails.image}
              alt={projectsDetails.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              About the Project
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {projectsDetails.description}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Key Features
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              {projectsDetails.features.map((feature, index) => (
                <li key={index} className="mb-2">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectDetailPage;
