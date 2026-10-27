"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#070707] pt-[70px]">
      {/* Header */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-8 text-sm text-[#8a8a8a] hover:text-gold transition-colors"
            >
              <span>←</span>
              Back to Home
            </Link>

            <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
              Saheer Khan MK
            </h1>
            <p className="text-[#8a8a8a] text-lg mb-8">
              BCA (Data Science) · Aspiring SOC Analyst L1 · Security Operations
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/resume/Saheer-Khan-Resume.pdf"
                download="Saheer-Khan-Resume.pdf"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-6 py-3 min-h-[48px] bg-gold text-black font-display font-bold text-sm rounded-[4px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(200,164,74,.3)]"
              >
                <i className="fa-solid fa-download" />
                Download Resume (PDF)
              </motion.a>
              <motion.a
                href="/resume.docx"
                download="Saheer_Khan_Resume.docx"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-6 py-3 min-h-[48px] border border-white/[.14] text-[#8a8a8a] font-display font-bold text-sm rounded-[4px] transition-all duration-300 hover:border-gold hover:text-gold hover:-translate-y-1"
              >
                <i className="fa-solid fa-download" />
                Download Resume (.docx)
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resume Content Preview */}
      <section className="py-8 px-4 sm:px-6 md:px-12 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/[.035] border border-white/[.07] rounded-xl p-8 md:p-12"
          >
            <div className="prose prose-invert max-w-none text-[#8a8a8a] space-y-6">
              <div>
                <h2 className="text-2xl font-display font-bold text-[#ede9e3] mb-3 flex items-center gap-2">
                  <span className="text-gold">▸</span>
                  Professional Summary
                </h2>
                <p className="leading-relaxed">
                  Cybersecurity-focused BCA (Data Science) graduate 2026 with hands-on training in security
                  operations through lab practice and self-directed study. Skilled in security incident triage,
                  log analysis, SIEM fundamentals (Wazuh, Splunk), and network threat detection. Eager to
                  contribute to a SOC team performing alert monitoring, initial investigation, and escalation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-[#ede9e3] mb-3 flex items-center gap-2">
                  <span className="text-gold">▸</span>
                  Key Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Security Information & Event Management (SIEM)",
                    "Threat Detection & Analysis",
                    "Incident Response",
                    "Network Security",
                    "Log Analysis & Forensics",
                    "Security Automation",
                    "Vulnerability Assessment",
                    "Compliance & Risk Management",
                  ].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <span className="text-gold">→</span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-[#ede9e3] mb-3 flex items-center gap-2">
                  <span className="text-gold">▸</span>
                  Tools & Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Splunk",
                    "ELK Stack",
                    "Suricata",
                    "Zeek",
                    "Wireshark",
                    "Linux",
                    "Windows",
                    "Python",
                    "Bash",
                    "SQL",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 bg-white/[.04] border border-white/[.07] rounded text-sm text-[#5a5a5a]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[.07]">
                <p className="text-sm text-[#5a5a5a]">
                  📄 <strong>Full Resume:</strong> Download the .docx file above to view the complete
                  resume with detailed work experience, certifications, and accomplishments.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Interested in working together?
          </h2>
          <p className="text-[#8a8a8a] mb-8">
            Let&apos;s connect and discuss how I can contribute to your team&apos;s security initiatives.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center px-6 py-3 min-h-[48px] bg-gold text-black font-display font-bold text-sm rounded-[4px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(200,164,74,.3)]"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
