import Link from "next/link";

export default function LevelsPage() {
  return (
    <main className="container">
      <div className="flex items-center justify-between mb-8">
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

      <header>
        <h1>Level Path</h1>
        <p>
          Two halves—Crypto and Technology—woven into bite-sized minigames.
        </p>
      </header>

      {/* Level Path Visualization */}
      <div className="flex flex-col items-center gap-4">
        {/* Level 1 - Unlocked */}
        <div
          className="card w-full max-w-md mb-0 border-2"
          style={{ borderColor: "var(--accent-color)" }}
        >
          <div className="flex items-center justify-between mb-2">
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: "var(--accent-color)" }}
            >
              Level 01 &bull; Tech &amp; Crypto Foundations &bull; Available
            </span>
          </div>
          <h2>Keys &amp; Wallets</h2>
          <p>
            See how public and private keys work when authorizing a transaction or
            proving ownership.
          </p>
          <button
            type="button"
            className="mt-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-[#0b0f19] bg-[#38bdf8] hover:opacity-90 transition-opacity"
          >
            Play Level 1 (Coming Next)
          </button>
        </div>

        {/* Connector */}
        <div
          className="h-8 w-0.5"
          style={{ backgroundColor: "var(--border-color)" }}
        />

        {/* Level 2 - Locked */}
        <div className="card w-full max-w-md mb-0 opacity-60">
          <span
            className="text-xs font-bold uppercase tracking-wider block mb-2"
            style={{ color: "var(--text-secondary)" }}
          >
            Level 02 &bull; Crypto Half &bull; Locked
          </span>
          <h2>First Trade: Supply &amp; Volatility</h2>
          <p className="mb-0">
            Manage a starter budget through a simulated market cycle and weigh risk
            vs. reward.
          </p>
        </div>

        {/* Split Branch Indicator */}
        <div
          className="h-8 w-0.5"
          style={{ backgroundColor: "var(--border-color)" }}
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          {[
            {
              num: "03",
              tag: "Tech Half",
              title: "Hash Lab",
              desc: "Spot tampering and see how cryptographic hashes behave.",
            },
            {
              num: "04",
              tag: "Crypto & Tech",
              title: "Gas & Fees",
              desc: "Trade off speed and network costs when sending value.",
            },
            {
              num: "05",
              tag: "Crypto Half",
              title: "Risk & Diversification",
              desc: "Handle swings across multiple assets without going all-in.",
            },
          ].map((lvl) => (
            <div key={lvl.num} className="card mb-0 opacity-60 p-5">
              <span
                className="text-xs font-bold uppercase tracking-wider block mb-1"
                style={{ color: "var(--text-secondary)" }}
              >
                Level {lvl.num} &bull; {lvl.tag} &bull; Locked
              </span>
              <h2 className="text-lg">{lvl.title}</h2>
              <p className="text-sm mb-0">{lvl.desc}</p>
            </div>
          ))}
        </div>

        {/* Convergence Indicator */}
        <div
          className="h-8 w-0.5"
          style={{ backgroundColor: "var(--border-color)" }}
        />

        {/* Level 6 - Capstone */}
        <div className="card w-full max-w-md mb-0 opacity-60">
          <span
            className="text-xs font-bold uppercase tracking-wider block mb-2"
            style={{ color: "var(--text-secondary)" }}
          >
            Level 06 &bull; Both Halves &bull; Requires Levels 3, 4 &amp; 5
          </span>
          <h2>Mainnet Launch</h2>
          <p className="mb-0">
            Put security, fees, and market decisions together in a final round.
          </p>
        </div>
      </div>
    </main>
  );
}