import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <img
          src="images/Isolation_Mode-1.png"
          alt=""
          className="w-full h-[50vh] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8">
          <div className="border-l-4 border-green-500 pl-4">
            <h1 className="text-white text-4xl font-bold">Contact Us</h1>
          </div>
          <div className="mt-2 text-green-500">
            <Link to={"/"} className="hover:underline">
              HOME
            </Link>{" "}
            /{" "}
            <Link to={"/contactUs"} className="hover:underline uppercase">
              ContactUs
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Coffee with our experts?
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Email us</h2>
              <p className="text-gray-600">it.gurgaon@gawar.in</p>
            </div>
            <i className="fas fa-envelope text-3xl text-gray-900"></i>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Call us</h2>
              <p className="text-gray-600">0124-4854000</p>
            </div>
            <i className="fas fa-phone text-3xl text-gray-900"></i>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Registered office
              </h2>
              <p className="text-gray-600">
                DSS-378 Sector 16-17,
                <br />
                Hisar HR 125005
              </p>
            </div>
            <i className="fas fa-map-marker-alt text-3xl text-gray-900"></i>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Corporate office
              </h2>
              <p className="text-gray-600">
                SF-01, JMD Galleria,
                <br />
                Sector-48, Sohna Road, Gurgaon-122001
              </p>
            </div>
            <i className="fas fa-map-marker-alt text-3xl text-gray-900"></i>
          </div>
        </div>
      </div>
      <div className="flex md:gap-10 px-4 my-10 flex-wrap w-full">
        <div className=" md:h-[80vh] overflow-hidden shadow-red-600 relative md:w-1/2">
          <img
            src="/images/file.png"
            alt=""
            className="shadow-lg relative bottom-16"
          />
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-lg">
          <h1 className="text-2xl font-bold mb-6">
            Add your information here, and our team will get in touch with you
          </h1>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Full name here"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Full name here"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Where can we call you"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Where can we email you"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                placeholder="Your message goes here"
                className="w-full border border-gray-300 rounded-md p-2 h-24"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-600  text-white font-medium py-2 rounded-md"
              >
                Get a call back
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactUs;
