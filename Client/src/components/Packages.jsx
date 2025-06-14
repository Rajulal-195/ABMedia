import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPackages } from '../Redux/packagesSlice';

const Packages = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.packages);

  const packages = Array.isArray(data) ? data : data?.data || [];

  useEffect(() => {
    dispatch(getPackages());
  }, [dispatch]);

  if (loading) return <p className="text-center my-10 text-lg">Loading packages...</p>;
  if (error) return <p className="text-center my-10 text-red-600">Error loading packages: {error}</p>;

  return (
    <>
       <h1 className="text-center text-cyan-600 font-semibold mt-10 text-lg sm:text-xl lg:text-2xl leading-tight">
        Top Selling Tour Packages
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {packages.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">No packages available</p>
        ) : (
          packages.map((pkg) => (
            <div
              key={pkg._id}
              className="bg-white shadow-md rounded-xl overflow-hidden transform transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]"
            >
              <img
                src={pkg.image}
                alt={pkg.name}
                className="w-full h-56 object-cover m-2 rounded-xl"
              />

              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{pkg.name}</h2>
                <p className="text-sm text-gray-500 italic">{pkg.duration}</p>
                <p className="mt-2 text-gray-700 text-sm">{pkg.description}</p>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-yellow-500 font-semibold">⭐ {pkg.averageRating}</span>
                  <span className="text-gray-500 text-sm">({pkg.numberOfBookings} bookings)</span>
                </div>

                <p className="text-sm text-gray-600 mt-1">
                  Price: <strong>{pkg.price}</strong>
                </p>

                <p className="text-sm text-gray-600 mt-1">
                  Plan Type: <strong>{pkg.planType}</strong>
                </p>

                {Array.isArray(pkg.destinationsCovered) && (
                  <div className="mt-3">
                    <p className="text-xs font-semibold text-gray-600">Destinations Covered:</p>
                    <ul className="list-disc list-inside text-sm text-gray-700">
                      {pkg.destinationsCovered.map((dest, index) => (
                        <li key={index}>{dest}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {Array.isArray(pkg.includes) && (
                  <div className="mt-3">
                    <p className="text-xs font-semibold text-gray-600">Includes:</p>
                    <ul className="list-disc list-inside text-sm text-gray-700">
                      {pkg.includes.map((inc, index) => (
                        <li key={index}>{inc}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {pkg.isTopSelling && (
                  <span className="mt-3 inline-block bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">
                    🔥 Top Selling
                  </span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Packages;
