"use client"

import ScrollReveal from "./ScrollReveal"
import { otherProjects } from "@/app/data/projects"

export default function EngineeringProjects() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12" aria-label="Engineering projects">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="eyebrow">Projects</div>
          <h2 className="section-title">Engineering Work</h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {otherProjects.map((project, i) => (
            <ScrollReveal key={project.title} delay={0.05 * i}>
              <article
                className="group bg-white/[.035] border border-white/[.07] rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-gold/30 hover:shadow-[0_24px_48px_rgba(0,0,0,.55)]"
              >
                {/* Thumbnail */}
                <div
                  className={`h-[160px] flex items-center justify-center text-3xl relative overflow-hidden bg-gradient-to-br ${project.gradient}`}
                >
                  <span className="relative z-10 text-white/40 transition-transform duration-400 group-hover:scale-110 group-hover:-rotate-3">
                    <i className={`fa-solid ${project.icon}`} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/80 to-transparent" />
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="text-[0.6rem] sm:text-[0.65rem] tracking-[.13em] uppercase text-gold mb-2">{project.type}</div>
                  <h3 className="font-display text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-[#8a8a8a] leading-relaxed mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-white/[.04] border border-white/[.07] rounded text-[0.65rem] text-[#5a5a5a]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.status === "live" ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-all duration-300 hover:gap-3"
                    >
                      Live Site <span className="text-xs">→</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm text-[#5a5a5a]">
                      Coming Soon
                    </span>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
