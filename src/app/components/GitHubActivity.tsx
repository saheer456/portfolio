"use client"

import ScrollReveal from "./ScrollReveal"

export default function GitHubActivity() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-[#0d0d0d]" id="github" aria-label="GitHub activity">
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
                name: "FRIDAY-AI",
                desc: "Multi-agent AI assistant with RAG memory and tool orchestration",
                lang: "TypeScript",
                stars: "12",
              },
              {
                name: "VulnScanner",
                desc: "Full-stack web vulnerability scanner with 13 scanning modules",
                lang: "Python",
                stars: "8",
              },
              {
                name: "OpenArchitect-Studio",
                desc: "Autonomous AI software engineer that runs locally in Docker",
                lang: "TypeScript",
                stars: "6",
              },
              {
                name: "Zerologic",
                desc: "Mobile-first Python learning platform with interactive code playground",
                lang: "TypeScript",
                stars: "4",
              },
            ].map((repo, i) => (
              <ScrollReveal key={repo.name} delay={0.05 * i}>
                <a
                  href="https://github.com/saheer456"
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
