import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/project-photos/One.jpg",
    "/project-photos/Two.jpg",
    "/project-photos/Three.jpg",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Auto-slide interval (3 seconds)
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <div className="relative w-full mx-auto overflow-hidden md:h-[80vh] md:rounded-3xl">
      <div
        className="flex ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform .8s", // Set transition duration to 1 second
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full overflow-hidden">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full bg-cover bg-no-repeat bg-fixed"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200"
      >
        &#10095;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
