'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult('Sending message...');

    const formData = new FormData(event.target);

    // নিচের এক্সেস কি-এর জায়গায় আপনার Web3Forms Access Key বসিয়ে দেবেন
    formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY_HERE');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Message sent successfully! I will contact you soon.');
        event.target.reset();
      } else {
        setResult(data.message || 'Something went wrong. Please try again!');
      }
    } catch (error) {
      setResult('Failed to send message. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300">
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
            Get in touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3">
            Contact <span className="text-cyan-500">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Info (Col: 5) - Unique Glow & Hover Effect */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
            className="lg:col-span-5 relative rounded-3xl p-[2px] overflow-hidden group shadow-md hover:shadow-cyan-500/10 transition-all duration-300"
          >
            {/* Rotating Glow Border on Hover */}
            <div className="absolute inset-[-50%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-transparent to-transparent opacity-70"
              />
            </div>

            <div className="relative bg-slate-50 dark:bg-slate-950 p-8 rounded-[22px] border border-slate-200 dark:border-slate-800 space-y-8 h-full z-10">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  Let's talk about everything!
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Don't hesitate to reach out if you have any questions, project inquiries, or just want to say hi. My inbox is always open!
                </p>
              </div>

              <div className="space-y-6">
                <motion.div whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 300 }} className="flex items-center gap-4 cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-100 dark:border-cyan-900/40 flex items-center justify-center text-cyan-500 shrink-0">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Mail Me</p>
                    <a href="mailto:mdlimonislam000000@gmail.com" className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-cyan-500 transition-colors">
                      mdlimonislam000000@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 300 }} className="flex items-center gap-4 cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-100 dark:border-cyan-900/40 flex items-center justify-center text-cyan-500 shrink-0">
                    <FaPhoneAlt size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Call Me</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">+880 1301269582</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 300 }} className="flex items-center gap-4 cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-100 dark:border-cyan-900/40 flex items-center justify-center text-cyan-500 shrink-0">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Location</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Rangpur, Bangladesh</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Col: 7) - Interactive Focus & Button Pulse Animation */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md"
          >
            <form onSubmit={onSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Your Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  required 
                  placeholder="Project Discussion"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Your Message</label>
                <textarea 
                  name="message" 
                  rows="5" 
                  required 
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                ></textarea>
              </div>

              <motion.button 
                type="submit" 
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold text-sm transition-all shadow-md hover:shadow-cyan-500/40 cursor-pointer disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                <motion.div
                  animate={isSubmitting ? { x: [0, 10, -10, 0] } : {}}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                >
                  <FaPaperPlane size={14} />
                </motion.div>
              </motion.button>

              {result && (
                <p className={`text-center text-sm font-semibold mt-4 ${result.includes('success') ? 'text-emerald-500' : 'text-cyan-500'}`}>
                  {result}
                </p>
              )}

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;