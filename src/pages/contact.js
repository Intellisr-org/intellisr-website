import React from "react";
import Layout from "../components/layout";
import Input from "../components/Atoms/input";
import Fade from "react-reveal/Fade";
import Seo from "../components/seo";
import image from "../images/brain.jpg";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from 'lucide-react'; // Example icons

const Contact = () => {
  return (
    <Layout>
      <Seo
        title="Intellisr"
        description="Intellisr pvt ltd is helping businesses grow with customised AI solutions."
      />

      <div className="max-w-7xl mx-auto mt-10 text-gray-900 px-4">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          exit={{ opacity: 1 }}
          className="flex flex-col sm:flex-row bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <Fade duration={1200}>
            {/* Left Section - Contact Form & Info */}
            <div className="p-10 sm:w-3/4 w-full">
              <h2 className="text-4xl sm:text-2xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-green-500 mt-4">
                Where Impossible Becomes Possible
              </h2>
              <h4 className="text-base sm:text-sm md:text-base text-gray-700 mt-3 w-full sm:w-3/4 leading-relaxed">
                We don't just build technology; we build the future.
              </h4>

              {/* Contact Information */}
              <div className="mt-8">
                <div className="flex flex-wrap gap-8">
                  {/* Phone */}
                  <div className="flex items-start w-full sm:w-auto">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 text-white mr-4">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold underline underline-offset-4 decoration-cyan-400">Phone</p>
                      <p className="text-gray-600 mt-1">
                        <a
                          href="tel:+(94)776621134"
                          className="text-cyan-600 hover:underline hover:text-cyan-700 transition-colors"
                        >
                          (94) 776621134
                        </a>
                      </p>
                    </div>
                  </div>
                  {/* Email */}
                  <div className="flex items-start w-full sm:w-auto">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 text-white mr-4">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold underline underline-offset-4 decoration-cyan-400">Email</p>
                      <p className="text-gray-600 mt-1">
                        <a
                          href="mailto:info@intellisr.com"
                          className="text-cyan-600 hover:underline hover:text-cyan-700 transition-colors"
                        >
                          info@intellisr.com
                        </a>
                      </p>
                    </div>
                  </div>
                  {/* Address */}
                  <div className="flex items-start w-full sm:w-auto">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 text-white mr-4">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold underline underline-offset-4 decoration-cyan-400">Address</p>
                      <p className="text-cyan-600 mt-1">
                        No 23/03 Pinhena, Pannipitiya.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <h1 className="text-3xl font-semibold">Connect With Us</h1>
              {/* Contact Form */}
              <form className="mt-10 space-y-6" name="contact" method="POST" netlify>
                <div className="flex flex-col sm:flex-row gap-5">
                  <label className="flex-1">
                    <Input
                      placeholder="Your Name"
                      type="text"
                      name="name"
                      className="bg-gray-50 text-black placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </label>
                  <label className="flex-1">
                    <Input
                      placeholder="Your Email"
                      type="email"
                      name="email"
                      className="bg-gray-50 text-black placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-5">
                  <label className="flex-1">
                    <Input
                      placeholder="Your Company"
                      type="text"
                      name="company"
                      className="bg-gray-50 text-gray-800 placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </label>
                  <label className="flex-1">
                    <Input
                      placeholder="Your Phone"
                      type="text"
                      name="phone"
                      className="bg-gray-50 text-gray-800 placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </label>
                </div>

                {/* Interested In */}
                <div className="flex flex-col">
                  <label className="font-medium text-sm text-gray-700 mb-2">I'm Interested In:</label>
                  <select
                    name="interest"
                    className="w-full bg-gray-50 text-gray-800 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  >
                    <option value="AI-based Automation">AI-based Automation</option>
                    <option value="Inventions as a Service (IAAS)">Inventions as a Service (IAAS)</option>
                    <option value="Tech Consulting">Tech Consulting</option>
                    <option value="Custom AI Solutions">Custom AI Solutions</option>
                  </select>
                </div>

                <label className="block">
                  <textarea
                    className="w-full bg-gray-50 text-gray-800 placeholder-gray-500 rounded-xl p-4 h-40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    placeholder="How can we help you?"
                    name="message"
                  ></textarea>
                </label>

                <div className="flex justify-start">
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
                </div>
              </form>
            </div>
          </Fade>

          {/* Right Image Section */}
          <Fade bottom cascade>
            <div className="hidden sm:block sm:w-1/4 relative">
              <div className="w-full h-full overflow-hidden">
                <img
                  className="object-cover h-full w-full transition-all duration-300"
                  src={image}
                  alt="Background"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-30 pointer-events-none"></div>
              </div>
            </div>
          </Fade>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Contact;
