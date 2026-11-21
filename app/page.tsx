import Link from "next/link";

export default function TitleScreen() {
  return (
    <main className="page-shell flex flex-col justify-center px-6 py-24">
      <div className="content-narrow text-center space-y-16">
        <div className="space-y-12">
          <h1 className="text-6xl sm:text-8xl font-black tracking-tight leading-[1.12] bg-gradient-to-r from-[#facc15] via-[#38bdf8] to-[#a78bfa] bg-clip-text text-transparent">
            Crypto &amp; Technological Friends
          </h1>

          <p className="text-lg sm:text-xl leading-[2.1] max-w-2xl mx-auto">
            An interactive game for high schoolers exploring{" "}
            <strong className="text-[#34d399] font-extrabold">
              finance and markets
            </strong>{" "}
            alongside{" "}
            <strong className="text-[#38bdf8] font-extrabold">
              cryptography and system mechanics
            </strong>
            .
          </p>
        </div>

        <div className="surface-panel p-8 sm:p-11 text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-4">
              <h2 className="text-xl font-extrabold text-[#facc15] leading-snug">
                Play Minigames
              </h2>
              <p className="text-sm sm:text-base leading-[2]">
                Jump straight into punchy, interactive challenges that make
                tricky market and tech ideas click fast.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-extrabold text-[#38bdf8] leading-snug">
                Follow the Path
              </h2>
              <p className="text-sm sm:text-base leading-[2]">
                Work your way across a connected map where each level builds on
                what you just learned and opens new branches.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-extrabold text-[#34d399] leading-snug">
                Prepare Yourself for the Real World
              </h2>
              <p className="text-sm sm:text-base leading-[2]">
                Pick up practical intuition that goes beyond the high school
                curriculum so modern digital money and systems feel familiar.
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