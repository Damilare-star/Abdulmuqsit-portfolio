import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-4 sm:px-6 z-10">
        <div className="text-center max-w-4xl mx-auto">

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for freelance & full-time roles
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
          >
            Frontend Developer
            <br />
            <span className="gradient-text">building fast, scalable</span>
            <br />
            web applications
          </motion.h1>

          {/* Value proposition */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-4 max-w-2xl mx-auto leading-relaxed"
          >
            I'm <span className="text-white font-semibold">Abdulmuqsit Abdulquadri</span> — a Frontend Developer
            focused on building fast, responsive, and user-friendly web applications with{' '}
            <span className="text-primary font-semibold">React & Tailwind CSS</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base text-gray-500 mb-10 sm:mb-12"
          >
            Based in Nigeria · Open to remote opportunities worldwide
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={scrollToProjects}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-2xl text-white font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/20 hover:border-primary/50 rounded-2xl text-white font-semibold text-base sm:text-lg text-center transition-all duration-300 hover:bg-white/10"
            >
              Hire Me
            </Link>
            <a
              href="/cv.pdf"
              download
              className="w-full sm:w-auto px-8 py-4 text-gray-400 hover:text-white font-semibold text-base sm:text-lg text-center transition-colors duration-300 underline underline-offset-4"
            >
              Download CV
            </a>
          </motion.div>

          {/* Social proof / quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-14 sm:mt-16 pt-10 border-t border-white/10"
          >
            {[
              { value: '6+', label: 'Projects Shipped' },
              { value: '5', label: 'Tech Stack' },
              { value: '100%', label: 'Mobile Responsive' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaArrowDown className="text-2xl text-primary/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
