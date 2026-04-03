import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        {/* Live link badge on image */}
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-primary/90 backdrop-blur-sm rounded-full text-white text-xs font-semibold hover:bg-primary transition-colors"
          aria-label={`View ${project.title} live`}
        >
          <FaExternalLinkAlt className="text-[10px]" />
          Live
        </a>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Case Study Toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-primary text-sm font-semibold mb-4 hover:text-secondary transition-colors w-fit"
          aria-expanded={expanded}
        >
          Case Study
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <FaChevronDown className="text-xs" />
          </motion.span>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-4"
            >
              <div className="space-y-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">Problem</span>
                  <p className="text-gray-400 text-sm mt-1">{project.problem}</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">Solution</span>
                  <p className="text-gray-400 text-sm mt-1">{project.solution}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5 mt-auto">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
          >
            <FaExternalLinkAlt className="text-xs" />
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 glass-hover rounded-xl text-white text-sm font-semibold transition-all duration-300 border border-white/10"
          >
            <FaGithub className="text-lg" />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
