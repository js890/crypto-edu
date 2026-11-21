import Link from "next/link";

export default function TitleScreen() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-sky-500/15 via-indigo-500/10 to-emerald-400/10 blur-3xl"
      />

      <div className="relative z-10 w-full max-w-3xl mx-auto text-center space-y-10">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold tracking-wider uppercase text-slate-300 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Finance &amp; Markets</span>
          <span className="text-slate-600">/</span>
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span>Cryptography &amp; Tech</span>
        </div>

        <div className="space-y-5">
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[1.08] bg-gradient-to-br from-white via-sky-200 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
            Crypto &amp; Technological Friends
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-xl mx-auto leading-relaxed">
            Bite-sized interactive minigames where{" "}
            <span className="text-emerald-300 font-medium">market risk</span>{" "}
            meets{" "}
            <span className="text-sky-300 font-medium">
              how systems actually work
            </span>{" "}
            under the hood.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-2xl mx-auto">
          {[
            {
              step: "01",
              title: "Play Minigames",
              desc: "Tackle fast, hands-on finance & security puzzles.",
            },
            {
              step: "02",
              title: "Branch Out",
              desc: "Unlock split paths as mechanics combine.",
            },
            {
              step: "03",
              title: "Master the Why",
              desc: "See the real math and code behind every outcome.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="p-4 rounded-2xl bg-slate-900/60 border border-white/[0.07] backdrop-blur-md space-y-1.5"
            >
              <span className="text-xs font-mono font-bold text-sky-400">
                {item.step}
              </span>
              <h2 className="text-sm font-bold text-slate-100">{item.title}</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <Link
            href="/levels"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl font-extrabold text-lg text-slate-950 bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 shadow-[0_0_40px_rgba(56,189,248,0.35)] hover:shadow-[0_0_55px_rgba(56,189,248,0.55)] hover:scale-[1.03] active:scale-[0.99] transition-all duration-200"
          >
            <span>Start Game</span>
            <svg
              className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}