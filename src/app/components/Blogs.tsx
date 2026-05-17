"use client"

import ScrollReveal from "./ScrollReveal"
import { blogPosts } from "@/app/data/blogs"

export default function Blogs() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12" id="blogs" aria-label="Technical writing">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="eyebrow">Writing</div>
          <h2 className="section-title">Technical Writing</h2>
          <p className="text-[#8a8a8a] mt-4 max-w-xl leading-relaxed">
            Thoughts on AI infrastructure, security tooling, and systems engineering.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-5 mt-12">
          {blogPosts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={0.05 * i}>
              <a
                href="#"
                className="block bg-white/[.035] border border-white/[.07] rounded-xl p-6 transition-all duration-300 hover:border-gold/20 hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-3 text-[0.65rem] sm:text-[0.6rem] text-[#5a5a5a] uppercase tracking-[.08em] mb-3">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime} read</span>
                </div>
                <h3 className="font-display text-base font-bold mb-2 group-hover:text-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-[#8a8a8a] leading-relaxed">{post.excerpt}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
