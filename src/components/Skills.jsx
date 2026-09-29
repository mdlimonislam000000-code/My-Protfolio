'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs, FaShieldAlt, FaKey } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiVite } from 'react-icons/si';

const row1Skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
  { name: 'JavaScript (ES6+)', icon: <FaJs className="text-yellow-400 text-3xl" /> },
  { name: 'React.js', icon: <FaReact className="text-cyan-400 text-3xl" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-slate-900 dark:text-white text-3xl" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-3xl" /> },
  { name: 'Express.js', icon: <SiExpress className="text-slate-700 dark:text-white text-3xl" /> },
];

const row2Skills = [
  { name: 'MongoDB', icon: <SiMongodb className="text-emerald-500 text-3xl" /> },
  { name: 'Tailwind CSS v4', icon: <SiTailwindcss className="text-cyan-500 text-3xl" /> },
  { name: 'DaisyUI', icon: <FaReact className="text-primary text-3xl" /> },
  { name: 'HeroUI', icon: <FaReact className="text-purple-500 text-3xl" /> },
  { name: 'JWT (JSON Web Token)', icon: <FaKey className="text-amber-500 text-3xl" /> },
  { name: 'BetterAuth', icon: <FaShieldAlt className="text-cyan-500 text-3xl" /> },
  { name: 'Git & GitHub', icon: <FaGitAlt className="text-red-500 text-3xl" /> },
  { name: 'Vite', icon: <SiVite className="text-purple-500 text-3xl" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-wide">
            What I bring to the table
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3">
            My <span className="text-cyan-500">Skills</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative w-full flex flex-col gap-6 overflow-hidden py-4">
        {/* Gradient Shadow Effect on Left & Right Sides */}
        <div className="absolute left-0 inset-y-0 w-20 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-20 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />

        {/* Row 1: Right to Left */}
        <div className="flex overflow-x-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 whitespace-nowrap items-center flex-nowrap"
          >
            {[...row1Skills, ...row1Skills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-500 transition-colors shrink-0"
              >
                <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-950 shadow-xs">
                  {skill.icon}
                </div>
                <span className="font-semibold text-slate-800 dark:text-slate-200 text-base">
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
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 whitespace-nowrap items-center flex-nowrap"
          >
            {[...row2Skills, ...row2Skills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-500 transition-colors shrink-0"
              >
                <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-950 shadow-xs">
                  {skill.icon}
                </div>
                <span className="font-semibold text-slate-800 dark:text-slate-200 text-base">
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