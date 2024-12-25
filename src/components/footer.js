import { Link } from "gatsby"
import React from "react"
import { Facebook, Linkedin, Github } from 'lucide-react'
import logo from "../images/logo.png"

const Footer = () => {
  return (
    <footer className="mt-8 mx-4">
      <div className="max-w-7xl mx-auto h-auto">
        <div className="bg-gradient-to-r from-cyan-500 to-green-500 p-6 rounded-xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
            {/* Left Section: Logo, Text, Icons */}
            <div className="flex flex-col space-y-4 lg:space-y-2">
              <img
                className="h-20 w-20 fill-white"
                src={logo}
                style={{ filter: 'brightness(90%) hue-rotate(-120deg) saturate(150%)' }}
                alt="Intellisr Logo"
              />
              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/company/intellisr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white hover:text-gray-100 transition-colors duration-300"
                >
                  <Linkedin className="w-10 h-10 p-1 border border-white hover: rounded-md" />
                </a>
                <a
                  href="https://github.com/Intellisr-org"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-white hover:text-gray-100 transition-colors duration-300"
                >
                  <Github className="w-10 h-10 p-1 border border-white rounded-md" />
                </a>
                <a
                  href="https://www.facebook.com/intellisr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-white hover:text-gray-100 transition-colors duration-300"
                >
                  <Facebook className="w-10 h-10 p-1 border border-white rounded-md" />
                </a>
              </div>
              <p className="text-white text-xs font-light leading-relaxed max-w-sm">
                We turn ambitious ideas into reality through cutting-edge AI, guiding businesses towards innovation and efficiency.
              </p>
              <p className="text-white text-xs opacity-80 pt-2">
                &copy; {new Date().getFullYear()} Intellisr. All Rights Reserved.
              </p>
            </div>

            {/* Right Section: Navigation */}
            <div className="flex space-x-4">
              
            <ul className="text-white text-lg font-medium space-y-2">
                {[
                  { name: "Home", link: "/" },
                  // { name: "Solutions", link: "/about" },
                  // { name: "Company", link: "/gallery" },
                  { name: "Contact", link: "/contact" }
                ].map((navItem, index) => (
                  <li
                    key={index}
                    className="transition-colors duration-300 hover:text-white hover:underline underline-offset-4 decoration-white px-3 py-2 rounded-md"
                  >
                    <Link to={navItem.link}>{navItem.name}</Link>
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
