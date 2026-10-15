import type { ReactNode } from "react";
import { Reveal } from "./reveal";

const benefits = [
  {
    title: "Brighter, even tone",
    copy: "Helps lighten and even skin tone by supporting the body’s melanin pathway from within.",
    icon: "✦",
  },
  {
    title: "Clearer-looking skin",
    copy: "Supports calmer skin and may help with acne, pimples, and the marks they leave behind.",
    icon: "◎",
  },
  {
    title: "Firmer feel",
    copy: "Supports collagen building blocks so skin can feel smoother and more elastic.",
    icon: "◆",
  },
  {
    title: "Under-eye care",
    copy: "Helps reduce the tired look of dark circles as antioxidant support reaches the surface.",
    icon: "◉",
  },
  {
    title: "Daily protection",
    copy: "Helps fight free radicals from sun, pollution, and stress — a master antioxidant.",
    icon: "⬡",
  },
  {
    title: "Whole-body support",
    copy: "Also listed for immune, anti-fatigue, cardio, and skin-comfort support.",
    icon: "✚",
  },
];

const formula = [
  {
    name: "Glutathione",
    amount: "500mg",
    role: "Master antioxidant. Helps guide pigment toward a lighter, more even look.",
    note: "Main active",
  },
  {
    name: "Alpha lipoic acid",
    amount: "40mg",
    role: "Supports glutathione’s antioxidant work inside the cells.",
    note: "Support active",
  },
  {
    name: "Sodium ascorbate",
    amount: "40mg",
    role: "Vitamin C form that helps absorption and protects cells from damage.",
    note: "Absorption help",
  },
  {
    name: "Collagen",
    amount: "40mg",
    role: "Supports firmness and bounce alongside glutathione’s skin benefits.",
    note: "Skin support",
  },
];

const steps = [
  {
    n: "01",
    title: "Starts under the surface",
    copy: "L-glutathione begins in the dermis, then moves outward to the visible skin layer.",
  },
  {
    n: "02",
    title: "Slows dark pigment",
    copy: "Reduced glutathione helps quiet tyrosinase — the enzyme that builds dark melanin.",
  },
  {
    n: "03",
    title: "Shifts toward lighter tone",
    copy: "Pigment moves from dark eumelanin toward lighter pheomelanin — gradually and evenly.",
  },
];

const journey = [
  { tone: "Medium brown skin", time: "1–3 months", detail: "Often the first visible shift" },
  { tone: "Dark brown skin", time: "3–6 months", detail: "Steady, even progress" },
  { tone: "Very dark skin", time: "6–12 months", detail: "Longer consistency needed" },
];

function SectionHead({
  kicker,
  title,
  lead,
  dark = false,
}: {
  kicker: string;
  title: ReactNode;
  lead?: string;
  dark?: boolean;
}) {
  return (
    <div className="section-head">
      <p className={`section-kicker ${dark ? "on-dark" : ""}`}>{kicker}</p>
      <h2 className={`section-title ${dark ? "on-dark" : ""}`}>{title}</h2>
      {lead ? (
        <p className={`section-lead ${dark ? "on-dark" : ""}`}>{lead}</p>
      ) : null}
    </div>
  );
}

export function Benefits() {
  return (
    <section id="benefits" className="scroll-mt-24 bg-white px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          kicker="Benefits"
          title="What Glossix is made to support"
          lead="Clear benefits from the product insert — written in simple language."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <Reveal
              key={item.title}
              className="rounded-2xl border border-[#d7e0ea] bg-[#f3f6fa] p-6 sm:p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0c2d5c] text-lg text-[#e8b84a]">
                {item.icon}
              </div>
              <h3 className="mt-4 text-xl font-extrabold tracking-tight text-[#152238]">
                {item.title}
              </h3>
              <p className="mt-2 text-[1.02rem] leading-7 text-[#3d4d63]">{item.copy}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6 grid gap-3 rounded-2xl bg-[#0c2d5c] p-5 text-white sm:grid-cols-3 sm:p-6">
          {[
            ["500mg", "Glutathione per capsule"],
            ["4 actives", "Complete complex"],
            ["2x daily", "Simple ritual"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-xl bg-white/10 px-4 py-4 text-center">
              <p className="text-2xl font-extrabold text-[#e8b84a]">{value}</p>
              <p className="mt-1 text-sm font-semibold text-white/90">{label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function Science() {
  const points = [
    {
      title: "Made in every cell",
      copy: "Glutathione (GSH) is built from three amino acids. The liver holds the highest amount.",
    },
    {
      title: "Helps nutrient use",
      copy: "It supports how the body uses nutrients and helps build the blocks of collagen.",
    },
    {
      title: "More than whitening",
      copy: "It also works as an antioxidant and anti-aging nutrient for everyday skin health.",
    },
  ];

  const knownFor = [
    "Immune support",
    "Anti-fatigue help",
    "Powerful antioxidant",
    "Skin comfort",
    "Anti-inflammatory",
    "Free-radical defense",
    "Collagen support",
    "Stress-load balance",
  ];

  return (
    <section id="science" className="scroll-mt-24 bg-white px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          kicker="Science"
          title="Why glutathione matters"
          lead="Glutathione is a natural protein in every cell. When levels drop, skin and recovery both feel it."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {points.map((point) => (
            <Reveal
              key={point.title}
              className="rounded-2xl border border-[#d7e0ea] bg-[#f3f6fa] p-6 transition hover:-translate-y-0.5 hover:border-[#1f8fc4]/35 hover:bg-white hover:shadow-[0_14px_32px_rgba(21,34,56,0.08)]"
            >
              <div className="mb-4 h-1.5 w-10 rounded-full bg-[#1f8fc4]" />
              <h3 className="text-lg font-extrabold text-[#152238]">{point.title}</h3>
              <p className="mt-2 text-[1.02rem] leading-7 text-[#3d4d63]">{point.copy}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-4 rounded-2xl bg-[#0c2d5c] p-6 text-white sm:p-7">
          <div className="grid gap-5 sm:grid-cols-[1.2fr_0.8fr] sm:items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.14em] text-[#7ecceb] uppercase">
                What people often notice
              </p>
              <p className="mt-2 text-xl font-extrabold tracking-tight sm:text-2xl">
                Taken by mouth, it may help with acne inflammation, excess oil,
                and stress load.
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 px-5 py-4 text-center">
              <p className="text-4xl font-extrabold text-[#e8b84a]">~30</p>
              <p className="mt-1 text-sm font-semibold text-white/90">
                days for many people to notice a difference
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-8">
          <h3 className="text-center text-lg font-extrabold text-[#152238]">
            Also known for
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {knownFor.map((item) => (
              <Reveal
                key={item}
                className="flex items-center gap-3 rounded-xl border border-[#d7e0ea] bg-[#f3f6fa] px-4 py-3.5 transition hover:border-[#1f8fc4]/40 hover:bg-white"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[#0c2d5c] text-xs font-extrabold text-[#e8b84a]">
                  ✓
                </span>
                <span className="text-[0.98rem] font-bold text-[#152238]">{item}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Formula() {
  return (
    <section id="formula" className="scroll-mt-24 bg-[#f3f6fa] px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          kicker="Formula"
          title="What’s inside each capsule"
          lead="Four actives. Clear amounts. Easy to explain to any client."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {formula.map((item) => (
            <Reveal
              key={item.name}
              className="group rounded-2xl border border-[#d7e0ea] bg-white p-6 shadow-[0_8px_24px_rgba(21,34,56,0.04)] transition hover:-translate-y-0.5 hover:border-[#1f8fc4]/35 hover:shadow-[0_16px_36px_rgba(21,34,56,0.1)] sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-bold tracking-[0.14em] text-[#1f8fc4] uppercase">
                    {item.note}
                  </p>
                  <h3 className="mt-1.5 text-2xl font-extrabold tracking-tight text-[#152238]">
                    {item.name}
                  </h3>
                </div>
                <span className="shrink-0 rounded-xl bg-[#0c2d5c] px-3.5 py-2 text-sm font-extrabold text-white">
                  {item.amount}
                </span>
              </div>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-[#d7e0ea] via-[#1f8fc4]/30 to-transparent" />
              <p className="mt-4 text-[1.02rem] leading-7 text-[#3d4d63]">{item.role}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-[#d7e0ea] bg-white px-5 py-4 text-sm font-semibold text-[#3d4d63]">
          <span className="rounded-lg bg-[#0c2d5c] px-3 py-1.5 font-extrabold text-white">
            Total focus
          </span>
          <span>500mg glutathione</span>
          <span className="hidden text-[#d7e0ea] sm:inline">•</span>
          <span>3 support actives at 40mg each</span>
          <span className="hidden text-[#d7e0ea] sm:inline">•</span>
          <span>One clear capsule story</span>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="bg-[#071829] px-5 py-16 text-white sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          kicker="How it works"
          title="From the inside, step by step"
          lead="Not overnight magic — a clear process that builds over time."
          dark
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {steps.map((step) => (
            <Reveal
              key={step.n}
              className="rounded-2xl border border-white/20 bg-white/10 p-6"
            >
              <p className="text-4xl font-extrabold text-[#e8b84a]">{step.n}</p>
              <h3 className="mt-3 text-xl font-extrabold text-white">{step.title}</h3>
              <p className="mt-3 text-[1.05rem] leading-7 text-white/92">{step.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Ritual() {
  return (
    <section id="ritual" className="scroll-mt-24 bg-[#f3f6fa] px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          kicker="How to use"
          title="Timeline and dosage"
          lead="Results depend on starting skin tone. Stay consistent, protect from sun, and follow the labelled dose."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-[#d7e0ea] bg-white p-6 sm:p-7">
            <h3 className="text-xl font-extrabold text-[#152238]">Expected timeline</h3>
            <ol className="mt-5 space-y-3">
              {journey.map((item, index) => (
                <li
                  key={item.tone}
                  className="rounded-xl border border-[#d7e0ea] bg-[#f3f6fa] px-4 py-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex items-center gap-3">
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#0c2d5c] text-sm font-extrabold text-white">
                        {index + 1}
                      </span>
                      <span>
                        <span className="block font-bold text-[#152238]">{item.tone}</span>
                        <span className="text-sm text-[#3d4d63]">{item.detail}</span>
                      </span>
                    </span>
                    <span className="shrink-0 rounded-md bg-white px-3 py-1.5 text-sm font-extrabold text-[#0c2d5c]">
                      {item.time}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-5 rounded-xl bg-[#e8f4fb] px-4 py-3 text-[0.98rem] leading-7 text-[#152238]">
              After you reach your goal tone, a maintenance capsule (with sun
              care) helps keep results.
            </p>
          </Reveal>

          <Reveal className="rounded-2xl bg-[#0c2d5c] p-6 text-white sm:p-7">
            <h3 className="text-xl font-extrabold">Recommended dosage</h3>
            <p className="mt-2 text-white/92">Take in two divided doses each day.</p>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl bg-white/12 p-5">
                <p className="text-sm font-extrabold tracking-wide text-[#e8b84a] uppercase">
                  Antioxidant / anti-aging
                </p>
                <p className="mt-2 text-[1.1rem] font-bold leading-7 text-white">
                  10–20 mg glutathione per kg body weight / day
                </p>
              </div>
              <div className="rounded-xl bg-white/12 p-5">
                <p className="text-sm font-extrabold tracking-wide text-[#e8b84a] uppercase">
                  Skin whitening support
                </p>
                <p className="mt-2 text-[1.1rem] font-bold leading-7 text-white">
                  20–40 mg glutathione per kg body weight / day
                </p>
              </div>
              <div className="rounded-xl border border-white/20 px-5 py-4 text-[0.98rem] leading-7 text-white/92">
                Example: Always follow the bottle label and your clinician’s
                advice for your body weight.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Facts() {
  return (
    <section className="scroll-mt-24 bg-white px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          kicker="Supplement facts"
          title="Average amount per capsule"
          lead="Quick reference for packaging, clinics, and client questions."
        />

        <div className="mx-auto mt-8 grid max-w-3xl gap-4">
          <div className="overflow-hidden rounded-2xl border border-[#d7e0ea]">
            {[
              ["Glutathione", "500mg"],
              ["Alpha lipoic acid", "40mg"],
              ["Sodium ascorbate", "40mg"],
              ["Collagen", "40mg"],
            ].map(([name, amount], i) => (
              <div
                key={name}
                className={`flex items-center justify-between px-5 py-5 ${
                  i % 2 === 0 ? "bg-[#f3f6fa]" : "bg-white"
                }`}
              >
                <span className="text-[1.08rem] font-bold text-[#152238]">{name}</span>
                <span className="text-xl font-extrabold text-[#0c2d5c]">{amount}</span>
              </div>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-[#d7e0ea] bg-[#f3f6fa] px-4 py-4">
              <p className="text-xs font-bold tracking-wide text-[#1f8fc4] uppercase">
                Manufacturer
              </p>
              <p className="mt-1 font-bold text-[#152238]">Inovics Healthcare</p>
              <p className="mt-1 text-sm leading-6 text-[#3d4d63]">
                Rawalpindi, Pakistan
              </p>
            </div>
            <div className="rounded-xl border border-[#d7e0ea] bg-[#f3f6fa] px-4 py-4">
              <p className="text-xs font-bold tracking-wide text-[#1f8fc4] uppercase">
                Licence
              </p>
              <p className="mt-1 font-bold text-[#152238]">PE 007337/0016</p>
              <p className="mt-1 text-sm leading-6 text-[#3d4d63]">
                M.L. No. 007337
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-[#d7e0ea] bg-[#f3f6fa] px-4 py-3 text-center text-sm font-semibold text-[#3d4d63]">
            30 capsules · Twice a day · Dietary supplement
          </div>
        </div>
      </div>
    </section>
  );
}
