import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaDownload } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 gradient-text">
              Frontend Developer - Available to Work
            </h3>
            <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
              I'm a passionate frontend developer with a keen eye for design and a love for creating 
              seamless user experiences. With expertise in React, Tailwind CSS, and modern web technologies, 
              I transform ideas into beautiful, functional applications.
            </p>
            <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
              My journey in web development started with a curiosity about how things work on the web, 
              and it has evolved into a professional career where I continuously learn and adapt to new 
              technologies and best practices.
            </p>
            <div className="space-y-3 sm:space-y-4 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <span className="text-primary font-semibold sm:min-w-[120px]">Location:</span>
                <span className="text-gray-300">Nigeria</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <span className="text-primary font-semibold sm:min-w-[120px]">Email:</span>
                <a href="mailto:abdulmuqsitabdulquadri@gmail.com" className="text-gray-300 hover:text-primary transition-colors break-all">
                  abdulmuqsitabdulquadri@gmail.com
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <span className="text-primary font-semibold sm:min-w-[120px]">Status:</span>
                <span className="text-green-400 font-medium">✓ Available to Work</span>
              </div>
            </div>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary rounded-2xl text-white font-semibold hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              <FaDownload />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
