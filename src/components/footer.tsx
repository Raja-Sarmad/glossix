export function Footer() {
  return (
    <footer className="border-t border-[#d7e0ea] bg-white px-5 pt-14 pb-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-xl font-extrabold text-[#0c2d5c]">Glossix</p>
            <p className="mt-3 max-w-sm text-[1rem] leading-7 text-[#3d4d63]">
              Expert nutrition for natural skin whitening from Inovics
              Healthcare.
            </p>
          </div>
          <div>
            <p className="text-sm font-extrabold tracking-wide text-[#1f8fc4] uppercase">
              Manufactured by
            </p>
            <p className="mt-2 text-lg font-bold text-[#152238]">Inovics Healthcare</p>
            <p className="mt-2 text-[0.98rem] leading-7 text-[#3d4d63]">
              P-819, 14-km Adyala Road
              <br />
              Rawalpindi, Pakistan
            </p>
          </div>
          <div>
            <p className="text-sm font-extrabold tracking-wide text-[#1f8fc4] uppercase">
              Website
            </p>
            <a
              href="https://www.inovicshealthcare.com"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block font-semibold text-[#0c2d5c] underline-offset-2 hover:underline"
            >
              inovicshealthcare.com
            </a>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-[0.98rem] leading-7 text-[#5b2430]">
          This product is a dietary supplement. It is not intended to diagnose,
          cure, treat, or prevent any disease.
        </div>

        <p className="mt-8 text-sm text-[#3d4d63]">
          © Inovics Healthcare · Glossix
        </p>
      </div>
    </footer>
  );
}
