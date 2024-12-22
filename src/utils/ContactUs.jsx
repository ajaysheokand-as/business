import React ,{useState} from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ContactUsData } from "../data/Main";
import emailjs from 'emailjs-com'
function ContactUs() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    number :'',
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    const serviceID = "your_service_id";// Replace with your EmailJS service ID
    const templateID = "your_template_id";// Replace with your EmailJS template ID
    const publicKey = "your_public_key";// Replace with your EmailJS public key
    emailjs.send(serviceID, templateID, formData, publicKey)
    .then(
      (response) => {
        setSuccessMessage("Thank you for reaching out. We'll get back to you soon!");
        setFormData({
          firstName: "",
          lastName: "",
          number :'',
          email: "",
          message: "",
        }); // Reset form
      },
      (error) => {
        setErrorMessage("Failed to send message. Please try again.");
      }
    );
  }
  return (
    <>
      <Navbar />
      <div className="relative">
        <img
          src={ContactUsData.img}
          alt=""
          className="w-full h-[50vh] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8">
          <div className="border-l-4 border-green-500 pl-4">
            <h1 className="text-white text-4xl font-bold">
              {ContactUsData.text}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          {ContactUsData.coffee}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl">
          {ContactUsData.address.map((val) => (
            <div key={Math.random()} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {val.text}
                </h2>
                <p className="text-gray-600">{val.address}</p>
              </div>
              <i className={`text-3xl text-gray-900 ${val.icon}`}></i>
            </div>
          ))}
        </div>
      </div>
      <div className="flex md:gap-10 px-4 my-10 flex-wrap w-full">
        <div className=" md:h-[80vh] overflow-hidden shadow-red-600 relative md:w-1/2">
          <img
            src={ContactUsData.image}
            alt=""
            className="shadow-lg relative bottom-16"
          />
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-lg">
          <h1 className="text-2xl font-bold mb-6">
            {ContactUsData.formHading}
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  name= 'firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Full name here"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Last name 
                </label>
                <input
                  type="text"
                  name= 'lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name Here"
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
                  type="number"
                  required
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
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
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                name="message"
                value={formData.message}
                onChange={handleChange}
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
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <Footer />
    </>
  );
}

export default ContactUs;
