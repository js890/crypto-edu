import Link from "next/link";

export default function LevelsPage() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-10 space-y-12">
      <nav className="flex items-center justify-between border-b border-white/[0.08] pb-5">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
        >
          <span>&larr;</span>
          <span>Title Screen</span>
        </Link>

        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Campaign Progress
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/10 text-sky-400 border border-sky-500/20">
            0 / 6
          </span>
        </div>
      </nav>

      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Select a Level
        </h1>
        <p className="text-sm sm:text-base text-slate-400">
          Complete nodes to unlock branching{" "}
          <span className="text-sky-400 font-medium">Tech</span> &amp;{" "}
          <span className="text-emerald-400 font-medium">Crypto</span>{" "}
          challenges.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-md rounded-2xl p-6 sm:p-7 bg-slate-900/90 border border-sky-400/50 shadow-[0_0_50px_-12px_rgba(56,189,248,0.35)] backdrop-blur-md space-y-5">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-400">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              Level 01 &bull; Ready
            </span>
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-sky-500/15 text-sky-300 border border-sky-400/20">
              Tech
            </span>
          </div>

          <div className="space-y-1.5">
            <h2 className="text-2xl font-bold text-white">
              Keys &amp; Wallets
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Use public and private keys to sign transactions and prove digital
              ownership without revealing secrets.
            </p>
          </div>

          <button
            type="button"
            className="group w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-bold text-base text-slate-950 bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 shadow-lg shadow-sky-500/20 hover:shadow-sky-400/40 hover:brightness-110 active:scale-[0.99] transition-all duration-200 cursor-pointer"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>Play Level 01</span>
          </button>
        </div>

        <div className="h-10 w-0.5 bg-gradient-to-b from-sky-400/60 to-white/10" />

        <div className="w-full max-w-md rounded-2xl p-6 bg-slate-900/40 border border-white/[0.07] opacity-65 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Level 02 &bull; Locked
            </span>
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400/80 border border-emerald-500/20">
              Crypto
            </span>
          </div>
          <h2 className="text-lg font-bold text-slate-200">
            First Trade: Supply &amp; Volatility
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Manage a starter budget through a simulated market cycle and weigh
            risk vs. reward.
          </p>
        </div>

        <div className="h-10 w-0.5 bg-white/10" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          {[
            {
              num: "03",
              track: "Tech",
              trackStyle: "bg-sky-500/10 text-sky-400/80 border-sky-500/20",
              title: "Hash Lab",
              desc: "Spot tampering and see how cryptographic hashes behave.",
            },
            {
              num: "04",
              track: "Hybrid",
              trackStyle:
                "bg-indigo-500/10 text-indigo-400/80 border-indigo-500/20",
              title: "Gas & Fees",
              desc: "Trade off speed and network costs when sending value.",
            },
            {
              num: "05",
              track: "Crypto",
              trackStyle:
                "bg-emerald-500/10 text-emerald-400/80 border-emerald-500/20",
              title: "Diversification",
              desc: "Handle swings across assets without going all-in.",
            },
          ].map((lvl) => (
            <div
              key={lvl.num}
              className="rounded-2xl p-5 bg-slate-900/40 border border-white/[0.07] opacity-65 space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Lvl {lvl.num}
                </span>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${lvl.trackStyle}`}
                >
                  {lvl.track}
                </span>
              </div>
              <h2 className="text-base font-bold text-slate-200">
                {lvl.title}
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                {lvl.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="h-10 w-0.5 bg-white/10" />

        <div className="w-full max-w-md rounded-2xl p-6 bg-slate-900/40 border border-white/[0.07] opacity-65 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Level 06 &bull; Finale
            </span>
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-purple-500/10 text-purple-300/80 border border-purple-500/20">
              Capstone
            </span>
          </div>
          <h2 className="text-lg font-bold text-slate-200">Mainnet Launch</h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Combine key security, gas optimization, and portfolio defense in one
            final run.
          </p>
        </div>
      </div>
    </main>
  );
}