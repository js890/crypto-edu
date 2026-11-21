import Link from "next/link";

export default function LevelTwoPage() {
  return (
    <main className="page-shell px-6 pt-8 sm:pt-12 pb-32">
      <div className="content-narrow space-y-12 sm:space-y-16">
        <nav className="nav-shell flex items-center justify-between gap-4 px-5 py-3">
          <Link
            href="/levels"
            className="text-sm font-bold text-[#a1a9b8] hover:text-[#f3f4f6]"
          >
            &larr; All Levels
          </Link>
          <span className="text-sm font-black text-[#34d399]">Level 02</span>
        </nav>

        <section className="lesson-header-card p-8 sm:p-12 space-y-6">
          <div className="flex flex-wrap items-center gap-4 relative z-[1]">
            <span className="level-number">02</span>
            <span className="track-badge-finance">Finance</span>
          </div>
          <div className="space-y-4 relative z-[1]">
            <h1 className="text-4xl sm:text-6xl font-black leading-[1.12]">
              First Trade
            </h1>
            <p className="text-base sm:text-lg leading-[1.95] max-w-2xl">
              Level 02 is unlocked and ready for you to build. Start here when
              you are ready to design the supply, volatility, and risk challenge.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
