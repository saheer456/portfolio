"use client"

import Link from "next/link"
import { useState } from "react"
import ScrollReveal from "./ScrollReveal"
import { blogPosts } from "@/app/data/blogs"

export default function Blogs() {
  const [filter, setFilter] = useState("All" as "All" | "Security" | "AI/Engineering")

  const filteredPosts = filter === "All" ? blogPosts : blogPosts.filter((p) => p.tag === filter)

  const tagColor = (tag: string) => {
    if (tag === "Security") return "bg-emerald-950/30 border-emerald-900/40 text-emerald-400"
    return "bg-indigo-950/30 border-indigo-900/40 text-indigo-400"
  }

  return (
    <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12" id="blogs" aria-label="Technical writing">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="eyebrow">Writing</div>
          <h2 className="section-title">Technical Writing</h2>
          <p className="text-[#8a8a8a] mt-4 max-w-xl leading-relaxed">
            Thoughts on security tooling, SIEM operations, AI infrastructure, and systems engineering.
          </p>
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal>
          <div className="mt-10 flex flex-wrap gap-2">
            {(["All", "Security", "AI/Engineering"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1 rounded text-[0.65rem] tracking-[.08em] uppercase transition-all duration-300 border ${
                  filter === f
                    ? "bg-gold text-black border-gold"
                    : "border-white/[.07] text-[#5a5a5a] hover:border-gold/40 hover:text-[#ede9e3]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-5 mt-12">
          {filteredPosts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={0.05 * i}>
              <Link
                href={`/blog/${post.slug}`}
                className="block bg-white/[.035] border border-white/[.07] rounded-xl p-6 transition-all duration-300 hover:border-gold/20 hover:-translate-y-1 group"
              >
                <div className="flex flex-wrap items-center gap-3 text-[0.65rem] sm:text-[0.6rem] text-[#5a5a5a] uppercase tracking-[.08em] mb-3">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime} read</span>
                  <span>·</span>
                  <span className={`px-2 py-0.5 rounded border ${tagColor(post.tag)}`}>
                    {post.tag}
                  </span>
                </div>
                <h3 className="font-display text-base font-bold mb-2 group-hover:text-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-[#8a8a8a] leading-relaxed">{post.excerpt}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
