"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-[70px] px-4 sm:px-6 md:px-12" aria-label="Hero introduction">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
          WebkitMaskImage: "radial-gradient(ellipse 75% 80% at 50% 50%, black 30%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 75% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Left: Identity */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/[.14] rounded-full text-[0.6rem] sm:text-[0.65rem] tracking-[.12em] uppercase text-[#8a8a8a] mb-8">
              <span className="w-[7px] h-[7px] bg-gold rounded-full animate-pulse" />
              AI Systems & Cybersecurity
            </div>
          </motion.div>

          <motion.h1
            className="font-display text-[clamp(2.8rem,7vw,5rem)] font-extrabold leading-[.92] tracking-[-.04em] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="block">Saheer</span>
            <span className="block">Khan</span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-[#8a8a8a] leading-relaxed max-w-md mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="text-[#ede9e3] font-medium">AI Systems & Cybersecurity Engineer</span>
            <br />
            Building autonomous AI agents, security tools, and scalable cloud-native applications.
          </motion.p>

          <motion.div
            className="text-sm text-[#5a5a5a] mb-8 space-y-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="flex items-center gap-2">
              <span className="text-gold">▸</span> AI infrastructure
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold">▸</span> Security automation
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold">▸</span> Cloud security
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold">▸</span> Intelligent systems
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-2 sm:gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <a
              href="#projects"
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-3 min-h-[48px] bg-gold text-black font-display font-bold text-sm rounded-[4px] transition-all duration-400 hover:-translate-y-[3px] hover:shadow-[0_16px_32px_rgba(200,164,74,.3)]"
            >
              View Projects
            </a>
            <a
              href="https://github.com/saheer456"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-3 min-h-[48px] border border-white/[.14] text-[#8a8a8a] text-sm rounded-[4px] transition-all duration-300 hover:border-gold hover:text-gold hover:-translate-y-[3px]"
            >
              GitHub
            </a>
            <a
              href="#contact"
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-3 min-h-[48px] border border-white/[.14] text-[#8a8a8a] text-sm rounded-[4px] transition-all duration-300 hover:border-gold hover:text-gold hover:-translate-y-[3px]"
            >
              Resume
            </a>
          </motion.div>
        </div>

        {/* Right: Terminal-style Engineering Card */}
        <div className="hidden lg:block">
          <motion.div
            className="bg-white/[.035] border border-white/[.07] rounded-xl overflow-hidden font-mono text-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[.07] bg-black/40">
              <span className="w-3 h-3 rounded-full bg-red-500/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="text-[#5a5a5a] text-xs ml-2">~/system</span>
            </div>

            {/* Terminal Content */}
            <div className="p-5 space-y-2.5 text-[13px] leading-relaxed">
              <div>
                <span className="text-green-400">saheer@engineer</span>
                <span className="text-[#5a5a5a]">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-[#5a5a5a]">$ </span>
                <span className="text-[#ede9e3]">cat /proc/sys/info</span>
              </div>

              <div className="text-[#8a8a8a] space-y-1.5 pt-1 border-t border-white/[.04]">
                <div className="flex justify-between gap-4">
                  <span className="text-[#5a5a5a] shrink-0">status</span>
                  <span className="text-green-400 text-right">active</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-[#5a5a5a] shrink-0">role</span>
                  <span className="text-[#ede9e3] text-right">AI Systems & Security Engineer</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-[#5a5a5a] shrink-0">location</span>
                  <span className="text-[#ede9e3] text-right">Bangalore, India</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-[#5a5a5a] shrink-0">experience</span>
                  <span className="text-[#ede9e3] text-right">3+ years</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-[#5a5a5a] shrink-0">projects</span>
                  <span className="text-[#ede9e3] text-right">8 shipped</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-[#5a5a5a] shrink-0">availability</span>
                  <span className="text-yellow-400 text-right">open to work</span>
                </div>
              </div>

              <div className="pt-1">
                <span className="text-green-400">saheer@engineer</span>
                <span className="text-[#5a5a5a]">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-[#5a5a5a]">$ </span>
                <span className="animate-pulse text-[#ede9e3]">▊</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[#5a5a5a] text-[0.6rem] tracking-[.18em] uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <span>Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gold to-transparent animate-scroll" />
      </motion.div>
    </section>
  )
}
