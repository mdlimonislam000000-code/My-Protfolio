'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      
      {/* Navbar এর মতো টপ বর্ডারে ডায়নামিক অ্যানিমেটেড গ্লোয়িং লাইন */}
      <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden pointer-events-none">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
          }}
          className="w-full h-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-80"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Brief Description */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">
              Limon<span className="text-slate-800 dark:text-white">.dev</span>
            </a>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-sm">
              Building modern, scalable, and user-friendly web applications with passion and dedication.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#home" className="hover:text-cyan-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-500 transition-colors">Projects</a>
            <a href="#education" className="hover:text-cyan-500 transition-colors">Education</a>
            <a href="#contact" className="hover:text-cyan-500 transition-colors">Contact</a>
          </div>

          {/* Social Icons with Hover Animation */}
          <div className="flex items-center space-x-4">
            <motion.a 
              href="https://github.com/mdlimonislam000000-code" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-cyan-500 hover:text-slate-950 dark:hover:bg-cyan-500 dark:hover:text-slate-950 transition-colors shadow-sm"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/md-limon-islam-96b8333b4" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-cyan-500 hover:text-slate-950 dark:hover:bg-cyan-500 dark:hover:text-slate-950 transition-colors shadow-sm"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </motion.a>
            <motion.a 
              href="https://x.com/mdLimonMia0101" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-cyan-500 hover:text-slate-950 dark:hover:bg-cyan-500 dark:hover:text-slate-950 transition-colors shadow-sm"
              aria-label="Twitter"
            >
              <FaTwitter size={18} />
            </motion.a>
            <motion.a 
              href="https://www.facebook.com/share/1DCsoozUpe" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-cyan-500 hover:text-slate-950 dark:hover:bg-cyan-500 dark:hover:text-slate-950 transition-colors shadow-sm"
              aria-label="Facebook"
            >
              <FaFacebook size={18} />
            </motion.a>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-slate-200 dark:border-slate-800 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <p>© {currentYear} Limon. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 sm:mt-0">
            Made with <FaHeart className="text-red-500 animate-pulse" size={12} /> using Next.js & Tailwind CSS
          </p>
        </div>

      </motion.div>
    </footer>
  );
};

export default Footer;