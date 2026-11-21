"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";

const LEVEL_ONE_COMPLETION_KEY = "crypto-edu:level-01-completed";

function subscribeToCompletion(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getLevelOneCompletion() {
  return window.localStorage.getItem(LEVEL_ONE_COMPLETION_KEY) === "true";
}

function getServerLevelOneCompletion() {
  return false;
}

export default function LevelsPage() {
  const levelOneCompleted = useSyncExternalStore(
    subscribeToCompletion,
    getLevelOneCompletion,
    getServerLevelOneCompletion
  );

  return (
    <main className="page-shell px-6 pt-8 sm:pt-12 pb-32">
      <div className="content-wide space-y-12 sm:space-y-16">
        <nav className="nav-shell flex items-center justify-between gap-4 px-5 py-3 sm:px-6">
          <Link
            href="/"
            className="text-sm sm:text-base font-bold text-[#a1a9b8] hover:text-[#f3f4f6] transition-colors"
          >
            &larr; Back to Title
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-sm font-bold text-[#a1a9b8]">Journey progress</span>
            <span className="text-sm sm:text-base font-black text-[#facc15]">
              {levelOneCompleted ? "1" : "0"} / 6
            </span>
          </div>
        </nav>

        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <div className="hero-kicker mx-auto">
            <span className="hero-kicker-dot" />
            Choose your next challenge
          </div>
          <h1 className="text-5xl sm:text-7xl font-black leading-[1.08]">
            Your Learning Map
          </h1>
          <p className="text-base sm:text-lg leading-[1.9]">
            Learn Tech and Finance in order to implement them in{" "}
            <strong className="text-[#facc15]">Crypto</strong>.
          </p>
          <div className="progress-track max-w-md mx-auto">
            <div
              className="progress-fill"
              style={{ width: levelOneCompleted ? "16.666%" : "0%" }}
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="surface-panel-active w-full max-w-lg p-8 sm:p-9 space-y-7">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="level-number">01</span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#facc15]">
                  {levelOneCompleted ? "Completed" : "Available"}
                </span>
              </div>
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
                <span>{levelOneCompleted ? "Review Level 01" : "Play Level 01!"}</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="path-connector-active" />

          {levelOneCompleted ? (
            <div className="surface-panel-active w-full max-w-lg p-8 sm:p-9 space-y-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="level-number">02</span>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#34d399]">
                    Available
                  </span>
                </div>
                <span className="track-badge-finance">Finance</span>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl font-extrabold leading-snug">
                  First Trade: Supply and Volatility
                </h2>
                <p className="text-sm sm:text-base leading-[2.1]">
                  Manage a starter budget through a simulated market cycle and
                  weigh risk against reward.
                </p>
              </div>

              <Link
                href="/levels/level-02"
                className="game-start-btn w-full py-4 px-8 text-lg sm:text-xl"
              >
                <span>Begin Level 02</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          ) : (
            <div className="surface-panel-locked w-full max-w-lg p-8 sm:p-9 space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="level-number locked-number">02</span>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#a1a9b8]">Locked</span>
                </div>
                <span className="track-badge-finance">Finance</span>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-bold leading-snug">
                  First Trade: Supply and Volatility
                </h2>
                <p className="text-sm sm:text-base leading-[2.1]">
                  Complete Level 01 with at least two correct answers to unlock this level.
                </p>
              </div>
            </div>
          )}

          <div className="path-connector" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="surface-panel-locked p-7 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="level-number locked-number !w-11 !h-11">03</span>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#a1a9b8]">Locked</span>
                </div>
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
                <div className="flex items-center gap-2.5">
                  <span className="level-number locked-number !w-11 !h-11">04</span>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#a1a9b8]">Locked</span>
                </div>
                <span className="track-badge-crypto">Crypto</span>
              </div>
              <h2 className="text-lg font-bold leading-snug">Gas and Fees</h2>
              <p className="text-sm leading-[2]">
                Balance confirmation speed and network costs when sending value.
              </p>
            </div>

            <div className="surface-panel-locked p-7 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="level-number locked-number !w-11 !h-11">05</span>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#a1a9b8]">Locked</span>
                </div>
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
              <div className="flex items-center gap-3">
                <span className="level-number locked-number">06</span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#a1a9b8]">Finale</span>
              </div>
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