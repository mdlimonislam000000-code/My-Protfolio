'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs, FaShieldAlt, FaKey, FaTimes, FaThLarge } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiVite } from 'react-icons/si';

const row1Skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-xl sm:text-3xl" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-xl sm:text-3xl" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-xl sm:text-3xl" /> },
  { name: 'React.js', icon: <FaReact className="text-cyan-400 text-xl sm:text-3xl" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-slate-900 dark:text-white text-xl sm:text-3xl" /> },
];

const row2Skills = [
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-xl sm:text-3xl" /> },
  { name: 'Express.js', icon: <SiExpress className="text-slate-700 dark:text-white text-xl sm:text-3xl" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-emerald-500 text-xl sm:text-3xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500 text-xl sm:text-3xl" /> },
  { name: 'DaisyUI', icon: <FaReact className="text-primary text-xl sm:text-3xl" /> },
  { name: 'HeroUI', icon: <FaReact className="text-purple-500 text-xl sm:text-3xl" /> },
  { name: 'JWT Token', icon: <FaKey className="text-amber-500 text-xl sm:text-3xl" /> },
  { name: 'BetterAuth', icon: <FaShieldAlt className="text-cyan-500 text-xl sm:text-3xl" /> },
  { name: 'Git & GitHub', icon: <FaGitAlt className="text-red-500 text-xl sm:text-3xl" /> },
  { name: 'Vite', icon: <SiVite className="text-purple-500 text-xl sm:text-3xl" /> },
];

// Modal er jonno 2 vag data
const frontendSkills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
  { name: 'JavaScript (ES6+)', icon: <FaJs className="text-yellow-400 text-2xl" /> },
  { name: 'React.js', icon: <FaReact className="text-cyan-400 text-2xl" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-slate-900 dark:text-white text-2xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500 text-2xl" /> },
  { name: 'DaisyUI', icon: <FaReact className="text-primary text-2xl" /> },
  { name: 'HeroUI', icon: <FaReact className="text-purple-500 text-2xl" /> },
];

const backendAuthSkills = [
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-2xl" /> },
  { name: 'Express.js', icon: <SiExpress className="text-slate-700 dark:text-white text-2xl" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-emerald-500 text-2xl" /> },
  { name: 'JWT Token', icon: <FaKey className="text-amber-500 text-2xl" /> },
  { name: 'BetterAuth', icon: <FaShieldAlt className="text-cyan-500 text-2xl" /> },
  { name: 'Git & GitHub', icon: <FaGitAlt className="text-red-500 text-2xl" /> },
  { name: 'Vite', icon: <SiVite className="text-purple-500 text-2xl" /> },
];

const Skills = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [showAllModal, setShowAllModal] = useState(false);

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
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

      <div className="relative w-full flex flex-col gap-4 overflow-hidden py-2">
        {/* Gradient Shadow Effect on Left & Right Sides */}
        <div className="absolute left-0 inset-y-0 w-12 sm:w-20 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-12 sm:w-20 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />

        {/* Row 1: Right to Left (Hover Pause Enabled) */}
        <div 
          className="flex overflow-x-hidden"
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        >
          <motion.div
            animate={{ x: isHovered1 ? "0%" : "-50%" }}
            style={{ x: isHovered1 ? undefined : "0%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-3 sm:gap-6 whitespace-nowrap items-center flex-nowrap"
          >
            {[...row1Skills, ...row1Skills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 sm:gap-3 px-3.5 py-2.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-cyan-500 transition-colors shrink-0"
              >
                <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-slate-50 dark:bg-slate-950 shadow-xs">
                  {skill.icon}
                </div>
                <span className="font-semibold text-slate-800 dark:text-slate-200 text-xs sm:text-base">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Left to Right (Hover Pause Enabled) */}
        <div 
          className="flex overflow-x-hidden"
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <motion.div
            animate={{ x: isHovered2 ? "-50%" : "0%" }}
            style={{ x: isHovered2 ? undefined : "-50%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-3 sm:gap-6 whitespace-nowrap items-center flex-nowrap"
          >
            {[...row2Skills, ...row2Skills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 sm:gap-3 px-3.5 py-2.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-cyan-500 transition-colors shrink-0"
              >
                <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-slate-50 dark:bg-slate-950 shadow-xs">
                  {skill.icon}
                </div>
                <span className="font-semibold text-slate-800 dark:text-slate-200 text-xs sm:text-base">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* View All Skills Modal with Animation & Sticky Header */}
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

              {/* Modal Scrollable Body (2 Divided Sections) */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
                
                {/* 1. Frontend & Styling Section */}
                <div>
                  <h4 className="text-lg font-bold text-cyan-500 mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 inline-block animate-pulse"></span>
                    Frontend & Styling
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {frontendSkills.map((skill, index) => (
                      <motion.div 
                        key={index}
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 transition-all shadow-xs group cursor-pointer"
                      >
                        <div className="p-2 rounded-xl bg-white dark:bg-slate-900 shadow-xs group-hover:rotate-6 transition-transform">
                          {skill.icon}
                        </div>
                        <span className="font-semibold text-slate-800 dark:text-slate-200 text-xs sm:text-sm">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <hr className="border-slate-200 dark:border-slate-800" />

                {/* 2. Backend, Auth & Tools Section */}
                <div>
                  <h4 className="text-lg font-bold text-emerald-500 mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                    Backend, Auth & Tools
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {backendAuthSkills.map((skill, index) => (
                      <motion.div 
                        key={index}
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all shadow-xs group cursor-pointer"
                      >
                        <div className="p-2 rounded-xl bg-white dark:bg-slate-900 shadow-xs group-hover:rotate-6 transition-transform">
                          {skill.icon}
                        </div>
                        <span className="font-semibold text-slate-800 dark:text-slate-200 text-xs sm:text-sm">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;