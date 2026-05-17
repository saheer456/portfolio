"use client"

import ScrollReveal from "./ScrollReveal"
import { skillCategories } from "@/app/data/skills"

const iconMap: Record<string, string> = {
  "fa-brain": "fa-solid fa-brain",
  "fa-server": "fa-solid fa-server",
  "fa-shield-halved": "fa-solid fa-shield-halved",
  "fa-cloud": "fa-solid fa-cloud",
}

export default function TechnicalStack() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-[#0d0d0d]" id="stack" aria-label="Technical stack">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="eyebrow">Expertise</div>
          <h2 className="section-title">Core Technical Stack</h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-5 mt-12">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={0.08 * i}>
              <div className="bg-white/[.035] border border-white/[.07] rounded-xl p-8 transition-all duration-300 hover:border-gold/20">
                <h3 className="font-display text-xs tracking-[.07em] uppercase text-gold flex items-center gap-2.5 mb-5">
                  <i className={`${iconMap[cat.icon] || iconMap["fa-brain"]} text-sm`} />
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-4 py-2 border border-white/[.07] rounded-md text-sm text-[#8a8a8a] transition-all duration-300 hover:border-gold/40 hover:text-[#ede9e3] hover:bg-gold-dim hover:-translate-y-0.5 cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
