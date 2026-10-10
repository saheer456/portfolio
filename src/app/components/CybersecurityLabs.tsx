"use client"

import ScrollReveal from "./ScrollReveal"

export default function CybersecurityLabs() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-[#0d0d0d]" id="security" aria-label="Cybersecurity labs">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="eyebrow">Security Operations</div>
          <h2 className="section-title">Cybersecurity Labs & Practice</h2>
          <p className="text-[#8a8a8a] mt-4 max-w-2xl leading-relaxed">
            Hands-on practice in Blue Team operations, centralized SIEM monitoring, web and API security testing, and reproducible CTF engineering.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {/* Card 1: Wazuh SIEM & Blue Team */}
          <ScrollReveal delay={0.08}>
            <div className="bg-white/[.035] border border-white/[.07] rounded-xl p-6 h-full flex flex-col justify-between transition-all duration-300 hover:border-gold/30">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-gold-dim rounded-lg flex items-center justify-center text-gold text-lg">
                    <i className="fa-solid fa-shield-halved" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold">Wazuh SIEM Operations</h3>
                    <p className="text-[0.65rem] sm:text-[0.6rem] text-[#5a5a5a] uppercase tracking-[.1em]">Blue Team · Telemetry</p>
                  </div>
                </div>
                <div className="space-y-2.5">
                  {[
                    "Wazuh Docker deployment on Kali Linux",
                    "Endpoint agent onboarding & telemetry collection",
                    "Alert triage & log investigation workflows",
                    "Detection rule evaluation for failed logins & FIM",
                    "Separating normal baseline from suspicious events",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-[#8a8a8a] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/70 mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-white/[.05] flex items-center justify-between text-[0.65rem] text-[#5a5a5a]">
                <span className="text-gold">Status: In Progress</span>
                <span>Kali · Docker · Wazuh</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: API & Web Vulnerability Testing */}
          <ScrollReveal delay={0.14}>
            <div className="bg-white/[.035] border border-white/[.07] rounded-xl p-6 h-full flex flex-col justify-between transition-all duration-300 hover:border-gold/30">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-gold-dim rounded-lg flex items-center justify-center text-gold text-lg">
                    <i className="fa-solid fa-bug" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold">Web & API Security (crAPI)</h3>
                    <p className="text-[0.65rem] sm:text-[0.6rem] text-[#5a5a5a] uppercase tracking-[.1em]">Vulnerability Assessment</p>
                  </div>
                </div>
                <div className="space-y-2.5">
                  {[
                    "crAPI lab environment deployed in Docker",
                    "HTTP/S traffic analysis using Burp Suite",
                    "Testing BOLA, BFLA & broken object authorization",
                    "Excessive data exposure & logic flaws",
                    "Evidence-backed findings documentation",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-[#8a8a8a] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/70 mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-white/[.05] flex items-center justify-between text-[0.65rem] text-[#5a5a5a]">
                <span className="text-gold">Status: Lab Testing</span>
                <span>Burp Suite · Docker</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Reconnaissance & Assessment */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white/[.035] border border-white/[.07] rounded-xl p-6 h-full flex flex-col justify-between transition-all duration-300 hover:border-gold/30">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-gold-dim rounded-lg flex items-center justify-center text-gold text-lg">
                    <i className="fa-solid fa-crosshairs" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold">Recon & Vulnerability Review</h3>
                    <p className="text-[0.65rem] sm:text-[0.6rem] text-[#5a5a5a] uppercase tracking-[.1em]">Network & Web Scanning</p>
                  </div>
                </div>
                <div className="space-y-2.5">
                  {[
                    "Nmap service discovery & port mapping",
                    "Nuclei template execution against lab targets",
                    "Content discovery with Gobuster & dirsearch",
                    "Manual validation to filter scanner false positives",
                    "Documenting affected endpoints & remediation",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-[#8a8a8a] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/70 mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-white/[.05] flex items-center justify-between text-[0.65rem] text-[#5a5a5a]">
                <span className="text-gold">Approach: Manual Verification</span>
                <span>Nmap · Nuclei</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 4: CTF Engineering */}
          <ScrollReveal delay={0.26}>
            <div className="bg-white/[.035] border border-white/[.07] rounded-xl p-6 h-full flex flex-col justify-between transition-all duration-300 hover:border-gold/30">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-gold-dim rounded-lg flex items-center justify-center text-gold text-lg">
                    <i className="fa-solid fa-flag" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold">CTF Challenge Development</h3>
                    <p className="text-[0.65rem] sm:text-[0.6rem] text-[#5a5a5a] uppercase tracking-[.1em]">The Ringmaster&apos;s Ledger</p>
                  </div>
                </div>
                <div className="space-y-2.5">
                  {[
                    "Designed 500-pt hard web exploitation challenge",
                    "7-step exploit chain with JWT JWK (jku) flaw",
                    "Role escalation, internal SSRF & credential leak",
                    "Dockerized multi-container architecture with Nginx",
                    "Includes solution guide, tests & automated verification",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-[#8a8a8a] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/70 mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-white/[.05] flex items-center justify-between text-[0.65rem] text-[#5a5a5a]">
                <a
                  href="https://github.com/saheer456/ctf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline inline-flex items-center gap-1"
                >
                  View Repo <span className="text-xs">→</span>
                </a>
                <span>Python · Docker · Nginx</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 5: Labs & CTF Practice */}
          <ScrollReveal delay={0.32}>
            <div className="bg-white/[.035] border border-white/[.07] rounded-xl p-6 h-full flex flex-col justify-between transition-all duration-300 hover:border-gold/30">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-gold-dim rounded-lg flex items-center justify-center text-gold text-lg">
                    <i className="fa-solid fa-terminal" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold">Security Practice & Platforms</h3>
                    <p className="text-[0.65rem] sm:text-[0.6rem] text-[#5a5a5a] uppercase tracking-[.1em]">THM · HTB · PortSwigger</p>
                  </div>
                </div>
                <div className="space-y-2.5">
                  {[
                    "TryHackMe: Jr. Penetration Tester learning path",
                    "TryHackMe: SOC Level 1 fundamentals",
                    "Hack The Box: Active machines & privilege escalation",
                    "PortSwigger Web Security Academy: Access control & SQLi",
                    "Systematic note-taking & write-up documentation",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-[#8a8a8a] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/70 mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-white/[.05] flex items-center justify-between text-[0.65rem] text-[#5a5a5a]">
                <span className="text-gold">Active Learning</span>
                <span>Authorized Labs</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 6: Certifications & Credentials */}
          <ScrollReveal delay={0.38}>
            <div className="bg-white/[.035] border border-white/[.07] rounded-xl p-6 h-full flex flex-col justify-between transition-all duration-300 hover:border-gold/30">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-gold-dim rounded-lg flex items-center justify-center text-gold text-lg">
                    <i className="fa-solid fa-certificate" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold">Certifications & Credentials</h3>
                    <p className="text-[0.65rem] sm:text-[0.6rem] text-[#5a5a5a] uppercase tracking-[.1em]">Verified Training</p>
                  </div>
                </div>
                <div className="space-y-2.5">
                  {[
                    "Ethical Hacking Starter — Offenso Elevate",
                    "Cloud Computing — EC-Council",
                    "Big Data & AI — IBM Career Education",
                    "BCA Data Science — Undergraduate Degree",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-[#8a8a8a] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/70 mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-white/[.05] flex items-center justify-between text-[0.65rem] text-[#5a5a5a]">
                <span className="text-gold">Credentials</span>
                <span>Security & Cloud</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
