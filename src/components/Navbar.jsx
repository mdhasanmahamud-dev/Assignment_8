import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "Installation", path: "/installation" },
  ];

  return (
    <nav className="bg-white shadow fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <h2 className="text-xl font-semibold text-gray-800">HERO.IO</h2>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                  : "text-gray-700 hover:text-blue-600"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:flex">
          <a
            href="https://github.com/MdHasanAliGHUN"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#632EE3] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <FaGithub className="text-xl" />
            Contribute
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 px-6 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }
              >
                {link.name}
              </NavLink>
            ))}

            <a
              href="https://github.com/MdHasanAliGHUN"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#632EE3] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              <FaGithub className="text-xl" />
              Contribute
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
