'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs, FaShieldAlt, FaKey } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiVite } from 'react-icons/si';

const row1Skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-xl sm:text-3xl" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-xl sm:text-3xl" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-xl sm:text-3xl" /> },
  { name: 'React.js', icon: <FaReact className="text-cyan-400 text-xl sm:text-3xl" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-slate-900 dark:text-white text-xl sm:text-3xl" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-xl sm:text-3xl" /> },
  { name: 'Express.js', icon: <SiExpress className="text-slate-700 dark:text-white text-xl sm:text-3xl" /> },
];

const row2Skills = [
  { name: 'MongoDB', icon: <SiMongodb className="text-emerald-500 text-xl sm:text-3xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500 text-xl sm:text-3xl" /> },
  { name: 'DaisyUI', icon: <FaReact className="text-primary text-xl sm:text-3xl" /> },
  { name: 'HeroUI', icon: <FaReact className="text-purple-500 text-xl sm:text-3xl" /> },
  { name: 'JWT Token', icon: <FaKey className="text-amber-500 text-xl sm:text-3xl" /> },
  { name: 'BetterAuth', icon: <FaShieldAlt className="text-cyan-500 text-xl sm:text-3xl" /> },
  { name: 'Git & GitHub', icon: <FaGitAlt className="text-red-500 text-xl sm:text-3xl" /> },
  { name: 'Vite', icon: <SiVite className="text-purple-500 text-xl sm:text-3xl" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide">
            What I bring to the table
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3">
            My <span className="text-cyan-500">Skills</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative w-full flex flex-col gap-4 overflow-hidden py-2">
        {/* Gradient Shadow Effect on Left & Right Sides */}
        <div className="absolute left-0 inset-y-0 w-12 sm:w-20 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-12 sm:w-20 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />

        {/* Row 1: Right to Left */}
        <div className="flex overflow-x-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
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

        {/* Row 2: Left to Right */}
        <div className="flex overflow-x-hidden">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
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
    </section>
  );
};

export default Skills;