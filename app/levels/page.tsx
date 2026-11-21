import Link from "next/link";

export default function LevelsPage() {
  return (
    <main className="page-shell px-6 pt-14 pb-32">
      <div className="content-wide space-y-16">
        <nav className="flex items-center justify-between border-b border-[#1f2937] pb-7">
          <Link
            href="/"
            className="text-sm sm:text-base font-bold text-[#a1a9b8] hover:text-[#f3f4f6] transition-colors"
          >
            &larr; Back to Title
          </Link>

          <span className="text-sm sm:text-base font-bold text-[#a1a9b8]">
            Progress: 0 of 6 Levels
          </span>
        </nav>

        <div className="text-center space-y-5 max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-black leading-[1.2]">
            Level Path
          </h1>
          <p className="text-base sm:text-lg leading-[2]">
            Start with <strong className="text-[#facc15] font-extrabold">Crypto</strong>{" "}
            to see the big picture, then dive into{" "}
            <strong className="text-[#38bdf8] font-extrabold">Technology</strong>{" "}
            and <strong className="text-[#34d399] font-extrabold">Finance</strong>.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="surface-panel-active w-full max-w-lg p-8 sm:p-9 space-y-7">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#facc15]">
                Level 01 &bull; Available
              </span>
              <span className="track-badge-crypto">Crypto</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug">
                The Basics
              </h2>
              <p className="text-base leading-[2]">
                Learn what <strong className="text-[#facc15] font-bold">cryptocurrency</strong>{" "}
                is, how a shared ledger works across computers, and how{" "}
                <strong className="text-[#9ca3af] font-bold">mining</strong>{" "}
                fits into the picture.
              </p>
            </div>

            <div className="pt-3">
              <Link
                href="/levels/level-01"
                className="game-start-btn w-full py-4 px-8 text-lg sm:text-xl"
              >
                <span>Play Level 01!</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="path-connector-active" />

          <div className="surface-panel-locked w-full max-w-lg p-8 space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#a1a9b8]">
                Level 02 &bull; Locked
              </span>
              <span className="track-badge-finance">Finance</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold leading-snug">
                First Trade: Supply and Volatility
              </h2>
              <p className="text-sm sm:text-base leading-[2]">
                Manage a starter budget through a simulated market cycle and
                weigh risk against reward.
              </p>
            </div>
          </div>

          <div className="path-connector" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="surface-panel-locked p-7 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#a1a9b8]">
                  Level 03 &bull; Locked
                </span>
                <span className="track-badge-technology">Technology</span>
              </div>
              <h2 className="text-lg font-bold leading-snug">Hash Lab</h2>
              <p className="text-sm leading-[2]">
                Spot tampering and see how cryptographic hashes behave when
                inputs change.
              </p>
            </div>

            <div className="surface-panel-locked p-7 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#a1a9b8]">
                  Level 04 &bull; Locked
                </span>
                <span className="track-badge-crypto">Crypto</span>
              </div>
              <h2 className="text-lg font-bold leading-snug">Gas and Fees</h2>
              <p className="text-sm leading-[2]">
                Balance confirmation speed and network costs when sending value.
              </p>
            </div>

            <div className="surface-panel-locked p-7 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#a1a9b8]">
                  Level 05 &bull; Locked
                </span>
                <span className="track-badge-finance">Finance</span>
              </div>
              <h2 className="text-lg font-bold leading-snug">
                Risk and Diversification
              </h2>
              <p className="text-sm leading-[2]">
                Handle price swings across multiple assets without putting
                everything in one place.
              </p>
            </div>
          </div>

          <div className="path-connector" />

          <div className="surface-panel-locked w-full max-w-lg p-8 space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#a1a9b8]">
                Level 06 &bull; Requires Levels 03, 04 and 05
              </span>
              <span className="track-badge-crypto">Crypto</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold leading-snug">
                Mainnet Launch
              </h2>
              <p className="text-sm sm:text-base leading-[2]">
                Bring key security, fee trade-offs, and portfolio risk together
                in one final round.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}