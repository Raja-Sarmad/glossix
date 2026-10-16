"use client";

import { useState } from "react";

const faqs = [
  {
    q: "When does whitening start?",
    a: "Glossix supports a lower melanin load over time. Work starts in the deeper skin layer and moves outward, so the first visible change takes a little time — and is meant to look even across the body, not only the face.",
  },
  {
    q: "Why do results differ from person to person?",
    a: "Metabolism, body weight, and natural skin colour all affect how quickly tone changes. Using the right vitamin support at the proper dose usually helps people see results sooner.",
  },
  {
    q: "Are there known side effects?",
    a: "The insert states no known side effects or interactions with oral use, even with longer use. Still follow the label, and ask a clinician if you have a medical condition.",
  },
  {
    q: "Is a higher dose okay?",
    a: "Glutathione is water-soluble, so extra intake is usually passed in urine. There is still no reported overdose case in the insert — but stay within the recommended range unless a qualified practitioner advises otherwise.",
  },
  {
    q: "What makes Glossix different?",
    a: "It is not only about lighter tone. Glutathione also works as an antioxidant and anti-aging nutrient, and the insert notes dermatologist and doctor use for people with liver concerns.",
  },
  {
    q: "Can I still use creams and lotions?",
    a: "Yes. Your normal topical routine can continue, and those products may further support smooth, soft skin.",
  },
  {
    q: "Are results permanent?",
    a: "A brighter tone is maintained with habit, sun protection, and a maintenance capsule after you reach your goal. If you stop and leave skin unprotected, tone can slowly move back.",
  },
  {
    q: "Does sunlight affect results?",
    a: "Some sun is fine for vitamin D, but too much can raise melanin and slow whitening. Daylight is okay when you use sunblock.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-[#eaf3f8] px-4 py-12 sm:px-6 sm:py-14 lg:px-8"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <div className="section-head">
          <p className="section-kicker">FAQ</p>
          <h2 className="section-title">Common questions, clear answers</h2>
          <p className="section-lead">
            Taken from the official insert and rewritten for easy reading.
          </p>
        </div>

        <div className="space-y-2.5">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-2xl border bg-white shadow-[0_6px_20px_rgba(10,39,86,0.04)] transition ${
                  isOpen
                    ? "border-[#c9a227]/40 shadow-[0_12px_28px_rgba(10,39,86,0.08)]"
                    : "border-[#c9d8e6]/80"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[1.05rem] font-bold text-[#0a2756]">
                    {item.q}
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg text-lg font-bold transition-transform ${
                      isOpen
                        ? "rotate-45 bg-[#0a2756] text-[#e4c15a]"
                        : "bg-[#eaf3f8] text-[#0a2756]"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-400 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-[#c9d8e6] px-5 py-4 text-[1.02rem] leading-7 text-[#4a5d75]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
