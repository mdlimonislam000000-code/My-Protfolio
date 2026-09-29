'use client';
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs, FaShieldAlt, FaKey, FaTimes, FaThLarge, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiVite, SiTypescript, SiStripe, SiVercel, SiNetlify } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

// Ticker Row 1 Skills
const row1Skills = [
  { name: 'JavaScript (ES6+)', icon: <FaJs className="text-yellow-400 text-xl sm:text-3xl" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500 text-xl sm:text-3xl" /> },
  { name: 'ReactJs', icon: <FaReact className="text-cyan-400 text-xl sm:text-3xl" /> },
  { name: 'NextJs', icon: <SiNextdotjs className="text-slate-900 dark:text-white text-xl sm:text-3xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500 text-xl sm:text-3xl" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-xl sm:text-3xl" /> },
];

// Ticker Row 2 Skills
const row2Skills = [
  { name: 'Express.js', icon: <SiExpress className="text-slate-700 dark:text-white text-xl sm:text-3xl" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-emerald-500 text-xl sm:text-3xl" /> },
  { name: 'REST APIs', icon: <TbApi className="text-indigo-500 text-xl sm:text-3xl" /> },
  { name: 'Stripe', icon: <SiStripe className="text-violet-500 text-xl sm:text-3xl" /> },
  { name: 'Nodemailer', icon: <FaShieldAlt className="text-amber-500 text-xl sm:text-3xl" /> },
  { name: 'Git & GitHub', icon: <FaGitAlt className="text-red-500 text-xl sm:text-3xl" /> },
];

// Modal Categories Data
const frontendSkills = [
  { name: 'JavaScript (ES6+)', icon: <FaJs className="text-yellow-400 text-2xl" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500 text-2xl" /> },
  { name: 'ReactJs', icon: <FaReact className="text-cyan-400 text-2xl" /> },
  { name: 'NextJs', icon: <SiNextdotjs className="text-slate-900 dark:text-white text-2xl" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
];

const stylingUiSkills = [
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500 text-2xl" /> },
  { name: 'DaisyUI', icon: <FaReact className="text-primary text-2xl" /> },
  { name: 'HeroUI', icon: <FaReact className="text-purple-500 text-2xl" /> },
  { name: 'Framer Motion', icon: <FaReact className="text-pink-500 text-2xl" /> },
];

const backendAuthSkills = [
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-2xl" /> },
  { name: 'Express.js', icon: <SiExpress className="text-slate-700 dark:text-white text-2xl" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-emerald-500 text-2xl" /> },
  { name: 'REST APIs', icon: <TbApi className="text-indigo-500 text-2xl" /> },
  { name: 'Stripe', icon: <SiStripe className="text-violet-500 text-2xl" /> },
  { name: 'Nodemailer', icon: <FaShieldAlt className="text-amber-500 text-2xl" /> },
  { name: 'JWT Token', icon: <FaKey className="text-amber-500 text-2xl" /> },
  { name: 'BetterAuth', icon: <FaShieldAlt className="text-cyan-500 text-2xl" /> },
];

const toolsDevSkills = [
  { name: 'Git', icon: <FaGitAlt className="text-red-500 text-2xl" /> },
  { name: 'GitHub', icon: <FaGitAlt className="text-slate-800 dark:text-white text-2xl" /> },
  { name: 'VS Code', icon: <FaCode className="text-blue-400 text-2xl" /> },
  { name: 'Vite', icon: <SiVite className="text-purple-500 text-2xl" /> },
  { name: 'Vercel', icon: <SiVercel className="text-slate-900 dark:text-white text-2xl" /> },
  { name: 'Netlify', icon: <SiNetlify className="text-teal-500 text-2xl" /> },
];

// Modal container and rain-drop item animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemDropVariants = {
  hidden: { opacity: 0, y: -40, scale: 0.8 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 }
  }
};

// Spotlight Card Component with Rain Drop & Mouse Following Glowing Effect
const SpotlightCard = ({ skill }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      variants={itemDropVariants}
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.97 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 transition-all shadow-xs group cursor-pointer"
    >
      {/* Mouse Follower Glowing Effect */}
      {isHovered && (
        <div
          className="absolute pointer-events-none -inset-px rounded-2xl transition duration-300 z-0"
          style={{
            background: `radial-gradient(120px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.35), transparent 80%)`,
          }}
        />
      )}
      
      <div className="relative z-10 p-2 rounded-xl bg-white dark:bg-slate-900 shadow-xs group-hover:rotate-6 transition-transform">
        {skill.icon}
      </div>
      <span className="relative z-10 font-semibold text-slate-800 dark:text-slate-200 text-xs sm:text-sm">
        {skill.name}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [showAllModal, setShowAllModal] = useState(false);

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      {/* Inline styles for Pure CSS Ticker Animation */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-ticker-left {
          display: flex;
          width: max-content;
          animation: scrollLeft 25s linear infinite;
        }
        .animate-ticker-right {
          display: flex;
          width: max-content;
          animation: scrollRight 25s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-center sm:text-left"
          >
            <span className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide">
              What I bring to the table
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3">
              My <span className="text-cyan-500">Skills</span>
            </h2>
          </motion.div>

          {/* View All Button */}
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => setShowAllModal(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-cyan-500/25 cursor-pointer"
          >
            <FaThLarge size={14} />
            <span>View All Skills</span>
          </motion.button>
        </div>
      </div>

      <div className="relative w-full flex flex-col gap-4 overflow-hidden py-4">
        {/* Gradient Shadow Effect */}
        <div className="absolute left-0 inset-y-0 w-12 sm:w-20 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-12 sm:w-20 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />

        {/* Row 1: Right to Left (Exact Pause & Resume) */}
        <div className="flex overflow-x-hidden py-1">
          <div
            className="animate-ticker-left gap-3 sm:gap-6 items-center flex-nowrap"
            style={{ animationPlayState: isHovered1 ? 'paused' : 'running' }}
          >
            {[...row1Skills, ...row1Skills].map((skill, index) => (
              <div
                key={index}
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}
                className="flex items-center gap-2.5 sm:gap-3 px-3.5 py-2.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-cyan-500 transition-colors shrink-0 cursor-pointer"
              >
                <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-slate-50 dark:bg-slate-950 shadow-xs">
                  {skill.icon}
                </div>
                <span className="font-semibold text-slate-800 dark:text-slate-200 text-xs sm:text-base">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Left to Right (Exact Pause & Resume) */}
        <div className="flex overflow-x-hidden py-1">
          <div
            className="animate-ticker-right gap-3 sm:gap-6 items-center flex-nowrap"
            style={{ animationPlayState: isHovered2 ? 'paused' : 'running' }}
          >
            {[...row2Skills, ...row2Skills].map((skill, index) => (
              <div
                key={index}
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
                className="flex items-center gap-2.5 sm:gap-3 px-3.5 py-2.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-cyan-500 transition-colors shrink-0 cursor-pointer"
              >
                <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-slate-50 dark:bg-slate-950 shadow-xs">
                  {skill.icon}
                </div>
                <span className="font-semibold text-slate-800 dark:text-slate-200 text-xs sm:text-base">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* View All Skills Modal */}
      <AnimatePresence>
        {showAllModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 30 }}
              transition={{ duration: 0.3, type: "spring", damping: 20, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[85vh] flex flex-col overflow-hidden"
            >
              {/* Sticky Modal Header */}
              <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  All My <span className="text-cyan-500">Skills</span>
                </h3>
                <button 
                  onClick={() => setShowAllModal(false)}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-cyan-500 hover:text-white transition-all cursor-pointer shadow-xs"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              {/* Modal Body with Rain Drop Animation & Spotlight Cards */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="p-6 sm:p-8 overflow-y-auto space-y-8"
              >
                {/* Section 1: Frontend & Styling */}
                <div>
                  <h4 className="text-lg font-bold text-cyan-500 mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 inline-block animate-pulse"></span>
                    Frontend & Styling Libraries
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {[...frontendSkills, ...stylingUiSkills].map((skill, index) => (
                      <SpotlightCard key={index} skill={skill} />
                    ))}
                  </div>
                </div>

                <hr className="border-slate-200 dark:border-slate-800" />

                {/* Section 2: Backend, Auth & Tools */}
                <div>
                  <h4 className="text-lg font-bold text-emerald-500 mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                    Backend, Database, Auth & Tools
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {[...backendAuthSkills, ...toolsDevSkills].map((skill, index) => (
                      <SpotlightCard key={index} skill={skill} />
                    ))}
                  </div>
                </div>

              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;