import Image from "next/image";
import {
  ArrowRightIcon,
  DropletIcon,
  LeafIcon,
  ShieldCheckIcon,
  SparkleIcon,
} from "./icons";

const features = [
  { label: "Brightens skin tone", Icon: SparkleIcon },
  { label: "Reduces dark spots", Icon: DropletIcon },
  { label: "Hydrates & nourishes", Icon: LeafIcon },
  { label: "Safe daily support", Icon: ShieldCheckIcon },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[min(100svh-4.5rem,640px)] overflow-hidden bg-[#f7fafc] sm:min-h-[min(100svh-4.5rem,720px)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/heroimage.jpg"
          alt=""
          fill
          preload
          unoptimized
          className="object-cover object-[78%_center] sm:object-[72%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/45 to-white/80 sm:from-transparent sm:via-transparent sm:to-transparent sm:bg-none" />
        <div className="absolute inset-y-0 left-0 hidden w-full max-w-2xl bg-gradient-to-r from-white/75 via-white/35 to-transparent sm:block lg:w-[52%]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-end px-4 py-8 sm:items-center sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="w-full max-w-xl rounded-2xl bg-white/90 p-4 shadow-[0_8px_40px_rgba(15,23,42,0.08)] sm:rounded-3xl sm:bg-white/70 sm:p-7 lg:bg-transparent lg:p-0 lg:shadow-none">
          <div className="inline-flex max-w-full rounded-full bg-[#fef3c7] px-3 py-1.5 text-[10px] font-extrabold tracking-[0.08em] text-[#92400e] uppercase shadow-sm sm:px-3.5 sm:text-[11px] sm:tracking-[0.1em]">
            Visibly brighter skin in weeks
          </div>

          <h1 className="mt-4 text-[clamp(2rem,8vw,3.9rem)] leading-[1.08] font-extrabold tracking-[-0.03em] text-[#1e1b4b] sm:mt-5">
            Your Natural Glow,{" "}
            <span className="bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] bg-clip-text text-transparent">
              Reimagined
            </span>
          </h1>

          <p className="mt-3 max-w-md text-[0.95rem] leading-7 text-[#334155] sm:mt-4 sm:text-[1.02rem]">
            Glossix glutathione complex with collagen and vitamin C — expert
            nutrition for a clearer, calmer, brighter-looking glow from within.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-3.5 sm:mt-7 sm:grid-cols-4 sm:gap-x-4 sm:gap-y-4">
            {features.map(({ label, Icon }) => (
              <div key={label} className="flex flex-col items-start gap-1.5 sm:gap-2">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#7c3aed] shadow-md ring-1 ring-[#e2e8f0] sm:h-11 sm:w-11">
                  <Icon size={17} />
                </span>
                <p className="text-[10px] leading-snug font-bold text-[#334155] sm:text-[11px]">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href="#order"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_12px_28px_rgba(79,70,229,0.35)] transition hover:-translate-y-0.5 hover:brightness-105 sm:w-auto"
            >
              Shop Now
              <ArrowRightIcon size={16} />
            </a>
            <div className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-[#475569] shadow-sm ring-1 ring-[#e2e8f0] sm:w-auto sm:justify-start sm:text-sm">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#ede9fe] text-[#7c3aed]">
                <ShieldCheckIcon size={14} />
              </span>
              100% Money Back Guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
