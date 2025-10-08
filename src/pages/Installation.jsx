import { useState, useEffect } from "react";
import { FiDownload, FiStar } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getInstalledApps,
  removeAppFromLocalStorage,
} from "../utils/localStorage";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    const apps = getInstalledApps();
    setInstalledApps(apps);
  }, []);

  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOption === "high-low") return b.downloads - a.downloads;
    if (sortOption === "low-high") return a.downloads - b.downloads;
    return 0;
  });

  const handleUninstall = (id, title) => {
    const updatedApps = removeAppFromLocalStorage(id);
    setInstalledApps(updatedApps);
    toast.success(`${title} Uninstalled Successfully!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="container max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900">
          Your Installed Apps
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Apps count and sort */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm font-medium text-gray-700">
          {installedApps.length} Apps Found
        </p>

        <select
          className="border border-gray-300 text-sm rounded-md px-3 py-1 focus:outline-none"
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="default">Sort By Size</option>
          <option value="low-high">Low-High</option>
          <option value="high-low">High-Low</option>
        </select>
      </div>

      {/* Installed App List */}
      {sortedApps.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">
          No apps installed yet.
        </p>
      ) : (
        <div className="space-y-4">
          {sortedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white p-4 border border-gray-200 rounded-md shadow-sm flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-800">{app.title}</h2>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                    <div className="flex items-center gap-1 text-emerald-600">
                      <FiDownload className="text-sm" />
                      {app.downloads}
                    </div>
                    <div className="flex items-center gap-1 text-orange-500">
                      <FiStar className="text-sm" />
                      {app.ratingAvg}
                    </div>
                    <div>{app.size} MB</div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id, app.title)}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1 rounded-md text-sm"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Installation;
