import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#071829] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-glow absolute top-[-8%] left-[-8%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(31,143,196,0.28),transparent_65%)]" />
        <div className="animate-glow absolute right-[-6%] bottom-[-8%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(232,184,74,0.18),transparent_65%)] [animation-delay:1s]" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100svh-4.25rem)] max-w-6xl items-center gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-16">
        <div className="text-center lg:text-left">
          <p className="hero-in d1 text-sm font-bold tracking-[0.08em] text-[#7ecceb] uppercase">
            Dietary supplement · 30 capsules
          </p>

          <h1 className="hero-in d2 mt-4 text-[clamp(2.6rem,5.5vw,4.4rem)] leading-[1.08] font-extrabold tracking-[-0.03em] text-white">
            Glossix
            <span className="mt-2 block text-[clamp(1.55rem,3vw,2.35rem)] font-bold text-[#e8b84a]">
              Glow that starts from within
            </span>
          </h1>

          <div className="hero-in d3 relative mx-auto mt-8 max-w-[220px] lg:hidden">
            <Image
              src="/product.png"
              alt="Glossix bottle and box"
              width={570}
              height={606}
              preload
              loading="eager"
              unoptimized
              className="animate-float relative h-auto w-full"
            />
          </div>

          <p className="hero-in d3 mx-auto mt-6 max-w-lg text-[1.08rem] leading-8 text-white/92 lg:mx-0">
            A glutathione complex with collagen and vitamin C. Made to support
            brighter, calmer skin — clearly explained for you and your client.
          </p>

          <div className="hero-in d4 mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="#benefits"
              className="rounded-lg bg-[#e8b84a] px-6 py-3.5 text-[0.95rem] font-bold text-[#071829] transition hover:bg-[#f3d06a]"
            >
              See benefits
            </a>
            <a
              href="#ritual"
              className="rounded-lg border-2 border-white/40 px-6 py-3.5 text-[0.95rem] font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              How to take it
            </a>
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-md lg:block">
          <div className="animate-glow absolute top-1/2 left-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(31,143,196,0.3),transparent_68%)]" />
          <div className="animate-float relative">
            <Image
              src="/product.png"
              alt="Glossix bottle and box — 30 capsules"
              width={570}
              height={606}
              preload
              loading="eager"
              unoptimized
              className="relative mx-auto h-auto w-[82%] drop-shadow-[0_28px_55px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
