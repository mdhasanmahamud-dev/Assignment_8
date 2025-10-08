import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import { NavLink } from "react-router";

const AppCarts = ({ apps }) => {
  if (!apps || apps.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500 font-medium">
        No apps found matching your search.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-8 justify-items-center">
      {apps.map((app) => (
        <div
          key={app.id}
          className="w-full max-w-xs bg-white rounded-lg overflow-hidden flex flex-col transition duration-300 hover:shadow-md  border border-gray-200"
        >
          <NavLink to={`/appsDetailse/${app.id}`}>
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
  );
};

export default AppCarts;
