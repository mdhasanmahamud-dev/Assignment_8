import React from "react";
import { BsDownload } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { NavLink } from "react-router"

const TrendingApps = ({ apps, loading, error }) => {
  if (loading) {
    return (
      <div className="text-center py-10 text-blue-600 font-semibold">
        Loading apps...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-600 font-semibold">
        {error}
      </div>
    );
  }

  // Show only 8 apps
  const trendingApps = apps.slice(0, 8);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Trending Apps
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Explore all trending apps on the market, developed by us.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-8 justify-items-center">
        {trendingApps.map((app) => (
          <div
            key={app.id}
            className="w-full max-w-xs bg-white rounded-lg overflow-hidden flex flex-col transition duration-300 hover:shadow-md  border border-gray-200"
          >
            {/* Image + Title clickable */}
            <NavLink to={`/appsDetailse/${app.id}`} className="cursor-pointer">
              <div className="aspect-square bg-gray-100 rounded-lg shadow-inner flex items-center justify-center p-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              <div className="mt-2 text-left p-4">
                <h3 className="text-sm font-semibold text-gray-800 leading-tight">
                  {app.title}
                </h3>
              </div>
            </NavLink>

            {/* Download & Rating (non-clickable) */}
            <div className="flex items-center justify-between mt-1 text-sm p-4">
              <div className="flex items-center text-green-500 font-semibold">
                <BsDownload className="w-3 h-3 mr-1" />
                <span className="text-xs">9M</span>
              </div>

              <div className="flex items-center text-orange-400 font-semibold">
                <AiFillStar className="w-3 h-3 mr-1" />
                <span className="text-xs">{app.ratingAvg.toFixed(0)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show All Button */}
      <div className="text-center mt-12">
        <NavLink
          to="/apps"
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition duration-200"
        >
          Show All
        </NavLink>
      </div>
    </div>
  );
};

export default TrendingApps;
