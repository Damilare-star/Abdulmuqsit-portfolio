import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaHospital, FaGithub, FaExternalLinkAlt,
  FaShieldAlt, FaDatabase, FaChartBar, FaRoute, FaCheckCircle
} from 'react-icons/fa';

const features = [
  { icon: FaShieldAlt, label: 'Secure Auth', desc: 'Login/logout with Firebase Authentication and protected routes' },
  { icon: FaDatabase, label: 'Patient Records', desc: 'Full CRUD — create, read, update, delete patient data in Firestore' },
  { icon: FaRoute, label: 'Scan Workflow', desc: 'Track scan status and workflow stages in real time' },
  { icon: FaChartBar, label: 'Data Visualization', desc: 'Charts and analytics built with Recharts for quick insights' },
];

const techStack = ['React', 'Tailwind CSS', 'Firebase Auth', 'Firestore', 'Recharts'];

const caseStudy = [
  { label: 'Problem', color: 'text-red-400', text: 'Radiology departments rely on paper-based or fragmented systems to manage patient records and scan workflows, leading to errors and delays.' },
  { label: 'Solution', color: 'text-primary', text: 'Built a secure, role-protected dashboard that centralizes patient records, scan tracking, and reporting in one clean interface.' },
  { label: 'Result', color: 'text-green-400', text: 'Simulates a real-world hospital system — improving workflow organization and reducing manual record errors through structured data management.' },
];

const FeaturedProject = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="featured-project" ref={ref} className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            <FaHospital />
            Featured Project
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Radiology Management{' '}
            <span className="gradient-text">Dashboard</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            A full-stack healthcare dashboard designed to manage patient records,
            scan workflows, and reporting in a radiology environment.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">

          {/* Left — image + tech + links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            {/* Dashboard preview */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
              <img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80"
                alt="Radiology Management Dashboard"
                className="w-full h-52 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/30 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-primary/90 rounded-full text-white text-xs font-semibold">
                <FaHospital className="text-[10px]" />
                Healthcare · Full Stack
              </div>
            </div>

            {/* Tech stack */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((t) => (
                  <span key={t} className="px-3 py-1.5 text-xs font-medium bg-primary/15 text-primary rounded-full border border-primary/25">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Role */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="text-primary font-semibold">Role:</span>
              Solo Designer & Developer — built UI, auth, and database from scratch
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <a
                href="https://radiology-dashboard.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
              >
                <FaExternalLinkAlt className="text-xs" />
                Live Demo
              </a>
              <a
                href="https://github.com/Damilare-star/radiology-dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-white/5 border border-white/15 hover:border-white/30 rounded-xl text-white text-sm font-semibold transition-all duration-300"
              >
                <FaGithub className="text-base" />
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Right — features + case study */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="space-y-6"
          >
            {/* Features */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-4">Key Features</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="glass rounded-xl p-4 border border-white/10 hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="text-primary text-sm shrink-0" />
                      <span className="text-white text-sm font-semibold">{label}</span>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What I did */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">What I Did</p>
              <div className="space-y-2">
                {[
                  'Designed and built the entire UI from scratch',
                  'Implemented Firebase Authentication with protected routes',
                  'Structured the app using scalable React component architecture',
                  'Built reusable components with dynamic state management',
                  'Integrated Firestore for real-time patient data operations',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <FaCheckCircle className="text-green-400 mt-0.5 shrink-0 text-xs" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Case study */}
            <div className="space-y-3">
              {caseStudy.map(({ label, color, text }) => (
                <div key={label} className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className={`text-xs font-bold uppercase tracking-wider ${color}`}>{label}</span>
                  <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
