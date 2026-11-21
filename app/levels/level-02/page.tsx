import Link from "next/link";

export default function LevelTwoPage() {
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
              Level 02 is under construction.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
