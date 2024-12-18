import { Link } from "gatsby"
import React from "react"

import logo from "../images/logo.png"

const Footer = () => {
  return (
    <footer className="mt-16 mx-4">
      <div className="max-w-7xl mx-auto h-auto">
        <div className="bg-gradient-to-r from-cyan-500 to-green-500 p-10 rounded-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="flex flex-col justify-between">
              <div>
                <img 
                  className="max-h-20 max-w-xs mb-4" 
                  src={logo} 
                  alt="Intellisr Logo"
                />
                <p className="text-white text-base font-light leading-relaxed">
                  Dedicated team of skilled professionals<br />
                  passionate about innovation and technology.
                </p>
              </div>

              <div className="mt-10 text-white text-sm font-normal">
                <p className="opacity-80">
                  &copy; {new Date().getFullYear()} Intellisr. All Rights Reserved.
                </p>
              </div>
            </div>

            {/* Right Column: Navigation */}
            <div className="flex lg:justify-end self-center">
              <ul className="text-white text-lg font-medium space-y-2">
                {["Home", "Solutions", "Company", "Contact"].map((item, index) => (
                  <li key={index} className="transition-colors duration-300 hover:text-green-700 hover:bg-white bg-opacity-10 px-3 py-2 rounded-md">
                    {item === "Home" ? (
                      <Link to="/">{item}</Link>
                    ) : item === "Solutions" ? (
                      <Link to="/about">{item}</Link>
                    ) : item === "Company" ? (
                      <Link to="/gallery">{item}</Link>
                    ) : (
                      <Link to="/contact">{item}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
