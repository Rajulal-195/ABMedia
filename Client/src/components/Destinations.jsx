import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDestinations } from '../Redux/destinationsSlice';
import { Link } from 'react-router-dom';

const Destinations = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.destinations);
  const des = data?.data || [];

  useEffect(() => {
    dispatch(getDestinations());
  }, [dispatch]);

  return (
    <>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <h1 className="text-center text-cyan-600 font-semibold mt-10 text-lg sm:text-xl lg:text-2xl leading-tight">
        Explore Most Popular Destinations
      </h1>
       
        <p className="text-center text-gray-400 text-xs sm:text-sm mt-1 max-w-md mx-auto">
          Stay updated with our latest news and happenings through releases
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {des.map((tour) => (
            <div
              key={tour._id}
              className="rounded-lg overflow-hidden shadow-md border border-gray-200"
            >
              <img
                src={tour.image[0]}
                alt={tour.name}
                className="w-full h-48 object-cover"
              />
              <div className="bg-white p-3 text-center">
                <p className="text-xs font-semibold text-cyan-700 uppercase mb-2">
                  {tour.name}
                </p>
                <Link
                  to={`/tour/${tour._id}`}
                  state={{ tour }}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-semibold rounded px-4 py-1 inline-block"
                >
                  VIEW DETAILS
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Destinations;
