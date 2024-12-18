import React from "react"
import Fade from "react-reveal/Fade"
import { motion } from "framer-motion"
// Variants
import { fadeIn } from '../../variants'
// Icons (from lucide-react)
import {
  Lightbulb,
  Settings,
  BarChart2,
  Users,
  Monitor,
  Headphones,
  Eye,
  Bot
} from 'lucide-react'

// Assets
import HeroImage from "../../images/AI_work.jpg"
import RoboImage from "../../images/AI_robo.png"

const FeatureSection = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto">

      {/* How we can help you */}
      <div className="mt-20 px-8">
        <h2 className="text-gray-900 text-4xl font-semibold mb-4">
          How We Can Help You?
        </h2>
        <p className="text-gray-700 sm:text-lg mb-8">
        We will elevate you to the next level of success by bridging the gap between your vision and its tangible execution, transforming even the most complex concepts into reality.
        </p>
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
          {/* AI based Automation */}
          <motion.div
            className="bg-white border border-gray-300 p-6 rounded-xl w-full lg:w-1/3 flex flex-col items-center text-center shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <Settings className="w-10 h-10 text-cyan-500 mb-4 animate-pulse" />
            <h3 className="text-gray-900 text-xl font-semibold mb-2">AI based Automation</h3>
            <p className="text-gray-700 leading-relaxed">
              Cut costs by moving to advanced, AI-driven automation that streamlines operations, eliminates repetitive tasks, and enhances overall efficiency.
            </p>
          </motion.div>

          {/* IAAS */}
          <motion.div
            className="bg-white border border-gray-300 p-6 rounded-xl w-full lg:w-1/3 flex flex-col items-center text-center shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <Lightbulb className="w-10 h-10 text-cyan-500 mb-4 animate-pulse" />
            <h3 className="text-gray-900 text-xl font-semibold mb-2">IAAS (Inventions as a Service)</h3>
            <p className="text-gray-700 leading-relaxed">
              Highly personalized systems tailored to your unique needs. We transform your creative visions into reality as a service, fostering continuous innovation.
            </p>
          </motion.div>

          {/* Tech Consulting */}
          <motion.div
            className="bg-white border border-gray-300 p-6 rounded-xl w-full lg:w-1/3 flex flex-col items-center text-center shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <BarChart2 className="w-10 h-10 text-cyan-500 mb-4 animate-pulse" />
            <h3 className="text-gray-900 text-xl font-semibold mb-2">Tech Consulting</h3>
            <p className="text-gray-700 leading-relaxed">
              Partner with us to elevate your company to the next level. Our strategic guidance ensures you remain at the forefront of technological advancements.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Peeping Robot Animation */}
      <div className="mt-10 relative w-32 h-32">
        <motion.img
          src={RoboImage}
          alt="Peeping Robot"
          initial={{ x: '-100%', rotateZ: -10, scale: 0.9, opacity: 0 }}
          animate={{
            x: ['-100%', '0%', '0%', '-100%'],
            rotateZ: [-10, 10, 10, -10],
            scale: [0.9, 1, 1, 0.9],
            y: [0, 0, -5, 0],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 6,                 // Slightly longer duration for more "character"
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop',
            times: [0, 0.3, 0.7, 1],     // Control the pacing of each segment
            delay: 1                     // Delay before starting the full animation
          }}
          className="absolute left-0 top-0 w-48 h-auto"
        />
      </div>

      {/* Key Benefits */}
      <div className="mt-10 px-8">
        <h2 className="text-gray-900 text-4xl font-semibold">
          Key Benefits
        </h2>
        <Fade bottom cascade>
          <div className="flex flex-wrap gap-6 justify-center items-center py-8">
            {/* Cards */}
            {[
              {
                icon: <Lightbulb className="w-8 h-8 text-cyan-500 mb-3" />,
                title: "Innovation",
                text: "Create new products, services, and business models."
              },
              {
                icon: <Settings className="w-8 h-8 text-cyan-500 mb-3" />,
                title: "Efficiency",
                text: "Automate repetitive tasks, increasing productivity."
              },
              {
                icon: <BarChart2 className="w-8 h-8 text-cyan-500 mb-3" />,
                title: "Insights",
                text: "Generate actionable insights from complex data."
              },
              {
                icon: <Users className="w-8 h-8 text-cyan-500 mb-3" />,
                title: "Experience",
                text: "Deliver personalized and seamless user experiences."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-400 p-6 rounded-xl flex flex-col w-60 h-60 justify-start hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                {item.icon}
                <h3 className="text-gray-900 text-2xl font-semibold mb-2">{item.title}</h3>
                <h6 className="text-gray-700 leading-relaxed">
                  {item.text}
                </h6>
              </motion.div>
            ))}
          </div>
        </Fade>
      </div>

      {/* Performance Section */}
      <div className="max-w-7xl mx-auto lg:px-8 md:px-3 mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <motion.div
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <img
                className="rounded-xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full shadow-md"
                src={HeroImage}
                alt="HeroImage"
              />
            </motion.div>
          </div>

          <div className="lg:w-1/2 sm:text-center lg:text-right flex flex-col justify-center">
            <motion.div
              variants={fadeIn('left', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <h2 className="text-gray-900 text-4xl font-semibold">PERFORMANCE</h2>
              <h3 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-green-500 mt-2">
                Time to Meet AI Excellence
              </h3>
              <p className="mt-5 text-gray-700 sm:text-lg md:text-xl">
                Imagine a world where your most ambitious ideas aren't limited by technology.<br />
                At INTELLISR, we turn that world into reality.<br />
                We're not just data scientists and developers; we're architects of the impossible.
              </p>
            </motion.div>

            <div className="mt-8 flex justify-center lg:justify-end">
              <a
                href="tel:#"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-md bg-gradient-to-r from-cyan-500 to-green-500 text-white hover:from-green-500 hover:to-cyan-500 transition-all duration-300"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer */}
      <Fade bottom cascade>
        <div className="what_we_offer mt-20 px-8">
          <motion.h2
            className="text-gray-900 text-5xl font-semibold mb-4 font-montserrat"
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{
              delay: 0.9,
              duration: 2,
              type: "spring",
              stiffness: 120,
            }}
          >
            What We Offer?
          </motion.h2>

          <motion.p
            className="text-gray-700 sm:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.9,
              duration: 3,
            }}
          >
            Through a powerful blend of human ingenuity and cutting-edge AI, we bridge
            the gap between your vision and its tangible execution. No matter how complex
            or groundbreaking your concept may seem, our team thrives on the challenge of
            transforming it into a reality.
          </motion.p>

          {/* Offerings - Existing */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-stretch gap-2">
            {/* Card 1 */}
            <motion.div
              className="bg-white border border-gray-200 p-8 rounded-xl m-5 w-full sm:w-1/2 flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Monitor className="w-12 h-12 text-cyan-500 mb-4" />
              <h3 className="text-gray-900 text-2xl uppercase mb-4 font-light">
                AI-Driven IoT Systems for Engineering Automation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Transform engineering with AI-powered IoT systems. From predictive maintenance to real-time monitoring, we empower businesses to automate critical tasks, reduce downtime, and maximize asset performance.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-white border border-gray-200 p-8 rounded-xl m-5 w-full sm:w-1/2 flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Headphones className="w-12 h-12 text-cyan-500 mb-4" />
              <h3 className="text-gray-900 text-2xl uppercase mb-4 font-light">
                Cutting-Edge Audio & Video Generation and Recognition
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Harness next-level AI algorithms for audio and video. From realistic voice generation to object recognition, our solutions redefine what's possible in multimedia processing.
              </p>
            </motion.div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-stretch gap-2">
            {/* Card 3 */}
            <motion.div
              className="bg-white border border-gray-200 p-8 rounded-xl m-5 w-full sm:w-1/2 flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Eye className="w-12 h-12 text-cyan-500 mb-4" />
              <h3 className="text-gray-900 text-2xl uppercase mb-4 font-light">
                Data Extraction & Analysis for Actionable Insights
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Extract hidden patterns and trends with ease. Our AI efficiently parses unstructured data, turning complexity into clarity for data-driven growth.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="bg-white border border-gray-200 p-8 rounded-xl m-5 w-full sm:w-1/2 flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Bot className="w-12 h-12 text-cyan-500 mb-4" />
              <h3 className="text-gray-900 text-2xl uppercase mb-4 font-light">
                AI Agents for Automation & Optimization
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Integrate AI agents into your systems to automate and optimize workflows. Whether managing inventory or streamlining customer support, our AI elevates efficiency.
              </p>
            </motion.div>
          </div>
        </div>
      </Fade>



      {/* Meet Our Team */}
      <div className="mt-20 px-8">
        <h2 className="text-gray-900 text-4xl font-semibold mb-2">Meet Our Team</h2>
        <h3 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-green-500 mb-4">
          Discover and Connect
        </h3>
        <p className="text-gray-700 sm:text-lg mb-8">
          Intellisr is powered by a dedicated team of professionals passionate about innovation and technology.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Software Engineers",
              text: "Experts in building and maintaining scalable, efficient, and reliable software systems to support AI and data-driven solutions."
            },
            {
              title: "AI/ML Engineers and Data Scientist",
              text: "Specializing in developing and deploying machine learning models and AI systems tailored to solve complex challenges."
            },
            {
              title: "Designers",
              text: "Creating intuitive, visually compelling, and user-centered designs for AI-driven applications to enhance user experience."
            },
            {
              title: "Tech Consultants",
              text: "Providing expert guidance on AI technology, architecture, and implementation strategies to meet client-specific needs."
            }
          ].map((member, idx) => (
            <div key={idx} className="bg-white text-gray-900 rounded-lg p-6 shadow-lg flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.title}</h3>
              <p className="text-gray-700 leading-relaxed">{member.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-start">
          <a
            href="/contact/"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-md bg-gradient-to-r from-cyan-500 to-green-500 text-white hover:from-green-500 hover:to-cyan-500 transition-all duration-300"
          >
            Send Enquiry
          </a>
        </div>
      </div>

    </div>
  )
}

export default FeatureSection
