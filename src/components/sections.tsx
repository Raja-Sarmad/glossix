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
    <section
      id="benefits"
      className="scroll-mt-24 bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <SectionHead
          kicker="Benefits"
          title="What Glossix is made to support"
          lead="Clear benefits from the product insert — written in simple language."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <Reveal
              key={item.title}
              className="rounded-2xl border border-[#c9d8e6]/80 bg-gradient-to-b from-[#f7fbfd] to-white p-5 shadow-[0_8px_28px_rgba(10,39,86,0.04)] transition hover:-translate-y-0.5 hover:border-[#2a9bc7]/30 hover:shadow-[0_16px_36px_rgba(10,39,86,0.08)] sm:p-6"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0a2756] to-[#143a72] text-base text-[#e4c15a] shadow-[0_6px_16px_rgba(10,39,86,0.2)]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-extrabold tracking-tight text-[#0a2756]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[0.98rem] leading-6 text-[#4a5d75]">
                    {item.copy}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="grid gap-3 rounded-2xl bg-gradient-to-br from-[#0a2756] via-[#0d3168] to-[#143a72] p-4 text-white shadow-[0_20px_50px_rgba(10,39,86,0.25)] sm:grid-cols-3 sm:p-5">
          {[
            ["500mg", "Glutathione per capsule"],
            ["4 actives", "Complete complex"],
            ["2x daily", "Simple ritual"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-xl border border-white/10 bg-white/10 px-4 py-3.5 text-center backdrop-blur-sm"
            >
              <p className="text-2xl font-extrabold text-[#e4c15a]">{value}</p>
              <p className="mt-0.5 text-sm font-semibold text-white/90">{label}</p>
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
    <section
      id="science"
      className="scroll-mt-24 bg-[#eaf3f8] px-4 py-12 sm:px-6 sm:py-14 lg:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <SectionHead
          kicker="Science"
          title="Why glutathione matters"
          lead="Glutathione is a natural protein in every cell. When levels drop, skin and recovery both feel it."
        />

        <div className="grid gap-3 sm:grid-cols-3">
          {points.map((point) => (
            <Reveal
              key={point.title}
              className="rounded-2xl border border-white bg-white p-5 shadow-[0_8px_28px_rgba(10,39,86,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(10,39,86,0.1)]"
            >
              <div className="mb-3 h-1.5 w-10 rounded-full bg-gradient-to-r from-[#2a9bc7] to-[#e4c15a]" />
              <h3 className="text-lg font-extrabold text-[#0a2756]">
                {point.title}
              </h3>
              <p className="mt-1.5 text-[0.98rem] leading-6 text-[#4a5d75]">
                {point.copy}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="rounded-2xl bg-gradient-to-br from-[#0a2756] to-[#143a72] p-5 text-white shadow-[0_20px_50px_rgba(10,39,86,0.22)] sm:p-6">
          <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr] sm:items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.14em] text-[#7ecceb] uppercase">
                What people often notice
              </p>
              <p className="mt-1.5 text-lg font-extrabold tracking-tight sm:text-xl">
                Taken by mouth, it may help with acne inflammation, excess oil,
                and stress load.
              </p>
            </div>
            <div className="rounded-2xl border border-[#e4c15a]/25 bg-white/10 px-5 py-4 text-center">
              <p className="text-4xl font-extrabold text-[#e4c15a]">~30</p>
              <p className="mt-0.5 text-sm font-semibold text-white/90">
                days for many people to notice a difference
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <h3 className="text-center text-base font-extrabold text-[#0a2756]">
            Also known for
          </h3>
          <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {knownFor.map((item) => (
              <Reveal
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white bg-white/80 px-3.5 py-3 shadow-sm transition hover:border-[#2a9bc7]/35 hover:shadow-md"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[#0a2756] text-xs font-extrabold text-[#e4c15a]">
                  ✓
                </span>
                <span className="text-[0.95rem] font-bold text-[#13233f]">
                  {item}
                </span>
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
    <section
      id="formula"
      className="scroll-mt-24 bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <SectionHead
          kicker="Formula"
          title="What’s inside each capsule"
          lead="Four actives. Clear amounts. Easy to explain to any client."
        />

        <div className="grid gap-3 sm:grid-cols-2">
          {formula.map((item) => (
            <Reveal
              key={item.name}
              className="group rounded-2xl border border-[#c9d8e6]/80 bg-gradient-to-br from-white to-[#f0f7fb] p-5 shadow-[0_8px_28px_rgba(10,39,86,0.04)] transition hover:-translate-y-0.5 hover:border-[#c9a227]/40 hover:shadow-[0_16px_36px_rgba(10,39,86,0.1)] sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-bold tracking-[0.14em] text-[#2a9bc7] uppercase">
                    {item.note}
                  </p>
                  <h3 className="mt-1 text-xl font-extrabold tracking-tight text-[#0a2756]">
                    {item.name}
                  </h3>
                </div>
                <span className="shrink-0 rounded-xl bg-gradient-to-b from-[#e4c15a] to-[#c9a227] px-3.5 py-2 text-sm font-extrabold text-[#061a38] shadow-[0_6px_14px_rgba(201,162,39,0.3)]">
                  {item.amount}
                </span>
              </div>
              <div className="mt-3 h-px w-full bg-gradient-to-r from-[#c9d8e6] via-[#2a9bc7]/40 to-transparent" />
              <p className="mt-3 text-[0.98rem] leading-6 text-[#4a5d75]">
                {item.role}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-[#c9d8e6] bg-[#eaf3f8] px-5 py-3.5 text-sm font-semibold text-[#4a5d75]">
          <span className="rounded-lg bg-[#0a2756] px-3 py-1.5 font-extrabold text-[#e4c15a]">
            Total focus
          </span>
          <span>500mg glutathione</span>
          <span className="hidden text-[#c9d8e6] sm:inline">•</span>
          <span>3 support actives at 40mg each</span>
          <span className="hidden text-[#c9d8e6] sm:inline">•</span>
          <span>One clear capsule story</span>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="relative overflow-hidden px-4 py-12 text-white sm:px-6 sm:py-14 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,#061a38_0%,#0a2756_45%,#0f3a6e_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,rgba(42,155,199,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_10%_90%,rgba(228,193,90,0.12),transparent_55%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-6">
        <SectionHead
          kicker="How it works"
          title="From the inside, step by step"
          lead="Not overnight magic — a clear process that builds over time."
          dark
        />

        <div className="grid gap-3 lg:grid-cols-3">
          {steps.map((step) => (
            <Reveal
              key={step.n}
              className="rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur-sm transition hover:bg-white/12"
            >
              <div className="flex items-baseline gap-3">
                <p className="text-3xl font-extrabold text-[#e4c15a]">{step.n}</p>
                <h3 className="text-lg font-extrabold text-white">{step.title}</h3>
              </div>
              <p className="mt-2.5 text-[0.98rem] leading-6 text-white/90">
                {step.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Ritual() {
  return (
    <section
      id="ritual"
      className="scroll-mt-24 bg-[#f0f7fb] px-4 py-12 sm:px-6 sm:py-14 lg:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <SectionHead
          kicker="How to use"
          title="Timeline and dosage"
          lead="Results depend on starting skin tone. Stay consistent, protect from sun, and follow the labelled dose."
        />

        <div className="grid gap-3 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-[#c9d8e6]/80 bg-white p-5 shadow-[0_8px_28px_rgba(10,39,86,0.05)] sm:p-6">
            <h3 className="text-lg font-extrabold text-[#0a2756]">
              Expected timeline
            </h3>
            <ol className="mt-4 space-y-2.5">
              {journey.map((item, index) => (
                <li
                  key={item.tone}
                  className="rounded-xl border border-[#eaf3f8] bg-[#f7fbfd] px-3.5 py-3.5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex items-center gap-3">
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#0a2756] text-sm font-extrabold text-[#e4c15a]">
                        {index + 1}
                      </span>
                      <span>
                        <span className="block font-bold text-[#13233f]">
                          {item.tone}
                        </span>
                        <span className="text-sm text-[#4a5d75]">
                          {item.detail}
                        </span>
                      </span>
                    </span>
                    <span className="shrink-0 rounded-md bg-white px-3 py-1.5 text-sm font-extrabold text-[#0a2756] shadow-sm ring-1 ring-[#c9d8e6]/80">
                      {item.time}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-3.5 rounded-xl border border-[#2a9bc7]/20 bg-[#e8f4fb] px-4 py-3 text-[0.95rem] leading-6 text-[#13233f]">
              After you reach your goal tone, a maintenance capsule (with sun
              care) helps keep results.
            </p>
          </Reveal>

          <Reveal className="rounded-2xl bg-gradient-to-br from-[#0a2756] to-[#143a72] p-5 text-white shadow-[0_20px_50px_rgba(10,39,86,0.22)] sm:p-6">
            <h3 className="text-lg font-extrabold">Recommended dosage</h3>
            <p className="mt-1.5 text-white/90">
              Take in two divided doses each day.
            </p>

            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-white/10 bg-white/10 p-4">
                <p className="text-sm font-extrabold tracking-wide text-[#e4c15a] uppercase">
                  Antioxidant / anti-aging
                </p>
                <p className="mt-1.5 text-[1.05rem] font-bold leading-6 text-white">
                  10–20 mg glutathione per kg body weight / day
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/10 p-4">
                <p className="text-sm font-extrabold tracking-wide text-[#e4c15a] uppercase">
                  Skin whitening support
                </p>
                <p className="mt-1.5 text-[1.05rem] font-bold leading-6 text-white">
                  20–40 mg glutathione per kg body weight / day
                </p>
              </div>
              <div className="rounded-xl border border-white/20 px-4 py-3 text-[0.95rem] leading-6 text-white/90">
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
    <section className="scroll-mt-24 bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <SectionHead
          kicker="Supplement facts"
          title="Average amount per capsule"
          lead="Quick reference for packaging, clinics, and client questions."
        />

        <div className="grid gap-3 lg:grid-cols-[1.4fr_1fr]">
          <div className="overflow-hidden rounded-2xl border border-[#c9d8e6] shadow-[0_8px_28px_rgba(10,39,86,0.04)]">
            {[
              ["Glutathione", "500mg"],
              ["Alpha lipoic acid", "40mg"],
              ["Sodium ascorbate", "40mg"],
              ["Collagen", "40mg"],
            ].map(([name, amount], i) => (
              <div
                key={name}
                className={`flex items-center justify-between px-5 py-4 ${
                  i % 2 === 0 ? "bg-[#f0f7fb]" : "bg-white"
                }`}
              >
                <span className="text-[1.05rem] font-bold text-[#13233f]">
                  {name}
                </span>
                <span className="text-xl font-extrabold text-[#0a2756]">
                  {amount}
                </span>
              </div>
            ))}
          </div>

          <div className="grid gap-3">
            <div className="rounded-xl border border-[#c9d8e6] bg-[#f7fbfd] px-4 py-4">
              <p className="text-xs font-bold tracking-wide text-[#2a9bc7] uppercase">
                Manufacturer
              </p>
              <p className="mt-1 font-bold text-[#13233f]">Inovics Healthcare</p>
              <p className="mt-1 text-sm leading-6 text-[#4a5d75]">
                Rawalpindi, Pakistan
              </p>
            </div>
            <div className="rounded-xl border border-[#c9d8e6] bg-[#f7fbfd] px-4 py-4">
              <p className="text-xs font-bold tracking-wide text-[#2a9bc7] uppercase">
                Licence
              </p>
              <p className="mt-1 font-bold text-[#13233f]">PE 007337/0016</p>
              <p className="mt-1 text-sm leading-6 text-[#4a5d75]">
                M.L. No. 007337
              </p>
            </div>
            <div className="rounded-xl border border-[#c9a227]/30 bg-gradient-to-r from-[#faf6ee] to-[#eaf3f8] px-4 py-3 text-center text-sm font-semibold text-[#4a5d75]">
              30 capsules · Twice a day · Dietary supplement
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
