import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaDownload, FaCode, FaRocket, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-14 items-start">

          {/* Left — Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-5 text-white">
              My Story
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
              I'm a self-driven Frontend Developer based in <span className="text-white font-medium">Nigeria</span>,
              who started coding out of pure curiosity — wanting to understand how websites actually work.
              That curiosity turned into a skill, and that skill turned into a career path I'm fully committed to.
            </p>
            <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
              I specialize in building <span className="text-primary font-medium">React-based web applications</span> that
              are fast, accessible, and visually polished. I care deeply about the user experience — not just
              making things look good, but making them work well on every device.
            </p>
            <p className="text-gray-300 text-sm sm:text-base mb-8 leading-relaxed">
              Right now I'm actively looking for <span className="text-white font-medium">freelance projects</span> and
              <span className="text-white font-medium"> full-time frontend roles</span> — remote or on-site.
              If you need someone who ships clean, maintainable code and communicates well, let's talk.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-semibold hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105 text-sm"
              >
                Hire Me
              </Link>
              <a
                href="/cv.pdf"
                download
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/20 rounded-xl text-white font-semibold hover:border-primary/50 transition-all duration-300 text-sm"
              >
                <FaDownload className="text-xs" />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right — Details + What makes me different */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Quick info */}
            <div className="glass rounded-2xl p-5 sm:p-6 space-y-3">
              {[
                { label: 'Location', value: 'Nigeria (Open to Remote)' },
                { label: 'Email', value: 'abdulmuqsitabdulquadri@gmail.com', href: 'mailto:abdulmuqsitabdulquadri@gmail.com' },
                { label: 'Status', value: '✓ Available to Work', green: true },
                { label: 'Focus', value: 'React · Tailwind CSS · Frontend' },
              ].map(({ label, value, href, green }) => (
                <div key={label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm">
                  <span className="text-primary font-semibold min-w-[80px]">{label}:</span>
                  {href ? (
                    <a href={href} className="text-gray-300 hover:text-primary transition-colors break-all">{value}</a>
                  ) : (
                    <span className={green ? 'text-green-400 font-medium' : 'text-gray-300'}>{value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* What makes me different */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">What makes me different</h4>
              {[
                { icon: FaCode, text: 'I write clean, readable code — not just code that works' },
                { icon: FaRocket, text: 'I focus on performance and mobile-first from day one' },
                { icon: FaHeart, text: 'I care about the end user, not just the deadline' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <Icon className="text-primary mt-0.5 shrink-0" />
                  <p className="text-gray-300 text-sm">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
