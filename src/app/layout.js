'use client';
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  const [trails, setTrails] = useState([]);
  const [raindrops, setRaindrops] = useState([]);
// মাউস ট্রেইল (হোভার) ইফেক্ট
  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPoint = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now() + Math.random(),
      };

      setTrails((prev) => [...prev.slice(-12), newPoint]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  useEffect(() => {
    const drops = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100, 
      duration: Math.random() * 1.5 + 1.0, 
      delay: Math.random() * 2, 
    }));
    setRaindrops(drops);
  }, []);

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 relative selection:bg-cyan-500 selection:text-white overflow-x-hidden`}>
        

        <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
          {raindrops.map((drop) => (
            <motion.div
              key={drop.id}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: '105vh', opacity: [0, 0.5, 0] }}
              transition={{
                duration: drop.duration,
                repeat: Infinity,
                delay: drop.delay,
                ease: "linear",
              }}
              className="absolute w-[1.5px] h-5 bg-gradient-to-b from-transparent via-cyan-400 to-indigo-500 rounded-full blur-[0.5px]"
              style={{
                left: `${drop.left}%`,
              }}
            />
          ))}
        </div>

        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {trails.map((trail, index) => (
            <motion.div
              key={trail.id}
              initial={{ opacity: 0.7, scale: 1 }}
              animate={{ opacity: 0, scale: 0.1 }}
              transition={{ duration: 1.0 }}
              className="absolute h-2 rounded-full bg-linear-to-r-to-r from-cyan-500 via-teal-400 to-indigo-500 blur-[0.5px]"
              style={{
                left: `${trail.x}px`,
                top: `${trail.y}px`,
                width: `${Math.max(4, 16 - index)}px`,
                height: `${Math.max(4, 16 - index)}px`,
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
        </div>

        <Navbar />
        {children}
      </body>
    </html>
  );
}