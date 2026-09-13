"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaUniversity, FaMapMarkerAlt } from "react-icons/fa";

const educationData = [
  {
    id: 1,
    degree: 'Diploma in Engineering in Computer Science & Technology (CST)',
    institution: 'Kishoreganj Polytechnic Institute',
    address: 'Korimganj, Kishoreganj, Bangladesh',
    duration: '2022 - 2027',
    description: 'Focusing on core programming concepts, data structures, algorithms, and modern web development technologies.',
    status: '6th Semester (Running)',
  },
  {
    id: 2,
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Kashiyabari High School',
    address: 'Powthana, Pirgacha, Rangpur, Bangladesh',
    duration: '2020 - 2022',
    description: 'Completed studies under Science group with a strong foundation in mathematics and a basic understanding of computers.',
    status: 'Completed',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-wide">
            My academic background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3">
            Educational <span className="text-cyan-500">Qualification</span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="relative border-l-2 border-cyan-500/30 dark:border-cyan-500/20 ml-4 sm:ml-8 space-y-12"
        >
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className="relative pl-8 sm:pl-10 group"
            >
              {/* Timeline Dot Icon */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-cyan-500 flex items-center justify-center text-cyan-500 shadow-md group-hover:scale-110 transition-transform z-10">
                <FaGraduationCap size={16} />
              </div>

              {/* Card Wrapper with Framer Motion Rotating Glow */}
              <div className="relative rounded-3xl overflow-hidden p-[2px] shadow-md hover:shadow-xl transition-all duration-300">
                {/* Framer Motion দিয়ে স্মুথ রটেটিং গ্লো অ্যানিমেশন */}
                <div className="absolute inset-[-50%] overflow-hidden pointer-events-none">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-transparent to-transparent opacity-80"
                  />
                </div>

                {/* Inner Content Box */}
                <div className="relative bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-[22px] h-full w-full z-10 border border-slate-200 dark:border-slate-800">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 px-3 py-1 rounded-lg border border-cyan-100 dark:border-cyan-900/40">
                      <FaCalendarAlt size={12} />
                      {edu.duration}
                    </span>

                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
                        edu.status === "6th Semester (Running)"
                          ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/40"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      {edu.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {edu.degree}
                  </h3>

                  <div className="space-y-1 mb-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                      <FaUniversity className="text-cyan-500 shrink-0" size={14} />
                      <span>{edu.institution}</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                      <FaMapMarkerAlt className="text-cyan-500 shrink-0" size={14} />
                      <span>{edu.address}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;