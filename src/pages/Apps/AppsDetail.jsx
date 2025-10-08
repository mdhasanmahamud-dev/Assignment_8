import { useState, useEffect } from "react";
import { FiDownload, FiStar } from "react-icons/fi";
import { LuMessagesSquare } from "react-icons/lu";
import {
  addAppToLocalStorage,
  getInstalledApps,
} from "../../utils/localStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppsDetail = ({ app }) => {
  const { id, image, title, companyName, size, ratingAvg, downloads, reviews } =
    app;

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const installedApps = getInstalledApps();
    const alreadyInstalled = installedApps.some((a) => a.id === id);
    setIsInstalled(alreadyInstalled);
  }, [id]);

  const handleAppToLocalStorage = (app) => {
    const result = addAppToLocalStorage(app);

    if (result === "exists") {
      toast.info(`${title} is already installed!`, {
        position: "top-right",
        theme: "colored",
      });
    } else if (result === "added") {
      toast.success(`${title} installed successfully!`, {
        position: "top-right",
        theme: "colored",
      });
      setIsInstalled(true);
    }
  };

  return (
    <div className="bg-gray-50 rounded-md p-6 flex gap-10 items-center">
      <div className="w-64 h-54 bg-white rounded-md flex items-center justify-center">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>

      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500 mb-4">
          Developed by{" "}
          <span className="text-blue-600 font-medium hover:underline cursor-pointer">
            {companyName}
          </span>
        </p>

        <div className="flex items-center gap-8 mb-4">
          <div className="flex items-center gap-2 text-green-600">
            <FiDownload className="text-xl" />
            <div className="text-md font-semibold">{downloads}</div>
          </div>
          <div className="flex items-center gap-2 text-yellow-500">
            <FiStar className="text-xl" />
            <div className="text-md font-semibold">{ratingAvg}</div>
          </div>
          <div className="flex items-center gap-2 text-purple-600">
            <LuMessagesSquare className="text-xl" />
            <div className="text-md font-semibold">{reviews}</div>
          </div>
        </div>

        <button
          onClick={() => handleAppToLocalStorage(app)}
          disabled={isInstalled}
          className={`${
            isInstalled
              ? "bg-green-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          } text-white font-medium py-2 px-4 rounded-md`}
        >
          {isInstalled ? "Installed" : `Install Now (${size})`}
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AppsDetail;
