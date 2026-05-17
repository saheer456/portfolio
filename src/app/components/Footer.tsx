export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 md:px-12 border-t border-white/[.07] flex flex-col md:flex-row items-center justify-between gap-4 text-center">
      <div className="font-display text-xl font-extrabold">
        SK<span className="text-gold">.</span>
      </div>
      <p className="text-xs text-[#5a5a5a]">
        &copy; {year} Saheer Khan &nbsp;·&nbsp; Bangalore, India
      </p>
      <div className="flex items-center gap-3">
        {[
          { href: "https://www.linkedin.com/in/saheer-khan-900b9a26a", label: "LinkedIn", icon: "fa-brands fa-linkedin-in" },
          { href: "https://github.com/saheer456", label: "GitHub", icon: "fa-brands fa-github" },
          { href: "mailto:khansaheer424@gmail.com", label: "Email", icon: "fa-regular fa-envelope" },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="w-10 h-10 md:w-9 md:h-9 border border-white/[.07] rounded-lg flex items-center justify-center text-sm text-[#5a5a5a] transition-all duration-300 hover:border-gold hover:text-gold hover:-translate-y-1"
          >
            <i className={s.icon} />
          </a>
        ))}
      </div>
    </footer>
  )
}
