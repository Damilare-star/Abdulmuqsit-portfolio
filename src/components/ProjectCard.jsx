import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaUser } from 'react-icons/fa';

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
          className="w-full h-44 sm:h-52 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/30 to-transparent" />

        {/* Live badge */}
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-primary/90 backdrop-blur-sm rounded-full text-white text-xs font-semibold hover:bg-primary transition-colors"
          aria-label={`View ${project.title} live`}
        >
          <FaExternalLinkAlt className="text-[9px]" />
          Live
        </a>

        {/* Role badge */}
        {project.role && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full text-gray-300 text-xs">
            <FaUser className="text-[9px]" />
            {project.role}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Case Study Toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-primary text-xs font-semibold mb-3 hover:text-secondary transition-colors w-fit"
          aria-expanded={expanded}
        >
          View Case Study
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <FaChevronDown className="text-[10px]" />
          </motion.span>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden mb-4"
            >
              <div className="space-y-3 p-4 bg-white/5 rounded-xl border border-white/10 text-xs">
                <div>
                  <span className="font-bold text-red-400 uppercase tracking-wider">Problem</span>
                  <p className="text-gray-400 mt-1 leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <span className="font-bold text-primary uppercase tracking-wider">Solution</span>
                  <p className="text-gray-400 mt-1 leading-relaxed">{project.solution}</p>
                </div>
                <div>
                  <span className="font-bold text-green-400 uppercase tracking-wider">Result</span>
                  <p className="text-gray-400 mt-1 leading-relaxed">{project.result}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium bg-primary/15 text-primary rounded-full border border-primary/25"
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
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-secondary rounded-xl text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
          >
            <FaExternalLinkAlt className="text-xs" />
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 border border-white/15 hover:border-white/30 rounded-xl text-white text-sm font-semibold transition-all duration-300"
          >
            <FaGithub className="text-base" />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
