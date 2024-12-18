import React, { useState } from "react"
import { Link } from "gatsby"
import logo_min from "../images/logo_min.png"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Solutions", to: "/about" },
    { name: "Company", to: "/gallery" },
    { name: "Contact", to: "/contact" },
  ]

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-3 py-5">
        <div className="flex items-center justify-between h-16">
          <div className="w-full flex items-center justify-between">
            {/* Logo */}
            <a
              className="flex items-center space-x-2"
              href="/"
              aria-label="Home"
            >
              <img
                className="max-h-6 max-w-xs"
                src={logo_min}
                alt="Intellisr logo"
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="relative text-cyan-700 hover:text-green-700 font-montserrat font-medium text-sm transition-colors duration-300 px-3 py-2"
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-green-500 rounded transition-all duration-300 group-hover:w-full hover:w-full"></span>
                  </Link>
                ))}

                <div className="items-center">
                  <a
                    href="tel:+94776621134"
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium font-montserrat text-white bg-gradient-to-r from-cyan-500 to-green-500 rounded-md shadow hover:from-green-500 hover:to-cyan-500 transition-all duration-300"
                  >
                    Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              aria-label="Menu"
              onClick={() => setOpenMenu(!openMenu)}
              className="text-cyan-700 hover:text-green-700 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="h-8 w-8"
                viewBox="0 0 1792 1792"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className="md:hidden bg-white transition-all duration-500">
          <div className="px-3 pt-2 pb-3 space-y-1 font-montserrat text-cyan-700">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.to}
                className="relative block px-3 py-3 text-base font-medium transition-colors duration-300 hover:text-green-700"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-green-500 rounded transition-all duration-300 hover:w-full"></span>
              </a>
            ))}

            <div className="mt-5">
              <a
                href="tel:+94776621134"
                className="inline-flex w-full items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-green-500 rounded-md shadow hover:from-green-500 hover:to-cyan-500 transition-all duration-300"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
