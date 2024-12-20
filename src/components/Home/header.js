import React from "react";
import Fade from "react-reveal/Fade";
import { motion } from "framer-motion";
import hero from "../../images/file.png";
import { fadeIn } from "../../variants";

const Header = () => {
  return (
    <Fade duration={2200}>
      <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:space-x-8">
          {/* Text Section */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-center"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-500">
              Helping Businesses Grow with<br className="hidden sm:block" />Customized AI Solutions.
            </h2>
            <h4 className="text-gray-700 drop-shadow-md text-lg drop-shaow-md sm:text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
              Intellisr Pvt. Ltd. empowers businesses with innovative, tailor-made AI solutions to drive efficiency, growth, and long-term success. Our approach combines cutting-edge technology with deep industry insights, ensuring that every tool and concept aligns perfectly with your unique needs.
            </h4>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-md font-medium text-white bg-gradient-to-r from-cyan-500 to-green-500 hover:from-green-500 hover:to-cyan-500 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Contact Us
                <svg
                  className="w-4 h-4 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/intellisr/"
                className="inline-flex items-center justify-center px-8 py-3 border border-green-500 text-green-500 rounded-md font-medium transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get To Know Us
              </a>
            </div>
          </motion.div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
            <img
              src={hero}
              alt="Futuristic AI Illustration"
              className="max-w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Header;
