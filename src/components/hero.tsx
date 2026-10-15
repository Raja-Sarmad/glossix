import Image from "next/image";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#eef6fc] text-[#152238]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_75%_30%,rgba(31,143,196,0.22),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_10%_85%,rgba(232,184,74,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#f7fbfe_0%,#e8f3fb_45%,#f3f7fb_100%)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:px-8 lg:min-h-[calc(100svh-4.25rem)] lg:grid-cols-2 lg:gap-12 lg:py-16">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <div className="hero-in d1 inline-flex items-center gap-2 rounded-full border border-[#1f8fc4]/25 bg-white/80 px-3.5 py-1.5 text-[12px] font-bold tracking-[0.12em] text-[#0c2d5c] uppercase shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e8b84a]" />
            Dietary supplement · 30 capsules
          </div>

          <h1 className="hero-in d2 mt-5 text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.1] font-extrabold tracking-[-0.035em] text-[#0c2d5c]">
            Brighter skin,
            <br />
            <span className="text-[#c9952e]">from within.</span>
          </h1>

          <p className="hero-in d3 mx-auto mt-5 max-w-md text-[1.08rem] leading-8 text-[#3d4d63] lg:mx-0">
            Glossix is a glutathione complex with collagen and vitamin C —
            expert nutrition for a clearer, calmer glow.
          </p>

          <div className="hero-in d4 mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="#benefits"
              className="rounded-full bg-[#0c2d5c] px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_12px_28px_rgba(12,45,92,0.22)] transition hover:-translate-y-0.5 hover:bg-[#071829]"
            >
              See benefits
            </a>
            <a
              href="#formula"
              className="rounded-full border border-[#0c2d5c]/15 bg-white px-7 py-3.5 text-sm font-extrabold text-[#0c2d5c] shadow-sm transition hover:border-[#1f8fc4]/40 hover:bg-[#f7fbfe]"
            >
              See formula
            </a>
          </div>

          <div className="hero-in d4 mt-9 grid grid-cols-3 gap-2 border-t border-[#0c2d5c]/10 pt-7 sm:max-w-md sm:gap-3 lg:max-w-none">
            {[
              ["500mg", "Glutathione"],
              ["4", "Actives"],
              ["2x", "Daily"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-[#d7e0ea] bg-white px-2 py-3 text-center shadow-sm sm:px-3"
              >
                <p className="text-xl font-extrabold text-[#0c2d5c] sm:text-2xl">
                  {value}
                </p>
                <p className="mt-0.5 text-[11px] font-semibold tracking-wide text-[#3d4d63] uppercase sm:text-xs">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-in d3 order-1 lg:order-2">
          <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px]">
            <div className="animate-glow absolute top-1/2 left-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(31,143,196,0.28),transparent_68%)]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white/90 p-6 shadow-[0_24px_60px_rgba(12,45,92,0.12)] sm:p-8">
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#e8f3fb] to-transparent" />
              <Image
                src="/product.png"
                alt="Glossix bottle and box — 30 capsules"
                width={570}
                height={606}
                preload
                loading="eager"
                unoptimized
                className="animate-float relative mx-auto h-auto w-[88%] drop-shadow-[0_18px_35px_rgba(12,45,92,0.18)]"
              />
              <div className="relative mt-4 flex items-center justify-between gap-3 rounded-xl bg-[#f3f6fa] px-3 py-2.5">
                <p className="text-sm font-bold text-[#0c2d5c]">Glossix</p>
                <p className="text-xs font-semibold text-[#1f8fc4]">
                  Skin whitening support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
