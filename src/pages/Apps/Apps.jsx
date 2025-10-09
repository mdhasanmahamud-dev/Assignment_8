import { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import AppCarts from "./AppCarts";

const Apps = () => {
  const appsData = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApps, setFilteredApps] = useState(appsData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const trim = searchTerm.trim().toLowerCase();
      const filtered = appsData.filter((app) =>
        app.title.toLowerCase().includes(trim)
      );
      setFilteredApps(filtered);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, appsData]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          Our All Applications
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Explore all apps on the market developed by us. We code for millions.
        </p>
      </div>

      {/* Search */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        <div className="text-gray-700 font-medium">
          ({filteredApps.length}) Apps Found
        </div>
        <div className="w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search apps..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
        </div>
      </div>

      {/* Loading / Results */}
      {loading && (
        <div className="flex justify-center items-center h-56 flex-col">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <span className="text-blue-600 font-medium text-lg">Loading...</span>
        </div>
      )}
      <AppCarts apps={filteredApps} />
    </div>
  );
};

export default Apps;
