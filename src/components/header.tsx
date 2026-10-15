"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#benefits", id: "benefits", label: "Benefits" },
  { href: "#science", id: "science", label: "Science" },
  { href: "#formula", id: "formula", label: "Formula" },
  { href: "#ritual", id: "ritual", label: "How to use" },
  { href: "#faq", id: "faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? "border-[#d7e0ea] bg-white/95 shadow-[0_10px_30px_rgba(21,34,56,0.08)] backdrop-blur-xl"
          : "border-[#d7e0ea]/70 bg-[#f7fbfe]/85 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center gap-4 px-4 sm:px-8">
        <a href="#top" className="group flex shrink-0 items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#0c2d5c] text-[11px] font-extrabold tracking-[0.12em] text-white transition group-hover:bg-[#071829]">
            GX
          </span>
          <span className="text-[1.15rem] font-extrabold tracking-tight text-[#0c2d5c]">
            Glossix
          </span>
        </a>

        <nav className="mx-auto hidden items-center gap-1 rounded-full bg-white/80 p-1 shadow-sm ring-1 ring-[#d7e0ea] lg:flex">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-[#0c2d5c] text-white shadow-sm"
                    : "text-[#3d4d63] hover:bg-[#f3f6fa] hover:text-[#0c2d5c]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <a
            href="#formula"
            className="hidden rounded-full bg-[#0c2d5c] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#071829] sm:inline-flex"
          >
            See formula
          </a>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-[#d7e0ea] bg-white text-[#152238] transition hover:bg-[#f3f6fa] lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="flex w-[18px] flex-col gap-[5px]">
              <span
                className={`h-[2px] w-full rounded-full bg-[#152238] transition ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-full rounded-full bg-[#152238] transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[2px] w-full rounded-full bg-[#152238] transition ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[#d7e0ea] bg-white px-4 py-5 lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-2">
            {links.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-base font-bold transition ${
                    isActive
                      ? "bg-[#f3f6fa] text-[#0c2d5c]"
                      : "text-[#152238] hover:bg-[#f3f6fa]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#formula"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-[#0c2d5c] px-4 py-3 text-center text-sm font-bold text-white"
            >
              See formula
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
