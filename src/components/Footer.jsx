import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border border-red-900">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-2">MyWebsite</h2>
            <p className="text-gray-400 text-sm">
              Your go-to platform for amazing apps and productivity tools. Stay
              updated with latest products and tips.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col space-y-2 text-center md:text-left">
            <h3 className="font-semibold">Quick Links</h3>
            <a href="" className="text-gray-400 hover:text-white text-sm">
              Home
            </a>
            <a href="" className="text-gray-400 hover:text-white text-sm">
              Apps
            </a>
            <a href="" className="text-gray-400 hover:text-white text-sm">
              Installation
            </a>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-2">Contact</h3>
            <p className="text-gray-400 text-sm">Email: info@mywebsite.com</p>
            <p className="text-gray-400 text-sm">Phone: +123 456 7890</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          &copy; MyWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
