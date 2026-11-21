import Link from "next/link";

export default function LevelsPage() {
  return (
    <main className="page-shell px-6 py-14">
      <div className="content-wide space-y-14">
        <nav className="flex items-center justify-between border-b border-[#1f2937] pb-6">
          <Link
            href="/"
            className="text-sm font-medium text-[#9ca3af] hover:text-[#f3f4f6] transition-colors"
          >
            &larr; Back to Title
          </Link>

          <span className="text-sm font-medium text-[#9ca3af]">
            Progress: 0 of 6 Levels
          </span>
        </nav>

        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.2]">
            Level Path
          </h1>
          <p className="text-base sm:text-lg leading-[1.9]">
            Two halves—Technology and Crypto—woven into bite-sized minigames.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="surface-panel-active w-full max-w-lg p-8 space-y-6">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#38bdf8]">
                Level 01 &bull; Available
              </span>
              <span className="track-badge-tech">Technology</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold leading-snug">
                Keys &amp; Wallets
              </h2>
              <p className="text-base leading-[1.9]">
                See how public and private keys work when authorizing a
                transaction or proving ownership.
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                className="primary-action-btn w-full py-3.5 px-6 text-base cursor-pointer"
              >
                <span>Play Level 01</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>

          <div className="path-connector-active" />

          <div className="surface-panel-locked w-full max-w-lg p-8 space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9ca3af]">
                Level 02 &bull; Locked
              </span>
              <span className="track-badge-crypto">Crypto</span>
            </div>

            <div className="space-y-2.5">
              <h2 className="text-xl font-bold leading-snug">
                First Trade: Supply &amp; Volatility
              </h2>
              <p className="text-sm sm:text-base leading-[1.9]">
                Manage a starter budget through a simulated market cycle and weigh
                risk against reward.
              </p>
            </div>
          </div>

          <div className="path-connector" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full">
            <div className="surface-panel-locked p-7 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9ca3af]">
                  Level 03 &bull; Locked
                </span>
                <span className="track-badge-tech">Technology</span>
              </div>
              <h2 className="text-lg font-bold leading-snug">Hash Lab</h2>
              <p className="text-sm leading-[1.9]">
                Spot tampering and see how cryptographic hashes behave when
                inputs change.
              </p>
            </div>

            <div className="surface-panel-locked p-7 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9ca3af]">
                  Level 04 &bull; Locked
                </span>
                <span className="track-badge-hybrid">Combined</span>
              </div>
              <h2 className="text-lg font-bold leading-snug">Gas &amp; Fees</h2>
              <p className="text-sm leading-[1.9]">
                Balance confirmation speed and network costs when sending value.
              </p>
            </div>

            <div className="surface-panel-locked p-7 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9ca3af]">
                  Level 05 &bull; Locked
                </span>
                <span className="track-badge-crypto">Crypto</span>
              </div>
              <h2 className="text-lg font-bold leading-snug">
                Risk &amp; Diversification
              </h2>
              <p className="text-sm leading-[1.9]">
                Handle price swings across multiple assets without putting
                everything in one place.
              </p>
            </div>
          </div>

          <div className="path-connector" />

          <div className="surface-panel-locked w-full max-w-lg p-8 space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9ca3af]">
                Level 06 &bull; Requires Levels 03, 04 &amp; 05
              </span>
              <span className="track-badge-hybrid">Capstone</span>
            </div>

            <div className="space-y-2.5">
              <h2 className="text-xl font-bold leading-snug">
                Mainnet Launch
              </h2>
              <p className="text-sm sm:text-base leading-[1.9]">
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