import Link from "next/link";

export default function TitleScreen() {
  return (
    <main className="page-shell flex flex-col justify-center px-6 py-16 sm:py-24">
      <div className="content-narrow text-center space-y-14 sm:space-y-16">
        <div className="space-y-7 sm:space-y-9">
          <div className="hero-kicker mx-auto">
            <span className="hero-kicker-dot" />
            Your learning adventure starts here
          </div>
          <h1 className="hero-title text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] bg-gradient-to-r from-[#fde047] via-[#38bdf8] to-[#c4b5fd] bg-clip-text text-transparent">
            Crypto and Technological Friends
          </h1>

          <p className="text-lg sm:text-xl leading-[1.9] max-w-2xl mx-auto">
            Discover how <strong className="text-[#34d399]">money moves</strong>,
            how <strong className="text-[#38bdf8]">digital networks work</strong>,
            and why <strong className="text-[#c4b5fd]">cryptography matters</strong>.
          </p>
        </div>

        <div className="surface-panel p-5 sm:p-7 text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            <div className="feature-card feature-card-coin p-6 sm:p-7 space-y-5">
              <span className="feature-icon bg-[#fde047]/15 text-[#fde047]">01</span>
              <h2 className="text-xl font-extrabold text-[#fde047] leading-snug">
                Play Minigames
              </h2>
              <p className="text-sm sm:text-base leading-[1.85]">
                Tackle quick challenges that turn tricky ideas into memorable moments.
              </p>
            </div>

            <div className="feature-card feature-card-path p-6 sm:p-7 space-y-5">
              <span className="feature-icon bg-[#38bdf8]/15 text-[#38bdf8]">02</span>
              <h2 className="text-xl font-extrabold text-[#38bdf8] leading-snug">
                Follow Your Path
              </h2>
              <p className="text-sm sm:text-base leading-[1.85]">
                Move through a connected map where every new level builds on the last.
              </p>
            </div>

            <div className="feature-card feature-card-world p-6 sm:p-7 space-y-5">
              <span className="feature-icon bg-[#34d399]/15 text-[#34d399]">03</span>
              <h2 className="text-xl font-extrabold text-[#34d399] leading-snug">
                Build Real-World Intuition
              </h2>
              <p className="text-sm sm:text-base leading-[1.85]">
                Learn practical patterns that make modern money and technology feel familiar.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <Link
            href="/levels"
            className="game-start-btn px-14 py-5 text-xl sm:text-2xl"
          >
            <span>Start Game!</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}