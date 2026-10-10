"use client"

import ScrollReveal from "./ScrollReveal"

export default function GitHubActivity() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-[#0d0d0d]" id="github" aria-label="GitHub activity">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="eyebrow">Open Source</div>
          <h2 className="section-title">GitHub & Technical Activity</h2>
        </ScrollReveal>

        <div className="mt-12 space-y-8">
          {/* Contribution Graph */}
          <ScrollReveal delay={0.1}>
            <div className="bg-white/[.035] border border-white/[.07] rounded-xl p-6">
              <h3 className="font-display text-sm font-bold mb-4">Contribution Activity</h3>
              <div className="overflow-x-auto pb-2 -mx-2 px-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                  src="https://ghchart.rshah.org/saheer456"
                  alt="Saheer Khan's GitHub contribution graph"
                  className="min-w-[600px] md:min-w-[720px] w-full h-auto rounded"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Pinned Repositories */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: "ctf",
                desc: "The Ringmaster's Ledger — hard (500 pts) web exploitation CTF challenge with JWT JWK injection, SSRF, and privilege escalation",
                lang: "Python",
                stars: "Active",
              },
              {
                name: "vuln_scanner",
                desc: "Web application vulnerability scanner detecting SQL injection, reflected XSS, and missing security headers with risk scoring",
                lang: "Python",
                stars: "Active",
              },
              {
                name: "friday-agent",
                desc: "Autonomous multi-agent AI assistant with semantic memory, local vector RAG, and tool orchestration",
                lang: "TypeScript",
                stars: "Featured",
              },
              {
                name: "Zerologic",
                desc: "Mobile-first interactive Python learning platform with Monaco code editor and Supabase authentication",
                lang: "TypeScript",
                stars: "Live",
              },
            ].map((repo, i) => (
              <ScrollReveal key={repo.name} delay={0.05 * i}>
                <a
                  href={`https://github.com/saheer456/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/[.035] border border-white/[.07] rounded-xl p-5 transition-all duration-300 hover:border-gold/20 hover:-translate-y-1 group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <i className="fa-regular fa-folder-open text-gold text-sm" />
                    <span className="font-display text-sm font-bold group-hover:text-gold transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <p className="text-xs text-[#8a8a8a] mb-3 leading-relaxed">{repo.desc}</p>
                  <div className="flex items-center gap-4 text-[0.65rem] sm:text-[0.6rem] text-[#5a5a5a]">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-yellow-400" />
                      {repo.lang}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="fa-regular fa-star" />
                      {repo.stars}
                    </span>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
