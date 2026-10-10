"use client"

import ScrollReveal from "./ScrollReveal"

export default function FlagshipProject() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-[#0d0d0d]" id="projects" aria-label="Flagship project Wazuh SIEM">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="eyebrow">Featured Lab</div>
          <h2 className="section-title">Wazuh SIEM Home Lab</h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mt-12 items-center">
          {/* Left: Architecture visual */}
          <ScrollReveal delay={0.1}>
            <div className="bg-white/[.035] border border-white/[.07] rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[.07] bg-black/40">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="text-[#5a5a5a] text-xs ml-2 font-mono">kali-linux:~/wazuh-docker</span>
              </div>
              <div className="p-6 flex flex-col items-center justify-center min-h-[280px] bg-gradient-to-br from-emerald-950/50 via-teal-950/30 to-slate-950/50">
                <div className="text-center space-y-4">
                  <div className="text-4xl sm:text-5xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-gold">
                    WAZUH SIEM
                  </div>
                  <div className="text-xs tracking-[.2em] uppercase text-[#8a8a8a]">Centralized Security Monitoring & Telemetry</div>
                  
                  {/* Architecture visualization */}
                  <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 mt-6">
                    {["Endpoint VM", "Wazuh Agent", "Wazuh Manager", "Alert Triage", "Investigation"].map((label, i) => (
                      <div key={label} className="flex flex-col sm:flex-row items-center gap-1">
                        <span className="inline-flex items-center px-2.5 py-1.5 rounded border border-white/[.1] bg-white/[.04] text-[10px] sm:text-[11px] text-[#8a8a8a] whitespace-nowrap">
                          {label}
                        </span>
                        {i < 4 && <span className="text-gold/60 text-xs hidden sm:inline">→</span>}
                        {i < 4 && <span className="text-gold/60 text-xs sm:hidden rotate-90">→</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Details */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold tracking-tight">Wazuh SIEM Home Lab</h3>
                <p className="text-sm text-gold uppercase tracking-[.1em] mt-1">Blue Team · Security Operations</p>
              </div>

              <p className="text-[#8a8a8a] leading-relaxed">
                Building a local SIEM environment on Kali Linux to explore centralized security monitoring,
                endpoint telemetry collection, alert investigation workflows, and detection engineering in an isolated Docker environment.
              </p>

              <div className="space-y-3">
                <h4 className="text-xs tracking-[.15em] uppercase text-[#5a5a5a]">Detection Scenarios & Scope</h4>
                <ul className="space-y-2 text-sm text-[#8a8a8a]">
                  {[
                    "Authentication telemetry & brute force / failed login detection",
                    "Suspicious process execution inspection and detection rule analysis",
                    "File Integrity Monitoring (FIM) on sensitive system binaries and configs",
                    "Privilege escalation and administrative activity monitoring",
                    "Structured alert triage workflow: timestamp, source, rule ID, and evidence capture",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-gold mt-0.5 flex-shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Wazuh", "Docker", "Kali Linux", "SIEM", "Log Analysis", "Alert Triage", "FIM"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/[.04] border border-white/[.07] rounded text-xs text-[#8a8a8a]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 py-4 border-y border-white/[.07]">
                {[
                  { value: "4", label: "Detection Scenarios" },
                  { value: "Wazuh", label: "SIEM Engine" },
                  { value: "Docker", label: "Containerized" },
                ].map((m) => (
                  <div key={m.label}>
                    <div className="text-xl font-display font-bold text-gold">{m.value}</div>
                    <div className="text-[0.65rem] tracking-[.08em] uppercase text-[#5a5a5a]">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/saheer456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-black font-display font-bold text-sm rounded-[4px] transition-all duration-400 hover:-translate-y-[2px] hover:shadow-[0_12px_24px_rgba(200,164,74,.25)]"
                >
                  View Case Study
                  <span className="text-xs">→</span>
                </a>
                <a
                  href="https://github.com/saheer456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/[.14] text-[#8a8a8a] text-sm rounded-[4px] transition-all duration-300 hover:border-gold hover:text-gold"
                >
                  GitHub
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
