import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    quote: '“Jobs fill your pocket, but adventures fill your soul.”',
  },
  {
    image: 'https://images.unsplash.com/photo-1508766206392-8bd5cf550d1c',
    quote: '“Life is short and the world is wide.”',
  },
  {
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    quote: '“The journey, not the arrival, matters.”',
  },
  {
    image: 'https://images.unsplash.com/photo-1508264165352-258db2ebd59b',
    quote: '“Adventure may hurt you, but monotony will kill you.”',
  },
];

const AdventureCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto Slide Every 1 Second
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full  mx-auto  overflow-hidden rounded-b-2xl shadow-lg">
      <div className="relative h-[450px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Adventure ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
                {slide.quote}
              </h2>
              <Link to={"/dest"} className="mt-4 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition">
                Book Now
              </Link >
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 p-3 bg-white/70 rounded-full hover:bg-white shadow"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 p-3 bg-white/70 rounded-full hover:bg-white shadow"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default AdventureCarousel;
