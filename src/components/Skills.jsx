'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs, FaShieldAlt, FaKey } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiVite } from 'react-icons/si';

const skillsData = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
      { name: 'JavaScript (ES6+)', icon: <FaJs className="text-yellow-400 text-3xl" /> },
      { name: 'React.js', icon: <FaReact className="text-cyan-400 text-3xl" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-slate-900 dark:text-white text-3xl" /> },
    ],
  },
  {
    category: 'Backend & Database',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-3xl" /> },
      { name: 'Express.js', icon: <SiExpress className="text-slate-700 dark:text-white text-3xl" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-emerald-500 text-3xl" /> },
    ],
  },
  {
    category: 'Styling & UI Libraries',
    skills: [
      { name: 'Tailwind CSS v4', icon: <SiTailwindcss className="text-cyan-500 text-3xl" /> },
      { name: 'DaisyUI', icon: <FaReact className="text-primary text-3xl" /> },
      { name: 'HeroUI', icon: <FaReact className="text-purple-500 text-3xl" /> },
    ],
  },
  {
    category: 'Auth & Tools',
    skills: [
      { name: 'JWT (JSON Web Token)', icon: <FaKey className="text-amber-500 text-3xl" /> },
      { name: 'BetterAuth', icon: <FaShieldAlt className="text-cyan-500 text-3xl" /> },
      { name: 'Git & GitHub', icon: <FaGitAlt className="text-red-500 text-3xl" /> },
      { name: 'Vite', icon: <SiVite className="text-purple-500 text-3xl" /> },
    ],
  },
];

// মেইন কার্ড কন্টেইনার ভ্যারিয়েন্ট
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

// স্কিল আইটেমগুলোর জন্য উপর থেকে (আকাশ থেকে) নিচে পড়ার অ্যানিমেশন
const skillItemVariants = {
  hidden: { opacity: 0, y: -80, scale: 0.8 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 120, 
      damping: 12 
    }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-wide">
            What I bring to the table
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3">
            My <span className="text-cyan-500">Skills</span>
          </h2>
        </motion.div>

        {/* Skills Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillsData.map((categoryGroup, index) => {
            const gradients = [
              "bg-[conic-gradient(from_0deg,transparent_0_270deg,#06b6d4_360deg)]",
              "bg-[conic-gradient(from_0deg,transparent_0_270deg,#10b981_360deg)]",
              "bg-[conic-gradient(from_0deg,transparent_0_270deg,#3b82f6_360deg)]",
              "bg-[conic-gradient(from_0deg,transparent_0_270deg,#8b5cf6_360deg)]"
            ];

            return (
              <motion.div
                key={categoryGroup.category}
                variants={cardVariants}
                className="relative group rounded-3xl p-[2px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* রটেটিং বর্ডার অ্যানিমেশন */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5 + index, repeat: Infinity, ease: "linear" }}
                  className={`absolute inset-[-50%] ${gradients[index % gradients.length]} opacity-40 group-hover:opacity-100 transition-opacity`}
                />

                {/* মেইন কার্ড বডি */}
                <div className="relative bg-white dark:bg-slate-900 p-6 rounded-[22px] z-10 h-full flex flex-col justify-between overflow-hidden">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 pb-2 border-b border-slate-100 dark:border-slate-800">
                      {categoryGroup.category}
                    </h3>

                    {/* স্কিল আইটেমগুলো ওপর থেকে নিচে ড্রপ হবে */}
                    <motion.div 
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false }}
                      variants={{
                        visible: { transition: { staggerChildren: 0.12 } }
                      }}
                      className="space-y-3"
                    >
                      {categoryGroup.skills.map((skill) => (
                        <motion.div 
                          key={skill.name}
                          variants={skillItemVariants}
                          whileHover={{ scale: 1.04, x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 cursor-pointer transition-colors duration-200 hover:border-cyan-500/50 hover:shadow-md"
                        >
                          <div className="p-2 rounded-xl bg-white dark:bg-slate-900 shadow-xs">
                            {skill.icon}
                          </div>
                          <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;