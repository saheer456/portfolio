"use client"

import ScrollReveal from "./ScrollReveal"

export default function Contact() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12" id="contact" aria-label="Contact">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow justify-center">Contact</div>
            <h2 className="section-title text-center">Let&apos;s work together.</h2>
            <p className="text-[#8a8a8a] mt-4 leading-relaxed">
              Open to internships, freelance projects, or just a good conversation about tech. Based in Bangalore, India.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto mt-12">
          {[
            { href: "mailto:khansaheer424@gmail.com", icon: "fa-regular fa-envelope", title: "Email", subtitle: "khansaheer424@gmail.com" },
            { href: "tel:+919778550480", icon: "fa-solid fa-phone", title: "Phone", subtitle: "+91 97785 50480" },
            { href: "https://www.linkedin.com/in/saheer-khan-900b9a26a", icon: "fa-brands fa-linkedin-in", title: "LinkedIn", subtitle: "Connect with me" },
            { href: "https://github.com/saheer456", icon: "fa-brands fa-github", title: "GitHub", subtitle: "View my code" },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={0.08 * i}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block bg-white/[.035] border border-white/[.07] rounded-xl p-5 sm:p-6 text-center transition-all duration-400 hover:border-gold/30 hover:-translate-y-1.5 hover:bg-gold-dim group min-h-[200px] sm:min-h-[180px] flex flex-col items-center justify-center"
              >
                <div className="w-11 h-11 bg-gold-dim rounded-lg flex items-center justify-center text-gold text-base mx-auto mb-3 transition-all duration-300 group-hover:bg-gold group-hover:text-black flex-shrink-0">
                  <i className={item.icon} />
                </div>
                <h3 className="font-display text-sm font-bold">{item.title}</h3>
                <p className="text-[0.7rem] text-[#5a5a5a] mt-2 leading-relaxed">{item.subtitle}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
