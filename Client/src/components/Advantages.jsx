import React from 'react';
import { FaClock, FaWallet, FaNetworkWired, FaBookOpen } from 'react-icons/fa';

const advantages = [
  {
    icon: <FaClock className="text-cyan-400 text-2xl" />,
    title: 'Save Time',
    description: 'No More Switching For Packages Or Plots.',
  },
  {
    icon: <FaWallet className="text-cyan-400 text-2xl" />,
    title: 'Save Money',
    description: 'Compare, Negotiate, And Choose The Best.',
  },
  {
    icon: <FaNetworkWired className="text-cyan-400 text-2xl" />,
    title: 'Trusted Network',
    description: 'A Trusted Network Of 7000+ Travel Agents',
  },
  {
    icon: <FaBookOpen className="text-cyan-400 text-2xl" />,
    title: 'Multiple Options',
    description: 'Itineraries & Travel Tips From Trusted Agents',
  },
];

const Advantages = () => {
  return (
    <section className="mt-20 bg-cyan-500 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-white font-semibold text-lg sm:text-xl">
          Our Advantages
        </h3>
        <p className="text-white text-xs sm:text-sm max-w-xl mx-auto mt-1">
          You can rely on us more now with the quality of services we provide. Pick
          any other reasons to book tours in your country.
        </p>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-5xl mx-auto text-left">
          {advantages.map((advantage, index) => (
            <div key={index}>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                {advantage.icon}
              </div>
              <h4 className="text-white font-semibold text-sm text-center">
                {advantage.title}
              </h4>
              <p className="text-white text-xs max-w-[140px] mx-auto text-center">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
