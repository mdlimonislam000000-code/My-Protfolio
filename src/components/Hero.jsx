'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiArrowRight, HiCheckCircle, HiCode } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Text, Intro & Buttons */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 text-sm font-semibold tracking-wide border border-cyan-200 dark:border-cyan-800 shadow-xs hover:scale-105 transition-transform cursor-default">
            <HiCode size={18} className="text-cyan-600 dark:text-cyan-400 animate-pulse" />
            <span>FullStack Web Developer</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight transition-all duration-300 text-center lg:text-left">
            <span className="inline-block hover:translate-x-2 transition-transform duration-300 cursor-default">
              Hi, I'm <span className="text-cyan-600 dark:text-cyan-400 hover:drop-shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all duration-300">Limon</span>
            </span> 
            <br />
            <span className="bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-500 bg-clip-text text-transparent mt-1 inline-block hover:scale-[1.03] transition-transform duration-300 cursor-default origin-center lg:origin-left">
              Code. Create. Captivate.
            </span>
          </h1>
          
          {/* Subtitle/Description */}
          <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium hover:text-slate-900 dark:hover:text-white transition-colors duration-300 text-center lg:text-left">
            I specialize in building clean, responsive, and user-friendly web applications using React, Tailwind CSS, and modern JavaScript. Let's turn your ideas into functional reality!
          </p>

          {/* Key Highlights */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 text-slate-800 dark:text-slate-200 text-sm font-semibold">
            <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-xs hover:border-cyan-500 hover:scale-105 transition-all duration-300 cursor-default">
              <HiCheckCircle className="text-cyan-500" size={18} />
              <span>Clean Code</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-xs hover:border-cyan-500 hover:scale-105 transition-all duration-300 cursor-default">
              <HiCheckCircle className="text-cyan-500" size={18} />
              <span>Responsive Design</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-xs hover:border-cyan-500 hover:scale-105 transition-all duration-300 cursor-default">
              <HiCheckCircle className="text-cyan-500" size={18} />
              <span>Modern UI/UX</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="/resume.pdf"
              download="Limon_Resume.pdf"
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
            >
              <span>Download Resume</span>
              <HiDownload size={20} className="animate-bounce" />
            </a>

            <a
              href="#projects"
              className="flex items-center gap-2 bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-semibold px-7 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
            >
              <span>Explore Projects</span>
              <HiArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800/80 w-full max-w-lg mx-auto lg:mx-0">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Connect with me:</span>
            <div className="flex gap-3">
              <a href="https://github.com/mdlimonislam000000-code" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-110 shadow-xs transition-all">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/md-limon-islam-96b8333b4" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-110 shadow-xs transition-all">
                <FaLinkedin size={18} />
              </a>
              <a href="https://x.com/mdLimonMia0101" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-110 shadow-xs transition-all">
                <FaTwitter size={18} />
              </a>
              <a href="https://www.facebook.com/share/1DCsoozUpe" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-110 shadow-xs transition-all">
                <FaFacebook size={18} />
              </a>
            </div>
          </div>

        </motion.div>

        {/* Right Side: Professional Image & Fixed Animation Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center"
        >
          {/* Main Card Container */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] group cursor-pointer">
            
            {/* ব্যাকগ্রাউন্ড শ্যাডো */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-500 rounded-3xl opacity-30 blur-xl group-hover:opacity-60 group-hover:blur-2xl transition-all duration-500"></div>
            
            {/* Rotating Border Effect Wrapper using Framer Motion for Smoothness */}
            <div className="relative w-full h-full rounded-3xl p-[3px] overflow-hidden">
              
              {/* স্মুথ রটেটিং বর্ডার অ্যানিমেশন */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#06b6d4_360deg)]"
              />

              {/* Static background inner container */}
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 z-10">
                <img
                  src="/images/Hero.jpg.png" 
                  alt="Limon - Frontend Developer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = '<div class="flex flex-col items-center justify-center h-full text-cyan-500 bg-slate-100 dark:bg-slate-900"><span class="text-7xl font-bold">L</span><span class="text-sm font-medium mt-2 text-slate-500">Limon Developer</span></div>';
                  }}
                />
              </div>

            </div>

            {/* Floating Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 sm:bottom-4 sm:-right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl flex items-center gap-3 z-20 group-hover:scale-105 transition-transform"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-bold text-lg animate-pulse">
                🚀
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Status</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Open to Work</p>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;