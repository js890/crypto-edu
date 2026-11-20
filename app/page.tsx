import Link from "next/link";

export default function TitleScreen() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl text-center">
        {/* Badge */}
        <div
          className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider uppercase rounded-full border"
          style={{
            backgroundColor: "var(--accent-glow)",
            borderColor: "var(--accent-color)",
            color: "var(--accent-color)",
          }}
        >
          Two Halves: Crypto &amp; Technology
        </div>

        {/* Game Title */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-[#38bdf8] to-[#818cf8] bg-clip-text text-transparent">
          Crypto and Technological Friends
        </h1>

        <p
          className="text-lg sm:text-xl mb-10 max-w-xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          A high school game built around two halves—<strong>Crypto</strong> (finance,
          risk, markets, and incentives) and <strong>Technology</strong> (cryptography,
          keys, hashing, and how systems actually work under the hood).
        </p>

        {/* Overview Card */}
        <div className="card text-left">
          <h2>How It Works</h2>
          <p>
            Work your way along a path of minigames that blend financial decision-making
            with real technical mechanics—giving you practical intuition beyond standard
            high school classes.
          </p>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t text-sm"
            style={{ borderColor: "var(--border-color)" }}
          >
            <div>
              <span className="font-semibold block text-[#f3f4f6]">
                1. The Crypto Half
              </span>
              <span style={{ color: "var(--text-secondary)" }}>
                Explore value, volatility, trade-offs, and market scenarios.
              </span>
            </div>
            <div>
              <span className="font-semibold block text-[#f3f4f6]">
                2. The Tech Half
              </span>
              <span style={{ color: "var(--text-secondary)" }}>
                Get hands-on with keys, signatures, hashes, and protocols.
              </span>
            </div>
            <div>
              <span className="font-semibold block text-[#f3f4f6]">
                3. Path &amp; Minigames
              </span>
              <span style={{ color: "var(--text-secondary)" }}>
                Follow the map step by step—including split branches ahead.
              </span>
            </div>
          </div>
        </div>

        {/* Primary Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
          <Link
            href="/levels"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg text-[#0b0f19] bg-gradient-to-r from-[#38bdf8] to-[#818cf8] hover:opacity-90 transition-opacity shadow-lg"
          >
            Begin Journey &rarr;
          </Link>
        </div>

        {/* Future secondary links placeholder */}
        <div
          className="mt-12 flex items-center justify-center gap-6 text-sm"
          style={{ color: "var(--text-secondary)" }}
        >
          <span>v0.1 Prototype</span>
          <span>&bull;</span>
          <span className="opacity-60">Credits (Coming Soon)</span>
        </div>
      </div>
    </main>
  );
}