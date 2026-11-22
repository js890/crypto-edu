import Link from "next/link";

type Category = "Technology" | "Finance" | "Crypto";

const levelDetails: Record<number, { title: string; category: Category }> = {
  2: { title: "The Digital Ledger", category: "Technology" },
  3: { title: "Enter Cryptocurrency", category: "Crypto" },
  4: { title: "Blocks, Chains & Consensus", category: "Crypto" },
  5: { title: "Hash Lab: Digital Fingerprints", category: "Technology" },
  6: { title: "Public & Private Keys", category: "Technology" },
  7: { title: "Wallets & Transactions", category: "Crypto" },
  8: { title: "Mining vs. Staking", category: "Crypto" },
  9: { title: "Gas, Fees & Network Speed", category: "Crypto" },
  10: { title: "Supply, Demand & Scarcity", category: "Finance" },
  11: { title: "Market Cycles & Volatility", category: "Finance" },
  12: { title: "Risk, Reward & Diversification", category: "Finance" },
  13: { title: "Inflation, Interest & Stablecoins", category: "Crypto" },
  14: { title: "Tokens, Coins & Tokenomics", category: "Crypto" },
  15: { title: "Smart Contracts", category: "Technology" },
  16: { title: "DeFi: Finance Without Traditional Intermediaries", category: "Crypto" },
  17: { title: "NFTs, Digital Ownership & Governance", category: "Crypto" },
  18: { title: "Security, Scams & Self-Custody", category: "Technology" },
  19: { title: "Regulation, Sustainability & Real-World Use", category: "Crypto" },
  20: { title: "The Mainnet Challenge", category: "Crypto" },
};

export default function LevelBase({ number }: { number: number }) {
  const details = levelDetails[number];
  const categoryClass = `track-badge-${details.category.toLowerCase()}`;

  return (
    <main className="page-shell px-6 pt-8 sm:pt-12 pb-32">
      <div className="content-narrow space-y-12 sm:space-y-16">
        <nav className="nav-shell flex items-center justify-between gap-4 px-5 py-3">
          <Link
            href="/levels"
            className="nav-back-link text-sm font-bold text-[#a1a9b8] hover:text-[#f3f4f6]"
          >
            <span className="nav-arrow-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
            </span>
            <span>All Levels</span>
          </Link>
          <span className="text-sm font-black text-[#facc15]">
            Level {String(number).padStart(2, "0")}
          </span>
        </nav>

        <section className="lesson-header-card p-8 sm:p-12 space-y-6">
          <div className="flex flex-wrap items-center gap-4 relative z-[1]">
            <span className="level-number">{String(number).padStart(2, "0")}</span>
            <span className={categoryClass}>{details.category}</span>
          </div>
          <div className="space-y-4 relative z-[1]">
            <h1 className="text-4xl sm:text-6xl font-black leading-[1.12]">{details.title}</h1>
            <p className="text-base sm:text-lg leading-[1.95] max-w-2xl">
              This level is under construction. Return soon for the lesson and activities.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
