import { FacebookIcon, InstagramIcon, LeafIcon } from "./icons";

const links = [
  { href: "#top", label: "Home" },
  { href: "#benefits", label: "Benefits" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#e2e8f0] bg-white px-4 pt-8 pb-6 sm:px-6 sm:pt-10 sm:pb-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 text-center md:flex-row md:items-center md:justify-between md:gap-6 md:text-left">
        <a href="#top" className="inline-flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] text-white">
            <LeafIcon size={18} />
          </span>
          <span className="text-left">
            <span className="block text-lg font-extrabold text-[#1e1b4b]">
              Glossix
            </span>
            <span className="text-[11px] font-medium text-[#64748b]">
              Brighter Skin. From Within.
            </span>
          </span>
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#475569] hover:text-[#7c3aed]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://www.inovicshealthcare.com"
            target="_blank"
            rel="noreferrer"
            className="grid h-9 w-9 place-items-center rounded-full bg-[#eef2ff] text-[#7c3aed]"
            aria-label="Instagram"
          >
            <InstagramIcon size={16} />
          </a>
          <a
            href="https://www.inovicshealthcare.com"
            target="_blank"
            rel="noreferrer"
            className="grid h-9 w-9 place-items-center rounded-full bg-[#eef2ff] text-[#7c3aed]"
            aria-label="Facebook"
          >
            <FacebookIcon size={16} />
          </a>
          <p className="text-xs text-[#94a3b8]">© 2026 Glossix</p>
        </div>
      </div>
      <p className="mx-auto mt-5 max-w-7xl px-1 text-center text-[10px] leading-5 text-[#94a3b8] sm:mt-6 sm:text-[11px] sm:leading-normal">
        Dietary supplement. Not intended to diagnose, cure, treat, or prevent any
        disease. Replace placeholder photos in /public/images anytime.
      </p>
    </footer>
  );
}
