import React from "react";
import Layout from "../components/layout";
import Input from "../components/Atoms/input";
import Button from "../components/Atoms/button";
import Fade from "react-reveal/Fade";
import Seo from "../components/seo";
import image from "../images/brain.jpg";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Layout>
      <Seo
        title="Intellisr"
        description="Intellisr pvt ltd is helping businesses grow with customised AI solutions."
      ></Seo>

      <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          exit={{ opacity: 1 }}
          className="flex flex-col sm:flex-row w-full"
        >
          <Fade duration={1200}>
            <div className="bg-dp opacity-70 p-10 rounded-xl sm:w-3/4 w-full m-5">
              <h1 className="text-3xl text-white">CONTACT Intellisr</h1>
              <h2 className="text-black text-gradient bg-gradient-to-r from-pink to-white text-4xl font-bold mt-2 xxs:text-lg sm:text-2xl lg:text-4xl">
                Where Impossible Becomes Possible
              </h2>
              <p className="text-lg mt-2 opacity-70 w-3/4 xxs:text-xs xxs:w-full sm:text-sm sm:w-3/4">
                We don't just build technology; we build the future. Let's turn your "what ifs" into "wows."
              </p>

              {/* Contact Information */}
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-full mt-10">
                <div className="flex flex-wrap">
                  {/* Contact Info Blocks */}
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-3">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                          {/* SVG Icon */}
                        </div>
                      </div>
                      <div className="ml-2 grow">
                        <p className="mb-2 font-bold underline decoration-pink">Phone</p>
                        <p className="text-neutral-500 mb-2">
                          <a href="tel:+#">(08) 9000 000</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Other Contact Info Blocks... */}
                </div>
              </div>

              {/* Contact Form */}
              <form className="mt-5" name="contact" method="POST" netlify>
                <div className="flex xxs:flex-col sm:flex-row">
                  <div className="sm:mr-5 xxs:mr-0">
                    <label>
                      <Input placeholder="Your Name" type="text" name="name"></Input>
                    </label>
                  </div>
                  <div className="sm:ml-5 xxs:ml-0 xxs:mt-2 sm:mt-0">
                    <label>
                      <Input placeholder="Your Email" type="email" name="email"></Input>
                    </label>
                  </div>
                </div>
                <div className="flex mt-5 xxs:flex-col sm:flex-row">
                  <div className="sm:mr-5 xxs:mr-0">
                    <label>
                      <Input placeholder="Your Company" type="text" name="company"></Input>
                    </label>
                  </div>
                  <div className="sm:ml-5 xxs:ml-0 xxs:mt-2 sm:mt-0">
                    <label>
                      <Input placeholder="Your Phone" type="text" name="phone"></Input>
                    </label>
                  </div>
                </div>
                <label>
                  <textarea
                    className="mt-5 w-full bg-bg bg-opacity-20 rounded-xl p-5 focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                    rows="5"
                    placeholder="How can we help you?"
                    name="Message"
                  ></textarea>
                </label>
                <div>
                  <label>
                    <Button
                      type="submit"
                      title="Send Message"
                      colorClass="bg-gradient-to-r from-pink to-purple font-montserrat"
                      marginClass="mt-5"
                    ></Button>
                  </label>
                </div>
              </form>
            </div>
          </Fade>

          {/* Right Image Section */}
          <Fade bottom cascade>
            <div className="sm:w-1/4 overflow-hidden rounded-xl m-5 xxs:hidden sm:block">
              <img
                className="object-cover h-full w-full"
                src={image}
                alt="HeroImage"
              />
            </div>
          </Fade>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Contact;
