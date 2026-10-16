"use client";

import { useState } from "react";
import { PlusIcon } from "./icons";

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
    a: "Glutathione is water-soluble, so extra intake is usually passed in urine. Stay within the recommended range unless a qualified practitioner advises otherwise.",
  },
  {
    q: "What makes Glossix different?",
    a: "It is not only about lighter tone. Glutathione also works as an antioxidant and anti-aging nutrient, with collagen and vitamin C in one clear complex.",
  },
  {
    q: "Can I still use creams and lotions?",
    a: "Yes. Your normal topical routine can continue, and those products may further support smooth, soft skin.",
  },
  {
    q: "Are results permanent?",
    a: "A brighter tone is maintained with habit, sun protection, and a maintenance capsule after you reach your goal.",
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
      className="scroll-mt-20 bg-[#f8fafc] px-3 pt-6 pb-10 sm:px-6 sm:pt-8 sm:pb-12 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="section-label">FAQ</p>
          <h2 className="section-title">Common questions</h2>
        </div>

        <div className="mt-8 space-y-2.5 sm:mt-10 sm:space-y-3">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-xl border bg-white transition sm:rounded-2xl ${
                  isOpen
                    ? "border-[#c4b5fd] shadow-[0_12px_28px_rgba(79,70,229,0.08)]"
                    : "border-[#e2e8f0]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-3 px-3.5 py-3.5 text-left sm:gap-4 sm:px-5 sm:py-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-[0.95rem] font-bold text-[#1e1b4b] sm:text-[1.02rem]">
                    {item.q}
                  </span>
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition-transform sm:h-8 sm:w-8 ${
                      isOpen
                        ? "rotate-45 bg-[#7c3aed] text-white"
                        : "bg-[#eef2ff] text-[#7c3aed]"
                    }`}
                  >
                    <PlusIcon size={15} />
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-[#e2e8f0] px-3.5 py-3.5 text-[0.92rem] leading-7 text-[#64748b] sm:px-5 sm:py-4 sm:text-[0.98rem]">
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
