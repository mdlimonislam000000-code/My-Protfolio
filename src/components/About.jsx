'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiHeart, HiSparkles } from 'react-icons/hi';
import { FaBookReader } from 'react-icons/fa';
import { SiCodersrank } from 'react-icons/si';
import { FaPersonWalking } from 'react-icons/fa6';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-wide">
            Get to know me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3">
            About <span className="text-cyan-500">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Animated Card with Rotating Border */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group cursor-pointer"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-500 rounded-3xl opacity-30 blur-xl group-hover:opacity-60 group-hover:blur-2xl transition-all duration-500"></div>

            <div className="relative w-full h-full rounded-3xl p-[3px] overflow-hidden">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#06b6d4_360deg)]"
              />

              <div className="relative p-8 rounded-[22px] bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 z-10">
                <div className="absolute -top-4 -left-4 p-4 rounded-2xl bg-cyan-500 text-slate-950 shadow-lg transition-transform duration-300 hover:scale-110">
                  <HiSparkles size={24} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 pt-2">
                  Every line of code is a step toward innovation.
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  I love turning complex problems into simple, beautiful, and intuitive designs. My goal is to write clean, maintainable code that delivers exceptional user experiences.
                </p>

                {/* Quick Info Tags */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 transition-transform duration-200 hover:translate-x-1">
                    <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                    <span className="font-medium">Problem Solver & Tech Enthusiast</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 transition-transform duration-200 hover:translate-x-1">
                    <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                    <span className="font-medium">Focused on Modern UI/UX</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 transition-transform duration-200 hover:translate-x-1">
                    <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                    <span className="font-medium">Continuous Learner</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Detailed Story & Cards with Rotating Borders */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Programming Journey */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative group rounded-2xl p-[2px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#06b6d4_360deg)] opacity-40 group-hover:opacity-100 transition-opacity"
              />

              <div className="relative p-6 rounded-[14px] bg-slate-50 dark:bg-slate-800/90 z-10">
                <div className="flex items-center gap-3 mb-3 text-cyan-500">
                  <HiCode size={24} className="transition-transform duration-300 hover:rotate-12" />
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">My Programming Journey</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  My coding journey started with a deep curiosity about how websites work under the hood. From learning basic HTML and CSS, I quickly fell in love with JavaScript and React. Building responsive web apps and solving logical challenges became my daily passion.
                </p>
              </div>
            </motion.div>

            {/* Work I Enjoy */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group rounded-2xl p-[2px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#14b8a6_360deg)] opacity-40 group-hover:opacity-100 transition-opacity"
              />

              <div className="relative p-6 rounded-[14px] bg-slate-50 dark:bg-slate-800/90 z-10">
                <div className="flex items-center gap-3 mb-3 text-cyan-500">
                  <HiHeart size={24} className="transition-transform duration-300 hover:scale-125" />
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">What I Enjoy</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  I thoroughly enjoy crafting interactive frontend interfaces, bringing UI designs to life with Tailwind CSS, and ensuring seamless responsive layouts across all devices. Optimizing performance and writing clean component structures excite me the most.
                </p>
              </div>
            </motion.div>

            {/* Hobbies & Interests */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative group rounded-2xl p-[2px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#6366f1_360deg)] opacity-40 group-hover:opacity-100 transition-opacity"
              />

              <div className="relative p-6 rounded-[14px] bg-slate-50 dark:bg-slate-800/90 z-10">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Hobbies & Interests</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:scale-105 hover:border-cyan-500 shadow-xs">
                    <SiCodersrank className="text-cyan-500 text-xl" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Programming</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:scale-105 hover:border-cyan-500 shadow-xs">
                    <FaBookReader className="text-cyan-500 text-xl" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Reading Books</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:scale-105 hover:border-cyan-500 shadow-xs">
                    <FaPersonWalking className="text-cyan-500 text-xl" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Work Out</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;