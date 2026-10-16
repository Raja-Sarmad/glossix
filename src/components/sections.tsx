import Image from "next/image";
import {
  ArrowRightIcon,
  AtomIcon,
  CartIcon,
  DropletIcon,
  FlaskIcon,
  LeafIcon,
  LockIcon,
  LayersIcon,
  ShieldCheckIcon,
  SparkleIcon,
  StarFillIcon,
  TruckIcon,
} from "./icons";

const loveItems = [
  {
    title: "Brighter tone",
    copy: "Supports a lighter, more even look by guiding pigment from within.",
    Icon: SparkleIcon,
  },
  {
    title: "Dark spot support",
    copy: "Helps the look of uneven tone and marks for a clearer complexion.",
    Icon: DropletIcon,
  },
  {
    title: "Deep nourishment",
    copy: "Collagen and vitamin C support for smoother, healthier-feeling skin.",
    Icon: LayersIcon,
  },
  {
    title: "Gentle & safe",
    copy: "Oral dietary supplement with a clear labelled daily ritual.",
    Icon: ShieldCheckIcon,
  },
  {
    title: "All skin types",
    copy: "Made for consistent use across different starting skin tones.",
    Icon: LeafIcon,
  },
];

const actives = [
  {
    name: "Glutathione 500mg",
    copy: "Master antioxidant that helps guide pigment toward a lighter look.",
    Icon: FlaskIcon,
    tone: "bg-[#ede9fe] text-[#7c3aed]",
  },
  {
    name: "Alpha lipoic acid 40mg",
    copy: "Supports glutathione’s antioxidant work inside the cells.",
    Icon: AtomIcon,
    tone: "bg-[#dbeafe] text-[#2563eb]",
  },
  {
    name: "Vitamin C + Collagen",
    copy: "Absorption help and firmness support in one capsule story.",
    Icon: LeafIcon,
    tone: "bg-[#e0e7ff] text-[#4f46e5]",
  },
];

const reviews = [
  {
    name: "Ayesha Khan",
    city: "Karachi",
    quote:
      "I wanted something simple to explain to clients — Glossix’s glutathione story is clear and premium.",
    photo: "/images/review-1.jpg",
  },
  {
    name: "Sara Malik",
    city: "Lahore",
    quote:
      "The 500mg focus plus collagen and vitamin C makes it easy to recommend as a full complex.",
    photo: "/images/review-2.jpg",
  },
  {
    name: "Hira Raza",
    city: "Islamabad",
    quote:
      "Packaging looks clinic-ready and the dosage guidance is straightforward for consultations.",
    photo: "/images/review-3.jpg",
  },
];

export function Benefits() {
  return (
    <section
      id="benefits"
      className="scroll-mt-20 bg-white px-4 pt-6 pb-10 sm:px-6 sm:pt-8 sm:pb-12 lg:px-8"
    >
      <div className="mx-auto max-w-7xl text-center">
        <p className="section-label">Why you’ll love it</p>
        <h2 className="section-title px-1">Real Benefits. Visible Results.</h2>

        <div className="mt-8 grid grid-cols-1 gap-7 min-[480px]:grid-cols-2 sm:mt-10 sm:gap-8 lg:mt-12 lg:grid-cols-3 xl:grid-cols-5 xl:gap-5">
          {loveItems.map((item) => (
            <div
              key={item.title}
              className="mx-auto flex w-full max-w-xs flex-col items-center px-1 min-[480px]:max-w-none min-[480px]:last:col-span-2 min-[480px]:last:mx-auto min-[480px]:last:max-w-xs lg:last:col-span-1 lg:last:max-w-none xl:last:col-span-1"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full bg-[#eef2ff] text-[#7c3aed] ring-1 ring-[#e0e7ff] sm:h-[4.5rem] sm:w-[4.5rem]">
                <item.Icon size={24} />
              </span>
              <h3 className="mt-3 text-[15px] font-extrabold text-[#1e1b4b] sm:mt-4">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#64748b]">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 overflow-x-clip bg-[#f8fafc] px-4 py-0 sm:px-5 lg:px-6 xl:px-8"
    >
      <div className="mx-auto grid w-full max-w-[92rem] items-center gap-5 sm:gap-6 lg:grid-cols-[1.1fr_0.95fr_1.1fr] lg:gap-5 xl:gap-6">
        {/* product — top on mobile, left on desktop */}
        <div className="relative order-1 mx-auto w-full max-w-[22rem] lg:max-w-none">
          <p className="font-hand absolute top-1 left-0 z-20 text-[1.45rem] leading-[1.05] font-semibold text-[#7c3aed] sm:top-[12%] sm:left-1 sm:text-[1.9rem] lg:top-[16%] lg:left-2 lg:text-[2.15rem]">
            Your Glow
            <br />
            Starts Here
            <span className="mt-0.5 block rotate-[-12deg] pl-8 text-lg text-[#a78bfa] sm:pl-12 sm:text-xl lg:pl-14 lg:text-2xl">
              ↷
            </span>
          </p>
          <div className="relative flex w-full items-center justify-center pt-12 sm:aspect-[5/6] sm:pt-0">
            <Image
              src="/product-Photoroom.png"
              alt="Glossix Papaya Whitening Skin Serum"
              width={800}
              height={1000}
              className="relative z-10 mx-auto h-auto w-[88%] max-w-[300px] object-contain sm:max-w-none sm:w-full"
              sizes="(max-width: 1024px) 88vw, 34vw"
              unoptimized
            />
          </div>
        </div>

        {/* actives — middle on mobile, center on desktop */}
        <div className="order-2 w-full lg:order-2">
          <div className="mx-auto max-w-md text-center lg:text-left">
            <p className="section-label">Powered by nature + science</p>
            <h2 className="section-title">How It Works</h2>
            <div className="mt-5 space-y-4 sm:mt-6 sm:space-y-5 lg:mt-7 lg:space-y-6">
              {actives.map((item) => (
                <div
                  key={item.name}
                  className="flex items-start gap-3 text-left sm:gap-3.5"
                >
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-full sm:h-12 sm:w-12 ${item.tone}`}
                  >
                    <item.Icon size={18} />
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="text-[0.95rem] font-extrabold text-[#1e1b4b] sm:text-base">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[#64748b]">
                      {item.copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* before after — bottom on mobile, right on desktop */}
        <div className="order-3 w-full rounded-[1.25rem] border border-[#e2e8f0] bg-white p-3.5 shadow-[0_16px_40px_rgba(30,27,75,0.07)] sm:rounded-[1.75rem] sm:p-5 lg:p-6">
          <h3 className="text-base font-extrabold text-[#1e1b4b] sm:text-lg">
            Real People. Real Change.
          </h3>
          <p className="mt-1 text-sm text-[#64748b]">
            Notice the difference with consistent use.
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:gap-3">
            <div className="overflow-hidden rounded-xl sm:rounded-2xl">
              <div className="relative aspect-square">
                <Image
                  src="/images/before.jpg"
                  alt="Before — replace with your photo"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-[#c7d2fe] px-2.5 py-1 text-[9px] font-extrabold tracking-wide text-[#1e1b4b] uppercase sm:px-3 sm:text-[10px]">
                  Before
                </span>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl sm:rounded-2xl">
              <div className="relative aspect-square">
                <Image
                  src="/images/after.jpg"
                  alt="After — replace with your photo"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-[#ede9fe] px-2.5 py-1 text-[9px] font-extrabold tracking-wide text-[#5b21b6] uppercase sm:px-3 sm:text-[10px]">
                  After
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-1.5 sm:mt-5">
            <span className="h-2 w-2 rounded-full bg-[#c4b5fd]" />
            <span className="h-2 w-2 rounded-full bg-[#7c3aed]" />
            <span className="h-2 w-2 rounded-full bg-[#c4b5fd]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section
      id="reviews"
      className="scroll-mt-20 bg-white px-4 pt-6 pb-10 sm:px-6 sm:pt-8 sm:pb-12 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="section-label">Loved by thousands</p>
          <h2 className="section-title px-1">What Our Customers Say</h2>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {reviews.map((item, index) => (
            <article
              key={item.name}
              className={`rounded-[1.25rem] border border-[#e2e8f0] bg-white p-4 shadow-[0_10px_30px_rgba(30,27,75,0.05)] sm:rounded-[1.5rem] sm:p-5 ${
                index === reviews.length - 1
                  ? "md:col-span-2 md:mx-auto md:max-w-lg lg:col-span-1 lg:mx-0 lg:max-w-none"
                  : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-[#ede9fe] sm:h-12 sm:w-12">
                  <Image
                    src={item.photo}
                    alt={item.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="flex gap-0.5 text-[#f59e0b]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarFillIcon key={i} size={14} />
                  ))}
                </div>
              </div>
              <p className="mt-3 text-[0.95rem] leading-7 text-[#334155] sm:mt-4 sm:text-[0.98rem]">
                “{item.quote}”
              </p>
              <p className="mt-3 text-sm font-extrabold text-[#1e1b4b] sm:mt-4">
                {item.name}
                <span className="font-medium text-[#64748b]">, {item.city}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Offer() {
  return (
    <section id="order" className="scroll-mt-20 px-3 pt-4 pb-8 sm:px-6 lg:px-8">
      <div className="gradient-cta relative mx-auto max-w-7xl overflow-hidden rounded-[1.25rem] px-4 py-7 sm:rounded-[2rem] sm:px-8 sm:py-12 lg:px-10">
        <div className="grid items-center gap-5 sm:gap-8 lg:grid-cols-[0.85fr_1.25fr_0.7fr] lg:gap-6">
          <div className="mx-auto w-full max-w-[150px] text-center sm:max-w-[210px]">
            <Image
              src="/glossix.png"
              alt="Glossix"
              width={1251}
              height={1091}
              className="mx-auto h-auto w-full drop-shadow-xl"
              unoptimized
            />
            <p className="font-hand mt-2 text-lg font-semibold text-[#4f46e5] sm:text-2xl">
              Bright · Healthy · Confident
            </p>
          </div>

          <div className="min-w-0 text-center lg:text-left">
            <p className="text-[11px] font-extrabold tracking-[0.16em] text-[#7c3aed] uppercase sm:text-xs">
              Limited time offer
            </p>
            <h2 className="mt-2 text-[clamp(1.5rem,5.5vw,2.55rem)] font-extrabold tracking-tight text-[#1e1b4b]">
              Get Your Glow Today
            </h2>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 lg:justify-start">
              <span className="text-base font-semibold text-[#94a3b8] line-through sm:text-lg">
                Rs. 4,500
              </span>
              <span className="text-2xl font-extrabold text-[#1e1b4b] sm:text-3xl">
                Rs. 2,999
              </span>
              <span className="rounded-full bg-[#7c3aed] px-3 py-1 text-xs font-extrabold text-white">
                33% OFF
              </span>
            </div>

            <a
              href="https://www.inovicshealthcare.com"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] px-6 py-3.5 text-sm font-extrabold whitespace-nowrap text-white shadow-[0_12px_28px_rgba(79,70,229,0.35)] transition hover:-translate-y-0.5 hover:brightness-105 sm:mt-6 sm:w-auto sm:px-8"
            >
              <CartIcon size={16} className="shrink-0" />
              <span>Add to Cart</span>
              <ArrowRightIcon size={16} className="shrink-0" />
            </a>

            <div className="mt-5 flex flex-col items-center gap-3 text-xs font-semibold text-[#475569] sm:flex-row sm:flex-wrap sm:justify-center sm:gap-5 sm:text-sm lg:justify-start">
              <span className="inline-flex max-w-full items-center gap-2 text-center sm:text-left">
                <TruckIcon size={16} className="shrink-0 text-[#2563eb]" />
                <span>Free Delivery (orders over Rs. 3,000)</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <LockIcon size={16} className="shrink-0 text-[#7c3aed]" />
                Secure Payment
              </span>
            </div>
          </div>

          <div className="mx-auto hidden h-40 w-40 place-items-center rounded-full bg-gradient-to-br from-[#a5b4fc] to-[#c4b5fd] text-center shadow-lg sm:grid sm:h-52 sm:w-52 lg:h-44 lg:w-44 xl:h-52 xl:w-52">
            <div className="px-4 sm:px-5">
              <LeafIcon size={28} className="mx-auto text-white" />
              <p className="mt-2 text-xs font-extrabold text-white sm:text-sm">
                Clearer Skin
                <br />
                Brighter Days
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
