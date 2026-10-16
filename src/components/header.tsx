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
          ? "border-[#c9d8e6]/90 bg-white/92 shadow-[0_10px_30px_rgba(10,39,86,0.07)] backdrop-blur-xl"
          : "border-transparent bg-[#f3f8fc]/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="group flex shrink-0 items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#0a2756] to-[#143a72] text-[11px] font-extrabold tracking-[0.12em] text-[#e4c15a] shadow-[0_6px_16px_rgba(10,39,86,0.25)] transition group-hover:brightness-110">
            GX
          </span>
          <span className="brand-mark text-[1.35rem] text-[#0a2756]">
            Glossix
          </span>
        </a>

        <nav className="mx-auto hidden items-center gap-1 rounded-full bg-white/80 p-1 shadow-[0_4px_20px_rgba(10,39,86,0.06)] ring-1 ring-[#c9d8e6]/80 backdrop-blur-sm lg:flex">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-[#0a2756] text-white shadow-sm"
                    : "text-[#4a5d75] hover:bg-[#eaf3f8] hover:text-[#0a2756]"
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
            className="hidden rounded-full bg-gradient-to-b from-[#e4c15a] to-[#c9a227] px-5 py-2.5 text-sm font-bold text-[#061a38] shadow-[0_8px_20px_rgba(201,162,39,0.28)] transition hover:brightness-105 sm:inline-flex"
          >
            See formula
          </a>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-[#c9d8e6] bg-white/80 text-[#13233f] transition hover:bg-white lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="flex w-[18px] flex-col gap-[5px]">
              <span
                className={`h-[2px] w-full rounded-full bg-[#13233f] transition ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-full rounded-full bg-[#13233f] transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[2px] w-full rounded-full bg-[#13233f] transition ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[#c9d8e6] bg-white/95 px-4 py-5 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-base font-bold transition ${
                    isActive
                      ? "bg-[#eaf3f8] text-[#0a2756]"
                      : "text-[#13233f] hover:bg-[#eaf3f8]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#formula"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-gradient-to-b from-[#e4c15a] to-[#c9a227] px-4 py-3 text-center text-sm font-bold text-[#061a38]"
            >
              See formula
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
