import { motion } from 'framer-motion';
import { FaArrowDown, FaHospital } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToFeatured = () => {
    document.getElementById('featured-project')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-4 sm:px-6 z-10">
        <div className="text-center max-w-4xl mx-auto">

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to internships, junior roles & freelance
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
          >
            Frontend Developer
            <br />
            <span className="gradient-text">building real-world</span>
            <br />
            web applications
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-3 max-w-2xl mx-auto leading-relaxed"
          >
            I specialize in creating fast, responsive, and scalable applications using{' '}
            <span className="text-primary font-semibold">React, Tailwind</span>, and modern tools.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-sm sm:text-base text-gray-500 mb-10 sm:mb-12"
          >
            Currently building solutions that solve real problems in{' '}
            <span className="text-white font-medium">healthcare</span> and{' '}
            <span className="text-white font-medium">data management</span> · Based in Nigeria
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={scrollToFeatured}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-2xl text-white font-semibold text-base hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              <FaHospital />
              See Featured Project
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/20 hover:border-primary/50 rounded-2xl text-white font-semibold text-base text-center transition-all duration-300 hover:bg-white/10"
            >
              Let's Build Together
            </Link>
            <a
              href="/cv.pdf"
              download
              className="w-full sm:w-auto px-8 py-4 text-gray-400 hover:text-white font-semibold text-base text-center transition-colors duration-300 underline underline-offset-4"
            >
              Download CV
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 mt-14 pt-10 border-t border-white/10"
          >
            {[
              { value: '6+', label: 'Projects Shipped' },
              { value: 'React', label: 'Primary Stack' },
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <FaArrowDown className="text-2xl text-primary/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
