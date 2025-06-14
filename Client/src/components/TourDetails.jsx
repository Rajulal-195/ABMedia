import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Packages from './Packages';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const TourDetails = () => {
  const { state } = useLocation();
  const destination = state?.tour;

  const images = Array.isArray(destination?.image) && destination.image.length > 0
    ? destination.image
    : ['https://via.placeholder.com/800x400?text=No+Image+Available'];

  const [current, setCurrent] = useState(0);
  const currentRef = useRef(current);

  // Manual navigation
  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Keep ref in sync with state
  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  if (!destination) {
    return (
      <div className="p-10 flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center text-red-500 text-lg font-semibold">
          Destination not found or data not passed properly.
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-white p-6">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden">

          {/* Image Carousel */}
          <div className="relative w-full h-[400px] overflow-hidden">
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                  index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={img}
                  alt={`slide-${index}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/800x400?text=Image+Unavailable';
                  }}
                />
              </div>
            ))}

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/70 rounded-full hover:bg-white shadow"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/70 rounded-full hover:bg-white shadow"
            >
              <FaArrowRight />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === current ? 'bg-cyan-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Tour Info */}
          <div className="p-6 sm:p-8">
            <h1 className="text-3xl font-bold text-cyan-700 text-center mb-4">{destination.name}</h1>
            <p className="text-gray-600 text-sm mb-6 text-center max-w-2xl mx-auto">{destination.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 mb-6">
              <div><span className="font-semibold">📍 Location:</span> {destination.location || "N/A"}</div>
              <div><span className="font-semibold">📅 Best Time:</span> {destination.bestTimeToVisit || "N/A"}</div>
              <div><span className="font-semibold">⭐ Rating:</span> {destination.averageRating || 0}</div>
              <div><span className="font-semibold">📝 Reviews:</span> {destination.numberOfReviews || 0}</div>
            </div>

            {destination.tags?.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {destination.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="text-center mt-8">
              <button
                onClick={() => alert(`Booking initiated for ${destination.name}`)}
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-2 rounded-full shadow-md transition duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <Packages />
    </>
  );
};

export default TourDetails;
