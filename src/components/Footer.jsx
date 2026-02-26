import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/abdulmuqsit', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/abdulmuqsit-abdulquadri', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com/abdulmuqsit', label: 'Twitter' },
    { icon: FaEnvelope, url: 'mailto:abdulmuqsitabdulquadri@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="glass mt-20 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">Abdulmuqsit Abdulquadri</h3>
            <p className="text-gray-600 dark:text-gray-400">Frontend Developer & UI Designer</p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-300 dark:border-white/10 text-center text-gray-600 dark:text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Made with <FaHeart className="text-red-500" /> by Abdulmuqsit Abdulquadri © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
