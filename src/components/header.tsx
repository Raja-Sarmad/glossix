"use client";

import { useEffect, useState } from "react";
import { CartIcon, LeafIcon } from "./icons";

const links = [
  { href: "#top", label: "Home" },
  { href: "#benefits", label: "Benefits" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

const activeClass =
  "text-[#7c3aed] underline decoration-[#7c3aed] decoration-2 underline-offset-8";
const idleClass = "text-[#475569] hover:text-[#7c3aed]";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#top");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.slice(1));

    const update = () => {
      setScrolled(window.scrollY > 8);

      const offset = 120;
      let current = "#top";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) {
          current = `#${id}`;
        }
      }
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("hashchange", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("hashchange", update);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-[#e2e8f0] bg-white/95 shadow-sm backdrop-blur-xl"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-4 sm:h-[4.5rem] sm:gap-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-2.5">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] text-white sm:h-9 sm:w-9">
            <LeafIcon size={16} />
          </span>
          <span className="min-w-0">
            <span className="block text-base leading-none font-extrabold tracking-tight text-[#1e1b4b] sm:text-[1.15rem]">
              Glossix
            </span>
            <span className="mt-0.5 hidden text-[10px] font-medium text-[#64748b] sm:block">
              Brighter Skin. From Within.
            </span>
          </span>
        </a>

        <nav className="mx-auto hidden items-center gap-4 xl:gap-7 lg:flex">
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`whitespace-nowrap text-sm font-semibold transition ${isActive ? activeClass : idleClass}`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-2.5 lg:ml-0">
          <a
            href="#order"
            className="relative grid h-9 w-9 place-items-center rounded-full border border-[#e2e8f0] bg-white text-[#1e1b4b] sm:h-10 sm:w-10"
            aria-label="Cart"
          >
            <CartIcon size={17} />
            <span className="absolute -top-1 -right-1 grid h-4 min-w-4 place-items-center rounded-full bg-[#7c3aed] px-1 text-[10px] font-bold text-white">
              1
            </span>
          </a>
          <a
            href="#order"
            className="hidden rounded-full bg-[#1e1b4b] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#312e81] sm:inline-flex sm:px-5"
          >
            Order Now
          </a>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-xl border border-[#e2e8f0] bg-white sm:h-10 sm:w-10 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex w-[18px] flex-col gap-[5px]">
              <span className={`h-[2px] bg-[#1e1b4b] transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-[2px] bg-[#1e1b4b] transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-[2px] bg-[#1e1b4b] transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-[#e2e8f0] bg-white px-4 py-4 sm:px-6 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActive(link.href);
                    setOpen(false);
                  }}
                  className={`rounded-xl px-3 py-3 text-base font-bold transition ${
                    isActive
                      ? "bg-[#eef2ff] text-[#7c3aed]"
                      : "text-[#1e1b4b] hover:bg-[#eef2ff]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#order"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#1e1b4b] px-5 py-3 text-sm font-bold text-white"
            >
              Order Now
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
