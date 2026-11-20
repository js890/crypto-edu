import Link from "next/link";

export default function LevelsPage() {
  return (
    <main className="container space-y-8">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="text-sm hover:underline"
          style={{ color: "var(--accent-color)" }}
        >
          &larr; Back to Title
        </Link>
        <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Progress: 0 / 6 Levels
        </span>
      </div>

      <header className="mb-0">
        <h1>Level Path</h1>
        <p>
          Two halves—Crypto and Technology—woven into bite-sized minigames.
        </p>
      </header>

      {/* Level Path Visualization */}
      <div className="flex flex-col items-center gap-5 pt-2">
        {/* Level 1 - Unlocked */}
        <div
          className="card w-full max-w-md mb-0 p-7 border-2 space-y-4"
          style={{ borderColor: "var(--accent-color)" }}
        >
          <span
            className="text-xs font-bold uppercase tracking-wider block"
            style={{ color: "var(--accent-color)" }}
          >
            Level 01 &bull; Available
          </span>
          <h2 className="mb-0">Keys &amp; Wallets</h2>
          <p className="mb-0 leading-relaxed">
            See how public and private keys work when authorizing a transaction or
            proving ownership.
          </p>
          <div className="pt-2">
            <button
              type="button"
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm text-[#0b0f19] bg-gradient-to-r from-[#38bdf8] via-[#60a5fa] to-[#818cf8] shadow-[0_0_24px_rgba(56,189,248,0.25)] hover:shadow-[0_0_32px_rgba(129,140,248,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              <span>Play Level 1</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                &rarr;
              </span>
            </button>
          </div>
        </div>

        {/* Connector */}
        <div
          className="h-9 w-0.5"
          style={{ backgroundColor: "var(--border-color)" }}
        />

        {/* Level 2 - Locked */}
        <div className="card w-full max-w-md mb-0 p-7 opacity-60 space-y-2">
          <span
            className="text-xs font-bold uppercase tracking-wider block"
            style={{ color: "var(--text-secondary)" }}
          >
            Level 02 &bull; Locked
          </span>
          <h2 className="mb-0">First Trade: Supply &amp; Volatility</h2>
          <p className="mb-0 leading-relaxed">
            Manage a starter budget through a simulated market cycle and weigh risk
            vs. reward.
          </p>
        </div>

        {/* Split Branch Indicator */}
        <div
          className="h-9 w-0.5"
          style={{ backgroundColor: "var(--border-color)" }}
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
          {[
            {
              num: "03",
              title: "Hash Lab",
              desc: "Spot tampering and see how cryptographic hashes behave.",
            },
            {
              num: "04",
              title: "Gas & Fees",
              desc: "Trade off speed and network costs when sending value.",
            },
            {
              num: "05",
              title: "Risk & Diversification",
              desc: "Handle swings across multiple assets without going all-in.",
            },
          ].map((lvl) => (
            <div key={lvl.num} className="card mb-0 opacity-60 p-6 space-y-2">
              <span
                className="text-xs font-bold uppercase tracking-wider block"
                style={{ color: "var(--text-secondary)" }}
              >
                Level {lvl.num} &bull; Locked
              </span>
              <h2 className="text-lg mb-0">{lvl.title}</h2>
              <p className="text-sm mb-0 leading-relaxed">{lvl.desc}</p>
            </div>
          ))}
        </div>

        {/* Convergence Indicator */}
        <div
          className="h-9 w-0.5"
          style={{ backgroundColor: "var(--border-color)" }}
        />

        {/* Level 6 - Capstone */}
        <div className="card w-full max-w-md mb-0 p-7 opacity-60 space-y-2">
          <span
            className="text-xs font-bold uppercase tracking-wider block"
            style={{ color: "var(--text-secondary)" }}
          >
            Level 06 &bull; Requires Levels 3, 4 &amp; 5
          </span>
          <h2 className="mb-0">Mainnet Launch</h2>
          <p className="mb-0 leading-relaxed">
            Put security, fees, and market decisions together in a final round.
          </p>
        </div>
      </div>
    </main>
  );
}