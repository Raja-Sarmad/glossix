import Image from "next/image";

const highlights = [
  "Helps brighten and even skin tone from within",
  "Supports clearer-looking, calmer skin",
  "500mg glutathione with collagen & vitamin C",
  "Simple 2× daily ritual — 30 capsules",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#f3f8fc]" />
        <div className="absolute inset-y-0 right-0 w-full bg-[linear-gradient(105deg,#f3f8fc_0%,#f3f8fc_50%,#e4f1f9_50%,#d8ebf6_100%)] lg:w-auto lg:left-[50%]" />
        <div className="absolute top-0 right-0 h-[70%] w-[55%] bg-[radial-gradient(ellipse_at_70%_30%,rgba(42,155,199,0.22),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 h-[40%] w-[40%] bg-[radial-gradient(ellipse_at_20%_90%,rgba(201,162,39,0.12),transparent_60%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-14">
        {/* LEFT — story + content */}
        <div className="order-2 lg:order-1">
          <div className="hero-in d1 inline-flex items-center gap-2 rounded-full border border-[#c9a227]/35 bg-white px-3.5 py-1.5 text-[11px] font-bold tracking-[0.14em] text-[#0a2756] uppercase shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c9a227]" />
            Inovics Healthcare · Premium formula
          </div>

          <h1 className="hero-in d2 brand-mark mt-4 text-[clamp(3rem,6.5vw,4.6rem)] leading-[0.98] text-[#0a2756]">
            Glossix
          </h1>

          <p className="hero-in d3 mt-3 text-[clamp(1.25rem,2.5vw,1.6rem)] font-semibold tracking-[-0.02em] text-[#314860]">
            Brighter skin,{" "}
            <span className="gold-text">from within.</span>
          </p>

          <p className="hero-in d3 mt-4 max-w-lg text-[1.05rem] leading-7 text-[#4a5d75]">
            A glutathione complex made to support a clearer, more even glow —
            with collagen and vitamin C for everyday skin nutrition your clients
            can understand.
          </p>

          <ul className="hero-in d4 mt-6 max-w-lg space-y-2.5">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[0.98rem] font-medium text-[#24384f]"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#0a2756] text-[10px] font-extrabold text-[#e4c15a]">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="hero-in d4 mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#benefits"
              className="rounded-full bg-gradient-to-b from-[#e4c15a] to-[#c9a227] px-7 py-3.5 text-sm font-extrabold text-[#061a38] shadow-[0_12px_28px_rgba(201,162,39,0.32)] transition hover:-translate-y-0.5 hover:brightness-105"
            >
              Explore benefits
            </a>
            <a
              href="#formula"
              className="rounded-full border border-[#0a2756]/15 bg-white px-7 py-3.5 text-sm font-extrabold text-[#0a2756] shadow-sm transition hover:border-[#2a9bc7]/40"
            >
              View formula
            </a>
          </div>

          <div className="hero-in d4 mt-7 grid max-w-lg grid-cols-3 gap-2">
            {[
              ["500mg", "Glutathione"],
              ["4", "Actives"],
              ["2×", "Daily"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-xl border border-[#c9d8e6] bg-white/90 px-2 py-3 text-center shadow-sm"
              >
                <p className="text-lg font-extrabold text-[#0a2756] sm:text-xl">
                  {value}
                </p>
                <p className="mt-0.5 text-[10px] font-semibold tracking-wide text-[#4a5d75] uppercase sm:text-[11px]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — product home */}
        <div className="order-1 lg:order-2">
          <div className="hero-in d2 relative mx-auto w-full max-w-[420px] lg:max-w-[440px]">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#0a2756] via-[#0d356e] to-[#143f7a] px-5 pt-8 pb-6 shadow-[0_30px_70px_rgba(10,39,86,0.28)] sm:px-7 sm:pt-10 sm:pb-7">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_35%,rgba(80,180,230,0.35),transparent_65%)]" />
              <div className="pointer-events-none absolute -top-10 right-[-10%] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(228,193,90,0.2),transparent_70%)]" />

              <div className="relative z-10 text-center">
                <p className="text-[11px] font-bold tracking-[0.18em] text-[#e4c15a] uppercase">
                  Skin whitening support
                </p>
                <p className="mt-1 text-sm font-semibold text-white/80">
                  Bottle + box · ready for clients
                </p>
              </div>

              <div className="relative z-10 mx-auto mt-4 w-[85%] max-w-[300px]">
                <Image
                  src="/glossix.png"
                  alt="Glossix bottle and box — 30 capsules"
                  width={1251}
                  height={1091}
                  preload
                  loading="eager"
                  unoptimized
                  className="animate-float relative mx-auto h-auto w-full drop-shadow-[0_24px_40px_rgba(0,0,0,0.35)]"
                />
              </div>

              <div className="relative z-10 mt-5 grid grid-cols-2 gap-2">
                <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
                  <p className="text-sm font-extrabold text-white">30 capsules</p>
                  <p className="mt-0.5 text-[11px] font-medium text-white/70">
                    Full pack size
                  </p>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
                  <p className="text-sm font-extrabold text-[#e4c15a]">
                    Premium quality
                  </p>
                  <p className="mt-0.5 text-[11px] font-medium text-white/70">
                    Clinician-ready story
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
