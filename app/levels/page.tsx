"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";

type Category = "Technology" | "Finance" | "Crypto";

type Level = {
  number: number;
  title: string;
  category: Category;
  prerequisites: number[];
};

type Chapter = {
  number: number;
  title: string;
  levels: Level[];
};

const COMPLETION_PREFIX = "crypto-edu:level-";

const chapters: Chapter[] = [
  {
    number: 1,
    title: "Understanding Money and Blockchain",
    levels: [
      { number: 1, title: "Welcome to the Network!", category: "Crypto", prerequisites: [] },
      { number: 2, title: "What Is Money?", category: "Finance", prerequisites: [1] },
      { number: 3, title: "The Digital Ledger", category: "Technology", prerequisites: [2] },
      { number: 4, title: "Blocks, Chains & Consensus", category: "Crypto", prerequisites: [3] },
    ],
  },
  {
    number: 2,
    title: "The Technology Behind Crypto",
    levels: [
      { number: 5, title: "Hash Lab: Digital Fingerprints", category: "Technology", prerequisites: [4] },
      { number: 6, title: "Public & Private Keys", category: "Technology", prerequisites: [5] },
      { number: 7, title: "Wallets & Transactions", category: "Crypto", prerequisites: [6] },
      { number: 8, title: "Mining vs. Staking", category: "Crypto", prerequisites: [5] },
      { number: 9, title: "Gas, Fees & Network Speed", category: "Crypto", prerequisites: [7, 8] },
    ],
  },
  {
    number: 3,
    title: "The Financial Side of Crypto",
    levels: [
      { number: 10, title: "Supply, Demand & Scarcity", category: "Finance", prerequisites: [4] },
      { number: 11, title: "Market Cycles & Volatility", category: "Finance", prerequisites: [10] },
      { number: 12, title: "Risk, Reward & Diversification", category: "Finance", prerequisites: [11] },
      { number: 13, title: "Inflation, Interest & Stablecoins", category: "Crypto", prerequisites: [10] },
      { number: 14, title: "Tokens, Coins & Tokenomics", category: "Crypto", prerequisites: [10, 11, 12, 13] },
    ],
  },
  {
    number: 4,
    title: "The Crypto Ecosystem",
    levels: [
      { number: 15, title: "Smart Contracts", category: "Technology", prerequisites: [9] },
      { number: 16, title: "DeFi: Finance Without Traditional Intermediaries", category: "Crypto", prerequisites: [12, 13, 14, 15] },
      { number: 17, title: "NFTs, Digital Ownership & Governance", category: "Crypto", prerequisites: [15] },
      { number: 18, title: "Security, Scams & Self-Custody", category: "Technology", prerequisites: [6, 7] },
      { number: 19, title: "Regulation, Sustainability & Real-World Use", category: "Crypto", prerequisites: [14, 15, 16, 17, 18] },
      { number: 20, title: "The Mainnet Challenge", category: "Crypto", prerequisites: [16, 17, 18, 19] },
    ],
  },
];

const allLevels = chapters.flatMap((chapter) => chapter.levels);
const EMPTY_COMPLETED_LEVELS = new Set<number>();
let cachedProgressSignature = "";
let cachedCompletedLevels = new Set<number>();

function completionKey(levelNumber: number) {
  return `${COMPLETION_PREFIX}${String(levelNumber).padStart(2, "0")}-completed`;
}

function subscribeToProgress(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("crypto-edu:progress", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("crypto-edu:progress", callback);
  };
}

function getCompletedLevels() {
  const signature = allLevels
    .map((level) => window.localStorage.getItem(completionKey(level.number)) === "true" ? "1" : "0")
    .join("");

  if (signature !== cachedProgressSignature) {
    cachedProgressSignature = signature;
    cachedCompletedLevels = new Set(
      allLevels
        .filter((level, index) => signature[index] === "1")
        .map((level) => level.number)
    );
  }

  return cachedCompletedLevels;
}

function getServerCompletedLevels() {
  return EMPTY_COMPLETED_LEVELS;
}

function formatPrerequisites(prerequisites: number[]) {
  if (prerequisites.length === 0) {
    return "No prerequisites";
  }

  const formatted = prerequisites.map((number) => String(number).padStart(2, "0"));
  const isContiguous = prerequisites.every(
    (number, index) => index === 0 || number === prerequisites[index - 1] + 1
  );
  const requirement = isContiguous
    ? `${formatted[0]}–${formatted[formatted.length - 1]}`
    : formatted.join(", ");

  return prerequisites.length === 1
    ? `Requires Level ${formatted[0]}`
    : `Requires Levels ${requirement}`;
}

function categoryClass(category: Category) {
  return `track-badge-${category.toLowerCase()}`;
}

function levelIsAvailable(level: Level, completedLevels: Set<number>) {
  return level.prerequisites.every((prerequisite) => completedLevels.has(prerequisite));
}

function LevelCard({
  level,
  completedLevels,
}: {
  level: Level;
  completedLevels: Set<number>;
}) {
  const completed = completedLevels.has(level.number);
  const available = !completed && levelIsAvailable(level, completedLevels);
  const status = completed ? "Completed" : available ? "Available" : "Locked";

  return (
    <article className={`map-level-card ${available || completed ? "map-level-card-active" : ""}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className={`level-number ${completed || available ? "" : "locked-number"}`}>
            {String(level.number).padStart(2, "0")}
          </span>
          <span className={`map-level-status map-level-status-${status.toLowerCase()}`}>
            {status}
          </span>
        </div>
        <span className={categoryClass(level.category)}>{level.category}</span>
      </div>

      <h3 className="text-xl font-extrabold leading-snug">{level.title}</h3>
      <p className="map-level-prerequisite">{formatPrerequisites(level.prerequisites)}</p>

      {available || completed ? (
        <Link
          href={`/levels/level-${String(level.number).padStart(2, "0")}`}
          className="map-level-link"
        >
          {completed ? "Review level" : "Start level"} <span aria-hidden="true">→</span>
        </Link>
      ) : null}
    </article>
  );
}

function ChapterSection({
  chapter,
  completedLevels,
}: {
  chapter: Chapter;
  completedLevels: Set<number>;
}) {
  const isBranch = chapter.number === 2 || chapter.number === 3;
  const columns = isBranch
    ? chapter.number === 2
      ? [chapter.levels.slice(0, 2), chapter.levels.slice(2)]
      : [chapter.levels.slice(0, 3), chapter.levels.slice(3)]
    : [chapter.levels];

  return (
    <section className={`map-chapter map-chapter-${chapter.number}`} aria-labelledby={`chapter-${chapter.number}`}>
      <div className="map-chapter-heading">
        <span className="map-chapter-number">Chapter {chapter.number}</span>
        <h2 id={`chapter-${chapter.number}`} className="text-2xl sm:text-3xl font-black">
          {chapter.title}
        </h2>
        {isBranch ? (
          <p className="map-chapter-note">
            {chapter.number === 2
              ? "Build the technical foundations, then apply them across the network."
              : "Follow the finance path while crypto concepts connect the ideas."}
          </p>
        ) : null}
      </div>

      <div className={`map-chapter-grid ${isBranch ? "map-chapter-grid-branch" : ""}`}>
        {columns.map((column, index) => (
          <div className="map-path-lane" key={`${chapter.number}-${index}`}>
            {isBranch ? (
              <div className="map-path-label">
                {chapter.number === 2
                  ? index === 0
                    ? "Technology path"
                    : "Crypto application path"
                  : index === 0
                    ? "Finance path"
                    : "Crypto application path"}
              </div>
            ) : null}
            {column.map((level) => (
              <LevelCard key={level.number} level={level} completedLevels={completedLevels} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function LevelsPage() {
  const [confirmingReset, setConfirmingReset] = useState(false);
  const completedLevels = useSyncExternalStore(
    subscribeToProgress,
    getCompletedLevels,
    getServerCompletedLevels
  );
  const completedCount = completedLevels.size;
  const progress = `${(completedCount / allLevels.length) * 100}%`;
  const availableLevels = allLevels.filter(
    (level) => !completedLevels.has(level.number) && levelIsAvailable(level, completedLevels)
  );

  function resetProgress() {
    allLevels.forEach((level) => {
      window.localStorage.removeItem(completionKey(level.number));
    });
    setConfirmingReset(false);
    window.dispatchEvent(new Event("crypto-edu:progress"));
  }

  return (
    <main className="page-shell px-6 pt-8 sm:pt-12 pb-32">
      <div className="content-wide space-y-12 sm:space-y-16">
        <nav className="nav-shell flex items-center justify-between gap-4 px-5 py-3 sm:px-6">
          <Link
            href="/"
            className="nav-back-link text-sm sm:text-base font-bold text-[#a1a9b8] hover:text-[#f3f4f6]"
          >
            <span className="nav-arrow-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
            </span>
            <span>Back to Title</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-sm font-bold text-[#a1a9b8]">Journey progress</span>
            <span className="text-sm sm:text-base font-black text-[#facc15]">
              {completedCount} / {allLevels.length}
            </span>
          </div>
        </nav>

        <header className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="hero-kicker mx-auto">Choose your next challenge</div>
          <h1 className="text-5xl sm:text-7xl font-black leading-[1.08]">Your Learning Map</h1>
          <p className="text-base sm:text-lg leading-[1.9]">
            Learn <strong className="text-[#38bdf8]">Tech</strong> and{" "}
            <strong className="text-[#34d399]">Finance</strong> in order to implement them in{" "}
            <strong className="text-[#a78bfa]">Crypto</strong>.
          </p>
          <div className="map-progress-summary">
            <div className="flex items-center justify-between gap-4 text-sm font-bold">
              <span>Journey progress</span>
              <span className="text-[#facc15]">{completedCount} / {allLevels.length} levels</span>
            </div>
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: progress }}
                role="progressbar"
                aria-label="Learning journey progress"
                aria-valuemin={0}
                aria-valuemax={allLevels.length}
                aria-valuenow={completedCount}
              />
            </div>
            {completedCount === allLevels.length ? (
              <p className="map-progress-next">
                <span className="map-progress-next-label">Next up</span>
                <strong>Apply your newfound knowledge to the real world!</strong>
              </p>
            ) : availableLevels.length > 0 ? (
              <div className="map-progress-next">
                <span className="map-progress-next-label">
                  Available now{availableLevels.length > 1 ? ` (${availableLevels.length})` : ""}
                </span>
                <div className="map-progress-links">
                  {availableLevels.map((level) => (
                    <Link
                      key={level.number}
                      href={`/levels/level-${String(level.number).padStart(2, "0")}`}
                      className="map-progress-link"
                    >
                      <span>{String(level.number).padStart(2, "0")} · {level.title}</span>
                      <span
                        className={`map-progress-category map-progress-category-${level.category.toLowerCase()}`}
                      >
                        {level.category}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <p className="map-progress-next">Complete an available level to unlock the next step.</p>
            )}
            {completedLevels.has(1) ? (
              <div className="map-progress-reset">
                {confirmingReset ? (
                  <div
                    className="map-progress-reset-confirmation"
                    aria-labelledby="reset-progress-confirmation"
                  >
                    <p id="reset-progress-confirmation" className="map-progress-reset-title">
                      Reset all progress? Every level will be marked as uncompleted.
                    </p>
                    <p className="map-progress-reset-description">
                      This cannot be undone. Are you sure you want to continue?
                    </p>
                    <div className="map-progress-reset-actions">
                      <button
                        type="button"
                        onClick={() => setConfirmingReset(false)}
                        className="map-progress-reset-button"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={resetProgress}
                        className="map-progress-reset-button map-progress-reset-button-danger"
                      >
                        Reset all progress
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setConfirmingReset(true)}
                    className="map-progress-reset-button"
                  >
                    Reset progress
                  </button>
                )}
              </div>
            ) : null}
          </div>
        </header>

        <div className="map-legend" aria-label="Learning path legend">
          <span><i className="map-legend-dot map-legend-dot-technology" />Technology</span>
          <span><i className="map-legend-dot map-legend-dot-finance" />Finance</span>
          <span><i className="map-legend-dot map-legend-dot-crypto" />Crypto</span>
        </div>

        <div className="learning-map">
          {chapters.map((chapter) => (
            <ChapterSection key={chapter.number} chapter={chapter} completedLevels={completedLevels} />
          ))}
        </div>
      </div>
    </main>
  );
}
