"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#timeline", label: "Journey" },
  { href: "#blogs", label: "Blogs" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[70px] flex items-center justify-between px-6 md:px-12 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/93 border-b border-white/[.07] backdrop-blur-lg" : ""
      }`}
    >
<Link href="/" className="font-display text-xl font-extrabold tracking-tight">
    SK<span className="text-gold">.</span>
  </Link>

      <button
        className="flex items-center justify-center w-12 h-12 cursor-pointer md:hidden bg-transparent border-none rounded-lg hover:bg-white/[.05] transition-colors"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
      >
        <span className="flex flex-col gap-1.5">
          <span
            className={`block w-6 h-0.5 bg-[#ede9e3] rounded transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#ede9e3] rounded transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#ede9e3] rounded transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </span>
      </button>

      <div
        className={`fixed inset-0 top-[70px] bg-black/60 z-30 md:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <ul
        className={`flex flex-col md:flex-row md:items-center gap-2 md:gap-[34px] fixed md:static top-[70px] md:top-auto left-0 md:left-auto w-full md:w-auto bg-black/97 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none border-t md:border-none border-white/[.07] p-6 md:p-0 transition-all duration-300 ease-in-out z-40 ${
          open
            ? "opacity-100 translate-y-0 visible pointer-events-auto"
            : "opacity-0 -translate-y-4 invisible pointer-events-none md:opacity-100 md:translate-y-0 md:visible md:pointer-events-auto"
        }`}
      >
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="block w-full py-3.5 md:py-2 text-sm md:text-xs tracking-[.08em] uppercase text-[#5a5a5a] transition-colors duration-300 hover:text-[#ede9e3] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold after:transition-all after:duration-400 hover:after:w-full"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li className="mt-4 md:mt-0">
          <a
            href="#contact"
            className="block py-3.5 md:py-3 px-6 md:px-5 border border-gold text-gold text-sm md:text-xs tracking-[.08em] uppercase rounded-[3px] transition-all duration-300 hover:bg-gold hover:text-black text-center"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
