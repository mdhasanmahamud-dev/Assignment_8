import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
import hero from "../assets/hero.png";
import StatsSection from "./StatsSection";

const Hero = () => {
  return (
    <div className="bg-gray-50   py-10">
      <div className="flex flex-col items-center px-6">
        {/* Text Section */}
        <div className="text-center max-w-4xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            We Build <span className="text-[#632EE3]">Productive Apps</span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            At <span className="font-semibold">HERO.I</span>, we craft
            innovative apps designed to make everyday life simpler, smarter, and
            more exciting. Our goal is to turn your ideas into digital
            experiences that truly make an impact.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center mt-4">
            <a
              href="https://play.google.com/store/games?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              <IoLogoGooglePlaystore className="text-2xl" />
              Google Play
            </a>

            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-900 transition"
            >
              <FaAppStoreIos className="text-2xl" />
              App Store
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-10 flex justify-center w-full ">
          <img
            src={hero}
            alt="Hero illustration"
            className="w-full max-w-md md:max-w-5xl "
          />
        </div>
      </div>

      <StatsSection />
    </div>
  );
};

export default Hero;
