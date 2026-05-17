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
        className="flex items-center justify-center w-11 h-11 cursor-pointer md:hidden bg-transparent border-none rounded-lg"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
      >
        <span className="flex flex-col gap-[5px]">
          <span
            className={`block w-[22px] h-[2px] bg-[#ede9e3] rounded-[2px] transition-all duration-300 ${
              open ? "rotate-45 translate-y-[5px] translate-x-[5px]" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-[#ede9e3] rounded-[2px] transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-[#ede9e3] rounded-[2px] transition-all duration-300 ${
              open ? "-rotate-45 translate-y-[-5px] translate-x-[5px]" : ""
            }`}
          />
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 top-[70px] bg-black/60 z-30 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <ul
        className={`md:flex md:items-center md:gap-[34px] ${
          open
            ? "fixed top-[70px] left-0 w-full bg-black/97 backdrop-blur-lg border-t border-white/[.07] p-6 flex flex-col gap-2 z-40"
            : "hidden"
        } md:static md:bg-transparent md:border-none md:p-0 md:flex-row md:gap-[34px]`}
      >
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="block w-full py-3 text-sm md:text-xs tracking-[.08em] uppercase text-[#5a5a5a] transition-colors duration-300 hover:text-[#ede9e3] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold after:transition-all after:duration-400 hover:after:w-full"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li className="mt-2">
          <a
            href="#contact"
            className="inline-flex items-center justify-center w-full py-3 px-[22px] border border-gold text-gold text-sm md:text-xs tracking-[.08em] uppercase rounded-[3px] transition-all duration-300 hover:bg-gold hover:text-black"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
