"use client"

import ScrollReveal from "./ScrollReveal"
import { timeline } from "@/app/data/timeline"

export default function EngineeringTimeline() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12" id="timeline" aria-label="Engineering journey timeline">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="eyebrow">Journey</div>
          <h2 className="section-title">Engineering Timeline</h2>
        </ScrollReveal>

        <div className="relative mt-12 md:mt-16 pl-6 md:pl-8 before:content-[''] before:absolute before:left-[14px] md:before:left-[18px] before:top-0 before:bottom-0 before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-white/[.07] before:to-transparent">
          {timeline.map((entry, i) => (
            <ScrollReveal key={entry.year} delay={0.1 * i}>
              <div className="grid grid-cols-[auto_1fr] gap-3 md:gap-6 mb-8 md:mb-12 last:mb-0">
                {/* Dot */}
                <div className="flex justify-center pt-1.5">
                  <div className="w-2.5 md:w-3 h-2.5 md:h-3 bg-gold rounded-full shadow-[0_0_0_4px_rgba(200,164,74,.13)] transition-shadow duration-300 group-hover:shadow-[0_0_0_8px_rgba(200,164,74,.15),0_0_18px_rgba(200,164,74,.4)]" />
                </div>

                {/* Card */}
                <div className="bg-white/[.035] border border-white/[.07] rounded-xl p-4 md:p-8 transition-all duration-400 hover:border-gold/20 hover:translate-x-1.5 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-gold/[.04] before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100">
                  <div className="text-[0.65rem] tracking-[.1em] uppercase text-gold mb-2">{entry.year}</div>
                  <h3 className="font-display text-lg md:text-xl font-bold mb-1">{entry.title}</h3>
                  <p className="text-sm text-[#5a5a5a] mb-4">{entry.subtitle}</p>
                  <p className="text-sm text-[#8a8a8a] leading-relaxed mb-5">{entry.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 border border-white/[.07] rounded-full text-[0.65rem] text-[#5a5a5a]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
