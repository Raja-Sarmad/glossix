export function Footer() {
  return (
    <footer className="relative overflow-hidden px-4 pt-16 pb-10 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,#061a38_0%,#0a2756_55%,#0d3168_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_90%_10%,rgba(42,155,199,0.2),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="brand-mark text-[2rem] text-white">
              Glossix
            </p>
            <p className="mt-3 max-w-sm text-[1rem] leading-7 text-white/85">
              Expert nutrition for natural skin whitening from Inovics
              Healthcare.
            </p>
          </div>
          <div>
            <p className="text-sm font-extrabold tracking-wide text-[#e4c15a] uppercase">
              Manufactured by
            </p>
            <p className="mt-2 text-lg font-bold text-white">Inovics Healthcare</p>
            <p className="mt-2 text-[0.98rem] leading-7 text-white/80">
              P-819, 14-km Adyala Road
              <br />
              Rawalpindi, Pakistan
            </p>
          </div>
          <div>
            <p className="text-sm font-extrabold tracking-wide text-[#e4c15a] uppercase">
              Website
            </p>
            <a
              href="https://www.inovicshealthcare.com"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block font-semibold text-[#7ecceb] underline-offset-2 hover:underline"
            >
              inovicshealthcare.com
            </a>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/15 bg-white/8 px-5 py-4 text-[0.98rem] leading-7 text-white/88 backdrop-blur-sm">
          This product is a dietary supplement. It is not intended to diagnose,
          cure, treat, or prevent any disease.
        </div>

        <p className="mt-8 text-sm text-white/60">
          © Inovics Healthcare · Glossix
        </p>
      </div>
    </footer>
  );
}
