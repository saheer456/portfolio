"use client"

import ScrollReveal from "./ScrollReveal"

export default function CybersecurityLabs() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-[#0d0d0d]" id="security" aria-label="Cybersecurity labs">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="eyebrow">Security</div>
          <h2 className="section-title">Cybersecurity Labs</h2>
          <p className="text-[#8a8a8a] mt-4 max-w-xl leading-relaxed">
            Active lab work, writeups, and security experiments.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-5 mt-12">
          {/* HTB */}
          <ScrollReveal delay={0.1}>
            <div className="bg-white/[.035] border border-white/[.07] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gold-dim rounded-lg flex items-center justify-center text-gold text-lg">
                  <i className="fa-solid fa-skull" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold">Hack The Box</h3>
                  <p className="text-[0.65rem] sm:text-[0.6rem] text-[#5a5a5a] uppercase tracking-[.1em]">Active labs & writeups</p>
                </div>
              </div>
              <div className="space-y-3">
                {["Machine writeups in progress", "Exploring privilege escalation techniques", "Web exploitation challenges"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[#8a8a8a]">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0" />
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* THM */}
          <ScrollReveal delay={0.15}>
            <div className="bg-white/[.035] border border-white/[.07] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gold-dim rounded-lg flex items-center justify-center text-gold text-lg">
                  <i className="fa-solid fa-terminal" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold">TryHackMe</h3>
                  <p className="text-[0.65rem] sm:text-[0.6rem] text-[#5a5a5a] uppercase tracking-[.1em]">Learning path</p>
                </div>
              </div>
              <div className="space-y-3">
                {["Jr. Penetration Tester path", "SOC Level 1 fundamentals", "CTF writeups & methodology"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[#8a8a8a]">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0" />
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* SIEM Experiments */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white/[.035] border border-white/[.07] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gold-dim rounded-lg flex items-center justify-center text-gold text-lg">
                  <i className="fa-solid fa-chart-line" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold">SIEM & Detection</h3>
                  <p className="text-[0.65rem] sm:text-[0.6rem] text-[#5a5a5a] uppercase tracking-[.1em]">Security experiments</p>
                </div>
              </div>
              <div className="space-y-3">
                {["Wazuh SIEM deployment experiments", "Custom detection rule writing", "Log analysis & threat hunting"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[#8a8a8a]">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0" />
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* Certifications */}
          <ScrollReveal delay={0.25}>
            <div className="bg-white/[.035] border border-white/[.07] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gold-dim rounded-lg flex items-center justify-center text-gold text-lg">
                  <i className="fa-solid fa-certificate" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold">Certifications</h3>
                  <p className="text-[0.65rem] sm:text-[0.6rem] text-[#5a5a5a] uppercase tracking-[.1em]">Security credentials</p>
                </div>
              </div>
              <div className="space-y-3">
                {["Ethical Hacking Starter — Offenso Elevate", "Cloud Computing — EC Council", "Big Data & AI — IBM Career Education"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[#8a8a8a]">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0" />
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
