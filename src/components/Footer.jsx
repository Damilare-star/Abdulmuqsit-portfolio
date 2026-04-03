import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Damilare-star', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/abdulmuqsit-abdulquadri', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com/abdulmuqsit', label: 'Twitter' },
    { icon: FaEnvelope, url: 'mailto:abdulmuqsitabdulquadri@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="mt-20">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 border-t border-b border-white/10 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for new projects
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Have a project in mind?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-xl mx-auto">
              I'm currently open to freelance work and full-time frontend roles.
              Let's build something great together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-semibold hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105 text-sm"
              >
                Let's Work Together
              </Link>
              <a
                href="mailto:abdulmuqsitabdulquadri@gmail.com"
                className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/20 hover:border-primary/50 rounded-xl text-white font-semibold transition-all duration-300 text-sm text-center"
              >
                abdulmuqsitabdulquadri@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="glass py-6">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold gradient-text">Abdulmuqsit Abdulquadri</h3>
              <p className="text-gray-500 text-xs mt-0.5">Frontend Developer · Nigeria</p>
            </div>

            <div className="flex items-center gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-500 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-5 border-t border-white/10 text-center text-gray-600 text-xs">
            <p className="flex items-center justify-center gap-1.5">
              Made with <FaHeart className="text-red-500 text-xs" /> by Abdulmuqsit Abdulquadri © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
