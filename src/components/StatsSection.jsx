import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-purple-700 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-12">
          Trusted By Millions, Built For You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-purple-600 border-purple-600">
          <div className="py-8 md:py-0">
            <p className="text-lg uppercase opacity-75 mb-2">Total Downloads</p>
            <p className="text-6xl font-extrabold mb-1">29.6M</p>
            <p className="text-base opacity-75">21% More Than Last Month</p>
          </div>

          <div className="py-8 md:py-0">
            <p className="text-lg uppercase opacity-75 mb-2">Total Reviews</p>
            <p className="text-6xl font-extrabold mb-1">906K</p>
            <p className="text-base opacity-75">46% More Than Last Month</p>
          </div>
          
          <div className="py-8 md:py-0">
            <p className="text-lg uppercase opacity-75 mb-2">Active Apps</p>
            <p className="text-6xl font-extrabold mb-1">132+</p>
            <p className="text-base opacity-75">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
