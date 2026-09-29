'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: 'Manush Manuser Jonno - Blood Donate Society',
    description: 'A full-stack blood donation platform connecting seekers with verified donors instantly. Features secure Google auth, email verification via Nodemailer, emergency requests, donor search/filtering, and role-based access control with a fully responsive dark/light UI.',
    image: '/images/MMJ.admin.dashboard.png',
    tags: ['Next.js', 'Tailwind CSS', 'JavaScript', 'HeroUi', 'MongoDB', 'BetterAuth', 'Nodemailer'],
    liveLink: 'https://mmj-blood-bank.vercel.app',
    githubLink: 'https://github.com/mdlimonislam000000-code/Blood-Donate-Client-',
  },
  {
    id: 2,
    title: 'MediCare Connect',
    description: 'MediCare Connect is a comprehensive full-stack healthcare platform that enables patients and doctors to easily manage appointments and schedules. Built with Next.js, Node.js, Express, and MongoDB, it features secure authentication via BetterAuth, Stripe payment gateway integration, an admin panel for user account management, and role-based route protection.',
    image: '/images/medicareConnect.jpg.png',
    tags: ['NextJs', 'Tailwind CSS', 'JavaScript','HeroUi','MongoDb'],
    liveLink: 'https://medicare-connect-rose.vercel.app',
    githubLink: 'https://github.com/mdlimonislam000000-code/MediCare--Client',
  },
  {
    id: 3,
    title: 'docAppointment - Doctor Booking System',
    description: 'A modern healthcare web application that allows users to easily search for doctors, view their specializations and availability, and seamlessly book appointments with a clean and responsive user interface.',
    image: '/images/project1.jpg.png',
    tags: ['NextJs', 'Tailwind CSS', 'JavaScript','HeroUi','MongoDb'],
    liveLink: 'https://doctor-appointment-manager-iota.vercel.app',
    githubLink: 'https://github.com/mdlimonislam000000-code/DocAppoint',
  },
  {
    id: 4,
    title: 'SunCart - Summer E-Commerce Platform',
    description: 'A vibrant and modern e-commerce web application dedicated to summer essentials, featuring product filtering, a seamless shopping cart experience, and a fully responsive user interface.',
    image: '/images/project2.jpg.png',
    tags: ['NextJs', 'Tailwind Css', 'React Router', 'HeroUi','MongoDb'],
    liveLink: 'https://sun-cart-flax.vercel.app',
    githubLink: 'https://github.com/mdlimonislam000000-code/Sun-Cart',
  },
  {
    id: 5,
    title: 'KeenKeeper - Friend & Contact Management App',
    description: 'A Static web application designed to manage friend connections, track communication statuses (Call, Text, Video), and easily stay in touch with a clean and interactive user interface.',
    image: '/images/project3.jpg.png',
    tags: ['Next.js', 'Tailwind CSS', 'DaisyUI','JavaScript'],
    liveLink: 'https://keen-keeper-lake-seven.vercel.app',
    githubLink: 'https://github.com/mdlimonislam000000-code/Keen-Keeper',
  },
  {
    id: 6,
    title: 'GitHub Issues Tracker - Issue Management App',
    description: 'A simulated issue tracking web application inspired by GitHub, allowing users to view, manage, and filter repository issues by status (All, Open, Closed) with a clean and interactive interface.',
    image: '/images/project4.jpg.png',
    tags: ['React', 'Tailwind CSS', 'DaisyUI','JavaScript'],
    liveLink: 'https://github-issues-treaker-project-bylimon.netlify.app',
    githubLink: 'https://github.com/mdlimonislam000000-code/GitHub-Issues-Tracker',
  },
  {
    id: 7,
    title: 'digiTools - Digital Tools Marketplace',
    description: 'A modern e-commerce web platform designed for buying and exploring various digital tools, featuring seamless category filtering, interactive product cards, and a fully responsive UI.',
    image: '/images/project5.jpg.png',
    tags: ['React', 'Tailwind CSS', 'DaisyUI','JavaScript'],
    liveLink: 'https://digi-tools-p.netlify.app',
    githubLink: 'https://github.com/mdlimonislam000000-code/digi-tools',
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const project = projectsData[currentIndex];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-wide">
            Showcasing my best work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3">
            Featured <span className="text-cyan-500">Projects</span>
          </h2>
        </motion.div>

        {/* Project Card Container with Rotating Border Animation */}
        <div className="relative group rounded-3xl p-[2px] overflow-hidden shadow-xl transition-all duration-300">
          
          {/* রটেটিং বর্ডার অ্যানিমেশন */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#06b6d4_360deg)] opacity-40 group-hover:opacity-100 transition-opacity"
          />

          {/* ইনার মেইন কার্ড বডি */}
          <div className="relative bg-slate-50 dark:bg-slate-950 rounded-[22px] overflow-hidden p-5 sm:p-8 z-10">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Project Image */}
                <div className="lg:col-span-6 relative h-56 sm:h-72 lg:h-80 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-900 shadow-md">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = '<div class="flex items-center justify-center h-full text-cyan-500 font-bold">Project Preview</div>';
                    }}
                  />
                </div>

                {/* Project Details */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 px-3 py-1 rounded-lg border border-cyan-100 dark:border-cyan-900/40">
                      Project {currentIndex + 1} of {projectsData.length}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-[11px] sm:text-xs font-medium px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-slate-200/60 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 py-2 px-4 sm:py-2.5 sm:px-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 font-medium text-xs sm:text-sm transition-all shadow-xs"
                    >
                      <FaGithub size={16} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 py-2 px-4 sm:py-2.5 sm:px-5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-cyan-500/25"
                    >
                      <span>Live Preview</span>
                      <FaExternalLinkAlt size={12} />
                    </a>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls with Glowing Icon Animation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
              
              {/* Previous Button (Icon Only with Glow Animation) */}
              <button
                onClick={prevProject}
                className="p-3 rounded-xl bg-slate-200/70 dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-cyan-500 hover:text-white transition-all cursor-pointer shadow-xs group/btn"
                title="Previous Project"
              >
                <motion.div
                  animate={{ 
                    filter: ["drop-shadow(0 0 2px rgba(6,182,212,0.4))", "drop-shadow(0 0 8px rgba(6,182,212,0.9))", "drop-shadow(0 0 2px rgba(6,182,212,0.4))"] 
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaChevronLeft size={16} className="text-cyan-500 group-hover/btn:text-white transition-colors" />
                </motion.div>
              </button>

              {/* Dots Indicator */}
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                {projectsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx ? 'w-6 sm:w-8 bg-cyan-500' : 'w-2.5 bg-slate-300 dark:bg-slate-800'
                    }`}
                  />
                ))}
              </div>

              {/* Next Button (Icon Only with Glow Animation) */}
              <button
                onClick={nextProject}
                className="p-3 rounded-xl bg-slate-200/70 dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-cyan-500 hover:text-white transition-all cursor-pointer shadow-xs group/btn"
                title="Next Project"
              >
                <motion.div
                  animate={{ 
                    filter: ["drop-shadow(0 0 2px rgba(6,182,212,0.4))", "drop-shadow(0 0 8px rgba(6,182,212,0.9))", "drop-shadow(0 0 2px rgba(6,182,212,0.4))"] 
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaChevronRight size={16} className="text-cyan-500 group-hover/btn:text-white transition-colors" />
                </motion.div>
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;